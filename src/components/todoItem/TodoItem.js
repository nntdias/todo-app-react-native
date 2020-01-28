import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const TodoItem = ({todo, index, onPress, onRemovePress}) => {
	const getTextStyle = () => {
		if (todo.checked) {
			return {
				...styles.title,
				...styles.lineThrough,
			};
		}
		return {
			...styles.title,
		};
	};

	return (
		<View style={styles.todoItem}>
			<TouchableOpacity onPress={() => onPress(todo)}>
				<Text style={getTextStyle()}>{`${index + 1}. ${todo.text}`}</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => onRemovePress(todo.id)}>
				<Icon name="trash" style={styles.icon} />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	todoItem: {
		paddingVertical: 2,
		marginBottom: 4,
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-between',
	},
	title: {
		fontSize: 19,
	},
	icon: {
		fontSize: 22,
		paddingHorizontal: 3,
		alignSelf: 'center',
	},
	lineThrough: {
		textDecorationLine: 'line-through',
		textDecorationStyle: 'solid',
	},
});

export default TodoItem;
