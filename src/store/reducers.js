// src/store/reducer.js
const initialState = {
    tasks: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return { ...state, tasks: [...state.tasks, action.payload] };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter((_, index) => index !== action.payload),
            };
        case 'UPDATE_TASK':
            return {
                ...state,
                tasks: state.tasks.map((task, index) =>
                    index === action.payload.index ? action.payload.newTask : task
                ),
            };
        default:
            return state;
    }
};

export default reducer;
