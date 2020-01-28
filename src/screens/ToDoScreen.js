import React from 'react';
// import PropTypes from 'prop-types';
import {SafeAreaView, Text, StyleSheet, View, FlatList} from 'react-native';
import ButtonPrimary from '../components/common/Button';
import TodoItem from '../components/todoItem/TodoItem';
import {connect} from 'react-redux';
import {addTodoText as addTodoTextAction, removeTodo as removeTodoAction} from '../redux/actions/todoActions';

const ToDoScreen = ({itemsHashSet, addTodoText, removeTodo}) => {
	return (
		<SafeAreaView style={styles.toDoScreen}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>TODO APP TEST</Text>
			</View>
			<View style={styles.body}>
				<View style={styles.bodyContent}>
					<FlatList
						data={Object.values(itemsHashSet)}
						keyExtractor={todo => todo.id}
						renderItem={({item: todo, index}) => (
							<TodoItem index={index} todo={todo} onPress={() => removeTodo(todo.id)} />
						)}
					/>
				</View>
				<ButtonPrimary title="ADD NEW" onPress={() => addTodoText('test')} />
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
		height: 50,
		backgroundColor: '#48825d',
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerTitle: {
		fontSize: 22,
		color: 'white',
	},
	body: {
		paddingTop: 10,
		paddingBottom: 20,
		paddingHorizontal: 10,
		flex: 1,
	},
	bodyContent: {
		flex: 1,
		paddingBottom: 16,
	},
});

ToDoScreen.propTypes = {};

export default connect(
	state => ({
		itemsHashSet: state.todo.itemsHashSet,
	}),
	{
		addTodoText: addTodoTextAction,
		removeTodo: removeTodoAction,
	},
)(ToDoScreen);
