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
            state.map(item => {
                if (item.id === action.payload.id){
                    return [...state, item.completed = !item.completed];
                }else {
                    return [...state];
                }
            })
        default: 
            return state;
    }
}