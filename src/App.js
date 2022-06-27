import React from 'react';
import './App.css';
import ListTodo from './Todos/ListTodos';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<div className='App'>
			<ListTodo />
			<ToastContainer />
		</div>
	);
}

export default App;
