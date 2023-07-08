import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './index.scss'

import iconArcade from '../../assets/images/icon-arcade.svg'
import iconAdvanced from '../../assets/images/icon-advanced.svg'
import iconPro from '../../assets/images/icon-pro.svg'

function SelectPlan() {
    const [plan, setPlan] = useState('')

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (plan) {
            navigate("/add-ons")
        }
    }

    console.log(plan)

    return (
        <section className="bg-white d-flex flex-column justify-content-between" id="select-plan">
            <div>
                <h3 className='font-tertiary-color'>Select your plan</h3>
                <p className='font-primary-color'>You have the option of monthly or yearly billing.</p>
            </div>
            <form onSubmit={handleSubmit} className='d-md-flex flex-md-column justify-content-md-between'>
                <div className='d-md-flex justify-content-md-between'>
                    <input
                        name='plan'
                        id='arcade'
                        type="radio"
                        className='d-none'
                        value="arcade"
                        onChange={(e) => setPlan(e.target.value)}
                    />
                    <label htmlFor="arcade" className="card flex-row p-3 border-custom flex-md-column text-left width-custom">
                        <img src={iconArcade} className='mb-md-5' width='42' alt="Icon arcade" />
                        <div className="card-body p-0 ml-3 ml-md-0">
                            <h6 className="card-title m-0 font-tertiary-color">Arcade</h6>
                            <p className="card-text font-primary-color">$9/mo</p>
                        </div>
                    </label>
                    <input
                        name='plan'
                        id='advanced'
                        type="radio"
                        className='d-none'
                        value="advanced"
                        onChange={(e) => setPlan(e.target.value)}
                    />
                    <label htmlFor="advanced" className="card flex-row p-3 border-custom flex-md-column text-left width-custom">
                        <img src={iconAdvanced} className='mb-md-5' width='42' alt="Icon advanced" />
                        <div className="card-body p-0 ml-3 ml-md-0">
                            <h6 className="card-title m-0 font-tertiary-color">Advanced</h6>
                            <p className="card-text font-primary-color">$12/mo</p>
                        </div>
                    </label>
                    <input
                        name='plan'
                        id='pro'
                        type="radio"
                        className='d-none'
                        value="pro"
                        onChange={(e) => setPlan(e.target.value)}
                    />
                    <label htmlFor="pro" className="card flex-row p-3 border-custom flex-md-column text-left width-custom">
                        <img src={iconPro} className='mb-md-5' width='42' alt="Icon pro" />
                        <div className="card-body p-0 ml-3 ml-md-0">
                            <h6 className="card-title m-0 font-tertiary-color">Pro</h6>
                            <p className="card-text font-primary-color">$14/mo</p>
                        </div>
                    </label>
                </div>
                <div className='bg-modality-color d-flex justify-content-around align-items-center border-custom p-3 my-md-2'>
                    <h6 className='m-0 font-tertiary-color'>Monthly</h6>
                    <div className='bg-button-color icon'>
                        <input type="checkbox" id="modality" className='d-none' />
                        <label htmlFor='modality' className='icon-ball bg-white'></label>
                    </div>
                    <h6 className='m-0 font-primary-color'>Yearly</h6>
                </div>
                <div className="d-flex justify-content-between p-3 px-md-0 position-custom">
                    <button onClick={goBack} className='border-0 bg-white font-primary-color weight-custom'>Go Back</button>
                    <button type='submit' className='border-0 rounded p-2 px-md-4 bg-button-color text-white weight-custom'>Next Step</button>
                </div>
            </form>
        </section >
    )
}

export default SelectPlan