import immutablePersistenceTransform from '../lib/services/ImmutablePersistenceTransform'
import { AsyncStorage } from 'retro-web-native'

const REDUX_PERSIST = {
  active: false,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    blacklist: [],
    transforms: [immutablePersistenceTransform]
  }
}

export default REDUX_PERSIST
