import React, { Component } from 'react';


class TopFilter extends React.Component 
{
	constructor(props){
		super(props);

		//needed for asynchronous effects of onClick
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) //e the event
	{
		console.log("been changed!");
		this.props.filter(e.target.value);
	}

	processOptions= () => this.props.users.map(user => (<option key={user} value={user}>{user}</option>))

	render()
	{
		return (
			<div className = "topFilter">
				Filter:
				<select onChange={(e) => this.handleChange(e)}>
					<option value = "">All</option>
					{this.processOptions()}
				</select>
			</div>
		)
	}
}

export default TopFilter;