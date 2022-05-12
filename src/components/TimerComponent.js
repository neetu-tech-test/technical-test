import React from 'react';
import { getTimezoneList, getTimezoneDetails } from '../services/TimeService';

class TimerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timezones: [],
            timeDetails: {},
            periodicTimerId : null,
        }
    }
    componentDidMount() {
        getTimezoneList().then(({ data }) => this.setState({ timezones: data.zones }));
    }
    loadTimeZoneDetails = () => {
        getTimezoneDetails(this.state.zone)
            .then(({ data }) => this.setState({ timeDetails: data }))
    }
    clearPeriodicTimerInterval = ()=>{
        if(this.state.periodicTimerId){
            clearInterval(this.state.periodicTimerId);
        }
    }
    handleCountryChange = (event) => {
        const zone  = event.target.value;
        this.clearPeriodicTimerInterval();
        if(!zone){
            this.setState({periodicTimerId:null});
            return false;
        }
        this.setState({
            periodicTimerId: setInterval(this.loadTimeZoneDetails, 5000),
            zone
        }, this.loadTimeZoneDetails)
    }
    componentWillUnmount = ()=>{
        this.clearPeriodicTimerInterval();
    }
    render() {
        const { timezones = [], timeDetails = {} } = this.state;

        return <>
            <p>Europian Countries TimeZomes-</p>
            <select onChange={this.handleCountryChange}>
                <option value="">Select TimeZone</option>
                {timezones.map((zone, zoneId) => <option key={zoneId} value={zone.zoneName}>
                    {zone.countryName}
                </option>)}
            </select>
            <p className='col'>{timeDetails.countryName} {timeDetails.formatted} {timeDetails.abbreviation}</p>
        </>
    }
}

export default TimerComponent;