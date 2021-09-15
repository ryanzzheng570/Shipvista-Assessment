import React, { useRef, useState } from 'react'
import {
    Typography,
    Card,
    CardMedia,
    CardActions,
    CardContent,
    Button,
    CircularProgress,
    Fab
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Plants from '../Icons/Plant.png'
import moment from 'moment'
import WateringCollapse from './WateringCollapse'
import clsx from 'clsx';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import CheckIcon from '@material-ui/icons/Check';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    plantContainer: {
        paddingLeft: theme.spacing(2),
        textAlign: 'center'
    },
    container: {
        width: 340,
        marginLeft: theme.spacing(10),
        marginBottom: theme.spacing(5)
    },
    media: {
    },
    content: {
        height: 150
    },
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
    fabProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
    },
}));

const getTimeDiff = (lastWateringTime) => {
    const lastestTime = moment(lastWateringTime);
    const currTime = moment();
    const duration = moment.duration(currTime.diff(lastestTime)).asHours();

    if (duration >= 24) {
        return `${Math.floor(duration / 24)} days ago`
    }
    else if (duration >= 1) {
        return `${Math.floor(duration)} hours ago`
    }

    return `${Math.floor(duration * 60)} minutes ago`
}

const Plant = ({ plant }) => {
    const classes = useStyles();

    const [isWatering, setIsWatering] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [selectedId, setSelectedId] = useState(0);
    let timer = useRef();

    const buttonClassname = clsx({
        [classes.buttonSuccess]: success,
    });

    const handleWateringPlant = (id) => {
        setSelectedId(id)
        setIsWatering(true);

        setLoading(true);
        setSuccess(false);
        timer.current = window.setTimeout(() => {
            setSuccess(true);
            setLoading(false);
            setIsWatering(false);
        }, 5000);
    }

    const handleStopWateringPlant = () => {
        window.clearTimeout(timer.current);
        setLoading(false);
        setSuccess(false);
        setIsWatering(false);
    }

    return (
        <>
            <Card className={classes.container}>
                <CardMedia
                    component='img'
                    className={classes.media}
                    title={plant.name}
                    src={Plants}
                />
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {plant.name}
                    </Typography>

                    <Typography gutterBottom variant="body2" color="textSecondary" component='p'>
                        Last Time Watered: {getTimeDiff(plant.lastWateringTime)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <div className={classes.root}>
                        <div className={classes.wrapper}>
                            <Fab
                                aria-label="save"
                                className={buttonClassname}
                            >
                                {success ? <CheckIcon /> : <AccessAlarmsIcon />}
                            </Fab>
                            {loading && <CircularProgress size={68} className={classes.fabProgress} />}
                        </div>
                    </div>
                    <Button onClick={() => handleWateringPlant(plant.id)} color='primary' variant='contained'>Water this plant</Button>
                </CardActions>
                <WateringCollapse id={plant.id} selectedId={selectedId} stop={handleStopWateringPlant} isWatering={isWatering} />
            </Card>
        </>

    )
}

export default Plant
