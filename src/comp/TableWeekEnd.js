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
//		this.state = {
//			filter: "",
//			users: ['Amine', 'Julie', 'Kévin'],
//			costs: [{ paidBy: 'Amine', title: 'Beer', price: 15 },
//					{ paidBy: 'Julie', title: 'Lulz', price: 154 },
//					{ paidBy: 'Kévin', title: 'Keks', price: 150 }]
//		}
	}

//	filter = (user) =>{
//		this.setState({filter: user});
//	}

//	adder = (what, who, how) => {
//		if(this.state.users.indexOf(who) === -1){
//			this.setState({users : [...this.state.users, who]});
//			console.log("added user: "+who);
//			console.log(this.state.users);
//		}
//		this.setState({costs: [...this.state.costs, { paidBy: who, title: what, price: how }]});
//		console.log("added: "+ what +" "+who +" "+how);
//		console.log(this.state.costs);
//	}

	render()
	{
		return (
			<div className = "tableWeekEnd">
				<TopFilter /*users={this.state.users}*/ /*filter={this.filter}*//>
				<MainTable /*costs={this.state.costs} filter={this.props.filter}*//>
				<Footer /*costs={this.state.costs}*/ /*adder={this.props.adder}*//>
			</div>
		)
	}
}

export default TableWeekEnd;