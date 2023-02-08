const express = require('express');
const mongoose = require('mongoose');
const schemas = require('./models/model');
const connectDB = require('./connection/config');
const cors = require('cors');
const morgan = require('morgan');

const Teacher = new mongoose.model("Teacher", schemas.teacher);
const Student = new mongoose.model("Student", schemas.student);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('short'));

// Connection to database
connectDB();

// Home Route and getData Route is not an API Route
app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/getData', function(req, res) {
  res.json({
    "statusCode": 200,
    "statusMessage": "SUCCESS"
  });
});

app.get('/getResults', function(req, res) {
  var auth = true;
  if(auth) {
    Student.find({}, function(err, allStudents) {
      if(!err) {
        res.send(allStudents);
        // console.log(allStudents);
      } else {
        res.send('Something bad happened.');
        console.log('Something bad happened.');
      }
    });
  } else res.send('You are not authenticated!');
});

app.post('/addResult', function(req, res) {
  // var auth = req.headers.authorization;
  var auth = true;
  console.log(req.body);
  // console.log(req.body.rollNo + ', ' + req.body.name + ', '+ req.body.dob + ', ' + req.body.score);
  if(auth) {
    const newStudent = new Student({
      rollNo: req.body.rollNo,
      name: req.body.name,
      dob: req.body.dob,
      score: req.body.score
    });
    newStudent.save()
      .then(data => {
        if(!data) {
          res.status(404).send( { message: 'Something bad happened!' });
        } else {
          res.status(200).send({ message: 'Inserted Successfully!'});
        }
      })
      .catch(err => {
        res.status(500).send({ message: 'Something bad happened!' });
      });
  } else {
    console.log('You are not authenticated.');
    res.send('You are not authenticated!');
  }
});

app.post('/getStudentResult', function(req, res) {
  console.log(req.body);
  Student.findOne({ rollNo: req.body.rollNo, dob: req.body.dob }, function(err, student) {
    // if(!err) {
    //   if(student.dob === req.body.dob ) {
    //     console.log(`Found the Student with Roll Number ${student.rollNo}.`);
    //     res.send(student);
    //   } else {
    //     console.log('Please Check Entered Roll Number and D. O. B');
    //   }
    // } else {
    //   console.log(err);
    // }
    res.send(student);
  });
});

app.post('/getTeacher', function(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  console.log('The teacher information is: \n' + 'email: ' + email + '\npassword: ' + password);
  // console.log(req.body);
  Teacher.findOne({email: email, password: password}, function(err, teacher) {
    if(!err) {
      res.send(teacher);
      // console.log(teacher);
    } else console.log(err);
  });
});

app.post('/deleteResult', function(req, res) {
  // var auth = req.headers.authorization;
  var auth = true;
  if(auth) {
    Student.deleteOne({_id: req.body._id}, function(err, result) {
      if(!err) res.send(result);
      else console.log(err);
    })
  //     .then(data => {
  //       if(!data) {
  //         res.status(404).send( { message: `Can't delete with id ${id}. Maybe user doesn't exist` });
  //       } else {
  //         res.status(200).send({ message: 'Deleted Successfully!' });
  //       }
  //     })
  //     .catch(err => {
  //       res.status(500).send({ message: `Could not delete with id ${id}!` });
  //     })
  // } else {
  //   res.status(500).send({ message: 'You are not authenticated!'}); 
  //   console.log('You are not authenticated!');
  }
});

// app.post('/getResultById', function(req, res) {

// });

app.post('/updateResult', function(req, res) {
  // var auth = req.headers.authorization;
  var auth = true;
  if(auth) {
    const id = req.body._id;
    Student.updateOne({_id: id}, {
      $set: {
        rollNo: req.body.rollNo,
        name: req.body.name,
        dob: req.body.dob,
        score: req.body.score
      }
    }, function(err, result) {
      if(!err) res.send(result);
      else console.log(err);
    })
      // .then(data => {
      //   if(!data) {
      //     res.status(404).send({ message: `Can't update the user with ${id}. Maybe user not found!` });
      //   } else {
      //     res.status(200).send(data);
      //     console.log('Successfully updated!');
      //   }
      // })
      // .catch(err => {
      //   res.status(500).send({ message: 'Error while updating the user!'}); 
      // })
  } else {
    console.log('You are not authenticated!');
    res.status(500).send({ message: 'You are not authenticated!'}); 
  }
});

/*
 * Deleting all students
Student.deleteMany({}, () => {
  console.log('Successfully deleted');
});
*/

/*
 * Adding a Teacher
const newTeacher = new Teacher({
  email: 'admin@nagarro.com',
  password: 'Teacher@Nagarro'
});

newTeacher.save((err) => {
  if(!err) {
    console.log("Added successfully!");
  } else {
    console.log(err);
  }
});
*/
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`Serve is started on port ${PORT}.`);
});