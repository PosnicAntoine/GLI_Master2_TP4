import React, { Component } from 'react';


class AdderCostElement extends React.Component 
{
	constructor(props){
		super(props);

		//needed for asynchronous effects of onClick
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) //e the event
	{
		console.log("been clicked!");
	}

	render()
	{
		return (
			<div className = "AdderCostElement">
				<input className="inputAdder" placeholder="What?"/>
				<input className="inputAdder" placeholder="Who?"/>
				<input className="inputAdderPrice" placeholder="€€€"/>
				<button className="buttonAdder" onClick={this.handleClick}>+</button>
			</div>
		)
	}
}

export default AdderCostElement;