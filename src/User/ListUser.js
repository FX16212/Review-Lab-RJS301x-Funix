import React from 'react';
import axios from 'axios';
import './ListUser.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-social/bootstrap-social.css';
class ListUser extends React.Component {
	state = {
		listUser: [],
	};
	async componentDidMount() {
		const res = await axios.get('https://reqres.in/api/users?page=1');
		this.setState({
			listUser: res && res.data && res.data.data ? res.data.data : [],
		});
	}
	render() {
		let { listUser } = this.state;
		return (
			<div className='container'>
				<h1 className='fw-light text-white'>Meet the Team</h1>
				<div className='row'>
					{listUser &&
						listUser.length > 0 &&
						listUser.map((user) => {
							return (
								<div key={user.id}>
									<div
										style={{ cursor: 'pointer' }}
										className='col-12 m-1 profile-box '
									>
										<img
											style={{ width: '250px', height: '250px' }}
											src={user.avatar}
											alt={user.first_name}
										/>
										<h5 className='m-0'>
											<strong>
												{user.first_name} {user.last_name}
											</strong>
										</h5>
										<p className='mb-2'> {user.email} </p>
										<button className='btn btn-info btn-sm'>EDIT</button>
										<button className='btn btn-primary btn-sm'>VIEW</button>
										<button className='btn btn-danger btn-sm'>DELETE</button>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		);
	}
}

export default ListUser;
