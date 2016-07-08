import React from 'react'
import ReactDOM from 'react-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'

export const NotFound = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <h1>Page Not Found</h1>
    )
  }
})

function mapStateToProps(state) {
  console.log(state.toJSON())
  return state.toJSON()
}

export const NotFoundContainer = connect(mapStateToProps)(NotFound)