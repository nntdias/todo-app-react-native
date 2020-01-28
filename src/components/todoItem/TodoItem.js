import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TodoItem = ({todo, index, onPress}) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.todoItem}>
				<Text
					style={{
						...styles.title,
						...styles.lineThrough,
					}}>{`${index + 1}. ${todo.id}`}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	todoItem: {
		paddingVertical: 2,
		marginBottom: 4,
	},
	title: {
		fontSize: 19,
	},
	lineThrough: {
		textDecorationLine: 'line-through',
		textDecorationStyle: 'solid',
	},
});

export default TodoItem;
