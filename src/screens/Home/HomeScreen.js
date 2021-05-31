import React from 'react';
import { FlatList, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import { getCategoryName } from '../../data/MockDataAPI';

const HomeScreen = (props) => {
	const onPressRecipe = (item) => {
		props.navigation.navigate('Recipe', { item });
	};

	const renderRecipes = ({ item }) => (
		<TouchableHighlight
			underlayColor="rgba(73,182,77,0.9)"
			onPress={() => onPressRecipe(item)}
		>
			<View style={styles.container}>
				<Image style={styles.photo} source={{ uri: item.photo_url }} />
				<Text style={styles.title}>{item.title}</Text>
				<Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
			</View>
		</TouchableHighlight>
	);

	return (
		<View>
			<FlatList
				vertical
				showsVerticalScrollIndicator={false}
				numColumns={2}
				data={recipes}
				renderItem={renderRecipes}
				keyExtractor={(item) => `${item.recipeId}`}
			/>
		</View>
	);
};

HomeScreen.navigationOptions = ({ navigation }) => ({
	title: 'Home',
	headerLeft: () => (
		<MenuImage
			onPress={() => {
				navigation.openDrawer();
			}}
		/>
	),
});

export default HomeScreen;
