import React from 'react';
import { shallow } from 'enzyme';

import TechnicalTestApp from './TechnicalTestApp';

describe('TechnicalTestApp', ()=>{
    let wrapper = null;
    beforeAll(()=>{
        wrapper = shallow(<TechnicalTestApp />);
    });

    it('should shallow render', ()=>{
        expect(wrapper).toBeTruthy();
    });

})