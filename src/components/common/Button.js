import React from 'react';
// import PropTypes from 'prop-types'
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const ButtonPrimary = ({onPress, title, style}) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={{
				...styles.primary,
				...style,
			}}>
			<Text style={styles.textPrimary}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	primary: {
		backgroundColor: '#48825d',
		height: 32,
		borderRadius: 3,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
	},
	textPrimary: {
		fontSize: 16,
		color: 'white',
	},
});

ButtonPrimary.propTypes = {};

export default ButtonPrimary;
