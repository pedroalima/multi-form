import Sidebar from '../sidebar';
import Footer from '../footer';
import { Outlet } from 'react-router-dom';

import './index.scss'

function Root() {
	return (
		<div className='container-fluid vh-md-100 p-md-5' id='root'>
			<div className='container w-100 h-md-100 p-md-5'>
				<div className='row row-custom pb-5 p-md-3 mx-md-5'>
					<header className='col-12 p-0 col-md-3'>
						<Sidebar />
					</header>
					<main className="col-12 p-0 col-md-9">
						<Outlet />
						<Footer />
					</main>
					{/* <footer className="col-12 col-md-9">
						<h1>test</h1>
					</footer> */}
				</div>
			</div>
		</div>
	);
}
export default Root;