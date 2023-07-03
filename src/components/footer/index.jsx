import { useNavigate } from 'react-router-dom'
import './index.scss'

function Footer() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    const goForward = () => {
        navigate(1)
    }

    return (
        <div className='row py-3 px-5 justify-content-between no-gutters position-custom' id='footer'>
            <div className="col-12 d-flex justify-content-between px-md-5">
                <button onClick={goBack} className='border-0 bg-white font-tertiary-color weight-custom'>Go back</button>
                <button onClick={goForward} className='border-0 rounded p-2 bg-button-color text-white weight-custom'>Next Step</button>
            </div>
        </div>
    )
}

export default Footer