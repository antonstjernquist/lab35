import React from "react";
import EditableList, {DisplayList, AddButtonsAndRenderList} from "../components/editableList.js";
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter() });

describe('EditableList', () => {
    let wrapper;
    let instance;
    beforeEach(() => {
        wrapper = shallow(<EditableList/>);
        instance = wrapper.instance();
    });

    it ('Contains expected', () => {
        const jsx = (
            <div className="theHolyFuckingWrapper">
                <input value={instance.state.value} onChange={instance.handleInput}/>
                <button onClick={instance.handleAdd} type="button">Add text</button>
                <DisplayList callback={instance.handleRemove} texts={instance.state.texts}/>
            </div>
        );
        const content = wrapper.contains(jsx);
        expect(content).toBe(true);
    });

    it ('Adds to array when clicked', () => {
        expect(wrapper.state('texts').length).toBe(0);
        const button = wrapper.find('button').at(0);
        button.simulate('click');
        expect(wrapper.state('texts').length).toBe(1);
    });

    it ('On input add to state value', () => {
       expect(wrapper.state('value').length).toBe(0);
       const input = wrapper.find('input').at(0);
       input.simulate('change', {target: {value: "dickring"}});
       expect(wrapper.state('value')).toBe("dickring");
    });
});

describe('DisplayList', () => {
    const wrapper = mount(<EditableList/>);
    const instance = wrapper.instance();
  it ('Handle remove from array', () => {
    wrapper.setState({texts: ['steve']});

    const button = wrapper.find('button').at(1);
    console.log('Button: ', button);
    button.simulate('click');
    expect(wrapper.state('texts').length).toBe(0);
  });
});
