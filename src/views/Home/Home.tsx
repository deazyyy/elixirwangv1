import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Heading, Text, BaseLayout, CardBody, Button } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'


const Hero = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  background-color: #c4a0e4;
  margin-bottom: 32px;
  padding: 50px 36px;
  text-align: center;
  color: white;
  border-radius: 30px;
  position:relative;
  color:#57565c
  // ${({ theme }) => theme.mediaQueries.lg} {
  //   padding-top: 0;
  // }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page className="homemain">
      Hi,
      <h1 className="welcheading">Welcome back</h1>
      <Hero>
         <Heading as="h1" size="xl" mb="10px" color="#fff">
            The Wizard arrived!
        </Heading>
        <Text color="#fff" style={{fontSize:"16px"}}>We have just launched our wizard event.</Text>
        <div className="wizardbuttonouter">
          <Button className="wizardbutton" size="sm" mr="10px">
            <Link to="/farms">Join our Pools</Link>
          </Button>
          <Button className="wizardbutton" size="sm">
            <Link to="/nests">Join our Farms</Link>
          </Button>
        </div>
          
        <img src="images/wizard.png" className="wizard" alt="wizard" />
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard/>
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
