import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app.js';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter() });


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
    console.log('Userstate: ', userState);
    console.log('Listitem at [0]: ', listItem.at(0).html());
    console.log('Listitem at [1]: ', listItem.at(1).html());

    /* Expecting stuff */
    expect(content).toBe(true);
});
