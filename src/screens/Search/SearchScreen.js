import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, Image, TouchableHighlight } from 'react-native';
import styles from './styles';
import { SearchBar } from 'react-native-elements';
import MenuImage from '../../components/MenuImage/MenuImage';
import {
	getCategoryName,
	getRecipesByRecipeName,
	getRecipesByCategoryName,
} from '../../data/MockDataAPI';

const SearchScreen = (props) => {
	const [value, setValue] = useState('');
	const [data, setData] = useState([]);

	const handleSearch = (text) => {
		var recipeArray1 = getRecipesByRecipeName(text);
		var recipeArray2 = getRecipesByCategoryName(text);
		var aux = recipeArray1.concat(recipeArray2);
		var recipeArray = [...new Set(aux)];
		if (text == '') {
			setValue(text);
			setData([]);
		} else {
			setValue(text);
			setData(recipeArray);
		}
	};

	const getValue = () => {
		return value;
	};

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

	useEffect(() => {
		const { navigation } = props;
		navigation.setParams({
			handleSearch: handleSearch,
			data: getValue,
		});
	}, []);

	return (
		<View>
			<FlatList
				vertical
				showsVerticalScrollIndicator={false}
				numColumns={2}
				data={data}
				renderItem={renderRecipes}
				keyExtractor={(item) => `${item.recipeId}`}
			/>
		</View>
	);
};

SearchScreen.navigationOptions = ({ navigation }) => {
	const { params = {} } = navigation.state;
	return {
		headerRight: (
			<MenuImage
				onPress={() => {
					navigation.openDrawer();
				}}
			/>
		),
		headerTitle: (
			<SearchBar
				containerStyle={{
					backgroundColor: 'transparent',
					borderBottomColor: 'transparent',
					borderTopColor: 'transparent',
					flex: 1,
				}}
				inputContainerStyle={{
					backgroundColor: '#EDEDED',
				}}
				inputStyle={{
					backgroundColor: '#EDEDED',
					borderRadius: 10,
					color: 'black',
				}}
				searchIcond
				clearIcon
				round
				onChangeText={(text) => params.handleSearch(text)}
				placeholder="Search"
				value={params.data}
			/>
		),
	};
};

export default SearchScreen;
