import React, { useState, useEffect } from 'react'
import BigNumber from 'bignumber.js'
import { Heading, Text, BaseLayout, Button, Image, Card, Flex, Grid, useModal } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import useBrisBalance from 'hooks/useGetBrisBalance'
import { useLotteryInfo, useCurrentLotteryId } from 'hooks/useBuyLottery'
import BuyTicketModal from './TicketCard/BuyTicketModal'

const ticketPrice = 1

const LotteryInfo = styled.div`
    display: flex;
    background-image: url(/images/decorations/bg-design-large.svg);
    background-repeat: no-repeat;
    background-position: top center;
    flex-direction: column;
    background-size: 100%;
    justify-content: center;
    border-radius: 12px;
    text-align: center;
    padding: 30px 0px;
    margin: 12px;
`

const BridgeLottery = () => {

  const { t } = useTranslation()
  const maxBalance = useBrisBalance()
  const [lotteryinfo, setLotteryinfo] = useState({})
  const lotteryid = useCurrentLotteryId()
  const { onViewLottery } = useLotteryInfo()


  const [onPresentBuyTicketsModal] = useModal(<BuyTicketModal max={new BigNumber(maxBalance)}/>)
  useEffect(() => {
      (async () => {
          const lottery = await onViewLottery(lotteryid.toString())
          setLotteryinfo(lottery)
      })()
  }, [lotteryid, onViewLottery])


  return (
      <LotteryInfo>
          <Text fontSize="12px" mb="15px" color="text">
            {t("Doge Gold Floki Lottery")}
          </Text><Text fontWeight="700" mb="15px" fontSize="42px">
            {t("Win $0")}
          </Text>
          <Text fontSize="12px" mb="22px" color="text">
            {t("in prizes")}
          </Text>
          <Button variant="primary" scale="sm" style={{margin: "10px auto", width: "200px"}} onClick={onPresentBuyTicketsModal}>Buy tickets</Button>
          <Text fontSize='12px' color='text'>
              {t(`Tickets sold at $0 per ticket`)} 
          </Text>
      </LotteryInfo>
  )
}

export default BridgeLottery
