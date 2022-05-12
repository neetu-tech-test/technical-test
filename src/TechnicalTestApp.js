import 'bootstrap/dist/css/bootstrap-grid.css';
import  'bootstrap-icons/font/bootstrap-icons.css';
import AddOnceFunc from './components/AddOnceFunc';
import CardComponent from './components/CardComponent';

import TimerComponent from './components/TimerComponent';

const TechnicalTestApp = () =>{
    return <div className="container">
        <p className='col'>TechnicalTestApp</p>
        <div className='row'>
            <div className='col'>
                <TimerComponent/>
            </div>
            <div className='col'>
                <AddOnceFunc />
            </div>
        </div>
        <CardComponent />
    </div>
}
export default TechnicalTestApp;