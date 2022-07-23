import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListTodo from './components/todos/ListTodos';
import './App.css';

function App() {
	return (
		<div className="App">
			<ListTodo />
			<ToastContainer />
		</div>
	);
}

export default App;
