import Sidebar from '../sidebar';
import { Outlet } from 'react-router-dom';

import './index.scss'

function Root() {
	return (
		<div className='container-fluid vh-md-100 pt-md-5 px-md5' id='root'>
			<div className='container w-100 h-md-100 p-md-5 d-md-flex justify-content-md-center'>
				<div className='row row-custom pb-5 p-md-3 mx-md-5'>
					<header className='col-12 p-0 col-md-4'>
						<Sidebar />
					</header>
					<main className="col-12 p-0 mb-5 mb-md-0 col-md-8">
						<Outlet />
					</main>
				</div>
			</div>
		</div>
	);
}
export default Root;