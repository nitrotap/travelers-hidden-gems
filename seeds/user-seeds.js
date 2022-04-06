const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'gypsyTraveler',
    email: 'gypsyTraveler@gmail.com',
    password: 'password123'
  },
  {
    username: 'letsGoSomewhere',
    email: 'letsGoSomewhere@gmail.com',
    password: 'password124'
  },
  {
    username: 'wanderlust',
    email: 'wanderlust@gmail.com',
    password: 'password321'
  },
  {
    username: 'harabushi',
    email: 'harabushi@gmail.com',
    password: 'password'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
