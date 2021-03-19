import React from 'react';

import { mount } from 'enzyme';
import Button from "./index"

describe('<Button />', () => {
    
    const button = mount(<Button />)

    test('renders three <Button /> components', () => {
      expect(button.length).toEqual(1)
    });
});