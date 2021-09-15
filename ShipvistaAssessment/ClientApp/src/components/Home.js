import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchPlants } from '../store/utils/thunkCreators';
import Plants from './Plant/Plants.js';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(2, 3, 0, 3)
  }
}));

const Home = (props) => {
  const classes = useStyles();
  const { plants, fetchPlants } = props;

  useEffect(() => {
    fetchPlants()
  });

  return (
    <div className={classes.padding}>
      <Plants />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlants() {
      dispatch(fetchPlants());
    }
  }
}

export default connect(null, mapDispatchToProps)(Home)



