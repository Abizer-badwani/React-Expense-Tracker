
let count = 1;

const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TRANSACTION':
            return {
                transaction: [...state.transaction, {
                    id: count++,
                    name: action.payload.name,
                    type: action.payload.type,
                    amount: Number(action.payload.amount)
                }]              
        }
        default:
            return state
    }
}

export {reducer}