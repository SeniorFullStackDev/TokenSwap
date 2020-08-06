import React, { useEffect, useState } from "react";
import PropTypes, { string } from 'prop-types';
import {
    IconButton
} from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';

import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';

import classes from "./style.module.scss";
import TokenItem from "./Item";
import { isAddress } from "../../../utils";
import useWallet from "../../../state/wallet/wallet.hooks";

export default function TokenList({ open, baseCryto, target, onClose, onChange, tokens }) {

    const [query, setQuery] = useState("");
    const { fetchSelectedPair, selectedPair } = useWallet();
    const selectedToken = selectedPair[target];

    useEffect(() => {
        if (baseCryto) {
            fetchSelectedPair(baseCryto.toUpperCase(), target);
        }
    }, [baseCryto])

    const onSelectToken = (selectedToken) => {
        fetchSelectedPair(selectedToken.symbol, target);
        onClose();
    }


    const renderTokens = (tokenArr) => {
        let arr = [];
        let filteredTokens = filterTokens(tokenArr, query);
        filteredTokens.forEach(element => {
            arr.push(<TokenItem key={element.address} active={element.address == selectedToken.address} token={element} onClick={onSelectToken} />);
        });
        return arr;
    }

    const filterTokens = (tokensArr, search) => {
        let tokens = tokensArr.filter(element => {
            if (target == "base") {
                return element.symbol != selectedPair.target.symbol
            } else {
                return element.symbol != selectedPair.base.symbol
            }
        });
        if (search.length === 0) return tokens
        const searchingAddress = isAddress(search)

        if (searchingAddress) {
            return tokens.filter(token => token.address === searchingAddress)
        }

        const lowerSearchParts = search
            .toLowerCase()
            .split(/\s+/)
            .filter(s => s.length > 0)

        if (lowerSearchParts.length === 0) {
            return tokens
        }

        const matchesSearch = (s) => {
            const sParts = s
                .toLowerCase()
                .split(/\s+/)
                .filter(s => s.length > 0)

            return lowerSearchParts.every(p => p.length === 0 || sParts.some(sp => sp.startsWith(p) || sp.endsWith(p)))
        }

        return tokens.filter(token => {
            const { symbol, name } = token
            return matchesSearch(symbol) || matchesSearch(name)
        })
    }

    const onChangeSearch = (e) => {
        console.log("onChangeSearch --->", e.target.value);
        setQuery(e.target.value);
    }


    if (open) {
        return (
            <div className={classes.tokenListContainer}>
                <div className={classes.header}>
                    <div>You Pay</div>
                    <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={onClose} className={classes.menuButton}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <div className={classes.searchInput}>
                    <InputBase
                        className={classes.input}
                        placeholder='Try "ETH"'
                        inputProps={{ 'aria-label': 'search google maps' }}
                        onChange={onChangeSearch}
                    />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </div>
                <div className={classes.searchedTokenListContainer}>
                    <div className={classes.tokenList}>
                        {renderTokens(tokens)}
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}
TokenList.propTypes = {
    target: PropTypes.string,
    baseCryto: PropTypes.string,
    open: PropTypes.bool,
    onClose: PropTypes.func,
    onChange: PropTypes.func,
    tokens: PropTypes.instanceOf(Object)
};
TokenList.defaultProps = {
    target: '',
    baseCryto: 'ETH',
    open: false,
    tokens: [],
    onClose: () => { },
    onChange: () => { }
};