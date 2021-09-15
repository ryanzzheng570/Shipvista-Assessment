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
import Plants from '../Images/Plant.png'
import moment from 'moment'
import clsx from 'clsx';
import OpacityIcon from '@material-ui/icons/Opacity';
import CheckIcon from '@material-ui/icons/Check';
import { green } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import { waterThePlant } from '../../store/utils/thunkCreators'
import ErrorIcon from '@material-ui/icons/Error';

const useStyles = makeStyles((theme) => ({
    plantContainer: {
        paddingLeft: theme.spacing(2),
        textAlign: 'center'
    },
    container: {
        width: 350,
        marginLeft: theme.spacing(10),
        marginBottom: theme.spacing(5),
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

//Plant Component Hook
const Plant = (props) => {
    const classes = useStyles();

    const { id, name, waterThePlant, lastWateringTime } = props;
    const [isWatering, setIsWatering] = useState(false);
    const [isAtRest, setIsAtRest] = useState(false);
    const [success, setSuccess] = useState(false);
    let timer = useRef();
    let restTimer = useRef();

    const buttonClassname = clsx({
        [classes.buttonSuccess]: success,
    });

    //Handler for user pressing 'Water this plant' buttpm
    const handleWateringPlant = (id) => {

        //Set Watering status to true
        setIsWatering(true);
        setSuccess(false);
        //Set up 10 seconds timer for watering
        timer.current = window.setTimeout(() => {
            //If not canceled, set watering status to false and success to true
            setSuccess(true);
            setIsWatering(false);
            //Mutate the state using Redux
            waterThePlant(id);
            //Set up 30 seconds section that do now allow user to water again
            setIsAtRest(true);
            restTimer.current = window.setTimeout(() => {
                //User able to water again after 30 seconds
                setIsAtRest(false);
            }, 30000);
        }, 10000);
    }

    // Handler for user to stop watering the plant 
    const handleStopWateringPlant = () => {
        window.clearTimeout(timer.current);
        setSuccess(false);
        setIsWatering(false);
    }

    //Get the time difference between now and last time watered the plant
    const getTimeDiff = (lastWateringTime) => {
        const lastestTime = moment(lastWateringTime);
        const currTime = moment();
        const duration = moment.duration(currTime.diff(lastestTime)).asHours();

        return duration;
    }

    //ToString method to dispaly duration in user friendly view
    const getDurationString = (duration) => {
        if (duration >= 24) {
            return `${Math.floor(duration / 24)} days ago`
        }
        else if (duration >= 1) {
            return `${Math.floor(duration)} hours ago`
        }

        return `${Math.floor(duration * 60)} minutes ago`
    }

    const timeDuration = getTimeDiff(lastWateringTime);

    return (
        <>
            <Card className={classes.container}>
                <CardMedia
                    component='img'
                    className={classes.media}
                    title={name}
                    src={Plants}
                />
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>

                    <Typography gutterBottom variant="body2" color="textSecondary" component='p'>
                        Last Time Watered: {getDurationString(timeDuration)}
                    </Typography>
                    {timeDuration >= 6 &&
                        <Typography color='error'>
                            <ErrorIcon />
                            Your plant has not been water more than 6 hours!
                        </Typography>
                    }
                </CardContent>
                <CardActions>
                    <div className={classes.root}>
                        <div className={classes.wrapper}>
                            <Fab
                                aria-label="save"
                                className={buttonClassname}
                            >
                                {success ? <CheckIcon /> : <OpacityIcon />}
                            </Fab>
                            {isWatering && <CircularProgress size={68} className={classes.fabProgress} />}
                        </div>
                    </div>
                    <Button disabled={isWatering || isAtRest} onClick={() => handleWateringPlant(id)} color='primary' variant='contained'>{!isWatering ? "Water this plant" : "In Progress"}</Button>
                    {isWatering && <Button onClick={handleStopWateringPlant} color='primary' variant='contained'>Stop Watering</Button>}
                </CardActions>
            </Card>
        </>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        waterThePlant(id) {
            dispatch(waterThePlant(id));
        }
    }
};

export default connect(null, mapDispatchToProps)(Plant)
