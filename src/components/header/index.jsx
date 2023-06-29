import { NavLink } from 'react-router-dom';
import './index.scss';

function Sidebar() {
    return (
        <aside id="sidebar">
            <nav className="nav flex-column" id='nav'>
                <NavLink to="/" className="nav-link active">
                    <button className='rounded-circle bg-white'>1</button>
                    <span>Step 1</span>
                    <span>Your info</span>
                </NavLink>
                <NavLink to="/" className="nav-link">
                    <button className='rounded-circle bg-white'>2</button>
                    <span>Step 1</span>
                    <span>Your info</span>
                </NavLink>
                <NavLink to="/" className="nav-link ">
                    <button className='rounded-circle bg-white'>3</button>
                    <span>Step 1</span>
                    <span>Your info</span>
                </NavLink>
                <NavLink to="/" className="nav-link ">
                    <button className='rounded-circle bg-white'>4</button>
                    <span>Step 1</span>
                    <span>Your info</span>
                </NavLink>
            </nav>
        </aside>
    );
}

export default Sidebar;