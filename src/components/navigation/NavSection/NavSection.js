import Flexbox from 'flexbox-react'
import React, { Component } from 'react'
import { withTheme } from '../../../themes/theme'

class NavSection extends Component {
  render() {
    return (
      <Flexbox>
        {this.props.children}
      </Flexbox>
    )
  }
}


NavSection.propTypes = {

}

NavSection.defaultProps = {
  
}

NavSection = withTheme(NavSection)

export { NavSection }