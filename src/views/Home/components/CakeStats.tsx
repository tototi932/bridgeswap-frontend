import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 8px;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0

  return (
    <StyledCakeStats>
      <CardBody>
        {/* <Heading scale="xl" mb="24px">
          {t('BRIS Stats')}
        </Heading> */}
        <Row>
          <Text color="text" fontSize="14px">{t('Total DGF Supply')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={burnedBalance} />}
        </Row>
        <Row>
          <Text color="text" fontSize="14px">{t('Total DGF Burned')}</Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text color="text" fontSize="14px">{t('New DGF/block')}</Text>
          {/* <CardValue fontSize="14px" decimals={100} value={0.100} /> */}
          <div>0.00</div>
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
