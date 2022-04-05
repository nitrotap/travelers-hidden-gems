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
    title: 'Taqueria of Hollywood',
    contents: 'A small taco stand right in the heart of Hollywood. They have amazing tacos and even better prices!',
    latitude: 34.090860,
    longitude: -118.337554,
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
