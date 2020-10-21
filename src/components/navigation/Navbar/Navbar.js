import Flexbox from 'flexbox-react'
import React, { Component } from 'react'
import { withTheme } from '../../../themes/theme'

class Navbar extends Component {
  render() {

    let style = {
      width: "100%",
    } 

    return (
      <Flexbox style={style}>
        {this.props.children}
      </Flexbox>
    )
  }
}

Navbar.propTypes = {

}

Navbar.defaultProps = {
  
}

Navbar = withTheme(Navbar)

export { Navbar }