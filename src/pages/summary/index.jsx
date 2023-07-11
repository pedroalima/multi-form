import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';

import './index.scss'

function Summary({ plan, setPlan, deadlinePayment, price, addOns, setAddOns }) {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    const goForward = () => {
        navigate("/summary/complete")
    }

    const changePlansAndAddOns = () => {
        navigate("/select-plan")
        setPlan("")
        setAddOns([])
    }

    return (
        <section className="bg-white d-flex flex-column justify-content-between" id="summary">
            <div className=''>
                <h3 className='font-tertiary-color'>Finishing up</h3>
                <p className='font-primary-color'>Double-check everything looks OK before confirming.</p>
            </div>
            <div className='bg-modality-color p-3 mt-4 rounded'>
                <div className='d-flex justify-content-between align-items-center border-bottom pb-2 mb-3'>
                    <div>
                        <h6 className='m-0 font-tertiary-color'>{plan} ({deadlinePayment})</h6>
                        <button onClick={changePlansAndAddOns} className='font-primary-color'>Change</button>
                    </div>
                    <span className='font-tertiary-color font-weight-bold'>{deadlinePayment == "monthly" ? `$${price}/mo` : `$${price}/yr`}</span>
                </div>
                {addOns && addOns.map((addOn) => (
                    <div key={addOn[0]}>
                        <div className='d-flex justify-content-between py-1'>
                            <p className='font-primary-color'>{addOn[1]}</p>
                            <span className='font-tertiary-color'>+${addOn[2]}/mo</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className='d-flex justify-content-between p-3'>
                <p className='font-primary-color'>Total (per month/year)</p>
                <h6 className='font-tertiary-color'>+12/mo</h6>
            </div>
            <div className="d-flex justify-content-between p-3 mt-4 px-md-0 position-custom">
                <button onClick={goBack} className='border-0 bg-white font-primary-color weight-custom'>Go Back</button>
                <button onClick={goForward} className='border-0 rounded p-2 px-md-4 bg-button-color text-white weight-custom'>Confirm</button>
            </div>
        </section >
    )
}

Summary.propTypes = {
    plan: PropTypes.string,
    setPlan: PropTypes.any,
    deadlinePayment: PropTypes.string,
    price: PropTypes.string,
    addOns: PropTypes.array,
    setAddOns: PropTypes.any
}

export default Summary