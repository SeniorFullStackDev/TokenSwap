import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {
    Button
} from '@material-ui/core';
import classes from "./style.module.scss";
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import useWallet from "../../../state/wallet/wallet.hooks";

const TransactionStatus = () => {

    const open = true;
    const { transactionStatus, initTransactionStatus } = useWallet();

    useEffect(() => {
    }, [transactionStatus])


    const onClickNewOrder = () => {
        initTransactionStatus();
    }

    if (transactionStatus.waiting) {
        return (
            <div className={classes.container}>
                <h3>{transactionStatus.message}</h3>
                {transactionStatus.message.includes("Progressing") && <CircularProgress color="secondary" size={80} />}
                {transactionStatus.message.includes("Failed") && <HighlightOffIcon style={{ fontSize: "100px", color: "red" }} />}
                {transactionStatus.message.includes("Successful") && <CheckCircleOutlineIcon style={{ fontSize: "100px", color: "green" }} />}
                <div style={{ height: "100px" }}>
                    {transactionStatus.message.includes("Successful") &&
                        <Button variant="outlined" color="primary" onClick={onClickNewOrder} >New Order</Button>
                    }
                    {transactionStatus.message.includes("Failed") &&
                        <Button variant="outlined" color="primary" onClick={onClickNewOrder} >Retry</Button>
                    }
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default TransactionStatus;