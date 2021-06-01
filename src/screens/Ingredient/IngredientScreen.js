import React from 'react';
import {
	FlatList,
	ScrollView,
	Text,
	View,
	Image,
	TouchableHighlight,
} from 'react-native';
import styles from './styles';
import {
	getIngredientUrl,
	getRecipesByIngredient,
	getCategoryName,
} from '../../data/MockDataAPI';

const IngredientScreen = (props) => {
	const { navigation } = props;

	const onPressRecipe = (item) => {
		navigation.navigate('Recipe', { item });
	};

	const renderRecipes = ({ item }) => (
		<TouchableHighlight
			underlayColor="rgba(128, 128, 128, 0.1)"
			onPress={() => onPressRecipe(item)}
		>
			<TouchableHighlight
				underlayColor="rgba(128, 128, 128, 0.1)"
				onPress={() => onPressRecipe(item)}
			>
				<View style={styles.container}>
					<Image style={styles.photo} source={{ uri: item.photo_url }} />
					<Text style={styles.title}>{item.title}</Text>
					<Text style={styles.category}>
						{getCategoryName(item.categoryId)}
					</Text>
				</View>
			</TouchableHighlight>
		</TouchableHighlight>
	);

	const ingredientId = navigation.getParam('ingredient');
	const ingredientUrl = getIngredientUrl(ingredientId);
	const ingredientName = navigation.getParam('name');

	return (
		<ScrollView style={styles.mainContainer}>
			<View
				style={{
					borderBottomWidth: 0.4,
					marginBottom: 10,
					borderBottomColor: 'grey',
				}}
			>
				<Image
					style={styles.photoIngredient}
					source={{ uri: '' + ingredientUrl }}
				/>
			</View>
			<Text style={styles.ingredientInfo}>Recipes with {ingredientName}:</Text>
			<View>
				<FlatList
					vertical
					showsVerticalScrollIndicator={false}
					numColumns={2}
					data={getRecipesByIngredient(ingredientId)}
					renderItem={renderRecipes}
					keyExtractor={(item) => `${item.recipeId}`}
				/>
			</View>
		</ScrollView>
	);
};

IngredientScreen.navigationOptions = ({ navigation }) => {
	return {
		title: navigation.getParam('name'),
	};
};

export default IngredientScreen;
