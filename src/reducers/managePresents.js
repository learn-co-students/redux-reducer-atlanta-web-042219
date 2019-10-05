export function managePresents(state, action){
    switch (action.type) {
        case "NUMBER_OF_PRESENTS":
            return {...state, numberOfPresents: 0}
        case "INCREASE":
            return {...state, numberOfPresents: state.numberOfPresents + 1}
        default:
            return state 
    }
}
