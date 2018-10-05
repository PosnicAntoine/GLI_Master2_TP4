import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateFilter } from './redux/actions'


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

const mapStateToProps = (state) => {
	return {
		users : state.users
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		filter: (value) => {
			dispatch(updateFilter(value))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TopFilter);