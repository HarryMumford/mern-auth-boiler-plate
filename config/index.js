import test from './test'
import development from './development'
import production from './production'

const env = process.env.NODE_ENV || 'development'

const config = {
  test,
  development,
  production,
}

export default config[env]
