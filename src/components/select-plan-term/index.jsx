import { useNavigate, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import iconArcade from '../../assets/images/icon-arcade.svg';
import iconAdvanced from '../../assets/images/icon-advanced.svg';
import iconPro from '../../assets/images/icon-pro.svg';

function SelectPlanTerm({ arcadeValue, advancedValue, proValue, promotion, plan, setPlan, setDeadlinePayment, setPrice }) {
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

    const handleChange = (e) => {
        setPlan(e.target.id)
        setDeadlinePayment(e.target.value)
        setPrice(e.target.attributes[4].value)
    }

    return (
        <form onSubmit={handleSubmit} className='d-md-flex flex-md-column justify-content-md-between'>
            <div className='d-md-flex justify-content-md-between'>
                <input
                    name='plan'
                    id='arcade'
                    type="radio"
                    className='d-none'
                    value={arcadeValue == "$9/mo" ? "monthly" : "year"}
                    data-price={arcadeValue == "$9/mo" ? 9 : 90}
                    onChange={handleChange}
                />
                <label htmlFor="arcade" className="card flex-row p-3 border-custom flex-md-column text-left width-custom">
                    <img src={iconArcade} className='mb-md-4' width='42' alt="Icon arcade" />
                    <div className="card-body p-0 ml-3 ml-md-0">
                        <h6 className="card-title m-0 font-tertiary-color">Arcade</h6>
                        <p className="card-text m-0 font-primary-color font-medium">{arcadeValue}</p>
                        <p className='card-text font-tertiary-color font-small'>{promotion}</p>
                    </div>
                </label>
                <input
                    name='plan'
                    id='advanced'
                    type="radio"
                    className='d-none'
                    value={arcadeValue == "$9/mo" ? "monthly" : "year"}
                    data-price={arcadeValue == "$9/mo" ? 12 : 120}
                    onChange={handleChange}
                />
                <label htmlFor="advanced" className="card flex-row p-3 border-custom flex-md-column text-left width-custom">
                    <img src={iconAdvanced} className='mb-md-4' width='42' alt="Icon advanced" />
                    <div className="card-body p-0 ml-3 ml-md-0">
                        <h6 className="card-title m-0 font-tertiary-color">Advanced</h6>
                        <p className="card-text m-0 font-primary-color font-medium">{advancedValue}</p>
                        <p className='card-text font-tertiary-color font-small'>{promotion}</p>
                    </div>
                </label>
                <input
                    name='plan'
                    id='pro'
                    type="radio"
                    className='d-none'
                    value={arcadeValue == "$9/mo" ? "monthly" : "year"}
                    data-price={arcadeValue == "$9/mo" ? 15 : 150}
                    onChange={handleChange}
                />
                <label htmlFor="pro" className="card flex-row p-3 border-custom flex-md-column text-left width-custom">
                    <img src={iconPro} className='mb-md-4' width='42' alt="Icon pro" />
                    <div className="card-body p-0 ml-3 ml-md-0">
                        <h6 className="card-title m-0 font-tertiary-color">Pro</h6>
                        <p className="card-text m-0 font-primary-color font-medium">{proValue}</p>
                        <p className='card-text font-tertiary-color font-small'>{promotion}</p>
                    </div>
                </label>
            </div>
            <div className='bg-modality-color d-flex justify-content-around align-items-center border-custom p-3 my-md-2'>
                <h6 className={arcadeValue == "$9/mo" ? 'm-0 font-tertiary-color' : 'm-0 font-primary-color'}>Monthly</h6>
                <Link to={arcadeValue == "$9/mo" ? "/select-plan/year" : "/select-plan/monthly"} className='bg-button-color icon'>
                    <input type="checkbox" id="modality" className='d-none' />
                    <label htmlFor='modality' className={arcadeValue == "$9/mo" ? "icon-ball-left bg-white" : "icon-ball-right bg-white"}></label>
                </Link>
                <h6 className={arcadeValue == "$9/mo" ? 'm-0 font-primary-color' : 'm-0 font-tertiary-color'}>Yearly</h6>
            </div>
            <div className="d-flex justify-content-between p-3 px-md-0 position-custom">
                <button onClick={goBack} className='border-0 bg-white font-primary-color weight-custom'>Go Back</button>
                <button type='submit' className='border-0 rounded p-2 px-md-4 bg-button-color text-white weight-custom'>Next Step</button>
            </div>
        </form>
    )
}

SelectPlanTerm.propTypes = {
    arcadeValue: PropTypes.string,
    advancedValue: PropTypes.string,
    proValue: PropTypes.string,
    promotion: PropTypes.string,
    plan: PropTypes.string,
    setPlan: PropTypes.any,
    setDeadlinePayment: PropTypes.any,
    setPrice: PropTypes.any,
}

export default SelectPlanTerm