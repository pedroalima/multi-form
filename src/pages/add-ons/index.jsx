import './index.scss'

import { BsCheckSquareFill } from 'react-icons/bs';

function AddOns() {
    return (
        <section className="bg-white p-4 mb-5 mb-md-0 px-md-5 pb-md-0 py-md-4" id="add-ons">
            <div className='px-md-5'>
                <h3 className='font-tertiary-color'>Pick add-ons</h3>
                <p className='font-primary-color'>Add-ons help enhance your gaming experience.</p>
            </div>
            <form className='px-md-5 pt-md-3 justify-content-md-between'>
                <input name='plan' id='service' type="checkbox" className='d-none' />
                <label htmlFor="service" className="card flex-row align-items-center p-3 border-custom text-left">
                    <BsCheckSquareFill />
                    <div className="card-body p-0 ml-3 ml-md-4">
                        <h6 className="card-title m-0 font-tertiary-color">Online service</h6>
                        <p className="card-text font-primary-color font-size-custom">Access to multiplayer games</p>
                    </div>
                    <span className='font-color-custom'>+$1/mo</span>
                </label>
                <input name='plan' id='storage' type="checkbox" className='d-none' />
                <label htmlFor="storage" className="card flex-row align-items-center p-3 border-custom flex-md-row text-left">
                    <BsCheckSquareFill />
                    <div className="card-body p-0 ml-3 ml-md-4">
                        <h6 className="card-title m-0 font-tertiary-color">Larger storage</h6>
                        <p className="card-text font-primary-color font-size-custom">Extra 1TB of cloud save</p>
                    </div>
                    <span className='font-color-custom'>+$2/mo</span>
                </label>
                <input name='plan' id='profile' type="checkbox" className='d-none' />
                <label htmlFor="profile" className="card flex-row align-items-center p-3 border-custom flex-md-row text-left">
                    <BsCheckSquareFill />
                    <div className="card-body p-0 ml-3 ml-md-4">
                        <h6 className="card-title m-0 font-tertiary-color">Customizable Profile</h6>
                        <p className="card-text font-primary-color font-size-custom">Custom theme on your profile</p>
                    </div>
                    <span className='font-color-custom'>+$2/mo</span>
                </label>
            </form>
        </section>
    )
}

export default AddOns