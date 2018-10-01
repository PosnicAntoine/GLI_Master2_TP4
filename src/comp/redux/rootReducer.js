import { filter } from "./reducer.js"

export default function rootReducer(state = {}, action){
	return {
		filter: filter(state.filter, action)
	}
}