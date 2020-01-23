import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import PropTypes from 'prop-types';

const Home = props => {
	return (
		<View>
			<Text style={styles.title}>Test</Text>
			<Text style={styles.title2}>Test 2</Text>
		</View>
	);
};

Home.propTypes = {};

const styles = StyleSheet.create({
	title: {
		fontSize: 50,
	},
	title2: {
		fontSize: 20,
		color: 'blue',
	},
});

export default Home;
