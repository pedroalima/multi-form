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
        <div className='row py-3 px-5 justify-content-around position-custom'>
            <div className="col-12 d-flex justify-content-between col-md-10">
                <button onClick={goBack} className=''>Go back</button>
                <button onClick={goForward} className=''>Next Step</button>
            </div>
        </div>
    )
}

export default Footer