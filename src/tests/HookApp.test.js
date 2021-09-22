import React from 'react';
// import { shallow } from 'enzyme';
// import toJson from 'enzyme-to-json';
import { shallow } from "enzyme";
import { HookApp } from '../HookApp';


// it('renders correctly', () => {
//   const wrapper = shallow(<HookApp />);

//   expect(toJson(wrapper)).toMatchSnapshot();
// });

describe('Pruebas en <HookApp/>', () => {
  test('Debe mostrarse correctamente', () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
