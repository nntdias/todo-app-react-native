// import TodoModel from '../../model/todoModel';

const initialState = {
	itemsHashSet: {},
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'TODO_INSERT_UPDATE':
			return {
				...state,
				itemsHashSet: {
					...state.itemsHashSet,
					[action.todo.id]: action.todo,
				},
			};
		case 'TODO_REMOVE':
			const itemsHashSet = {
				...state.itemsHashSet,
			};
			delete itemsHashSet[action.id];
			return {
				...state,
				itemsHashSet,
			};
		default: {
			return state;
		}
	}
};

export default todoReducer;
