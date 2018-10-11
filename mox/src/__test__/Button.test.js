import React from 'react'
import { configure, shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-styled-components'

// Setup adapter to work with enzyme 3.2.0
configure({ adapter: new Adapter() })

// Components
import Button from '../components/common/Button'

describe('Button test', () => {

  const props = {
    text: 'About us',
    onPress: jest.fn()
  }

  let component = shallow(<Button {...props}/>)

  it('Snapshot Button component', () => {
    const renderedValue = renderer.create(
      <Button {...props} />
    ).toJSON()
    expect(renderedValue).toMatchSnapshot()
  })

  it('Snapshot Button component with type default', () => {
    const renderedValue = renderer.create(
      <Button {...props} type='default' />
    ).toJSON()
    expect(renderedValue).toMatchSnapshot()
  })

  it('Snapshot Button component type primary', () => {
    const renderedValue = renderer.create(
      <Button {...props} type='primary' />
    ).toJSON()
    expect(renderedValue).toMatchSnapshot()
  })

  it('Snapshot Button component type secondary', () => {
    const renderedValue = renderer.create(
      <Button {...props} type='secondary' />
    ).toJSON()
    expect(renderedValue).toMatchSnapshot()
  })

  it('Snapshot Button component type third', () => {
    const renderedValue = renderer.create(
      <Button {...props} type='third' />
    ).toJSON()
    expect(renderedValue).toMatchSnapshot()
  })

  it('should be defined', () => {
    expect(Button).toBeDefined()
  })

  it('render Button component', () => {
    expect(component.length).toEqual(1)
  })
})
