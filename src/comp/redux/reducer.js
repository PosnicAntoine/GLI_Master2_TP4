export function filter(state = "", action){
	switch (action.type){
		case "UPDATE_FILTER":
			return action.filter;
		default:
		return state;
	}
}

export function users(state = "", action){
	switch (action.type){
		default:
		return state;
	}
}

export function costs(state = "", action){
	switch (action.type){
		case "ADDER_COST":
			return [...state, action.cost];
		case "GET_COSTS_SUCCESS":
			return action.costs;
		default:
		return state;
	}
}
