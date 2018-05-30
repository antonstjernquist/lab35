import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app.js';
import Increase from '../components/increaseValue.js';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter() });

describe('Shallow app test', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
  });

  it('renders shallow without crashing', () => {

      /* Shallow render example test */
      let wrapper = shallow(<App />);

      /* Finding JSX */
      let jsx = <h1> Hello </h1>
      let content = wrapper.contains(jsx);

      /* Retrieving state */
      let userState = wrapper.state('user');

      /* Finding elemetns with CSS-type class selector */
      let listItem = wrapper.find('ul > li');

      /* Logging what we find */
      // console.log('Userstate: ', userState);
      // console.log('Listitem at [0]: ', listItem.at(0).html());
      // console.log('Listitem at [1]: ', listItem.at(1).html());

      /* Expecting stuff */
      expect(content).toBe(true);
      expect(listItem.length).toBe(2);
  });
})

describe('Shallow Increase test', () => {
  let wrapper = shallow(<Increase />);
  let instance = wrapper.instance();

  it('Increase shallow render test', () => {


    let jsx = (<div>
          <input type="number" value={instance.state.value} onChange={instance.handleChange} />
          <br />
          <button onClick={instance.increaseClick}> Increase value</button>
          <button onClick={instance.decreaseClick}> Decrease value </button>
          <br />
          <span> {wrapper.state('value')} </span>
        </div>)

    let content = wrapper.contains(jsx);

    /* Content expectation */
    expect(content).toBe(true);

  })

  it('Simulating button clicks', () => {
    wrapper.setState({value: '0'});
    /* Some clicking test */
    let increaseButton = wrapper.find('button').at(0);
    let decreaseButton = wrapper.find('button').at(1);

    /* Increase */
    increaseButton.simulate('click');
    expect(wrapper.state('value')).toBe(1);

    /* Decrease */
    decreaseButton.simulate('click');
    expect(wrapper.state('value')).toBe(0);
  })

  it('Testing setState for the lulz', () => {

    /* Testing Setstate for the lulz */
    wrapper.setState({value: 20});
    expect(wrapper.state('value')).toBe(20);

  })

  it('Testing input field onChange', () => {
    wrapper.setState({value: '5'});
    let inputField = wrapper.find('input').at(0);

    inputField.simulate('change', { target: { value: 10 }});

    expect(wrapper.state('value')).toBe(10)
  })

})
