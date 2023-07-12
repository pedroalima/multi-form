import { useState } from 'react';

import Root from './components/root';
import YourInfo from './pages/your-info';
import SelectPlan from './pages/select-plan';
import SelectPlanDeadline from './components/select-plan-deadline';
import AddOnsMonthly from './pages/add-ons-monthly';
import AddOnsYear from './pages/add-ons-year';
import Summary from './pages/summary';
import Complete from './pages/complete';

import data from './components/utilities'

import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';

function App() {
	const [plan, setPlan] = useState("");
	const [deadlinePayment, setDeadlinePayment] = useState("");
	const [price, setPrice] = useState("");
	const [addOns, setAddOns] = useState([]);

	const [sum, setSum] = useState(0);
	const [sumAddOns, setSumAddOns] = useState(0);

	return (
		<>
			<RouterProvider router={
				createBrowserRouter(createRoutesFromElements(
					<Route path='/' element={<Root />}>
						<Route path='/' element={<YourInfo />} />
						<Route path='/your-info' element={<YourInfo />} />

						<Route path='/select-plan' element={<SelectPlan />} >
							<Route path='/select-plan' element={<SelectPlanDeadline
								plan={plan}
								setPlan={setPlan}
								deadlinePayment={deadlinePayment}
								setDeadlinePayment={setDeadlinePayment}
								setPrice={setPrice}
								setSum={setSum}
								arcadeValue={data.arcadeValorM}
								advancedValue={data.advanceValorM}
								proValue={data.proValorM}
							/>} />
							<Route path='/select-plan/monthly' element={<SelectPlanDeadline
								plan={plan}
								setPlan={setPlan}
								deadlinePayment={deadlinePayment}
								setDeadlinePayment={setDeadlinePayment}
								setPrice={setPrice}
								setSum={setSum}
								arcadeValue={data.arcadeValorM}
								advancedValue={data.advanceValorM}
								proValue={data.proValorM}
							/>} />
							<Route path='/select-plan/year' element={<SelectPlanDeadline
								plan={plan}
								setPlan={setPlan}
								deadlinePayment={deadlinePayment}
								setDeadlinePayment={setDeadlinePayment}
								setPrice={setPrice}
								setSum={setSum}
								arcadeValue={data.arcadeValorY}
								advancedValue={data.advanceValorY}
								proValue={data.proValorY}
								promotion={data.promotion}
							/>} />
						</Route>

						<Route path='/add-ons/monthly' element={<AddOnsMonthly
							addOns={addOns}
							setAddOns={setAddOns}
							setSumAddOns={setSumAddOns}
						/>} />
						<Route path='/add-ons/year' element={<AddOnsYear
							addOns={addOns}
							setAddOns={setAddOns}
							setSumAddOns={setSumAddOns}
						/>} />

						<Route path='/summary' element={<Summary
							plan={plan}
							setPlan={setPlan}
							deadlinePayment={deadlinePayment}
							price={price}
							addOns={addOns}
							setAddOns={setAddOns}
							sum={sum}
							setSum={setSum}
							sumAddOns={sumAddOns}
							setSumAddOns={setSumAddOns}
						/>} />
						<Route path='/summary/complete' element={<Complete />} />
					</Route>
				))
			} />
		</>
	);
}

export default App;
