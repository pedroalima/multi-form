import Sidebar from '../sidebar';
import { Outlet } from 'react-router-dom';

import './index.scss'

function Root() {
	return (
		<>
			<div className='container-fluid vh-100 p-md-5' id='root'>
				<div className='container w-100 h-100 p-md-5'>
					<div className='row row-custom p-md-3 no-gutters'>
						<header className='col-12 col-md-3'>
							<Sidebar />
						</header>
						<main className="col-12 col-md-9">
							<Outlet />
						</main>
					</div>
				</div>
			</div>
		</>
	);
}
export default Root;