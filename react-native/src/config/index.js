import DebugConfig from './DebugConfig'
import { EnvironmentEnum } from '../lib/enums'

if (__DEV__) {
  console.disableYellowBox = !DebugConfig.yellowBox
}

const config = {
  APPLICATION_ID: 'RetroApp',
  resetCache: false,
  environment: EnvironmentEnum.DEVELOPMENT,
}

export default config
