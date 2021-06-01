export const categories = [
	{
		id: 3,
		name: 'Cookies',
		photo_url:
			'https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imwidth=1400',
	},
	{
		id: 1,
		name: 'Mexican Food',
		photo_url: 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg',
	},
	{
		id: 2,
		name: 'Italian Food',
		photo_url:
			'https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
	},
	{
		id: 4,
		name: 'Smoothies',
		photo_url:
			'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still-life-of-three-fresh-smoothies-in-front-of-royalty-free-image-561093647-1544042068.jpg?crop=0.715xw:0.534xh;0.0945xw,0.451xh&resize=768:*',
	},
	// {
	// 	id: 0,
	// 	name: 'Pizza',
	// 	photo_url:
	// 		'https://d1uz88p17r663j.cloudfront.net/original/4274048cd5f17c49dfee280f77a3739d_Cheese-Pizza_HB-2.jpg',
	// },
];

export const recipes = [
	{
		recipeId: 122,
		categoryId: 3,
		title: 'Oatmeal Cookies',
		photo_url:
			'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
		photosArray: [
			'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
			'https://namelymarly.com/wp-content/uploads/2018/04/20180415_Beet_Lasagna_10.jpg',
			'https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width600/img/news_impact/photo/burger-fijpg-57e7e5907630c2ad.jpg',
			'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492718105/articles/2013/09/24/burger-king-s-new-french-fries-took-ten-years-to-develop/130923-gross-burger-tease_izz59e',
			'https://aht.seriouseats.com/images/2012/02/20120221-193971-fast-food-fries-Burger-King-fries-2.jpg',
		],
		time: '15',
		ingredients: [
			[0, '200ml'],
			[1, '5g'],
			[2, '300g'],
		],
		description:
			'-- Start with cleaned and peeled russet potatoes that you have cut into 3/8-inch match sticks. Place in bowl of very cold water: keep rinsing and changing the water until the water is clear; drain thoroughly and dry with paper towels or a clean lint-free kitchen towel.\n\n -- Meanwhile, you preheat your hot oil to 350 degrees F. Place prepared taters in oil and cook about 5 minutes. They will have that blond-tone color to them. \n\n -- Note: Once you add cold potatoes to the hot oil, the temperature of your oil is going to drop - you want it to be somewhere between 330 - 325 degrees F. \n\n -- Remove from oil; drain and cool. Now - either refrigerate until ready to finish cooking, or cool completely and freeze up to 3 months. To freeze properly - place completely cooled fries in single layer on tray and place in freezer until frozen. Then bag them.\n\n -- To finish cooking - preheat your oil to 400* F. Add your cold fries (which will drop the oil temp - which is fine because you want it near the 375 degrees F. temp) and cook a few minutes until done. Lightly salt them and shake well so that the salt distributes well and they are not salty.',
	},
	{
		recipeId: 3,
		categoryId: 4,
		title: 'Triple Berry Smoothie',
		photo_url:
			'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
		photosArray: [
			'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
			'https://www.vitamix.com/media/other/images/xVitamix-Triple-Berry-Smoothie-square-crop__1.jpg.pagespeed.ic.OgTC3ILD3R.jpg',
			'http://images.media-allrecipes.com/userphotos/960x960/3798204.jpg',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzui8MM6W66I29VZwVvcjpGv99JW3O1owgupc3KwB65rhAyrZ',
		],
		time: '10',
		ingredients: [
			[59, '1'],
			[60, '1/2 lbs'],
			[61, '1/2 liters'],
		],
		description:
			'In a blender, combine all ingredients and blend until smooth. Then divide between 2 cups and top with blackberries, if desired.',
	},
	{
		recipeId: 2,
		categoryId: 3,
		title: 'Vegan Cookies',
		photo_url:
			'https://www.texanerin.com/content/uploads/2018/06/no-bake-lactation-cookies-1-650x975.jpg',
		photosArray: [
			'https://www.texanerin.com/content/uploads/2018/06/no-bake-lactation-cookies-1-650x975.jpg',
			'https://ichef.bbci.co.uk/news/660/cpsprodpb/B2C0/production/_106106754_vegnuggets976.jpg',
			'https://pixel.nymag.com/imgs/daily/grub/2017/11/22/22-mcds-chicken-tenders.w330.h330.jpg',
			'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-img.health.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Flarge_16_9%2Fpublic%2Fstyles%2Fmain%2Fpublic%2Fgettyimages-508510211.jpg%3Fitok%3Dh-Uryi8r&w=400&c=sc&poi=face&q=85',
		],
		time: '30',
		ingredients: [
			[0, '2 quarts'],
			[16, '1'],
			[12, '1 cup'],
			[18, '1 cup'],
			[19, '1 teaspoon'],
			[1, '2 teaspoons'],
			[4, '1/4 teaspoons'],
			[7, '1/8 teaspoons'],
			[20, '1/2 teaspoons'],
			[21, '4'],
		],
		description:
			'-- Beat the egg and then combine it with water in a bowl. Stir. Combine the flour, salt, MSG, pepper, onion powder and garlic powder in a gallon size zip lock bag. Pound each of the breast filets until about 1/4-inch thick. Then cut into bite sized pieces. Coat each piece with the flour mixture by shaking in the zip lock bag. Remove and coat in the egg mixture. Then coat in the flour mixture again. Shake to coat. Deep fry at 375 degrees for 10-12 minutes, until browned and crispy.',
	},
	{
		recipeId: 3,
		categoryId: 3,
		title: 'Pumpkin Spice Cookies',
		photo_url:
			'https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg',
		photosArray: [
			'https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg',
			'https://cdn.junglecreations.com/wp/junglecms/2018/07/4164c5bd-wide-thumbnail.jpg',
			'https://pinchofyum.com/wp-content/uploads/Crunchwrap-Inside.jpg',
			'https://monsonmadethis.com/wp-content/uploads/2017/10/IMG_20171015_161017_025-e1533869302263.jpg',
		],
		time: '45',
		ingredients: [
			[0, '2 tablespoons'],
			[22, '1/2'],
			[23, '2 tablespoons'],
			[7, '2 cloves'],
			[3, '1 teaspoon'],
			[24, '1 tablespoon'],
			[25, '1 lb'],
			[1, '2 teaspoons'],
			[4, '2 teaspoons'],
			[26, '15 oz'],
			[27, '8'],
			[28, '2'],
			[29, '1 cup'],
		],
		description:
			'-- In a medium pot over medium heat, heat 1 tablespoon oil. Add onion and cook until soft, 5 minutes. Add garlic and cook until fragrant, 1 minute more. Add tomato paste and stir to coat onion and garlic. Add ground beef and cook, breaking up meat with a wooden spoon, until no longer pink, 6 minutes. Drain fat.\n\n -- Return beef to pot and season with chili powder, paprika, salt, and pepper. Add tomato sauce and kidney beans. Bring to a boil, then reduce heat and let simmer 15 minutes. Add some chili to center of each tortilla, leaving room to fold in edges. Top with Fritos, then cheddar. Fold edges of tortillas toward the center, creating pleats. Invert Crunchwraps so pleats are on the bottom and stay together.\n\n -- In medium skillet over medium heat, heat remaining tablespoon oil. Add a Crunchwrap seam side down and cook until tortilla is golden, 3 to 5 minutes per side. Repeat with remaining Crunchwraps',
	},
	{
		recipeId: 1,
		categoryId: 3,
		title: 'Brownies',
		photo_url:
			'https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-1-650x975.jpg',
		photosArray: [
			'https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-1-650x975.jpg',
			'https://images-gmi-pmc.edge-generalmills.com/6fbc6859-e2b1-499d-b0fa-ada600c9cc3f.jpg',
			'http://www.recipe4living.com/assets/itemimages/400/400/3/83c29ac7418067c2e74f31c8abdd5a43_477607049.jpg',
			'https://www.franchisechatter.com/wp-content/uploads/2014/08/KFC-Photo-by-James.jpg',
		],
		time: '30',
		ingredients: [
			[1, '2 tablespoons'],
			[3, '1 tablespoon'],
			[4, '1 teaspoon'],
			[5, '1/2 teaspoons'],
			[6, '1/2 teaspoons'],
			[7, '1/2 teaspoons'],
			[8, '1/2 teaspoons'],
			[9, '1/2 teaspoons'],
			[10, '1/2 teaspoons'],
			[11, '1/2 teaspoons'],
			[12, '1/2 cups'],
			[13, '1 tablespoon'],
			[14, '1 tablespoon'],
			[15, '2 breasts, 2 thighs, 2 drumsticks, 2 wings'],
			[16, '1'],
			[17, '2 quarts'],
		],
		description:
			'-- Preheat fryer to 350°F. Thoroughly mix together all spices. Combine spices with flour, brown sugar and salt. Dip chicken pieces in egg white to lightly coat them, then transfer to flour mixture. Turn a few times and make sure the flour mix is really stuck to the chicken.\n\n -- Repeat with all the chicken pieces. Let chicken pieces rest for 5 minutes so crust has a chance to dry a bit. Fry chicken in batches. Breasts and wings should take 12-14 minutes, and legs and thighs will need a few more minutes. Chicken pieces are done when a meat thermometer inserted into the thickest part reads 165°F. Let chicken drain on a few paper towels when it comes out of the fryer. Serve hot.',
	},
	{
		recipeId: 4,
		categoryId: 1,
		title: 'Perfect Fish Tacos',
		photo_url:
			'https://hips.hearstapps.com/hmg-prod/images/190307-fish-tacos-112-1553283299.jpg',
		photosArray: [
			'http://d2814mmsvlryp1.cloudfront.net/wp-content/uploads/2014/04/WGC-Fish-Tacos-copy-2.jpg',
			'https://thecozyapron.com/wp-content/uploads/2018/03/baja-fish-tacos_thecozyapron_1.jpg',
			'https://www.simplyrecipes.com/wp-content/uploads/2017/06/2017-07-22-FishTacos-6.jpg',
		],
		time: '35',
		ingredients: [
			[30, 'jucie of 1 '],
			[24, '2 teaspoons'],
			[0, '3 tablespoons'],
			[3, '1 teaspoon'],
			[31, '1/2 teaspoons'],
			[32, '1/2 teaspoons'],
			[4, '2 teaspoons'],
			[33, '1/2 lb'],
			[27, '8'],
			[14, '2 teasponns'],
			[34, '1'],
		],
		description:
			'-- In a medium shallow bowl, whisk together olive oil, lime juice, paprika, chili powder, cumin, and cayenne. Add cod, tossing until evenly coated. Let marinate 15 minutes. Meanwhile, make slaw: In a large bowl, whisk together mayonnaise, lime juice, cilantro, and honey. Stir in cabbage, corn, and jalapeño. Season with salt and pepper.\n\n -- In a large nonstick skillet over medium-high heat, heat vegetable oil. Remove cod from marinade and season both sides of each filet with salt and pepper. Add fish flesh side-down. Cook until opaque and cooked through, 3 to 5 minutes per side.\n\n -- Let rest 5 minutes before flaking with a fork. Assemble tacos: Serve fish over grilled tortillas with corn slaw and avocado. Squeeze lime juice on top and garnish with sour cream. ',
	},
	{
		recipeId: 5,
		categoryId: 1,
		title: 'Chicken Fajitas',
		photo_url:
			'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Flavorful-Chicken-Fajitas_EXPS_GHBZ18_12540_B08_15_8b.jpg',
		photosArray: [
			'https://dadwithapan.com/wp-content/uploads/2015/07/Spicy-Chicken-Fajitas-22-1200x480.jpg',
			'https://3.bp.blogspot.com/-X-dHj7ORF9Q/XH4ssgTuSZI/AAAAAAAAEig/E46HP9wCfdsvyJFcMTX30cw-ICep8lF9ACHMYCw/s1600/chicken-fajitas-mexican-food-id-149559-buzzerg.jpg',
			'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201403-xl-chipotle-chicken-fajitas.jpg?itok=ghVcI5SQ',
		],
		time: 35,
		ingredients: [
			[9, '1/2 teaspoons'],
			[0, '4 tablespoons'],
			[1, '1/2 teaspoons'],
			[30, '2 tablespoons'],
			[31, '1 teaspoon'],
			[7, '1 teaspoon'],
			[24, '1/2 teaspoons'],
			[3, '1/2 teaspoons'],
			[21, '1 pound'],
			[22, '1/2 cup'],
			[27, '6'],
			[36, '4'],
			[37, '1/2'],
			[38, '1/2'],
		],
		description:
			'-- In a large bowl, combine 2 tablespoons oil, lemon juice and seasonings; add the chicken. Turn to coat; cover. Refrigerate for 1-4 hours In a large skillet, saute peppers and onions in remaining oil until crisp-tender. Remove and keep warm. Drain chicken, discarding marinade. In the same skillet, cook chicken over medium-high heat for 5-6 minutes or until no longer pink.\n\n -- Return pepper mixture to pan; heat through. Spoon filling down the center of tortillas; fold in half. Serve with toppings as desired.',
	},
	{
		recipeId: 6,
		categoryId: 2,
		title: 'Buffalo Pizza',
		photo_url:
			'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
		photosArray: [
			'https://www.tablefortwoblog.com/wp-content/uploads/2019/01/buffalo-chicken-pizza-recipe-photos-tablefortwoblog-3-500x500.jpg',
			'http://pizzachoicema.com/wp-content/uploads/2018/08/Buffalo-Chicken-Pizza.jpg',
			'https://static1.squarespace.com/static/565bb41ae4b0509ba9fdf769/t/5b9a8e80aa4a998b0be0fcf4/1536855690622/pizza.gif',
		],
		time: 50,
		ingredients: [
			[39, '1 lb'],
			[40, '1 cup'],
			[41, '1/2 cup'],
			[42, '1/4 cup'],
			[43, '2 tablespoons'],
			[44, '1/2 cup'],
			[7, '1/4 teaspoons'],
			[5, '1/4 teaspoons'],
			[30, '1/4 teaspoons'],
			[45, '2 oz'],
			[12, 'for dusting'],
			[4, '1/2 teaspoons'],
			[47, '2'],
			[46, '9 oz'],
		],
		description:
			'-- Place a rack in upper third of oven. Place a large cast-iron skillet on rack and preheat oven to 500° (or as high as your oven will go). Place pizza dough in a large bowl, pour a little oil over, and turn to coat. Cover bowl with plastic and let dough proof at room temperature while pan and oven heat up.\n\n -- Meanwhile, cook hot sauce, marinara sauce, and butter in a medium saucepan over medium heat, stirring occasionally, until butter is melted. Stir in cream, reduce heat to low, and simmer, stirring occasionally, until slightly thickened and warmed through, about 10 minutes. Heat 1 Tbsp. oil in a large skillet over medium-high. Add chicken, toss to coat, then add ¼ cup Buffalo sauce.\n\n -- Cook chicken, tossing occasionally, until heated through, about 2 minutes. Reduce heat and simmer, stirring often, until chicken is well coated and sauce is slightly thickened, about 5 minutes. Meanwhile, whisk yogurt, lemon juice, celery salt, garlic powder, ¼ cup blue cheese, ½ tsp. pepper, and 2 Tbsp. water in a small bowl, adding more water if sauce seems too thick (it should be pourable); set aside.\n\n -- Turn out dough onto a lightly floured work surface. Shape with your hands into a round that’s slightly larger than the cast-iron skillet you’re using. Take hot skillet out of oven (watch that handle!) and place on a heatproof surface. Add a little flour to pan. Lay dough in skillet, then work edges of dough up sides of skillet with your fingertips (use a rubber spatula or wooden spoon if you’re nervous about touching the hot pan). Drizzle a little oil around inside edge of pan so that it trickles behind and underneath dough, which will encourage browning and help it release.\n\n -- Spread about ⅓ cup Buffalo sauce over dough. Arrange mozzarella over, then top with remaining ¼ cup blue cheese. Arrange chicken mixture on top. Bake pizza on top rack until crust and cheese are nicely browned, 15–20 minutes. Transfer skillet to stovetop (again, watch that handle!) and let pizza rest a few minutes. Using a spatula, slide pizza onto a cutting board or platter. Arrange celery over, then top with reserved blue cheese dressing. Season with pepper, then drizzle with oil.',
	},
	{
		recipeId: 0,
		categoryId: 2,
		title: 'Classic Lasagna',
		photo_url:
			'data:image/jpeg;base64,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',
		photosArray: [
			'https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-3.jpg',
			'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F39%2F2019%2F09%2F20225239%2Fp_RU190966.jpg&q=85',
			'https://s23209.pcdn.co/wp-content/uploads/2016/03/Easiest-Lasagna-EverIMG_0217.jpg',
			'https://i.pinimg.com/originals/cd/65/0f/cd650fb13b0545220313cc1d21954903.jpg',
		],
		time: '15',
		ingredients: [
			[0, '200ml'],
			[1, '5g'],
			[2, '300g'],
		],
		description:
			'-- Start with cleaned and peeled russet potatoes that you have cut into 3/8-inch match sticks. Place in bowl of very cold water: keep rinsing and changing the water until the water is clear; drain thoroughly and dry with paper towels or a clean lint-free kitchen towel.\n\n -- Meanwhile, you preheat your hot oil to 350 degrees F. Place prepared taters in oil and cook about 5 minutes. They will have that blond-tone color to them. \n\n -- Note: Once you add cold potatoes to the hot oil, the temperature of your oil is going to drop - you want it to be somewhere between 330 - 325 degrees F. \n\n -- Remove from oil; drain and cool. Now - either refrigerate until ready to finish cooking, or cool completely and freeze up to 3 months. To freeze properly - place completely cooled fries in single layer on tray and place in freezer until frozen. Then bag them.\n\n -- To finish cooking - preheat your oil to 400* F. Add your cold fries (which will drop the oil temp - which is fine because you want it near the 375 degrees F. temp) and cook a few minutes until done. Lightly salt them and shake well so that the salt distributes well and they are not salty.',
	},
	{
		recipeId: 7,
		categoryId: 2,
		title: 'Spaghetti Carbonara',
		photo_url:
			'https://truffle-assets.imgix.net/655ce202-862-butternutsquashcarbonara-land.jpg',
		photosArray: [
			'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
			'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg',
			'https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-articleLarge-v2.jpg',
		],
		time: 15,
		ingredients: [
			[48, '50g'],
			[49, '100g'],
			[50, '350g'],
			[51, '2 plump'],
			[42, '50g'],
			[16, '3'],
			[1, '2 teaspoons'],
			[4, '2 teaspoons'],
		],
		description:
			'-- Put the egg yolks into a bowl, finely grate in the Parmesan, season with pepper, then mix well with a fork and put to one side. Cut any hard skin off the pancetta and set aside, then chop the meat. Cook the spaghetti in a large pan of boiling salted water until al dente.\n\n -- Meanwhile, rub the pancetta skin, if you have any, all over the base of a medium frying pan (this will add fantastic flavour, or use 1 tablespoon of oil instead), then place over a medium-high heat. Peel the garlic, then crush with the palm of your hand, add it to the pan and leave it to flavour the fat for 1 minute. Stir in the pancetta, then cook for 4 minutes, or until it starts to crisp up. Pick out and discard the garlic from the pan, then, reserving some of the cooking water, drain and add the spaghetti.\n\n -- Toss well over the heat so it really soaks up all that lovely flavour, then remove the pan from the heat. Add a splash of the cooking water and toss well, season with pepper, then pour in the egg mixture – the pan will help to cook the egg gently, rather than scrambling it. Toss well, adding more cooking water until it’s lovely and glossy. Serve with a grating of Parmesan and an extra twist of pepper.',
	},
	{
		recipeId: 8,
		categoryId: 2,
		title: 'Lazania',
		photo_url: 'https://images8.alphacoders.com/817/817353.jpg',
		photosArray: [
			'https://previews.123rf.com/images/somegirl/somegirl1509/somegirl150900048/46103208-top-view-of-a-delicious-traditional-italian-lasagna-made-with-minced-beef-bolognese-sauce-topped-wit.jpg',
			'https://truffle-assets.imgix.net/87f324e4-YOUTUBE-NO-TXT.00_03_19_14.Imagen_fija001.jpg',
			'https://images4.alphacoders.com/817/817350.jpg',
		],
		time: 60,
		ingredients: [
			[36, '1 large'],
			[25, '1 pound'],
			[51, '5 cloves'],
			[52, '1 pound'],
			[53, '1 pound'],
			[54, '1 28 ounce can'],
			[23, '2 6 ounce can'],
			[55, '2 tablespoons'],
			[56, '1/4 cup'],
			[10, '1/2 cup'],
			[1, '1/2 teaspoons'],
			[58, '1 teaspoon'],
			[4, '1/4 teaspoons'],
			[16, '1 large'],
			[46, '1 pound'],
			[48, '1 cup'],
			[57, '30 ounces'],
		],
		description:
			'-- Cook noodles according to package directions; drain. Meanwhile, in a Dutch oven, cook sausage, beef and onion over medium heat 8-10 minutes or until meat is no longer pink, breaking up meat into crumbles. Add garlic; cook 1 minute. Drain. Stir in tomatoes, tomato paste, water, sugar, 3 tablespoons parsley, basil, fennel, 1/2 teaspoon salt and pepper; bring to a boil. Reduce heat; simmer, uncovered, 30 minutes, stirring occasionally. In a small bowl, mix egg, ricotta cheese, and remaining parsley and salt. Preheat oven to 375°. Spread 2 cups meat sauce into an ungreased 13x9-in. baking dish. Layer with 3 noodles and a third of the ricotta mixture. Sprinkle with 1 cup mozzarella cheese and 2 tablespoons Parmesan cheese.\n\n -- Repeat layers twice. Top with remaining meat sauce and cheeses (dish will be full). Bake, covered, 25 minutes. Bake, uncovered, 25 minutes longer or until bubbly. Let stand 15 minutes before serving.',
	},
];

