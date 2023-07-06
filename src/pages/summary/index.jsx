import { Link, useNavigate } from 'react-router-dom'
import './index.scss'

function Summary() {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    const goForward = () => {
        navigate("/summary/complete")
    }

    return (
        <section className="bg-white d-flex flex-column justify-content-between" id="summary">
            <div className=''>
                <h3 className='font-tertiary-color'>Finishing up</h3>
                <p className='font-primary-color'>Double-check everything looks OK before confirming.</p>
            </div>
            <div className='bg-modality-color p-3 mt-4 rounded'>
                <div className='d-flex justify-content-between align-items-center border-bottom pb-2'>
                    <div>
                        <h6 className='m-0 font-tertiary-color'>Arcade (Monthly)</h6>
                        <Link to="/select-plan" className='font-primary-color'>Change</Link>
                    </div>
                    <span className='font-tertiary-color font-weight-bold'>$9/mo</span>
                </div>
                <div className='pt-3'>
                    <div className='d-flex justify-content-between'>
                        <p className='mb-2 font-primary-color'>Online service</p>
                        <span className='mb-2 font-tertiary-color'>+$1/mo</span>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className='font-primary-color'>Larger storage</p>
                        <span className='font-tertiary-color'>+$2/mo</span>
                    </div>
                </div>
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

export default Summary