import { Outlet } from 'react-router-dom';

import './index.scss'

function SelectPlan() {

    return (
        <section className="bg-white d-flex flex-column justify-content-between" id="select-plan">
            <div>
                <h3 className='font-tertiary-color'>Select your plan</h3>
                <p className='font-primary-color'>You have the option of monthly or yearly billing.</p>
            </div>
            <Outlet />
        </section >
    )
}

export default SelectPlan