import Poster from './index'

import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'

describe('<Poster />', () => {
  it('should render an <img> tag', () => {
    const renderedComponent = shallow(<Poster src="test.png" alt="test" />)
    expect(renderedComponent).to.have.tagName('img')
  })

  it('should have an alt attribute', () => {
    const renderedComponent = shallow(<Poster src="test.png" alt="test" />)
    expect(renderedComponent).to.have.attr('alt', 'test')
  })
})
