import React, { Component } from 'react';


class TopFilter extends React.Component 
{
	processOptions= () => this.props.users.map(user => (<option key={user} value={user}>{user}</option>))

	render()
	{
		return (
			<div className = "topFilter">
				Filter:
				<select>
					<option value = "">All</option>
					{this.processOptions()}
				</select>
			</div>
		)
	}
}

export default TopFilter;