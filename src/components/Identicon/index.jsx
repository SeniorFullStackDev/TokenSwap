import React, { useEffect, useRef } from 'react'

import styled from 'styled-components'

import { useWeb3Context } from 'web3-react'
import Jazzicon from 'jazzicon'

const StyledIdenticon = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 1.125rem;
`

export default function Identicon() {
  const ref = useRef()
  const { account } = useWeb3Context()
  useEffect(() => {
    if (account && ref.current) {
      ref.current.innerHTML = ''
      ref.current.appendChild(Jazzicon(16, parseInt(account.slice(2, 10), 16)))
    }
  }, [account])

  return <StyledIdenticon ref={ref} />
}
