import React from 'react';
import './ListTodos.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-social/bootstrap-social.css';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
	state = {
		listTodos: [
			{ id: 'todo1', title: 'User 1' },
			{ id: 'todo2', title: 'User 2' },
			{ id: 'todo3', title: 'User 3' },
		],
		editTodo: {},
	};
	addNewTodo = (todo) => {
		this.setState({ listTodos: [...this.state.listTodos, todo] });
		toast.success('Add Todo Success!');
	};
	handleDeleteTodo = (todo) => {
		let currentTodos = this.state.listTodos;
		currentTodos = currentTodos.filter((item) => item.id !== todo.id);
		this.setState({
			listTodos: currentTodos,
		});
		toast.success('Delete succeed!');
	};
	handleEditTodo = (todo) => {
		let { editTodo, listTodos } = this.state;
		let isEmptyObj = Object.keys(editTodo).length === 0;
		//save
		if (isEmptyObj === false && editTodo.id === todo.id) {
			let listTodosCopy = [...listTodos];
			let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);
			listTodosCopy[objIndex].title = editTodo.title;
			this.setState({
				listTodos: listTodosCopy,
				editTodo: {},
			});
			toast.success('Update todo success!');
			return;
		}

		//edit
		this.setState({
			editTodo: todo,
		});
	};

	handleOnchangeEditTodo = (event) => {
		let editTodoCopy = { ...this.state.editTodo };
		editTodoCopy.title = event.target.value;
		this.setState({
			editTodo: editTodoCopy,
		});
	};
	render() {
		let { listTodos, editTodo } = this.state;
		let isEmptyObj = Object.keys(editTodo).length === 0;
		return (
			<div className="container">
				<div className="app">
					<h1>USER LIST</h1>
					<AddTodo addNewTodo={this.addNewTodo} />
					<div className="list-todo-context">
						{listTodos &&
							listTodos.length > 0 &&
							listTodos.map((item, index) => {
								return (
									<div className="todo-child" key={item.id}>
										{isEmptyObj === true ? (
											<span>
												{index + 1} - {item.title}
											</span>
										) : (
											<>
												{editTodo.id === item.id ? (
													<span>
														{index + 1} -
														<input
															value={editTodo.title}
															onChange={(event) =>
																this.handleOnchangeEditTodo(event)
															}
														/>
													</span>
												) : (
													<span>
														{index + 1} - {item.title}
													</span>
												)}
											</>
										)}
										<button
											className="btn btn-danger delete"
											type="button"
											onClick={() => this.handleDeleteTodo(item)}>
											Delete
										</button>
										<button
											className="btn btn-warning edit"
											type="button"
											onClick={() => this.handleEditTodo(item)}>
											{isEmptyObj === false && editTodo.id === item.id
												? 'Save'
												: 'Edit'}
										</button>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		);
	}
}

export default ListTodo;
