import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';

import './index.scss'

import { BsCheckSquareFill } from 'react-icons/bs';

function AddOnsYear({ addOns, setAddOns, setSumAddOns }) {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
        setAddOns([])
        setSumAddOns(0)
    }

    const handleChange = ({ target }) => {
        const { id, name, value } = target;
        setAddOns(prev => ([...prev, [id, name, value]]))
        setSumAddOns((prev) => prev + Number(value))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (addOns) {
            navigate("/summary")
        }
    }

    return (
        <section className="bg-white d-flex flex-column justify-content-between" id="add-ons">
            <div>
                <h3 className='font-tertiary-color'>Pick add-ons</h3>
                <p className='font-primary-color'>Add-ons help enhance your gaming experience.</p>
            </div>
            <form onSubmit={handleSubmit} className='pt-md-2 justify-content-md-between'>
                <input
                    id='service'
                    name='Online service'
                    type='checkbox'
                    className='d-none'
                    value='10'
                    onChange={handleChange}
                />
                <label htmlFor="service" className="card flex-row align-items-center p-3 border-custom text-left">
                    <BsCheckSquareFill />
                    <div className="card-body p-0 ml-3 ml-md-4">
                        <h6 className="card-title m-0 font-tertiary-color">Online service</h6>
                        <p className="card-text font-primary-color font-size-custom">Access to multiplayer games</p>
                    </div>
                    <span className='font-color-custom'>+$10/yr</span>
                </label>
                <input
                    id='storage'
                    name='Larger storage'
                    type='checkbox'
                    className='d-none'
                    value='20'
                    onChange={handleChange}
                />
                <label htmlFor="storage" className="card flex-row align-items-center p-3 border-custom flex-md-row text-left">
                    <BsCheckSquareFill />
                    <div className="card-body p-0 ml-3 ml-md-4">
                        <h6 className="card-title m-0 font-tertiary-color">Larger storage</h6>
                        <p className="card-text font-primary-color font-size-custom">Extra 1TB of cloud save</p>
                    </div>
                    <span className='font-color-custom'>+$20/yr</span>
                </label>
                <input
                    id='profile'
                    name='Customizable profile'
                    type='checkbox'
                    className='d-none'
                    value='20'
                    onChange={handleChange}
                />
                <label htmlFor="profile" className="card flex-row align-items-center p-3 border-custom flex-md-row text-left">
                    <BsCheckSquareFill />
                    <div className="card-body p-0 ml-3 ml-md-4">
                        <h6 className="card-title m-0 font-tertiary-color">Customizable profile</h6>
                        <p className="card-text font-primary-color font-size-custom">Custom theme on your profile</p>
                    </div>
                    <span className='font-color-custom'>+$20/yr</span>
                </label>
                <div className="d-flex justify-content-between p-3 px-md-0 position-custom">
                    <button onClick={goBack} className='border-0 bg-white font-primary-color weight-custom'>Go Back</button>
                    <button type='submit' className='border-0 rounded p-2 px-md-4 bg-button-color text-white weight-custom'>Next Step</button>
                </div>
            </form>
        </section>
    )
}

AddOnsYear.propTypes = {
    addOns: PropTypes.array,
    setAddOns: PropTypes.any,
    setSumAddOns: PropTypes.any
}

export default AddOnsYear