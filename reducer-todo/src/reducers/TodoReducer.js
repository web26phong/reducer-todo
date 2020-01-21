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

export const TodoReducer = (state,action) => {
    switch (action.type) {
        default: 
            return state;
    }
}