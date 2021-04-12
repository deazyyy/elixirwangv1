import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
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

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms();
  const eggPrice = usePriceCakeBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = eggPrice.times(circSupply);

  let elxrPerBlock = 0;
  if(farms && farms[0] && farms[0].elxrPerBlock){
    elxrPerBlock = new BigNumber(farms[0].elxrPerBlock).div(new BigNumber(10).pow(18)).toNumber();
  }

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading as="h1" style={{fontSize:"30px"}} mb="24px">
          {TranslateString(534, 'Elxr Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px" color="#8e8d95">{TranslateString(10005, 'Market Cap')}</Text>
          <Row><CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" /><span style={{fontSize:"13px",color:"#8e8d95",marginLeft:"5px"}}>EXL</span></Row>
        </Row>
        <Row>
          <Text fontSize="14px" color="#8e8d95">{TranslateString(536, 'Total Minted')}</Text>
          <Row>{totalSupply && <CardValue fontSize="14px" value={getBalanceNumber(totalSupply)} decimals={0} />}<span style={{fontSize:"13px",color:"#8e8d95",marginLeft:"5px"}}>EXL</span></Row>
        </Row>
        <Row>
          <Text fontSize="14px" color="#8e8d95">{TranslateString(538, 'Total Burned')}</Text>
          <Row><CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} /><span style={{fontSize:"13px",color:"#8e8d95",marginLeft:"5px"}}>EXL</span></Row>
        </Row>
        <Row>
          <Text fontSize="14px" color="#8e8d95">{TranslateString(10004, 'Circulating Supply')}</Text>
          <Row>{cakeSupply && <CardValue fontSize="14px" value={cakeSupply} decimals={0} />}<span style={{fontSize:"13px",color:"#8e8d95",marginLeft:"5px"}}>EXL</span></Row>
        </Row>
        <Row>
          <Text fontSize="14px" color="#8e8d95">{TranslateString(540, 'New ELXR/block')}</Text>
          <Row><Text bold fontSize="14px">{elxrPerBlock}</Text><span style={{fontSize:"13px",color:"#8e8d95",marginLeft:"5px"}}>EXL</span></Row>
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
