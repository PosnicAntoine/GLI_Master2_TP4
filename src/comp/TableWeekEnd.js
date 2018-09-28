import React, { Component } from 'react';
import TopFilter from "./TopFilter";
import MainTable from "./MainTable";
import Footer from "./Footer";

const users = ['Amine', 'Julie', 'Kévin'];
const costs = [{ paidBy: 'Amine', title: 'Beer', price: 15 },
		{ paidBy: 'Julie', title: 'Lulz', price: 154 },
		{ paidBy: 'Kévin', title: 'Keks', price: 150 }]
class TableWeekEnd extends React.Component
{

	render()
	{
		return (
			<div className = "tableWeekEnd">
				<TopFilter users={users}/>
				<MainTable costs={costs}/>
				<Footer costs={costs}/>
			</div>
		)
	}
}

export default TableWeekEnd;