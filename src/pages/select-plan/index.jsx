import './index.scss'

import iconArcade from '../../assets/images/icon-arcade.svg'
import iconAdvanced from '../../assets/images/icon-advanced.svg'
import iconPro from '../../assets/images/icon-pro.svg'

function SelectPlan() {
    return (
        <section className="bg-white p-4 p-md-5" id="your-info">
            <div className='px-md-5'>
                <h3>Select your plan</h3>
                <p>You have the option of monthly or yearly billing.</p>
            </div>
            <form className='px-md-5'>
                <input name='plan' id='arcade' type="radio" className='d-none' />
                <label htmlFor="arcade" className="card flex-row p-3 border-custom">
                    <img src={iconArcade} width='42' alt="Icon arcade" />
                    <div className="card-body p-0 ml-3">
                        <h6 className="card-title m-0">Arcade</h6>
                        <p className="card-text">$9/mo</p>
                    </div>
                </label>
                <input name='plan' id='advanced' type="radio" className='d-none' />
                <label htmlFor="advanced" className="card flex-row p-3 border-custom">
                    <img src={iconAdvanced} width='42' alt="Icon advanced" />
                    <div className="card-body p-0 ml-3">
                        <h6 className="card-title m-0">Advanced</h6>
                        <p className="card-text">$12/mo</p>
                    </div>
                </label>
                <input name='plan' id='pro' type="radio" className='d-none' />
                <label htmlFor="pro" className="card flex-row p-3 border-custom">
                    <img src={iconPro} width='42' alt="Icon pro" />
                    <div className="card-body p-0 ml-3">
                        <h6 className="card-title m-0">Pro</h6>
                        <p className="card-text">$14/mo</p>
                    </div>
                </label>
            </form>
            <div className='bg-modality-color d-flex justify-content-around align-items-center border-custom p-3'>
                <h6 className='m-0 font-tertiary-color'>Monthly</h6>
                <div className='bg-button-color icon'>
                    <input type="checkbox" id="modality" className='d-none' />
                    <label htmlFor='modality' className='icon-ball bg-white'></label>
                </div>
                <h6 className='m-0 font-primary-color'>Yearly</h6>
            </div>
        </section>
    )
}

export default SelectPlan