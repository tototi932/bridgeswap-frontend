import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'DGF Swap',
  description:
    'The AMM you can trust on the BSC network. Bringing you the true meaning of DeFi. Trade and farm tokens, passively, on our platform.',
  image: 'https://bridgeswap.app/images/hero.svg',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Doge Gold Floki Swap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Doge Gold Floki Swap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Doge Gold Floki Swap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Doge Gold Floki Swap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Doge Gold Floki Swap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Doge Gold Floki Swap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('Doge Gold Floki Swap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Doge Gold Floki Swap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Doge Gold Floki Swap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('Doge Gold Floki Swap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('Doge Gold Floki Swap')}`,
      }
    default:
      return null
  }
}
