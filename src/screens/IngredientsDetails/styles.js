import { StyleSheet, Dimensions } from 'react-native';
// screen sizing
const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		margin: 10,
		marginTop: 30,
		width: (SCREEN_WIDTH - 20) / 3 - 10,
		height: 160,
	},
	title: {
		margin: 10,
		marginBottom: 5,
		color: 'black',
		fontSize: 13,
		textAlign: 'center',
	},
	photo: {
		width: (SCREEN_WIDTH - 20) / 3 - 10,
		height: 100,
		borderRadius: 60,
	},
});

export default styles;
