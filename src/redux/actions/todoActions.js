import TodoModel from '../../model/todoModel';

export const addTodoText = text => ({
	type: 'TODO_INSERT_UPDATE',
	todo: new TodoModel({
		id: '' + Date.now(),
		text,
	}),
});

export const updateTodoText = todo => ({
	type: 'TODO_INSERT_UPDATE',
	todo,
});

export const removeTodo = id => ({
	type: 'TODO_REMOVE',
	id,
});
