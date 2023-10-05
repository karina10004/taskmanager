const Task = require('../models/Task')
const getalltasks = async(req,res)=>{
    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks});
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}
const createtask = async(req,res)=>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json({ task });
    }
    catch(error){
        res.status(500).json({msg:error})
    }

}
const gettasks = async(req,res)=>{
    try{
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`No task with ID :${taskID}`})
        }
        res.status(200).json({task});
       
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

const updatetask = async (req, res) => {
    const { id: taskID } = req.params
  
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    })
  
    if (!task) {
      return res.status(404).json({msg:`No task with ID :${taskID}`})
    }
  
    res.status(200).json({ task })
  }
const deletetask = async(req,res)=>{
    try{
        const {id:taskID} = req.params;
        
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`No task with ID :${taskID}`})
        }
        res.status(200).json({task});

    }
    catch(error){
        
        res.status(500).json({msg:error})
    }
}
module.exports = {
    getalltasks,deletetask,updatetask,gettasks,createtask
}