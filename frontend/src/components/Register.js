import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			password1: '',
		};
		this.update = this.update.bind(this);
		this.displayLogin = this.displayLogin.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	displayLogin  = async(event) => {
		event.preventDefault();
			try {
			  const response = await fetch('http://127.0.0.1:8000/api/register', {
				method: 'POST',
				body: JSON.stringify({
					name: `${this.state.name}`,
					email: `${this.state.email}`,
					password: `${this.state.password}`,
					password_confirmation: `${this.state.password1}`,
					
				}),
				headers: {
				    'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			})
			console.log("state",this.state)
			console.log("response1 :" ,response);
			
			const result = await response.json();
			console.log("result",result);
			
			localStorage.setItem('token', result.token);
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
			
			if(users.status === "Token is Invalid"){
				alert("missing fields")
				window.localStorage.removeItem("token");
				localStorage.clear();
				this.setState({ name: '' , email: '', password: '', password1 : '' })
				
			}
			else{
				alert("you successfully registered !!");
				window.location= '/';
			}
			}
			catch(error){

			}
		}
		  

	render() {
		return (
			<div className="register">
				<form onSubmit={this.displayLogin}>
					<h2>Register</h2>

					<div className="name12">
						<input
							type="text"
							placeholder="Enter your name"
							name="name"
							value={this.state.name}
							onChange={this.update}
						/>
					</div>

					<div className="email">
						<input
							type="text"
							placeholder="Enter your email"
							name="email"
							value={this.state.email}
							onChange={this.update}
						/>
					</div>

					<div className="pasword">
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={this.state.password}
							onChange={this.update}
						/>
					</div>

					<div className="password">
						<input 
							type="password" 
							placeholder="Confirm Password"
							name="password1"
							value={this.state.password1}
							onChange={this.update} />
					</div>

					<input type="submit" value="Register" />
				</form>

				<Link to="/">Login Here</Link>
			</div>
		);
	}
}

export default Register;
