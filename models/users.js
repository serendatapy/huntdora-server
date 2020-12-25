const db = require('../models/index');
/**
 * Protected Routes
 */

exports.getUserFavorites = async (email) => {
  try {
    let userFav = await db.conn.collection('users').findOne({email:email});
    if (!userFav){
      userFav = await db.conn.collection('users').insertOne({email: email,favorites: []});
    }
    return userFav;
   } catch (error) {
     return new Error('Error Getting Favorites!',error);
   }
};
/*
   favorites is an array of jobs in this case
*/
exports.updateUserFavorites = async (email,newFavorites) => {
  try {
    const userFav = await db.conn.collection('users').updateOne({email:email}, {$set: {favorites:newFavorites}});
    return userFav;
   } catch (error) {
    return new Error('Error Updating Favorites!',error);
   }
};