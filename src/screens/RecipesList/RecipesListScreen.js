import React from 'react';
import { FlatList, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import { getRecipes, getCategoryName } from '../../data/MockDataAPI';

const RecipesListScreen = (props) => {
	const { navigation } = props;

	const onPressRecipe = (item) => {
		navigation.navigate('Recipe', { item });
	};

	const renderRecipes = ({ item }) => (
		<TouchableHighlight
			underlayColor="rgba(128, 128, 128, 0.1)"
			onPress={() => onPressRecipe(item)}
		>
			<View style={styles.container}>
				<Image style={styles.photo} source={{ uri: item.photo_url }} />
				<Text style={styles.title}>{item.title}</Text>
				<Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
			</View>
		</TouchableHighlight>
	);

	const item = navigation.getParam('category');
	const recipesArray = getRecipes(item.id);
	return (
		<View>
			<FlatList
				vertical
				showsVerticalScrollIndicator={false}
				numColumns={2}
				data={recipesArray}
				renderItem={renderRecipes}
				keyExtractor={(item) => `${item.recipeId}`}
			/>
		</View>
	);
};

RecipesListScreen.navigationOptions = ({ navigation }) => {
	return {
		title: navigation.getParam('title'),
	};
};

export default RecipesListScreen;
