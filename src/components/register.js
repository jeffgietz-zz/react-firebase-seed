import React, { Component } from 'react'
import { auth } from '../helpers/auth'

export default class Register extends Component {
	handleSubmit = (e) => {
		e.preventDefault()
		auth(this.email.value, this.pw.value)
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

					<button type="submit">Register</button>
				</form>
			</div>
		)
	}
}