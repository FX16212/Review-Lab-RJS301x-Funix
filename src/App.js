import React from 'react';
import './App.css';
import ListTodo from './Todos/ListTodos';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import ListUser from './User/ListUser';
import About from './About/About';
function App() {
	return (
		<Router>
			<div className='App'>
				<Nav />
				<ToastContainer />
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/about' exact element={<About />} />
					<Route path='/todo' element={<ListTodo />} />
					<Route path='/user' element={<ListUser />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
