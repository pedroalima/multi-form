import { useNavigate } from 'react-router-dom'
import './index.scss'

import { BsCheckSquareFill } from 'react-icons/bs';

function AddOns() {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    const goForward = () => {
        navigate(1)
    }

    return (
        <section className="bg-white d-flex flex-column justify-content-between" id="add-ons">
            <div>
                <h3 className='font-tertiary-color'>Pick add-ons</h3>
                <p className='font-primary-color'>Add-ons help enhance your gaming experience.</p>
            </div>
            <form className='pt-md-2 justify-content-md-between'>
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
            <div className="d-flex justify-content-between p-3 px-md-0 position-custom">
                <button onClick={goBack} className='border-0 bg-white font-primary-color weight-custom'>Go Back</button>
                <button onClick={goForward} className='border-0 rounded p-2 px-md-4 bg-button-color text-white weight-custom'>Next Step</button>
            </div>
        </section>
    )
}

export default AddOns