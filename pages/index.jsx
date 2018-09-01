import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../src/reducers/index'
import AppContainer from '../src/containers/AppContainer'

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
/* eslint-enable */

export default () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)
