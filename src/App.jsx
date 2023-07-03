import Root from './components/root';
import YourInfo from './pages/your-info';
import SelectPlan from './pages/select-plan';

import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
	<Route path='/' element={<Root />}>
		<Route path='/' element={<YourInfo />} />
		<Route path='/your-info' element={<YourInfo />} />
		<Route path='/select-plan' element={<SelectPlan />} />
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
