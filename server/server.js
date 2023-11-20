const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const { Double } = require('mongodb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect("mongodb+srv://gowthammoorthy13:Gowtham@internmanagement.n7avwjw.mongodb.net/?retryWrites=true&w=majority")
  .then((db) => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

const internSchema = new mongoose.Schema({
  img :{
    type: Buffer,
  },
  name : String,
  dateOfBirth : String,
  phone : String,
  email : String,
  domain : String,
  address : String,
  district : String,
  pin : String,
  college : String,
  dep : String,
  yearOfGraduation : String,
  studingYear : String,
  started : String,
  end : String,
  depOrTeam : String,
  manager : String,
  resume : {
    type: Buffer
  },
  cuverletter : {
    type : Buffer,
  },
  task : String,
  attendnessPercentage: String,

});

const internDetails= mongoose.model("Intern", internSchema, "InternManagement.internDetails");

app.post("/insert", async (req, res) =>{
  console.log(req.body);
  console.log(req.body["name"]);

  const result = await internDetails.insertMany
  (
    {
      img: req.body["img"],
      name : req.body["name"],
      dateOfBirth : req.body["dateOfBirth"],
      phone : req.body["phone"],
      email : req.body["email"],
      domain : req.body["domain"],
      address : req.body["address1"] + " " + req.body["address2"],
      district : req.body["district"],
      pin : req.body["pin"],
      college : req.body["college"],
      dep : req.body["dep"],
      yearOfGraduation : req.body["yearOrGraduation"],
      studingYear : req.body["studingYear"],
      started : req.body["started"],
      end : req.body["end"],
      depOrTeam : req.body["depOrTeam"],
      manager : req.body["manager"],
      resume : req.body["resume"],
      cuverletter : req.body["cuverletter"],
      task : req.body["task"],
      attendnessPercentage : 0,
    }
  );

  console.log("Insert Sucessfull");
  res.redirect("internDetails");
});

app.post("/update", async (req, res) =>{
  console.log(req.body);
  console.log(req.body["name"]);

  const result = await internDetails.findByIdAndUpdate
  (
    {_id: req.body.id},
    {
      img: req.body["img"],
      name : req.body["name"],
      dateOfBirth : req.body["dateOfBirth"],
      phone : req.body["phone"],
      email : req.body["email"],
      domain : req.body["domain"],
      address : req.body["address1"] + " " + req.body["address2"],
      district : req.body["district"],
      pin : req.body["pin"],
      college : req.body["college"],
      dep : req.body["dep"],
      yearOfGraduation : req.body["yearOrGraduation"],
      studingYear : req.body["studingYear"],
      started : req.body["started"],
      end : req.body["end"],
      depOrTeam : req.body["depOrTeam"],
      manager : req.body["manager"],
      resume : req.body["resume"],
      cuverletter : req.body["cuverletter"],
      task : req.body["task"],
      attendnessPercentage : 0,
    }
  );

});

app.post("/view", async (req, res)=>{
  console.log(req.body.id);

  try{
    const result = await internDetails.find({_id: req.body.id});
    console.log("the result is ", result);
    res.send(result);
  }catch (err){
    console.log(err);
  } 
  
});


app.get("/internDetails", async (req, res) =>{

  try{
    const result = await internDetails.find();
    console.log("the result is ", result);
    res.send(result);
  }catch (err){
    console.log(err);
  } 
  
});

app.post("/deleteIntern", async (req, res) =>{
  console.log(req.body.id);
  const result = await internDetails.findByIdAndDelete({ _id : req.body.id});
  res.redirect("/internDetails");
});

const attendSchema = new mongoose.Schema({
  _id: String,
  day : String,
  FN : Array,
  AN : Array,
});

const attendness = mongoose.model("Attend", attendSchema, "attendness");

app.post("/attendness", async (req, res) =>{

  console.log(req.body);
  const intern = await internDetails.find({});

  const verify = await attendness.findById({_id: req.body.date});

  if(verify){

    try{
      if(req.body.session === "FN/AN"){
        await attendness.findByIdAndUpdate({_id: req.body.date}, {FN : req.body.attendancePassing}, {AN : req.body.attendancePassing});
      }
      if(req.body.session === 'FN'){
        await attendness.findByIdAndUpdate({_id: req.body.date}, {FN : req.body.attendancePassing});
      }
      if(req.body.session === "AN"){
        await attendness.findByIdAndUpdate({_id: req.body.date}, {AN : req.body.attendancePassing});
      }
    }catch(err){
      console.log(err);
    }

  }else{
    try{
      if(req.body.session === "FN/AN"){
        await attendness.insertMany({_id: req.body.date, day: req.body.day, FN : req.body.attendancePassing, AN : req.body.attendancePassing});
      }
      if(req.body.session === 'FN'){
        await attendness.insertMany({_id: req.body.date, day: req.body.day, FN : req.body.attendancePassing, AN : []});
      }
      if(req.body.session === "AN"){
        await attendness.findByIdAndUpdate({_id: req.body.date}, {AN : req.body.attendancePassing});
      }

      

    }catch(err){
      console.log(err);
    }
  }

});

app.get("/attendness", async (req, res) =>{

  const result = await internDetails.find({});
  res.send(result);  
});

app.get('/viewattendness', async (req, res) =>{
  const result = await attendness.find({});
  console.log(result);
  res.send(result);
});


app.get('/delete', async (req, res) =>{
  const result = await attendness.deleteMany({});
  console.log(result);
  res.send(result);
});




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
