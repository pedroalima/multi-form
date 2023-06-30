import Root from './components/root';
import UserInfo from './pages/user';

import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
	<Route path='/' element={<Root />}>
		<Route path='/' element={<UserInfo />} />
	</Route>
));

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
