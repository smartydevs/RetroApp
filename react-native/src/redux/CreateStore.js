import { createStore, applyMiddleware, compose } from 'redux'
import Rehydration from '../lib/services/Rehydration'
import createSagaMiddleware from 'redux-saga'
import ReduxPersist from '../config/ReduxPersist'
import ScreenTracking from './ScreenTrackingMiddleware'
import { appNavigatorMiddleware } from '../navigation/ReduxNavigation'

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- navigation Middleware ------------ */
  middleware.push(appNavigatorMiddleware)

  /* ------------- Analytics Middleware ------------- */
  middleware.push(ScreenTracking)

  /* ------------- Assemble Middleware ------------- */
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)
  enhancers.push(applyMiddleware(...middleware))

  const store = createStore(rootReducer, compose(...enhancers))

  // configure persistStore and check reducer version number
  if (ReduxPersist.active) {
    Rehydration.updateReducers(store)
  }

  // kick off root saga
  let sagasManager = sagaMiddleware.run(rootSaga)

  return {
    store,
    sagasManager
  }
}
