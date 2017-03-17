import React, { Component } from 'react'
import { login } from '../helpers/auth'

export default class Login extends Component {
	handleSubmit = (e) => {
		e.preventDefault()
		login(this.email.value, this.pw.value)
	}
	render () {
		return (
			<div>
				<h1>Register</h1>
				<form onSubmit={this.handleSubmit}>
					<label>Email</label>
					<input 
						ref={(email) => this.email = email}
						placeholder="Email"				
					/>
					<br />
					<label>Password</label>
					<input 
						type="Password" 
						placeholder="Password"
						ref={(pw)=> this.pw=pw}
					/>
					<br />

					<button type="submit">Login</button>
				</form>
			</div>
		)
	}
}