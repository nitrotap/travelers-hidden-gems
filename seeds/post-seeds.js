const { Post } = require('../models');

const postdata = [
  {
    title: 'Ashfall',
    contents: 'The Ashfall Fossil Beds of Antelope County in northeastern Nebraska are rare fossil sites of the type called lagerstätten that, due to extraordinary local conditions, capture an ecological "snapshot" in time of a range of well-preserved fossilized organisms.',
    latitude: 42.4217,
    longitude: -98.1563,
    icon: 'map-pin',
    user_id: 1
  },
  {
    title: 'Guanella Pass',
    contents: 'Guanella Pass is a high mountain pass in central Colorado, in the Rocky Mountains of the western United States. The pass is located in southwestern Clear Creek County, in the Front Range west of Denver and south of Georgetown.',
    latitude: 39.5950,
    longitude: -105.7111,
    icon: 'map-pin',
    user_id: 2
  },
  {
    title: 'Mammoth Cave',
    contents: "It has more than 640 kilometers (400 miles) of surveyed passageways, which is nearly twice as long as the second-longest cave system, Mexico's Sac Actun underwater cave.",
    latitude: 37.1862,
    longitude: -86.1000,
    icon: 'map-pin',
    user_id: 3
  },
	{
		title: 'Ashfall',
		contents: 'The Ashfall Fossil Beds of Antelope County in northeastern Nebraska are rare fossil sites of the type called lagerstätten that, due to extraordinary local conditions, capture an ecological "snapshot" in time of a range of well-preserved fossilized organisms.',
		latitude: 42.4217,
		longitude: -98.1563,
		icon: 'map-pin',
		user_id: 1
	},
	{
		title: 'Guanella Pass',
		contents: 'Guanella Pass is a high mountain pass in central Colorado, in the Rocky Mountains of the western United States. The pass is located in southwestern Clear Creek County, in the Front Range west of Denver and south of Georgetown.',
		latitude: 39.5950,
		longitude: -105.7111,
		icon: 'map-pin',
		user_id: 2
	},
	{
		title: 'Mammoth Cave',
		contents: 'It has more than 640 kilometers (400 miles) of surveyed passageways, which is nearly twice as long as the second-longest cave system, Mexico\'s Sac Actun underwater cave.',
		latitude: 37.1862,
		longitude: -86.1000,
		icon: 'map-pin',
		user_id: 3
	},
	{
		title: 'Idaho Potato Museum and Potato Station Cafe',
		contents: 'The museum\'s exhibits include the world\'s largest potato chip, measuring 25 by 14 inches, and a Hall of Fame acknowledging significant contributions to the potato industry. ',
		latitude: 41.8964134,
		longitude: -114.4391053,
		icon: 'map-pin',
		user_id: 2
	},
	{
		title: 'Kennywood',
		contents: 'Kennywood features various structures and rides dating back to the early 1900s. Along with Rye Playland Park, it is one of only two amusement parks designated as a National Historic Landmark.',
		latitude: 40.6024974,
		longitude: -80.3256292,
		icon: 'map-pin',
		user_id: 3
	},
	{
		title: 'Crater of Diamonds State Park',
		contents: 'Crater of Diamonds State Park in Pike County, Arkansas, in the United States. The park features the world\'s only diamond-bearing site accessible to the public. Diamonds have continuously been discovered in the field since 1906, including the Strawn-Wagner Diamond.',
		latitude: 34.0325478,
		longitude: -93.6751199,
		icon: 'map-pin',
		user_id: 1
	},
	{
		title: 'Riverfront Park',
		contents: 'Riverfront park once hosted the 1974 World\'s Fair with sculptures and a cable car trip overseeing Spokane Falls.',
		latitude: 47.1112417,
		longitude: -120.3900702,
		icon: 'map-pin',
		user_id: 3
	},
	{
		title: 'Robolights',
		contents: 'Large, quirky yard with sculpture & light displays combining sci-fi & religious holiday themes. - Google',
		latitude: 32.735865,
		longitude: -115.096572,
		icon: 'map-pin',
		user_id: 2
	},
	{
		title: 'Hersheypark',
		contents: 'A chocolate themed park filled with rides, dining, and live shows.',
		latitude: 40.2887809,
		longitude: -76.6569356,
		icon: 'map-pin',
		user_id: 3
	},
      {
    title: 'Taqueria of Hollywood',
    contents: 'A small taco stand right in the heart of Hollywood. They have amazing tacos and even better prices!',
    latitude: 34.090860,
    longitude: -118.337554,
    user_id: 4
  }];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;




// {
//   title: '',
//   contents: "",
//   latitude: ,
//   longitude: -,
//   icon: 'map-pin',
//   user_id: 
// },