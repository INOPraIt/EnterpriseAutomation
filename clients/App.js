import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Notifications from './pages/Notifications/Notifications';
import ServicePayment from './pages/ServicePayment/ServicePayment';

export default function App() {
	return (
		<Routes>
			<Route path='/' element={
				<Layout>
					<Home />
				</Layout>
			} />
			<Route path='/news' element={
				<Layout>
					<News />
				</Layout>
			} />
			<Route path='/notifications' element={
				<Layout>
					<Notifications />
				</Layout>
			} />
			<Route path='/payment' element={
				<Layout>
					<ServicePayment />
				</Layout>
			} />

		</Routes>
	)
}
