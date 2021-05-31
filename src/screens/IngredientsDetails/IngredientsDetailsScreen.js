import React from 'react';
import { FlatList, Text, View, Image, TouchableHighlight } from 'react-native';
import styles from './styles';
import { getIngredientName, getAllIngredients } from '../../data/MockDataAPI';

const IngredientsDetailsScreen = (props) => {
	const { navigation } = props;

	const onPressIngredient = (item) => {
		let name = getIngredientName(item.ingredientId);
		let ingredient = item.ingredientId;
		navigation.navigate('Ingredient', { ingredient, name });
	};

	const renderIngredient = ({ item }) => (
		<TouchableHighlight
			underlayColor="rgba(73,182,77,0.9)"
			onPress={() => onPressIngredient(item[0])}
		>
			<View style={styles.container}>
				<Image style={styles.photo} source={{ uri: item[0].photo_url }} />
				<Text style={styles.title}>{item[0].name}</Text>
				<Text style={{ color: 'grey' }}>{item[1]}</Text>
			</View>
		</TouchableHighlight>
	);

	const item = navigation.getParam('ingredients');
	const ingredientsArray = getAllIngredients(item);

	return (
		<View>
			<FlatList
				vertical
				showsVerticalScrollIndicator={false}
				numColumns={3}
				data={ingredientsArray}
				renderItem={renderIngredient}
				keyExtractor={(item) => `${item.recipeId}`}
			/>
		</View>
	);
};

IngredientsDetailsScreen.navigationOptions = ({ navigation }) => {
	return {
		title: navigation.getParam('title'),
		headerTitleStyle: {
			fontSize: 16,
		},
	};
};

export default IngredientsDetailsScreen;
