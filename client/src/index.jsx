import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
//import {Router, Route, hashHistory} from 'react-router'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {List, Map} from 'immutable'
import reducer from './reducers/reducer'
import App from './components/App'
import {HomeContainer} from './components/Home'
import {PadContainer} from './components/Pad'
import {NotFoundPage} from './components/NotFound'

const pad = Map({
  hash: 'Qm1'
})

const store = createStore(reducer)
store.dispatch({
  type: 'SET_STATE',
  state: {
    style: {},
  }
})

const routes = <Route component={App}>
  <Route path="/" component={HomeContainer} />
  <Route path="/id/:id" component={PadContainer} />
  <Route path='*' component={NotFoundPage} />
</Route>

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
)