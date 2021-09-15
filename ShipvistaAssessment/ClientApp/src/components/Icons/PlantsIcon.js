import React from 'react';
import { Icon } from '@material-ui/core';
import Plants from './SVG/Plants.svg';

//Party Icon
const PlantIcon = () => {
    return (
        <Icon>
            <img alt='plants' src={Plants} height={100} width={100} />
        </Icon>
    );
}

export default PlantIcon