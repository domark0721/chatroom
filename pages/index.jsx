import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../src/reducers/index'
import AppContainer from '../src/containers/AppContainer'

const store = createStore(rootReducer)

export default () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)
