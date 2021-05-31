import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');

const SCREEN_WIDTH = width < height ? width : height;

// 2 photos per width
export const RecipeCard = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 20,
		marginTop: 20,
		width: (SCREEN_WIDTH - 60) / 2,
		height: 225,
		borderColor: '#cccccc',
		borderWidth: 0.5,
		borderRadius: 15,
	},
	photo: {
		width: (SCREEN_WIDTH - 60) / 2,
		height: 150,
		borderRadius: 15,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
	},
	title: {
		flex: 1,
		fontSize: 17,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#444444',
		marginTop: 3,
		marginRight: 5,
		marginLeft: 5,
	},
	category: {
		marginTop: 5,
		marginBottom: 5,
	},
});
