import React, { Component } from 'react';
import AdderCostElement from "./AdderCostElement";
import TotalCost from "./TotalCost";


class Footer extends React.Component 
{
	
	render()
	{
		return (
			<div className = "Footer">
				<AdderCostElement users={this.props.users}/>
				<TotalCost costs={this.props.costs}/>
			</div>
		)
	}
}

export default Footer;