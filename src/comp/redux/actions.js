//filter
const UPDATE_FILTER= "UPDATE_FILTER";
export const updateFilter = (newFilter) =>{
	return {type : UPDATE_FILTER, filter: newFilter};
}