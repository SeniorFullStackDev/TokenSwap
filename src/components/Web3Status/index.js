import React, { useState, useEffect } from 'react';
import { useWeb3Context } from 'web3-react'

import { NetworkContextName } from '../../constants'
import { shortenAddress } from '../../utils';
import Button from '@material-ui/core/Button';
import useWallet from "../../state/wallet/wallet.hooks";

import {
  Menu,
  MenuItem
} from '@material-ui/core';

import { MetaMask } from '../../connectors';
import Identicon from '../Identicon'

function Web3Status() {
  const context = useWeb3Context()
  const { active, account, connector, error } = useWeb3Context()
  const { fetchTransactionHistory } = useWallet();

  const [initializationOver, setInitializationOver] = useState(false)

  useEffect(() => {
    const connected = localStorage.getItem("connected");
    if (connected == "true") {
      context.setConnector('MetaMask')
        .catch(() => {
          setInitializationOver(true)
          console.log('Unable to automatically activate MetaMask') // eslint-disable-line no-console
        });
    }
  }, [])

  useEffect(() => {
    // if (context.active)
  }, [context.active])

  useEffect(() => {
    if (account) {
      console.log("account ===>", account);
      fetchTransactionHistory(account);
    }
  }, [account])

  // const { ENSName } = useENSName(account)
  const [anchorEl, setAnchorEl] = useState(null);

  // handle the logo we want to show with the account
  function getStatusIcon() {
    return <Identicon />
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  function handleClose() {
    setAnchorEl(null);
  }

  function disconnectMetaMask() {
    setAnchorEl(null);
    context.unsetConnector();
    localStorage.setItem("connected", false);
  }

  const connectMetaMask = () => {
    context.setConnector("MetaMask", false)
    localStorage.setItem("connected", true);
  }

  function getWeb3Status() {
    if (account) {
      return (
        <div>
          <Button variant="outlined" id="web3-status-connected" onClick={handleClick}>
            <div>{shortenAddress(account)}</div>
            {getStatusIcon()}
          </Button>
          <Menu
            id="wallet-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={disconnectMetaMask}>Disconnect</MenuItem>
          </Menu>
        </div>

      )
    } else if (error) {
      localStorage.setItem("connected", false);
      return (
        <Button variant="outlined" onClick={connectMetaMask}>
          Connect with MetaMask
        </Button>
      )
    } else {
      return (
        <Button variant="outlined" onClick={connectMetaMask}>
          Connect with MetaMask
        </Button>
      )
    }
  }
  return (
    <>{getWeb3Status()}</>
  );
}

export default Web3Status;
