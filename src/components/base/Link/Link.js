import React, { Component } from 'react'
import { withTheme } from '../../../themes/theme'

class Link extends Component {
  render() {
    return (
      <a href={this.props.href}>
        {this.props.children}
      </a>
    )
  }
}

Link.propTypes = {

}

Link.defaultProps = {
  
}

Link = withTheme(Link)

export { Link }