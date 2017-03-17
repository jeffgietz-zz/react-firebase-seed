import React, { Component } from 'react'
import * as firebase from 'firebase';

export default class Dashboard extends Component {
	constructor(){
		super();
		this.state = {
			speed: 6
		};
	}
	componentDidMount(){
    const rootRef = firebase.database().ref();
    const speedRef = rootRef.child('speed');
    console.log(speedRef.value);
    speedRef.on('value', snap => {
      // console.log(snap.val());
      this.setState({
        speed: snap.val()
      });
    });

  }
	render () {
		return (
			<div>
				<h1>Dashboard</h1>
				<p>Speed: {this.state.speed}</p>
			</div>
		)
	}
}