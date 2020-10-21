import React from 'react'
import renderer from 'react-test-renderer'
import { NavSection } from '.'

it('NavSection: default', () => {
  const component = renderer.create(<NavSection />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