export const ingredients = [
	{
		ingredientId: 0,
		name: 'Oil',
		photo_url:
			'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg',
	},
	{
		ingredientId: 1,
		name: 'Salt',
		photo_url:
			'https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg',
	},
	{
		ingredientId: 2,
		name: 'Russet potatoes',
		photo_url:
			'http://www.valleyspuds.com/wp-content/uploads/Russet-Potatoes-cut.jpg',
	},
	{
		ingredientId: 3,
		name: 'Paprika',
		photo_url:
			'https://image.freepik.com/free-photo/red-chilli-pepper-powder-isolated-white-background_55610-28.jpg',
	},
	{
		ingredientId: 4,
		name: 'Black Pepper',
		photo_url: 'https://ak0.picdn.net/shutterstock/videos/26741680/thumb/1.jpg',
	},
	{
		ingredientId: 5,
		name: 'Celery salt',
		photo_url:
			'https://www.hasiroglugurme.com/images/urunler/Koftelik-Esmer-Bulgur-resim-297.jpg',
	},
	{
		ingredientId: 6,
		name: 'Dried sage',
		photo_url:
			'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/Esxjvv7/super-slow-motion-dried-sage-falling-on-white-background_n1xg2gxzg__F0000.png',
	},
	{
		ingredientId: 7,
		name: 'Garlic powder',
		photo_url:
			'https://us.123rf.com/450wm/belchonock/belchonock1808/belchonock180818180/106007144-bowl-of-dry-garlic-powder-on-white-background.jpg?ver=6',
	},
	{
		ingredientId: 8,
		name: 'Ground allspice',
		photo_url:
			'https://www.savoryspiceshop.com/content/mercury_modules/cart/items/2/6/9/2695/allspice-berries-jamaican-ground-1.jpg',
	},
	{
		ingredientId: 9,
		name: 'Dried oregano',
		photo_url: 'https://frutascharito.es/886-large_default/oregano.jpg',
	},
	{
		ingredientId: 10,
		name: 'Dried basil',
		photo_url:
			'https://www.honeychop.com/wp-content/uploads/2015/09/Dried-Mint.png',
	},
	{
		ingredientId: 11,
		name: 'Dried marjoram',
		photo_url:
			'https://images-na.ssl-images-amazon.com/images/I/71YATIBqBYL._SX355_.jpg',
	},
	{
		ingredientId: 12,
		name: 'All-purpose flour',
		photo_url:
			'https://images.assetsdelivery.com/compings_v2/seregam/seregam1309/seregam130900036.jpg',
	},
	{
		ingredientId: 13,
		name: 'Brown sugar',
		photo_url:
			'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/BALQTtekliuc6iu4u/rotating-brown-sugar-in-a-white-container-on-white-background_sis0xtbyl_thumbnail-full01.png',
	},
	{
		ingredientId: 14,
		name: 'Kosher salt',
		photo_url:
			'https://d1yn1kh78jj1rr.cloudfront.net/image/preview/r64-6MxPQjlatyfjp/storyblocks-top-view-of-ceramic-salt-cellar-with-coarse-grained-sea-salt-isolated-on-white-background_SPzKionPuV_SB_PM.jpg',
	},
	{
		ingredientId: 15,
		name: 'Whole chicken',
		photo_url:
			'https://image.shutterstock.com/image-photo/two-raw-chicken-drumsticks-isolated-260nw-632125991.jpg',
	},
	{
		ingredientId: 16,
		name: 'Eggs',
		photo_url:
			'https://image.shutterstock.com/image-photo/egg-whites-yolk-cup-isolated-260nw-1072453787.jpg',
	},
	{
		ingredientId: 17,
		name: 'Quarts neutral oil',
		photo_url:
			'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fgettyimages-464433694_0.jpg%3Fitok%3DK42YR2GV&w=400&c=sc&poi=face&q=85',
	},
	{
		ingredientId: 18,
		name: 'Water',
		photo_url: 'https://ak1.picdn.net/shutterstock/videos/829561/thumb/11.jpg',
	},
	{
		ingredientId: 19,
		name: 'Onion Powder',
		photo_url:
			'https://image.shutterstock.com/image-photo/mixed-spices-isolated-on-white-260nw-662383828.jpg',
	},
	{
		ingredientId: 20,
		name: 'MSG',
		photo_url:
			'https://img.freepik.com/free-photo/monosodium-glutamate-wood-spoon-white-background_55883-399.jpg?size=626&ext=jpg',
	},
	{
		ingredientId: 21,
		name: 'Chicken Breast',
		photo_url:
			'https://us.123rf.com/450wm/utima/utima1602/utima160200063/53405187-raw-chicken-breast-fillets.jpg?ver=6',
	},
	{
		ingredientId: 22,
		name: 'Onion chopped',
		photo_url: 'https://s3.envato.com/files/246703499/IMG_1752_5.jpg',
	},
	{
		ingredientId: 23,
		name: 'Tomato paste',
		photo_url:
			'http://d3e1m60ptf1oym.cloudfront.net/45bab59a-363c-11e1-ab4e-bf4c2e0bb026/PANELA_xgaplus.jpg',
	},
	{
		ingredientId: 24,
		name: 'Chilli Powder',
		photo_url:
			'https://us.123rf.com/450wm/nuttapong/nuttapong1505/nuttapong150500009/40458002-paprika-powder-isolated-on-white-background.jpg?ver=6',
	},
	{
		ingredientId: 25,
		name: 'Ground Beef',
		photo_url:
			'https://images.radio.com/kmoxam/s3fs-public/styles/nts_image_cover_tall_775x425/public/dreamstime_s_39607998.jpg?XCM.w1UGOp9sVKkWGQZe7_JIsRddxoIK&itok=3M6KcFLH&c=73fb6497175b4c1a5c79e3ede816656a',
	},
	{
		ingredientId: 26,
		name: 'Can kidney beans, rinsed and drained ',
		photo_url:
			'https://www.seriouseats.com/images/2014/04/20140414-pile-of-beans-primary-1500x1125.jpg',
	},
	{
		ingredientId: 27,
		name: 'Large Tortillas',
		photo_url:
			'https://upload.wikimedia.org/wikipedia/commons/5/56/NCI_flour_tortillas.jpg',
	},
	{
		ingredientId: 28,
		name: 'Firtos',
		photo_url:
			'https://previews.123rf.com/images/ksena32/ksena321510/ksena32151000090/45863494-fried-fish-on-a-white-background.jpg',
	},
	{
		ingredientId: 29,
		name: 'Shredded cheddar',
		photo_url:
			'https://image.shutterstock.com/image-photo/top-view-small-bowl-filled-260nw-284460308.jpg',
	},
	{
		ingredientId: 30,
		name: 'Lime',
		photo_url: 'https://ak8.picdn.net/shutterstock/videos/23271748/thumb/1.jpg',
	},

	{
		ingredientId: 31,
		name: 'Ground cumin',
		photo_url:
			'https://image.shutterstock.com/image-photo/pile-cumin-powder-isolated-on-260nw-1193262853.jpg',
	},
	{
		ingredientId: 32,
		name: 'Cayenne pepper',
		photo_url: 'https://ak7.picdn.net/shutterstock/videos/11461337/thumb/1.jpg',
	},
	{
		ingredientId: 33,
		name: 'Flaky white fish',
		photo_url:
			'https://image.shutterstock.com/image-photo/roach-river-fish-isolated-on-260nw-277764143.jpg',
	},
	{
		ingredientId: 34,
		name: 'Avocado',
		photo_url:
			'https://www.redwallpapers.com/public/redwallpapers-large-thumb/avocado-cut-stone-leaves-white-background-free-stock-photos-images-hd-wallpaper.jpg',
	},
	{
		ingredientId: 35,
		name: 'Red Pepper Flakes',
		photo_url:
			'https://as1.ftcdn.net/jpg/02/06/55/10/500_F_206551074_mVczUrAWOSMaw8kR48FQDQBqDw47jCtL.jpg',
	},
	{
		ingredientId: 36,
		name: 'Onions',
		photo_url: 'http://www.allwhitebackground.com/images/2/2650.jpg',
	},
	{
		ingredientId: 37,
		name: 'Green Pepper',
		photo_url: 'https://ak9.picdn.net/shutterstock/videos/4055509/thumb/1.jpg',
	},
	{
		ingredientId: 38,
		name: 'Red Pepper',
		photo_url: 'https://ak9.picdn.net/shutterstock/videos/10314179/thumb/1.jpg',
	},
	{
		ingredientId: 39,
		name: 'Pizza dough',
		photo_url:
			'https://image.shutterstock.com/image-photo/fresh-raw-dough-pizza-bread-260nw-518950903.jpg',
	},
	{
		ingredientId: 40,
		name: 'Ketchup sauce',
		photo_url:
			'https://st2.depositphotos.com/5262887/11050/i/950/depositphotos_110501208-stock-photo-ketchup-bowl-isolated-on-white.jpg',
	},
	{
		ingredientId: 41,
		name: 'Hot Sauce',
		photo_url:
			'https://media.istockphoto.com/photos/opened-can-of-spaghetti-sauce-on-a-white-background-picture-id497704752?k=6&m=497704752&s=612x612&w=0&h=JnL54buYu1Z3fGtd8uNdjFxiAKwlxoDluD6jbIfSaZI=',
	},
	{
		ingredientId: 42,
		name: 'Butter',
		photo_url:
			'https://redrockstoffee.com/media/2016/11/AdobeStock_76417550.jpeg',
	},
	{
		ingredientId: 43,
		name: 'Heavy Cream',
		photo_url:
			'https://media.istockphoto.com/photos/mayonnaise-in-bowl-isolated-on-white-background-picture-id614981116?k=6&m=614981116&s=612x612&w=0&h=LtbsI2HQXOTERYuP9YJ2PJfRF3W6DcyZ798fxMcQWC0=',
	},
	{
		ingredientId: 44,
		name: 'whole-milk plain yogurt',
		photo_url:
			'https://st.depositphotos.com/2757384/3317/i/950/depositphotos_33170129-stock-photo-pouring-a-glass-of-milk.jpg',
	},
	{
		ingredientId: 45,
		name: 'Chesse',
		photo_url: 'https://ak7.picdn.net/shutterstock/videos/3619997/thumb/1.jpg',
	},
	{
		ingredientId: 46,
		name: 'Mozzarella',
		photo_url:
			'https://t3.ftcdn.net/jpg/02/06/73/98/500_F_206739841_suPu6qDPHlowFqx9qo8fLqV8sNevL2g3.jpg',
	},
	{
		ingredientId: 47,
		name: 'celery stalks',
		photo_url:
			'https://cdn4.eyeem.com/thumb/6d1b3957c7caa9b73c3e0f820ef854b931808139-1538043742765/w/750',
	},
	{
		ingredientId: 48,
		name: 'Parmesan Chesse',
		photo_url: 'https://ak7.picdn.net/shutterstock/videos/3721877/thumb/1.jpg',
	},
	{
		ingredientId: 49,
		name: 'pancetta',
		photo_url:
			'https://previews.123rf.com/images/onlyfabrizio/onlyfabrizio1606/onlyfabrizio160600002/60198502-raw-stripes-of-pancetta-stesa-on-a-white-background.jpg',
	},
	{
		ingredientId: 50,
		name: 'Spaghetti',
		photo_url:
			'https://previews.123rf.com/images/mfron/mfron1204/mfron120400098/13306773-bunch-of-spaghetti-nudeln-isoliert-auf-wei%C3%9Fem-hintergrund.jpg',
	},
	{
		ingredientId: 51,
		name: 'Garlic',
		photo_url:
			'https://image.freepik.com/free-photo/fresh-garlic-white-background_1339-17012.jpg',
	},
	{
		ingredientId: 52,
		name: 'Lasagna noodles',
		photo_url:
			'https://previews.123rf.com/images/velkol/velkol1110/velkol111000004/11083085-an-image-of-raw-lasagna-on-white-background.jpg',
	},
	{
		ingredientId: 53,
		name: 'Italian sauce',
		photo_url:
			'https://previews.123rf.com/images/arinahabich/arinahabich1504/arinahabich150400858/38827029-raw-italian-sausage-on-a-white-background-.jpg',
	},
	{
		ingredientId: 54,
		name: 'Crushed Tomatoes',
		photo_url:
			'https://previews.123rf.com/images/merkulovnik/merkulovnik1406/merkulovnik140600100/28751626-crushed-tomato-isolated-on-white-background.jpg',
	},
	{
		ingredientId: 55,
		name: 'Sugar',
		photo_url:
			'https://previews.123rf.com/images/sommai/sommai1411/sommai141100034/33199985-sugar-cubes-in-a-bowl-isolated-on-white-background.jpg',
	},
	{
		ingredientId: 56,
		name: 'minced fresh parsley',
		photo_url:
			'https://t4.ftcdn.net/jpg/02/15/78/05/240_F_215780551_Eid0xpP1M2fokvuEcvJj8uqhROLJkb3p.jpg',
	},
	{
		ingredientId: 57,
		name: 'ricotta cheese',
		photo_url:
			'https://previews.123rf.com/images/barkstudio/barkstudio1608/barkstudio160800351/61418602-ricotta-cheese-into-a-bowl-in-white-background.jpg',
	},
	{
		ingredientId: 58,
		name: ' fennel seed',
		photo_url:
			'https://previews.123rf.com/images/pinkomelet/pinkomelet1710/pinkomelet171000227/88851299-close-up-the-fennel-seed-on-white-background.jpg',
	},
	{
		ingredientId: 59,
		name: 'Banana',
		photo_url:
			'https://www.conservationmagazine.org/wp-content/uploads/2013/04/sterile-banana.jpg',
	},
	{
		ingredientId: 60,
		name: 'Frozen Straberries',
		photo_url:
			'https://www.cascadianfarm.com/wp-content/uploads/2018/12/Strawberries_Main_0218.png',
	},
	{
		ingredientId: 61,
		name: 'Greek Yogurt',
		photo_url:
			'http://images.media-allrecipes.com/userphotos/960x960/3758635.jpg',
	},
];
