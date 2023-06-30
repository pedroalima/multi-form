import { NavLink } from 'react-router-dom';
import './index.scss';

function Sidebar() {
    return (
        <aside id="sidebar">
            <nav className="nav d-flex flex-md-column justify-content-center p-3" id='nav'>
                <NavLink to="/your-info" className="nav-link active d-flex justify-content-start align-items-center p-2">
                    <button className='bg-custom-active rounded-circle py-2 px-3 font-weight-bold'>1</button>
                    <div className='d-none d-md-block ml-md-4'>
                        <span>Step 1</span>
                        <span>Your info</span>
                    </div>
                </NavLink>
                <NavLink to="/select-plan" className="nav-link active d-flex justify-content-start align-items-center p-2">
                    <button className='bg-custom rounded-circle py-2 px-3 font-weight-bold'>2</button>
                    <div className='d-none d-md-block ml-md-4'>
                        <span>Step 2</span>
                        <span>Select plan</span>
                    </div>
                </NavLink>
                <NavLink to="/add-ons" className="nav-link active d-flex justify-content-start align-items-center p-2">
                    <button className='bg-custom rounded-circle py-2 px-3 font-weight-bold'>3</button>
                    <div className='d-none d-md-block ml-md-4'>
                        <span>Step 3</span>
                        <span>Add-ons</span>
                    </div>
                </NavLink>
                <NavLink to="/summary" className="nav-link active d-flex justify-content-start align-items-center p-2">
                    <button className='bg-custom rounded-circle py-2 px-3 font-weight-bold'>4</button>
                    <div className='d-none d-md-block ml-md-4'>
                        <span>Step 4</span>
                        <span>Summary</span>
                    </div>
                </NavLink>



            </nav>
        </aside>
    );
}

export default Sidebar;