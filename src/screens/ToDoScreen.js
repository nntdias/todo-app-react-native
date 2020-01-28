import React from 'react';
// import PropTypes from 'prop-types';
import {SafeAreaView, Text, StyleSheet, View, FlatList} from 'react-native';
import TodoItem from '../components/todoItem/TodoItem';
import {connect} from 'react-redux';
import {
	addTodoText as addTodoTextAction,
	removeTodo as removeTodoAction,
	updateTodo as updateTodoAction,
} from '../redux/actions/todoActions';
import TodoItemAdd from '../components/todoItem/TodoItemAdd';

const ToDoScreen = ({itemsHashSet, addTodoText, removeTodo, updateTodo}) => {
	const todoList = Object.values(itemsHashSet).sort((a, b) => a.id - b.id);

	return (
		<SafeAreaView style={styles.toDoScreen}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>TODO APP</Text>
			</View>
			<View style={styles.body}>
				<View style={styles.infoContainer}>
					<Text style={styles.infoContainerText}>{`Pending: ${
						todoList.filter(todo => todo.checked !== true).length
					}`}</Text>
					<Text style={styles.infoContainerText}>{`Done: ${
						todoList.filter(todo => todo.checked).length
					}`}</Text>
					<Text style={styles.infoContainerText}>{`Total: ${todoList.length}`}</Text>
				</View>
				<View style={styles.bodyContent}>
					<FlatList
						data={todoList}
						keyExtractor={todo => todo.id}
						renderItem={({item: todo, index}) => (
							<TodoItem
								index={index}
								todo={todo}
								onPress={todoPressed => {
									const todoCloned = todoPressed.clone();
									todoCloned.markAsDone();
									updateTodo(todoCloned);
								}}
								onRemovePress={removeTodo}
							/>
						)}
					/>
				</View>
				<TodoItemAdd onTextSubmit={addTodoText} />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	toDoScreen: {
		backgroundColor: 'whitesmoke',
		flex: 1,
	},
	header: {
		height: 52,
		backgroundColor: '#3F51B5',
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerTitle: {
		fontSize: 19,
		color: 'white',
	},
	body: {
		paddingTop: 10,
		paddingBottom: 20,
		paddingHorizontal: 12,
		flex: 1,
	},
	bodyContent: {
		flex: 1,
		paddingTop: 10,
		paddingBottom: 16,
	},
	infoContainer: {
		borderBottomColor: '#BDBDBD',
		borderBottomWidth: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingBottom: 10,
	},
	infoContainerText: {},
});

ToDoScreen.propTypes = {};

export default connect(
	state => ({
		itemsHashSet: state.todo.itemsHashSet,
	}),
	{
		addTodoText: addTodoTextAction,
		removeTodo: removeTodoAction,
		updateTodo: updateTodoAction,
	},
)(ToDoScreen);
