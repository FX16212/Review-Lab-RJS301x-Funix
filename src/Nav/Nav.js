import React from 'react';
import './Nav.css';
import { Link, NavLink } from 'react-router-dom';
class Nav extends React.Component {
	state = {};
	render() {
		return (
			<nav>
				<div className='nav-center'>
					<div className='nav-header'>
						<button className='nav-toggle'>
							<i className='fas fa-bars'></i>
						</button>
					</div>
					<ul className='links'>
						<li>
							<NavLink to='/' exact={true} activeClassName='active'>
								home
							</NavLink>
						</li>
						<li>
							<NavLink to='/about' activeClassName='active'>
								about
							</NavLink>
						</li>
						<li>
							<NavLink to='/todo' activeClassName='active'>
								todo
							</NavLink>
						</li>
						<li>
							<NavLink to='contact.html' activeClassName='active'>
								contact
							</NavLink>
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
