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
      activeNavigationUrl: "",
      searchItem: false
    })
  },
  handleSearch: function() {
    this.setState({
      searchItem: true,
      package: 
        <div>
          {this.refs.package.value}
        </div>
    })
    //hashHistory.push('/id/'+this.refs.cgethaccount.value)
    this.props.api.init()
    this.props.api.search(this.refs.package.value).then((term) => {
      console.log(term + '1')
    })
    //console.log(this.refs.package.value)
  },
  render: function() {
    return (
      <div>
        <div className="nav">
        <p>
          <Link to={'/'}>Search   </Link>
          -
          <Link to={'/publish'}>   Publish</Link>
        </p>
        </div>
        <div className="home">
          <p>Search package by name:</p>
          <form className="border" action="" onSubmit={this.handleSearch}>
            <br />
            <input size="50" ref="package"/><br />
            <button type="button" className="btn btn-primary" onClick={this.handleSearch}>Search</button>
            <br />
            <br />
          </form>
          <div className={this.state.searchItem ? '' : 'noDisplay'}>
            <br />
            {this.state.package}
          </div>
          <br />
        </div>
        <br/>
        <div className="logoText">
          <h1>gx registry</h1>
          <div className="logo">
            <a href="https://github.com/nginnever/gx-registry">
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

export const HomeContainer = connect(mapStateToProps)(Home)