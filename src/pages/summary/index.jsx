import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';

import './index.scss'

function Summary({ plan, setPlan, deadlinePayment, price, addOns, setAddOns, sum, setSum, sumAddOns, setSumAddOns }) {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
        setAddOns([])
        setSumAddOns(0)
    }

    const goForward = () => {
        navigate("/summary/complete")
    }

    const changePlansAndAddOns = () => {
        navigate("/select-plan")
        setPlan("")
        setAddOns([])
        setSumAddOns(0)
        setSum(0)
    }

    const total = sum + sumAddOns;

    return (
        <section className="bg-white d-flex flex-column justify-content-between" id="summary">
            <div className=''>
                <h3 className='font-tertiary-color'>Finishing up</h3>
                <p className='font-primary-color'>Double-check everything looks OK before confirming.</p>
            </div>
            <div className='bg-modality-color p-3 mt-4 rounded'>
                <div className='d-flex justify-content-between align-items-center border-bottom pb-2 mb-3'>
                    <div>
                        <h6 className='m-0 font-tertiary-color text-capitalize'>{plan} ({deadlinePayment})</h6>
                        <button onClick={changePlansAndAddOns} className='font-primary-color button-custom'>Change</button>
                    </div>
                    <span className='font-tertiary-color font-weight-bold'>{deadlinePayment == "monthly" ? `$${price}/mo` : `$${price}/yr`}</span>
                </div>
                {addOns && addOns.map((addOn) => (
                    <div key={addOn[0]}>
                        <div className='d-flex justify-content-between py-1'>
                            <p className='font-primary-color'>{addOn[1]}</p>
                            <span className='font-tertiary-color'>{deadlinePayment == "monthly" ? `+$${addOn[2]}/mo` : `+$${addOn[2]}/yr`}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className='d-flex justify-content-between p-3'>
                <p className='font-primary-color'>{deadlinePayment == "monthly" ? "Total (per month)" : "Total (per year)"}</p>
                <h6 className='font-tertiary-color font-weight-bold total-color'>{deadlinePayment == "monthly" ? `$${total}/mo` : `$${total}/yr`}</h6>
            </div>
            <div className="d-flex justify-content-between p-3 p-md-0 mt-4 mt-md-0 px-md-0 position-custom">
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
    setAddOns: PropTypes.any,
    sum: PropTypes.number,
    setSum: PropTypes.any,
    sumAddOns: PropTypes.number,
    setSumAddOns: PropTypes.any
}

export default Summary