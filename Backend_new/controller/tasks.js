const Task = require("./../models/Task");
const express = require("express");
const asyncWrapper = require('./../middleware/aync')

exports.getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
  res.status(200).json({tasks})
  });

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({
      task,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getTask = async(req, res) => {
  try {
    const task = await Task.findById(req.params.id)
    if(!task){
      res.status(404).json({
        msg:`No task with id ${req.params.id}`
      })
    }
    res.status(201).json({
      task,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.updateTask = async (req, res) => {
  try{
    const tasks = await Task.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
      runValidators:true
    })

    if(!tasks){
      res.status(404).json({
        msg:`No task with id ${req.params.id}`
      })
    }
    res.status(200).json({
      tasks
    })
  }catch(err){
    console.log(err);
  }
};

exports.deleteTask = async (req, res) => {
  try{
    const task = await Task.findByIdAndDelete(req.params.id)
    if(!task){
      res.status(404).json({
        msg:`No task with id ${req.params.id}`
      })}
      res.status(200).json({
        data:null,
        msg:'Success'
      })
  } catch (err) {
    console.log(err);
  }
};
