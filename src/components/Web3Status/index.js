import React, { useState } from 'react';
import { useWeb3Context } from 'web3-react'

import { NetworkContextName } from '../../constants'
import { shortenAddress } from '../../utils';
import useENSName from '../../hooks/useENSName'
import Button from '@material-ui/core/Button';

import {
  Menu,
  MenuItem
} from '@material-ui/core';

import { MetaMask } from '../../connectors';
import Identicon from '../Identicon'

function Web3Status() {
  const { active, account, connector, error, activate, deactivate } = useWeb3Context()

  const { ENSName } = useENSName(account)
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
    deactivate();
  }

  function getWeb3Status() {
    if (account) {
      return (
        <div>
          <Button variant="outlined" id="web3-status-connected" onClick={handleClick}>
            <div>{ENSName || shortenAddress(account)}</div>
            {getStatusIcon()}
          </Button>
          <Menu
            id="wallet-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Disconnect</MenuItem>
          </Menu>
        </div>

      )
    } else if (error) {
      return (
        <div>Wrong Network</div>
      )
    } else {
      return (
        <Button variant="outlined" onClick={() => activate(MetaMask)}>
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
