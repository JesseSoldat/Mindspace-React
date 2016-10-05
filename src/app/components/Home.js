import React from 'react';

export class Home extends React.Component {
	constructor(props) {
		super();
		this.state = {
			age: props.initialAge

		};
	}

	onMakeOlder() {
		this.age += 3;
		this.setState({
			age: this.state.age + 3
		});
	}

	render(){
		return(
			<div>
				<p>Home</p>
				<p>Your name is {this.props.name}, your age is {this.state.age}</p>
				<p>User Object => Name: {this.props.user.name}</p>
				<hr/>
				<button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>
				<hr />
				<button onClick={this.props.greet} className="btn btn-primary">Greet</button>
				<hr />
				<div>
					<h4>Hobbies</h4>
					<ul>
						{this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}

					</ul>
					{this.props.children}
				</div>
			</div>
			);
	}
}

Home.propTypes = {
	name: React.PropTypes.string,
	initialAge: React.PropTypes.number,
	user: React.PropTypes.object,
	children: React.PropTypes.element.isRequired,
	greet: React.PropTypes.func
}