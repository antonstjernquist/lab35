import React from 'react';
import ReactDOM from 'react-dom';
import Increase from '../components/increaseValue.js';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter() });

describe('Shallow Increase test', () => {
  let wrapper = shallow(<Increase />);
  let instance = wrapper.instance();

  it('shallow smoke test: Increase', () => {
      let wrapper = shallow(<Increase />);
  })

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


/* Utförliga tester för VG */

it ('expect faulty input to not change state', () => {
    wrapper.setState({value: 5});
    let inputField = wrapper.find('input').at(0);
    inputField.simulate('change', { target: { value: "gustav.karlstrom96@hotmail.com" }});
    expect(wrapper.state('value')).toBe(5);
});


it ('Array passed in onChange', () => {
    wrapper.setState({value: 15});
    let inputField = wrapper.find('input').at(0);
    inputField.simulate('change', { target: { value: ['steve', 'berra'] }});
    expect(wrapper.state('value')).toBe(15);
});

it ('Null passed in onChange', () => {
    wrapper.setState({value: 25});
    let inputField = wrapper.find('input').at(0);
    inputField.simulate('change', { target: { value: null }});
    expect(wrapper.state('value')).toBe(25);
});

it ('NaN passed in onChange', () => {
    wrapper.setState({value: 25});
    let inputField = wrapper.find('input').at(0);
    inputField.simulate('change', { target: { value: NaN }});
    expect(wrapper.state('value')).toBe(25);
});

  it('Testing input field onChange', () => {
    wrapper.setState({value: '5'});
    let inputField = wrapper.find('input').at(0);

    inputField.simulate('change', { target: { value: "10"}});

    expect(wrapper.state('value')).toBe(10)
  })

});
