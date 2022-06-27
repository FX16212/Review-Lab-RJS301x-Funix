import React from 'react';
import './Nav.css';

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
							<a href='/home'>home</a>
						</li>
						<li>
							<a href='/about'>about</a>
						</li>
						<li>
							<a href='/todo'>todo</a>
						</li>
						<li>
							<a href='contact.html'>contact</a>
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
