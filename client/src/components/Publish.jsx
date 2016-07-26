import React from 'react'
import ReactDOM from 'react-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {hashHistory, Link} from 'react-router'

export const Publish = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState: function() {
    return ({
      searchItem: false
    })
  },
  newWallet: function() {
  	this.props.api.newWallet(this.refs.userEntropy.value)
    console.log(this.refs.userEntropy.value)
  },
  handlePublish: function() {
    this.props.api.init()
    this.props.api.publish(this.refs.pubname.value, this.refs.pubhash.value)
    this.setState({
      searchItem: true,
      message: 
        <div>
         <table className="table">
           <tbody>
            <tr>
              <th>Your package has been published!</th>
            </tr>
          </tbody>
        </table> 
      </div>
    })
  },
  render: function() {
    return (
      <div>
        <div className="nav">
          <p>
            <Link to={'/'}>Search   </Link>
            -
            <Link to={'/publish'}>   Publish   </Link>
            -
            <Link to={'/list'}>   List</Link>
          </p>
        </div>
        <div className="home">
        <p>*** This is currently using a test net, wallet creation disabled! Just publish for now</p>
        <p> To use, start by creating a wallet in browser!</p>
         <div>
          <input type="text" ref="userEntropy" placeholder="Type random text to generate entropy" size="50"></input>
          <br />
          <button onClick={this.newWallet}>Create New Wallet</button>
         </div>
          <p>Publish a repository:</p>
          <form className="border" action="" onSubmit={this.handlePublish}>
            <br />
            <label htmlFor="name">Name</label><br />
            <input size="50" ref="pubname" id="name"/><br /><br />
            <label htmlFor="hash">gx package IPFS Multihash</label><br />
            <input size="50" ref="pubhash" id="hash"/><br />
            <button type="button" className="btn btn-primary" onClick={this.handlePublish}>Publish</button>
            <br />
            <br />
          </form>
          <div className={this.state.searchItem ? '' : 'noDisplay'}>
            <br />
            {this.state.message}
          </div>
        </div>
        <br/>
        <br/>
        <div className="logoText">
          <h1>ippm registry</h1>
          <div className="logo">
            <a href="https://github.com/nginnever/ippm-registry">
              <img src={'Octicons-mark-github.svg.png'} style={{height: 50}} />
            </a>
          </div>
        </div>
      </div>
    )
  }
})

function mapStateToProps(state) {
  console.log(state.toJSON())
  return state.toJSON()
}

export const PublishContainer = connect(mapStateToProps)(Publish)