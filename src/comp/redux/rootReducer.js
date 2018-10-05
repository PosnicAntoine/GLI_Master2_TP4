import { filter, costs, users } from "./reducer.js"

export default function rootReducer(state = {}, action){
	state = {
      filter: "",
	  users: ['Amine', 'Julie', 'Kévin'],
      costs: [{ paidBy: 'Amine', title: 'Beer', price: 15 },
          { paidBy: 'Julie', title: 'Lulz', price: 154 },
          { paidBy: 'Kévin', title: 'Keks', price: 150 }]
    }

	return {
		filter: filter(state.filter, action),
		users: users(state.users, action),
		costs: costs(state.costs, action)
	}
}