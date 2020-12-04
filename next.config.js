const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'

  console.log(`isDev:${isDev}  isProd:${isProd}`)

  const env = {
    CORE_URL: (() => {
      if (isDev) return process.env.DEV_URL
      if (isProd) return process.env.PROD_URL
    })(),
    JP_URL: process.env.JP_URL,
  }

  return {
    env,
  }
}
