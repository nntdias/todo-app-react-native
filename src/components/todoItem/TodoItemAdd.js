import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const TodoItemAdd = ({onTextSubmit}) => {
	const [value, setValue] = React.useState('');

	const onTextSubmitHandler = () => {
		onTextSubmit(value);
		setValue('');
	};

	return (
		<View style={styles.textBox}>
			<TextInput
				placeholder="New item"
				onSubmitEditing={onTextSubmitHandler}
				style={styles.textBoxInput}
				onChangeText={text => setValue(text)}
				value={value}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	textBox: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 3,
		paddingTop: 14,
		borderTopColor: '#BDBDBD',
		borderTopWidth: 1,
	},
	textBoxBtn: {
		height: 40,
	},
	textBoxInput: {
		height: 40,
		paddingHorizontal: 10,
		flex: 1,
		borderColor: 'gray',
		backgroundColor: 'white',
		borderWidth: 1,
	},
});

export default TodoItemAdd;
