import { NavLink } from 'react-router-dom';
import './index.scss';

function Sidebar() {
    return (
        <aside id="sidebar">
            <nav className="nav d-flex flex-md-column justify-content-center p-3" id='nav'>
                <div className="nav-link d-flex justify-content-start align-items-start p-2">
                    <NavLink to="/" className='bg-custom rounded-circle py-2 px-3 font-weight-bold'>1</NavLink>
                    <div className='d-none d-md-block ml-md-4 d-md-flex flex-md-column mb-md-2'>
                        <span className='font-secondary-color text-uppercase'>Step 1</span>
                        <span className='text-white font-weight-bolder text-uppercase'>Your info</span>
                    </div>
                </div>
                <div className="nav-link d-flex justify-content-start align-items-start p-2">
                    <NavLink to="/select-plan" className='bg-custom rounded-circle py-2 px-3 font-weight-bold'>2</NavLink>
                    <div className='d-none d-md-block ml-md-4 d-md-flex flex-md-column mb-md-2'>
                        <span className='font-secondary-color text-uppercase'>Step 2</span>
                        <span className='text-white font-weight-bolder text-uppercase'>Select plan</span>
                    </div>
                </div>
                <div className="nav-link d-flex justify-content-start align-items-start p-2">
                    <NavLink to="/add-ons" className='bg-custom rounded-circle py-2 px-3 font-weight-bold'>3</NavLink>
                    <div className='d-none d-md-block ml-md-4 d-md-flex flex-md-column mb-md-2'>
                        <span className='font-secondary-color text-uppercase'>Step 3</span>
                        <span className='text-white font-weight-bolder text-uppercase'>Add-ons</span>
                    </div>
                </div>
                <div className="nav-link d-flex justify-content-start align-items-start p-2">
                    <NavLink to="/summary" className='bg-custom rounded-circle py-2 px-3 font-weight-bold'>4</NavLink>
                    <div className='d-none d-md-block ml-md-4 d-md-flex flex-md-column mb-md-2'>
                        <span className='font-secondary-color text-uppercase'>Step 4</span>
                        <span className='text-white font-weight-bolder text-uppercase'>Summary</span>
                    </div>
                </div>
            </nav>
        </aside>
    );
}

export default Sidebar;