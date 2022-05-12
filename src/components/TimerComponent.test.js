import React from 'react';
import { shallow } from 'enzyme';

import TimerComponent from './TimerComponent';
const options = [{
    countryCode: "NL",
countryName: "Netherlands",
gmtOffset: 7200,
timestamp: 1652356221,
zoneName: "Europe/Amsterdam"
},{countryCode: "AD",
countryName: "Andorra",
gmtOffset: 7200,
timestamp: 1652356221,
zoneName: "Europe/Andorra"}]

describe('TimeComponent', ()=>{
    let wrapper = null;
    beforeAll(()=>{
        wrapper = shallow(<TimerComponent />);
    });

    it('should shallow render', ()=>{
        expect(wrapper).toBeTruthy();
    });

    it('should render select', ()=>{
        expect(wrapper.find('select')).toBeTruthy();
    });

    it('should render options in select dropdown', ()=>{
        wrapper.instance().setState({timezones: options})
        expect(wrapper.find('select option').length).toBe(3);
    });
})