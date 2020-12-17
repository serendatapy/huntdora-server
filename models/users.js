const db = require('../models/index');
console.log(db);

exports.getUser = async (req, res) => {
  // //let jobs = [];
  // let query = req.params
  // console.log('REQUEST:',query);
  // console.log('Databse is:',db);


   try {
     /**
      * For each user, there needs to be just 1 saved list, so if a list exists,
      * that data needs to be updated
      * else it needs to be created
      */
    //const storedJobs = await db.conn.collection('jobs').insertOne(data);
     //if a call back is used, then await will not work (?)
     //console.log(storedJobs);
     res.send('');

   } catch (error) {
     console.log('Error fetching!', error);
     res.sendStatus(500);
   }
};