import React from 'react'
import {
    Typography,
    Card,
    CardMedia,
    CardActions,
    CardContent,
    Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Plants from '../Icons/Plant.png'
import moment from 'moment'

const useStyles = makeStyles((theme) => ({
    plantContainer: {
        paddingLeft: theme.spacing(2),
        textAlign: 'center'
    },
    container: {
        width: 300,
        marginLeft: theme.spacing(10),
        marginBottom: theme.spacing(5)
    },
    media: {
    },
    content: {
        height: 150
    },
}));

const Plant = ({ plant }) => {
    const classes = useStyles();

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
                    <Button>Water this plant</Button>
                </CardActions>
            </Card>
        </>

    )
}

export default Plant
