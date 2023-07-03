import { Link } from 'react-router-dom'
import './index.scss'

function Footer() {
    return (
        <div className='row py-3 px-5 justify-content-around position-custom'>
            <div className="col-12 d-flex justify-content-between col-md-10">
                <Link className=''>Go back</Link>
                <Link className=''>Next Step</Link>
            </div>
        </div>
    )
}

export default Footer