
import {Route, Switch,Link} from 'react-router-dom';
import Home from "./../Home"
import 'bootstrap/dist/css/bootstrap.css';
const Sidebar = () => {
    return(
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className= 'sidebar-list list-unstyled'>
                    <li><Link to='/'>Home/Weather</Link></li>
                
                    <li><Link to='/nasa'>Nasa</Link></li>
                    <li><Link to='/nasa'>Tickets</Link></li>
                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch>
                   <Route exact path='/'><Home /></Route>
                  {/* <Route exact path='/'><Nasa /></Route>
                   <Route exact path='/'><Tikets /></Route> */}
                </Switch>
            </div>
        </div>
    );
};
export default Sidebar;