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
import {NotFoundContainer} from './components/NotFound'
import {PublishContainer} from './components/Publish'
import {ListContainer} from './components/List'
import {api} from './services'


const store = createStore(reducer)
store.dispatch({
  type: 'SET_STATE',
  state: {
    api: api
  }
})

const routes = <Route component={App}>
  <Route path="/" component={HomeContainer} />
  <Route path="/publish" component={PublishContainer} />
  <Route path="/list" component={ListContainer} />
  <Route path='*' component={NotFoundContainer} />
</Route>

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
)