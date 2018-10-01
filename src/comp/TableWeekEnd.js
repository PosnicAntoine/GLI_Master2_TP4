import React, { Component } from 'react';
import TopFilter from "./TopFilter";
import MainTable from "./MainTable";
import Footer from "./Footer";
import { connect } from 'react-redux'


class TableWeekEnd extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			users: ['Amine', 'Julie', 'Kévin'],
			costs: [{ paidBy: 'Amine', title: 'Beer', price: 15 },
					{ paidBy: 'Julie', title: 'Lulz', price: 154 },
					{ paidBy: 'Kévin', title: 'Keks', price: 150 }]
		}
	}

	adder = (what, who, how) => {
		if(this.state.users.indexOf(who) === -1){
			this.setState({users : [...this.state.users, who]});
			console.log("added user: "+who);
			console.log(this.state.users);
		}
		this.setState({costs: [...this.state.costs, { paidBy: who, title: what, price: how }]});
		console.log("added: "+ what +" "+who +" "+how);
		console.log(this.state.costs);
	}

	render()
	{
		return (
			<div className = "tableWeekEnd">
				<TopFilter users={this.state.users}/>
				<MainTable costs={this.state.costs} filter={this.props.filter}/>
				<Footer costs={this.state.costs} adder={this.adder}/>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return { filter: state.filter }
}
const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TableWeekEnd);