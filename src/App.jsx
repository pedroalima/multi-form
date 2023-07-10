import Root from './components/root';
import YourInfo from './pages/your-info';
import SelectPlan from './pages/select-plan';
import AddOns from './pages/add-ons';
import Summary from './pages/summary';
import Complete from './pages/complete';
import data from './components/utilities'

import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';

console.log(data.arcadeValorM)


const router = createBrowserRouter(createRoutesFromElements(
	<Route path='/' element={<Root />}>
		<Route path='/' element={<YourInfo />} />
		<Route path='/your-info' element={<YourInfo />} />
		<Route path='/select-plan' element={<SelectPlan arcadeValue={data.arcadeValorM} advancedValue={data.advanceValorM} proValue={data.proValorM} />}>
			<Route path='/select-plan/monthly' element={<SelectPlan arcadeValue={data.arcadeValorM} advancedValue={data.advanceValorM} proValue={data.proValorM} />} />
			<Route path='/select-plan/year' element={<SelectPlan arcadeValue={data.arcadeValorY} advancedValue={data.advanceValorY} proValue={data.proValorY} promotion={data.promotion} />} />
		</Route>
		<Route path='/select-plan' element={<SelectPlan arcadeValue={data.arcadeValorM} advancedValue={data.advanceValorM} proValue={data.proValorM} />} />
		<Route path='/add-ons' element={<AddOns />} />
		<Route path='/summary' element={<Summary />} />
		<Route path='/summary/complete' element={<Complete />} />
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
