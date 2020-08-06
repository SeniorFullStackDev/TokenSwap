import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {
    Button
} from '@material-ui/core';
import classes from "./style.module.scss";

const ReviewButton = ({ selectedPair, onClick, active }) => {

    useEffect(() => {

    }, [selectedPair])


    const disabled = (selectedPair.price == 0 || !active);
    // console.log("selectedPair ===>", selectedPair, disabled);

    return (
        <div className={classes.reviewBtnContainer}>
            <Button className={classes.reviewBtn} variant="outlined" color="primary" onClick={onClick} disabled={disabled}>Review Order</Button>
        </div>
    )

}

export default ReviewButton;

ReviewButton.propTypes = {
    selectedPair: PropTypes.instanceOf(Object),
    active: PropTypes.bool,
    onClick: PropTypes.func
};
ReviewButton.defaultProps = {
    selectedPair: null,
    active: false,
    onClick: () => { }
};