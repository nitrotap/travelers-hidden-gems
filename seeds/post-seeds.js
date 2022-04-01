const { Post } = require('../models');

const postdata = [
  {
    title: 'Ashfall',
    contents: 'The Ashfall Fossil Beds of Antelope County in northeastern Nebraska are rare fossil sites of the type called lagerstätten that, due to extraordinary local conditions, capture an ecological "snapshot" in time of a range of well-preserved fossilized organisms.',
    location: '42.4217, 98.1563',
    user_id: 10
  },
  {
    title: 'Guanella Pass',
    contents: 'https://nasa.gov/donec.json',
    location: '39.5950, 105.7111',
    user_id: 8
  },
  {
    title: 'Mammoth Cave',
    contents: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    location: ,
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
