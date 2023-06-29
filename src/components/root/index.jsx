import Sidebar from '../header';
import { Outlet } from 'react-router-dom';

import './index.scss'

function Root() {
	return (
		<>
			<div className='container-fluid vh-100 p-md-5' id='root'>
				<div className='container w-100 h-100 p-md-5'>
					<div className='row h-100 row-custom p-md-3 no-gutters'>
						<div className='col col-md-3'>
							<Sidebar />
						</div>
						<div className="col col-md-9">
							<Outlet />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Root;