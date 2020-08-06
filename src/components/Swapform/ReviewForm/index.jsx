import React, { useEffect, useState } from "react";
import PropTypes, { string } from 'prop-types';
import {
    IconButton,
    Button
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import classes from "./style.module.scss";

export default function ReviewForm({ open, detail, onClose }) {

    const sellAmount = detail.sellAmount;
    const buyAmount = detail.buyAmount;
    const selectedPair = detail.selectedPair;
    
    const onClickReviewOrderBtn = () => {

    }

    if (open) {
        return (

            <div className={classes.container}>
                <div className={classes.header}>
                    <div>Review Limit Order</div>
                    <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={onClose} className={classes.menuButton}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <div className={classes.body}>
                    <div className={classes.paySection}>
                        <div>You Pay</div>
                        <div className={classes.detail}>
                            <h3>{sellAmount} {selectedPair.base.symbol}</h3> <div></div>
                        </div>
                    </div>
                    <div className={classes.recieiveSection}>
                        <div>You Receive</div>
                        <div className={classes.detail}>
                            <h3>{buyAmount} {selectedPair.target.symbol}</h3> <div></div>
                        </div>
                    </div>
                    <div className={classes.detailRate}>
                        <div>Rate</div>
                        <div>{selectedPair.price} @ {selectedPair.target.symbol}</div>
                    </div>
                    <div className={classes.placeOrderBtnContainer}>
                        <Button className={classes.reviewBtn} variant="outlined" color="primary" onClick={onClickReviewOrderBtn} >Review Limit Order</Button>
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

ReviewForm.propTypes = {
    open: PropTypes.bool,
    detail: PropTypes.instanceOf(Object),
    onClose: PropTypes.func
};
ReviewForm.defaultProps = {
    open: false,
    detail: {},
    onClose: () => { },
};