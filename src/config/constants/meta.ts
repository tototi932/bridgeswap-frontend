import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'BridgeSwap',
  description:
    'The AMM you can trust on the BSC network. Bringing you the true meaning of DeFi. Trade and farm tokens, passively, on our platform.',
  image: 'https://bridgeswap.app/images/hero.svg',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('DogeGoldFlokiSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('DogeGoldFlokiSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('DogeGoldFlokiSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('DogeGoldFlokiSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('DogeGoldFlokiSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('DogeGoldFlokiSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('DogeGoldFlokiSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('DogeGoldFlokiSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('DogeGoldFlokiSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('DogeGoldFlokiSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('DogeGoldFlokiSwap')}`,
      }
    default:
      return null
  }
}
