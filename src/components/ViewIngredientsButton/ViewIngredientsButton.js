import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ViewIngredientsButton = (props) => {
	return (
		<TouchableHighlight
			underlayColor="rgba(128, 128, 128, 0.1)"
			onPress={props.onPress}
		>
			<View style={styles.container}>
				<Text style={styles.text}>View Ingredients</Text>
			</View>
		</TouchableHighlight>
	);
};

ViewIngredientsButton.propTypes = {
	onPress: PropTypes.func,
	source: PropTypes.number,
	title: PropTypes.string,
};

export default ViewIngredientsButton;
