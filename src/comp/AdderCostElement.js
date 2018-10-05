import React, { Component } from 'react';
import { connect } from 'react-redux';
import { adderCost } from './redux/actions'


class AdderCostElement extends React.Component 
{

	constructor(props){
		super(props);

		this.state = {
			adderWhat: "",
			adderWho: "",
			adderHow: -1
		}

		//needed for asynchronous effects of onClick
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleClick(e) //e the event
	{
		console.log("been clicked!");
		if(this.state.adderWhat !== "" &&
			this.state.adderWho !== "" &&
			this.state.adderHow !== -1){
//			this.props.adder(this.state.adderWhat,
//				this.state.adderWho,
//				this.state.adderHow);
			this.props.costs(this.state.adderWhat,
				this.state.adderWho,
				this.state.adderHow);
		}
	}

	handleChange(e, i) //e the event
	{
		console.log("been changed!"+i);
		if(i===0)
			this.setState({adderWhat : e.target.value})
		else if (i===1)
			this.setState({adderWho : e.target.value})
		else if (i===2)
			this.setState({adderHow : parseInt(e.target.value)})
	}

	render()
	{
		return (
			<div className = "AdderCostElement">
				<input className="inputAdder" onChange={e => this.handleChange(e, 0)} placeholder="What?"/>
				<input className="inputAdder" onChange={e => this.handleChange(e, 1)} placeholder="Who?"/>
				<input type="number" className="inputAdderPrice" onChange={e =>this.handleChange(e, 2)} placeholder="€€€"/>
				<button className="buttonAdder" onClick={this.handleClick}>+</button>
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	return {}
}
const mapDispatchToProps = (dispatch) => {
	return {
		costs: (what, who, how) => {
			dispatch(adderCost(what, who, how))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AdderCostElement);