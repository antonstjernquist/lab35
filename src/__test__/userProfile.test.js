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

    // it ('Correct email', () => {
    //     wrapper.setState({emailCheck: false});
    //     const input = wrapper.find('input').at(0);
    //     input.simulate('change', {target: {value: 'majBoi@biz.com'}});
    //     expect('emailCheck').toBe(true);
    //
    // });
    // it ('Already in use email', () => {
    //     wrapper.setState({emailCheck: false});
    //     const input = wrapper.find('input').at(0);
    //     input.simulate('change', {target: {value: 'steve@lit.com'}});
    //     expect('emailCheck').toBe(false);
    // });
    //
    // it ('Faulty email', () => {
    //     wrapper.setState({emailCheck: false});
    //     const input = wrapper.find('input').at(0);
    //     input.simulate('change', {target: {value: 'dwkdlit.com'}});
    //     expect('emailCheck').toBe(false);
    // });
    //
    // it ('Faulty input:NaN', () => {
    //     wrapper.setState({emailCheck: false});
    //     const input = wrapper.find('input').at(0);
    //     input.simulate('change', {target: {value: NaN}});
    //     expect('emailCheck').toBe(false);
    // });
    //
    // it ('Faulty input:Undefined', () => {
    //     wrapper.setState({emailCheck: false});
    //     const input = wrapper.find('input').at(0);
    //     input.simulate('change', {target: {value: undefined}});
    //     expect('emailCheck').toBe(false);
    // });
    //
    // it ('Faulty input: null', () => {
    //     wrapper.setState({emailCheck: false});
    //     const input = wrapper.find('input').at(0);
    //     input.simulate('change', {target: {value: null}});
    //     expect('emailCheck').toBe(false);
    // });


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


//
// ● Warning message › Make sure warning mounts if faulty value
//
//   TypeError: Cannot read property 'length' of undefined
//
//     at Object.WarningMessage [as type] (src/components/userProfile.js:4:24)
//     at ReactShallowRenderer.render (node_modules/react-test-renderer/cjs/react-test-renderer-shallow.development.js:145:34)
//     at node_modules/enzyme-adapter-react-16/build/ReactSixteenAdapter.js:287:35
//     at withSetStateAllowed (node_modules/enzyme-adapter-utils/build/Utils.js:94:16)
//     at Object.render (node_modules/enzyme-adapter-react-16/build/ReactSixteenAdapter.js:286:68)
//     at new ShallowWrapper (node_modules/enzyme/build/ShallowWrapper.js:119:22)
//     at shallow (node_modules/enzyme/build/shallow.js:19:10)
//     at Object.it (src/__test__/userProfile.test.js:110:36)
//         at new Promise (<anonymous>)
//     at Promise.resolve.then.el (node_modules/p-map/index.js:46:16)
//         at <anonymous>
//     at process._tickCallback (internal/process/next_tick.js:160:7)
//
// PASS  src\__test__\increase.test.js
// PASS  src\__test__\editableList.test.js
// ● Console
//










// import { getCountryNames } from "../dependencyInject";
// describe('Fetch testing with dependency injections', () => {
//     it('fetch #1', () => {
//           /* Fake fetch function*/
//             const fetchFunc = url => {
//                 return Promise.resolve({
//                     json: () => Promise.resolve({
//                     results: [
//                                 {country: 'Sweden', population: 9.903},
//                                 {country: 'Norway', population: 5.233},
//                                 {country: 'Denmark', population: 5.731}
//                         ]
//                     })
//                 })
//             }
//             const fakeFetchMock = jest.fn();
//             fakeFetchMock.mockReturnValue(1);
//  const test = [
//              {country: 'Sweden', population: 9.903},
//              {country: 'Norway', population: 5.233},
//              {country: 'Denmark', population: 5.731}
//      ];
//             getCountryNames(fetchFunc)
//             .then((result) => {
//                 console.log(result);
//                 expect(result).toEqual(test);
//             });
//
//
//     });
// });
