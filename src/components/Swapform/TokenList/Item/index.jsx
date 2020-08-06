import React, { useEffect, useState, useCallback } from "react";
import PropTypes, { string } from 'prop-types';
import {
    IconButton
} from '@material-ui/core';
import classNames from "classnames";
import classes from "./style.module.scss";

export default function TokenItem({ active, onClick, token }) {
    // console.log("token ==>", token);

    const onClickTokenItem = useCallback(
        () => {
            onClick(token);
        },
        [onClick]
    )

    const className = classNames(classes.tokenItemContainer, { [classes.active]: active });

    return (
        <div className={className} onClick={onClickTokenItem}>
            <div className={classes.tokenLogo}>
                <img src={token.logoURI} />
            </div>
            <div className={classes.tokenDetail}>
                <div className={classes.symbol}>{token.symbol}</div>
                <div className={classes.balance}>{token.balance || 0}</div>
            </div>
        </div>
    )
}
TokenItem.propTypes = {
    active: PropTypes.bool,
    onClick: PropTypes.func,
    token: PropTypes.instanceOf(Object)
};
TokenItem.defaultProps = {
    active: false,
    onClick: () => { },
    token: {}
};