import PropTypes from "prop-types";
import Flexbox from 'flexbox-react'
import React, { Component } from 'react'
import { withTheme } from '../../../themes/theme'
import { Link } from '../../base/Link'

class NavItem extends Component {

  render() {

    let style = {
      padding: this.props.padding,
    }

    return (
      <Link href={this.props.href}>
        <Flexbox style={style}>
          <p>{this.props.title}</p>
        </Flexbox>
      </Link>
    ) 
  }
}

NavItem.propTypes = {
  href: PropTypes.string,
  padding: PropTypes.string,
  title: PropTypes.string
}

NavItem.defaultProps = {
  href: "#",
  padding: "1em",
  title: "NavItem",
}

NavItem = withTheme(NavItem)

export { NavItem }