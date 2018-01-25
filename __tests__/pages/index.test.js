import { shallow } from 'enzyme'

import App from '../../pages/index.js'

describe('With Enzyme', () => {
  it('App shows "Hello world!"', () => {
    const app = shallow(<App />)

    expect(app.find('h1').text()).toEqual('Hello World!')
  })
})