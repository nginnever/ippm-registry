import React from 'react'
import ReactDOM from 'react-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {hashHistory, Link} from 'react-router'

let post

export const Home = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState: function() {
    return ({
      activeNavigationUrl: ""
    })
  },
  handleSubmit: function() {
    hashHistory.push('/id/'+this.refs.cgethaccount.value)
    console.log(this.refs.cgethaccount.value)
  },
  render: function() {
    return (
      <div>
        <div className="home">
          <p>Create or submit the ipfs pad hash:</p>
          <form action="" onSubmit={this.handleSubmit}>
            <input size="50" ref="cgethaccount"/><br />
            <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Enter</button>
          </form>
          <p>This is a collaborative text editor service hosted by IPFS. <br/>
          IPFS PAD is a software libre web application that allows for <br/>
          real-time distributed group collaboration of text documents. <br/>
          For more information <a href="https://github.com/nginnever/ipfs-pad">View Source</a>
          </p>
        </div>
        <br/>
        <div className="logo">
          <img src={'logo.svg'} style={{height: 50}} />
        </div>
        <div className="logoText">
          <h1>ipfs pad</h1>
        </div>
      </div>
    )
  }
})

function mapStateToProps(state) {
  console.log(state.toJSON())
  return state.toJSON()
}

export const HomeContainer = connect(mapStateToProps)(Home)