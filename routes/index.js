var express = require('express');
var router = express.Router();

var User = require('../Models/userSchema');


//Create api
router.post('/newuser', async function(req, res, next) {
  
  try {
    const newdata = await User.create(req.body);
    res.status(201).json({
      status:"success",
      data:newdata
    })
  } catch (error) {
       res.json({
         err:error
       })

      
  }
});


//Get all User Data Api
router.get('/getalluser', async function(req, res, next) {
  
  try {
    const getalldata = await User.find();
    res.status(201).json({
      status:"success",
      data:getalldata
    })
  } catch (error) {
       res.json({
         err:error
       })

      
  }
});


//Get One User Data Api
router.get('/getoneuser/:id', async function(req, res, next) {
  
      console.log(req.params.id);

  try {
    const getonedata = await User.findById(req.params.id);
    res.status(201).json({
      status:"success",
      data:getonedata
    })
  } catch (error) {
       res.json({
         err:error
       })

      
  }
});



//Delete User Api
router.delete('/deleteuser/:id', async function(req, res, next) {
  
  console.log(req.params.id);

try {
const deletedata = await User.findByIdAndDelete(req.params.id);
res.status(201).json({
  status:"delete success",
  
})
} catch (error) {
   res.json({
     err:error
   })

  
}
});



//Update User Api
router.patch('/updateuser/:id', async function(req, res, next) {
  
  console.log(req.params.id);

try {
const updatedata = await User.findByIdAndUpdate(req.params.id,req.body);
res.status(201).json({
  status:"success",
  data:updatedata
})
} catch (error) {
   res.json({
     err:error
   })

  
}
});



module.exports = router;
