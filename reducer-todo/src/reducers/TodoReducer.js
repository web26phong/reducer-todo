export const initialState = {
    name: "",
    completed: false
};

export const TodoReducer = (state,action) => {
    switch (action.type) {
        default: 
            return state;
        case "TOGGLE_COMPLETED": 
            return {
                ...state,
                completed: !completed
        };
    }
}