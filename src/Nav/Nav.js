import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
class Nav extends React.Component {
	state = {
		toggle: false,
	};
	toggleClass() {
		const currentState = this.state.toggle;
		this.setState({ toggle: !currentState });
	}
	render() {
		return (
			<nav>
				<div className='nav-center'>
					<div className='nav-header'>
						<button className='nav-toggle' onClick={() => this.toggleClass()}>
							<i className='fas fa-bars'></i>
						</button>
					</div>
					<ul className={this.state.toggle ? 'show-links' : 'links'}>
						<li>
							<NavLink to='/'>home</NavLink>
						</li>

						<li>
							<NavLink to='/todo'>todo</NavLink>
						</li>
						<li>
							<NavLink to='/user'>user</NavLink>
						</li>
						<li>
							<NavLink to='/about'>about</NavLink>
						</li>
					</ul>
					<ul className='social-icons'>
						<li>
							<a href='https://www.facebook.com'>
								<i className='fab fa-facebook'></i>
							</a>
						</li>
						<li>
							<a href='https://www.twitter.com'>
								<i className='fab fa-twitter'></i>
							</a>
						</li>
						<li>
							<a href='https://www.youtube.com'>
								<i className='fab fa-youtube'></i>
							</a>
						</li>
						<li>
							<a href='https://www.linkedin.com'>
								<i className='fab fa-linkedin'></i>
							</a>
						</li>
						<li>
							<a href='https://www.sketch.com'>
								<i className='fab fa-sketch'></i>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Nav;
