import React from 'react';
import { TouchableHighlight, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const BackButton = (props) => {
	return (
		<TouchableHighlight
			underlayColor="rgba(128, 128, 128, 0.1)"
			onPress={props.onPress}
			style={styles.btnContainer}
		>
			<Image
				source={require('../../../assets/icons/back.png')}
				style={styles.btnIcon}
			/>
		</TouchableHighlight>
	);
};

BackButton.propTypes = {
	onPress: PropTypes.func,
	source: PropTypes.number,
	title: PropTypes.string,
};

export default BackButton;
