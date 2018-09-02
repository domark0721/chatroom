import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../src/reducers/index'
import AppContainer from '../src/containers/AppContainer'

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
)
/* eslint-enable */

export default () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)
