// Komponenten ska innehålla ett formulär där användaren kan fylla i sin e-postadress och länk till profilbild.
// Alla fält ska valideras. Dvs om anv{ändaren fyller i ett felaktigt värde i något fält så ska det dyka upp ett meddelande i komponenten, som beskriver vad man har gjort fel.
// Använd bool-variabler i state.
// En e-postadress måste vara unik, så för att kontrollera att den som användaren skriver in inte är upptagen så måste komponenten få en lista över upptagna adresser via props.
// (I en riktig app hade man gjort AJAX till ett API i stället)}

import React from "react";
import UserProfile, {WarningMessage} from '../components/userProfile.js'
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter() });


describe('User Profile', () => {
    let wrapper;
    let instance;
    let inputImage;
    beforeEach(() => {
        const alreadyInUseMails = ['berra@gmail.com', 'steve@lit.com'];
        wrapper = shallow(<UserProfile/>);
        instance = wrapper.instance();
        inputImage = wrapper.find('input').at(1);
    })

    it('shallow smoke test: UserProfile', () => {
        let wrapper = shallow(<UserProfile />);
    })

    it ('Contains expected', () => {
        const jsx = (
            <div className="theWrapperOfDoom">
                <WarningMessage warnings={instance.state.warnings} />
                  <input type="text" onChange={instance.handleEmailChange} value={instance.emailValue} />
                  <input type="text" onChange={instance.handleImageChange} value={instance.imageValue} />
                <button onClick={instance.handleSave} > Save changes </button>
            </div>
        );
        const content = wrapper.contains(jsx);
        expect(content).toBe(true);
    });

    it ('Correct email', () => {
        const input = wrapper.find('input').at(0);
        input.simulate('change', {target: {value: 'majBoi@gmail.com'}});
        expect(wrapper.state('emailCheck')).toBe(true);

    });
    it ('Already in use email', () => {
        const input = wrapper.find('input').at(0);
        input.simulate('change', {target: {value: 'steve@lit.com'}});
        expect(wrapper.state('emailCheck')).toBe(false);
    });

    it ('Faulty email', () => {
        const input = wrapper.find('input').at(0);
        console.log(input.html());
        input.simulate('change', {target: {value: 'dwkdlit.com'}});
        expect(wrapper.state('emailCheck')).toBe(false);
    });

    it ('Faulty input:NaN', () => {

        const input = wrapper.find('input').at(0);
        input.simulate('change', {target: {value: NaN}});
        expect(wrapper.state('emailCheck')).toBe(false);
    });

    it ('Faulty input:Undefined', () => {
        const input = wrapper.find('input').at(0);
        input.simulate('change', {target: {value: undefined}});
        expect(wrapper.state('emailCheck')).toBe(false);
    });

    it ('Faulty input: null', () => {
        const input = wrapper.find('input').at(0);
        input.simulate('change', {target: {value: null}});
        expect(wrapper.state('emailCheck')).toBe(false);
    });


    /* Image URL checks */
    it ('Check valid image URL', () => {
      expect(wrapper.state('imageCheck')).toBe(false);
      inputImage.simulate('change', {target: {value: 'https://imgur.com/126312ASda.jpg'}});
      expect(wrapper.state('imageCheck')).toBe(true);
    })
    it ('Check bad image URL, no start', () => {
      inputImage.simulate('change', {target: {value: 'imgur.com/126312ASda.jpg'}});
      expect(wrapper.state('imageCheck')).toBe(false);
    })

    it ('Check bad image URL, no ending', () => {
      inputImage.simulate('change', {target: {value: 'https://imgur.com/126312ASda'}});
      expect(wrapper.state('imageCheck')).toBe(false);
    })

    it ('Check bad image URL, bad ending', () => {
      inputImage.simulate('change', {target: {value: 'https://imgur.com/126312ASda.pdf'}});
      expect(wrapper.state('imageCheck')).toBe(false);
    })
})

describe('Warning message', () => {
        const wrapper = mount(<UserProfile />);

    it ('Make sure warning mounts if faulty value', () => {
        wrapper.setState({warnings: ["false"]});
        const jsx = (<h3> Warnings </h3>);
        let content = wrapper.contains(jsx);
        expect(content).toBe(true);
    })
})
