import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms } from '../../../state/hooks'

const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const TwitterCard = () => {
  const TranslateString = useI18n()

  return (
    <StyledTwitterCard>
      <CardBody>
        <img src="images/cauldron.png" className="jackpotimg" alt="wizard" />
        <Heading size="lg" mb="24px">
          Jackpot Rewards
        </Heading>
        <div className="rewardouter"> 
          <div className="rewardrow">5,000,000 <span>ADA</span></div>
          <div className="rewardrow">100 <span>BNB</span></div>
          <div className="rewardrow">500 <span>ETH</span></div>
        </div>
      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
