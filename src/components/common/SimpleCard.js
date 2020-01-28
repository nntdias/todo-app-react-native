import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import {View, StyleSheet, Text, Button, TextInput} from 'react-native';

const SimpleCard = ({title}) => {
	const [value, setValue] = useState('');
	return (
		<View style={styles.SimpleCard}>
			<Text>{title}</Text>
			<View>
				<TextInput style={styles.input} value={value} onChangeText={text => setValue(text)} />
				<View>
					<Button title="Click" />
				</View>
			</View>
		</View>
	);
};

SimpleCard.propTypes = {};

const styles = StyleSheet.create({
	SimpleCard: {
		backgroundColor: 'white',
		padding: 20,
		marginVertical: 5,
		marginHorizontal: 16,
	},
	input: {
		height: 50,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 10,
	},
});

export default SimpleCard;
