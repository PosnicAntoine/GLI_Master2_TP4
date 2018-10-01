import React, { Component } from 'react';

class MainTable extends React.Component 
{
	processCosts= () => this.props.costs
		.filter(cost => (cost.paidBy == this.props.filter || this.props.filter == ""))
		.map(cost => (
			<tr key={cost.title+cost.paidBy+cost.price} className = "costElementRow">
				<th className = "costElementTitle">{cost.title}</th>
				<td className = "costElementPaidBy"><p className="paidByText">Paid by</p> {cost.paidBy}</td>
				<th className = "costElementPrice">{cost.price} €</th>
			</tr>
		)
	)



	render()
	{
		return (
			<div>
				<table className = "costTable">
					<tbody>
						{this.processCosts()}
					</tbody>
				</table>
			</div>
		);
	}
}

export default MainTable;