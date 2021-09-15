import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchPlants } from '../store/utils/thunkCreators';
import Plants from './Plant/Plants.js';

const Home = (props) => {
  const { plants, fetchPlants } = props;

  useEffect(() => {
    fetchPlants()
  });

  return (
    <div>
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



