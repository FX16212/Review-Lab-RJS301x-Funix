import React from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-social/bootstrap-social.css';
class ListUser extends React.Component {
	state = {
		listUser: [],
	};
	async componentDidMount() {
		const res = await axios.get('https://reqres.in/api/users?page=2');
		this.setState({
			listUser: res && res.data && res.data.data ? res.data.data : [],
		});
	}
	render() {
		let { listUser } = this.state;
		return (
			<div className='container '>
				{listUser &&
					listUser.length > 0 &&
					listUser.map((user) => {
						return (
							<div key={user.id}>
								<img src={user.avatar} alt='random user' width='100%' />
								<strong>
									{user.first_name} {user.last_name}
								</strong>
							</div>
						);
					})}
			</div>
		);
	}
}

export default ListUser;
