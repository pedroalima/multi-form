import { Link } from 'react-router-dom'
import './index.scss'

function Footer() {
    return (
        <div className='row justify-content-around py-3 position-custom'>
            <Link className=''>back</Link>
            <Link className=''>Next</Link>
        </div>
    )
}

export default Footer