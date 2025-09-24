const Task = require("../models/Tasks")

const getAllTasks = async (req,res) =>{
    try{
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    }catch{
        res.status(500).json({msg: error});
    }
}

const createTask = async (req,res) =>{
    try{
    const task = await Task.create(req.body)
    res.status(201).json({task});
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
    
}

const getTask = async (req,res) =>{
    try{
        const {id:taskId} = req.params;
        const task = await Task.findOne({_id: taskId})

        if(!task){
            return res.status(404).json({msg: `no task with id: ${taskId}`});
        }
        res.status(200).json({task});
    }catch(error){
        res.status(500).json({msg: error});
    }
}

const updateTask =async (req,res) =>{
    try{
        const {id:taskId} = req.params;

        const task = await Task.findByIdAndUpdate({_id:taskId},req.body);

        res.status(200).json({task});

        if(!task){
            return res.status(404).json({msg: `no task with id: ${taskId}`});
        }
    }catch(error){
        res.status(500).json({msg: error});
    }
}

const deleteTask = async (req,res) =>{
    try{
        const {id:taskId} = req.params;
        const task = await Task.findByIdAndDelete({_id:taskId});
        if(!task){
            return res.status(404).json({msg: `no task with id: ${taskId}`});
        }
        res.status(200).json({task});
    }catch(error){
        res.status(500).json({msg: error});
    }
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}