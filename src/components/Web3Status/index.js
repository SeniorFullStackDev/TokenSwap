import React from 'react';
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { useActiveWeb3React } from '../../hooks'
// import { useETHBalances } from '../../state/wallet/hooks'
import { NetworkContextName } from '../../constants'
import { shortenAddress } from '../../utils';
import useENSName from '../../hooks/useENSName'

import Button from '@material-ui/core/Button';
import { injected } from '../../connectors';
import Identicon from '../Identicon'

function Web3Status() {
  const { active, account, connector, error, activate } = useWeb3React()
  const contextNetwork = useWeb3React(NetworkContextName)
  
  const { ENSName } = useENSName(account)

  // handle the logo we want to show with the account
  function getStatusIcon() {
    return <Identicon />
  }
  
  function getWeb3Status() {
    if (account) {
      return (
        <Button variant="outlined" id="web3-status-connected">
          <div>{ENSName || shortenAddress(account)}</div>
          {getStatusIcon()}
        </Button>
      )
    } else if (error) {
      return (
        <div>Wrong Network</div>
      )
    } else {
      return (
        <Button variant="outlined" onClick={() => activate(injected)}>
          Connect with MetaMask
        </Button>
      )
    }
  }

  if (!contextNetwork.active && !active) {
    return null
  }
  return (
      <>{getWeb3Status()}</>
  );
}

export default Web3Status;
