export const initialState = [
    {
        name: "first todo",
        completed: false,
        id: 1
    },
    {
        name: "second todo",
        completed: true,
        id: 2
    }
];

export const TodoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return[
                ...state,
                {
                    name: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ]
        case 'TOGGLE_COMPLETED':
            return {
                ...state, 
                completed: !state.completed
            };
        default: 
            return state;
    }
}