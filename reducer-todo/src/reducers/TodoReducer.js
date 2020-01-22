export const initialState = [
    {
        name: "first dummy todo",
        completed: false,
        id: 1
    },
    {
        name: "second dummy todo",
        completed: true,
        id: 2
    },
    {
        name: "third dummy todo",
        completed: true,
        id: 3
    },
    {
        name: "fourth todo",
        completed: true,
        id: 4
    }
];

export const TodoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            if (action.payload !== ""){
                return[
                    ...state,
                    {
                        name: action.payload,
                        completed: false,
                        id: Date.now()
                    }
                ]
            }
            
        case 'TOGGLE_COMPLETED':
            const index = state.findIndex(item => item.id === action.payload.id)
            return [ 
                ...state.slice(0,index),
                {
                    ...state[index],
                    completed: !state[index].completed
                },
                ...state.slice(index+1),
            ]

        case "REMOVE_COMPLETED":
            return state.filter(item => item.completed === false);
            
        default: 
            return state;
    }
}