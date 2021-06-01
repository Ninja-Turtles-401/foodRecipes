import React from 'react';
import { FlatList, Text, View, Image, TouchableHighlight } from 'react-native';
import styles from './styles';
import { categories } from '../../data/dataArrays';
import { getNumberOfRecipes } from '../../data/MockDataAPI';

const CategoriesScreen = (props) => {
	const onPressCategory = (item) => {
		const title = item.name;
		const category = item;
		props.navigation.navigate('RecipesList', { category, title });
	};

	const renderCategory = ({ item }) => (
		<TouchableHighlight
			underlayColor="rgba(128, 128, 128, 0.1)"
			onPress={() => onPressCategory(item)}
		>
			<View style={styles.categoriesItemContainer}>
				<Image
					style={styles.categoriesPhoto}
					source={{ uri: item.photo_url }}
				/>
				<Text style={styles.categoriesName}>{item.name}</Text>
				<Text style={styles.categoriesInfo}>
					{getNumberOfRecipes(item.id)} recipes
				</Text>
			</View>
		</TouchableHighlight>
	);

	return (
		<View>
			<FlatList
				data={categories}
				renderItem={renderCategory}
				keyExtractor={(item) => `${item.id}`}
			/>
		</View>
	);
};

CategoriesScreen.navigationOptions = {
	title: 'Categories',
};

export default CategoriesScreen;
