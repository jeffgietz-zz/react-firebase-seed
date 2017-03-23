import React, { Component } from 'react'
import { login } from '../helpers/auth'

export default class Login extends Component {
	handleSubmit = (e) => {
		e.preventDefault()
		login(this.email.value, this.pw.value)
	}
	render () {
		return (
			<div className="container">
				<div className="row justify-content-md-center">
					<div className="col-4">
						<h1>Login</h1>
						<form onSubmit={this.handleSubmit}>
							<div className="form-group">
								<label for="email">Email</label>
								<input 
									ref={(email) => this.email = email}
									placeholder="Email"
									className="form-control"
								/>
							</div>
							<div className="form-group">
								<label for="Password">Password</label>
								<input 
									type="Password" 
									placeholder="Password"
									className="form-control"
									ref={(pw)=> this.pw=pw}
								/>
							</div>
							<div className="form-group">
								<button className="btn btn-primary" type="submit">Login</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}