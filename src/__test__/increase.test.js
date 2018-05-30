import React from 'react';
import ReactDOM from 'react-dom';
import Increase from '../components/increaseValue.js';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter() });

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

});
