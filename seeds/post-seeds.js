const { Post } = require('../models');

const postdata = [
  {
    title: 'Ashfall',
    contents: 'The Ashfall Fossil Beds of Antelope County in northeastern Nebraska are rare fossil sites of the type called lagerstätten that, due to extraordinary local conditions, capture an ecological "snapshot" in time of a range of well-preserved fossilized organisms.',
    location: '42.4217, -98.1563',
    user_id: 1
  },
  {
    title: 'Guanella Pass',
    contents: 'Guanella Pass is a high mountain pass in central Colorado, in the Rocky Mountains of the western United States. The pass is located in southwestern Clear Creek County, in the Front Range west of Denver and south of Georgetown.',
    location: '39.5950, -105.7111',
    user_id: 2
  },
  {
    title: 'Mammoth Cave',
    contents: "It has more than 640 kilometers (400 miles) of surveyed passageways, which is nearly twice as long as the second-longest cave system, Mexico's Sac Actun underwater cave.",
    location: '37.1862, -86.1000',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
