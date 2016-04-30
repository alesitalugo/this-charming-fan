import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

import Footer from './index'
import A from 'components/A'

describe('<Footer />', () => {
  it('should render the copyright notice', () => {
    const renderedComponent = shallow(
      <Footer />
    )
    expect(renderedComponent.contains(
      <section>
        <p>
          This project is licensed under the Beerware license.
        </p>
      </section>
    )).toEqual(true)
  })

  it('should render the credits', () => {
    const renderedComponent = shallow(<Footer />)
    expect(renderedComponent.contains(
      <section>
        <p>
          Made with love by <A href="https://github.com/luciernagale">Alesita</A> && <A href="https://github.com/rogr">Rogelio</A>.
        </p>
      </section>
    )).toEqual(true)
  })
})
