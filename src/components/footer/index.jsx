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
        <div className='row py-4 px-5 justify-content-between no-gutters position-custom'>
            <div className="col-12 d-flex justify-content-between px-md-5">
                <button onClick={goBack} className='border-0'>Go back</button>
                <button onClick={goForward} className='border-0'>Next Step</button>
            </div>
        </div>
    )
}

export default Footer