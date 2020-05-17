import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import home from '../components/home';


class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			token: "",
		};
		this.update = this.update.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	handleSubmit = async(event) => {
		event.preventDefault();
			try {
			  const response = await fetch('http://127.0.0.1:8000/api/login', {
				method: 'POST',
				body: JSON.stringify({
					email: `${this.state.email}`,
	           		password: `${this.state.password}`
				}),
				headers: {
				    'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			})
			
			const result = await response.json();
			localStorage.setItem('token', result.token)
			const token = localStorage.getItem('token');
			const response2 = await fetch('http://127.0.0.1:8000/api/user', {
				method: 'GET',
				headers: {
				Authorization: 'Bearer ' + token,
				'Content-Type': 'application/json',
				Accept: 'application/json',
				},
				});
			const users = await response2.json();
			console.log("error",users);
			if(users.status === "Token is Invalid"){
				alert("your email or password is invalid, please try again !!")
				window.localStorage.removeItem("token");
				localStorage.clear();
				this.setState({ email: '', password: '' })
				
			}else{
				window.location = '/home';
			}
			}catch(error){

			}
		}
		  


	render() {
		return (
			<div className="login">
				<form onSubmit={this.handleSubmit}>
					<h2>Login</h2>
					<div className="emailentry">
						<input	
							type="text"
							placeholder="email..."
							value={this.state.email}
							onChange={this.update}
							name="email"
						/>
					</div>

					<div className="password">
						<input
							type="password"
							placeholder="Password..."
							value={this.state.password}
							onChange={this.update}
							name="password"
						/>
					</div>

					<input type="submit" value="Login" />
				</form>
				<Link to="/register">Register</Link>
			</div>
		);
	}
}

export default Login
