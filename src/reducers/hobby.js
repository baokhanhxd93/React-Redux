const initialState = {
    hobbyList: [],
    activeId:  null,
}

export const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY': {
            const newList = [...state.hobbyList]
            newList.push(action.payload)
            return {
                ...state,
                hobbyList: newList,
            }
        }
        
        case 'SET_HOBBY': {
            const newActiveId = action.payload.id
            return {
                ...state,
                activeId: newActiveId,
            }
        }
            
        default: return state
    }
};
