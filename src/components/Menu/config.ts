import { MenuEntry, menuStatus } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home Website'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: 'https://dex.bridgeswap.app/#/swap',
      },
      {
        label: t('Liquidity'),
        href: 'https://dex.bridgeswap.app/#/pool',
      },
      
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: "launchpad",
    icon: "DefiIcon",
    href: "/defi",
  },
  // {
  //   label: t('Prediction (BETA)'),
  //   icon: 'PredictionsIcon',
  //   href: '/prediction',
  // },
  {
    label: t('Lottery'),
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: t('Referral Program'),
    icon: 'ReferralIcon',
    href: '/referral',
    status: menuStatus.LIVE
  },
  // {
  //   label: t('Collectibles'),
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: t('Team Battle'),
  //   icon: 'TeamBattleIcon',
  //   href: '/competition',
  // },
  // {
  //   label: t('Teams & Profile'),
  //   icon: 'GroupsIcon',
  //   items: [
  //     {
  //       label: t('Leaderboard'),
  //       href: '/teams',
  //     },
  //     {
  //       label: t('Task Center'),
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: t('Your Profile'),
  //       href: '/profile',
  //     },
  //   ],
 // },
   {
     label: t('Listings'),
    icon: 'InfoIcon',
     items: [
       {
         label: t('CoinMarketCap'),
         href: 'https://coinmarketcap.com/',
       },
       {
         label: t('CoinGecko'),
        href: 'https://www.coingecko.com/',
       },
       {
         label: t('Crypto.com'),
        href: 'https://crypto.com/',
       },
       {
         label: t('DappRadar'),
         href: 'https://dappradar.com/',
       },
       {
         label: t('Nomics'),
         href: 'https://nomics.com/',
       },
     ],
   },
   {
     label: t('Network status'),
     icon: 'IfoIcon',
     href: 'https://pancakeswap.finance/ifo',
   },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Whitepaper'),
        href: 'https://doge-gold-floki-finance.gitbook.io/dgf/',
      },
       {
         label: t('SAFU'),
         href: 'https://voting.bridgeswap.app',
       },
       {
         label: t('KYC'),
         href: 'https://github.com/Bridgeswap-Dex',
       },
       {
         label: t('AUDIT'),
         href: 'https://docs.bridgeswap.app',
       },
      // {
      //   label: t('Blog'),
      //   href: 'https://bridgeswap.medium.com/',
      // },
      // {
      //   label: t('Merch'),
      //   href: 'https://bridgeswap.creator-spring.com/',
      // },
    ],
  },
]

export default config
