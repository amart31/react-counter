import React from "react";

export class SimpleCounter extends React.Component {
	constructor(props) {
		super(props);
		this.state = { number: 0 };
	}

	componentDidMount() {
		this.intervalID = setInterval(() => {
			this.setState({ number: this.state.number + 1 });
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.intervalID);
	}

	render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<h2>It is {this.state.number}</h2>
			</div>
		);
	}
}
