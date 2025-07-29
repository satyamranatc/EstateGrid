import StateModel from "../Models/State.model.js"

export async function getAllStates(req, res) 
{
    try {
        let states = await StateModel.find();
        res.status(200).json(states);
    } 
    catch(err)
    {
        return res.status(500).json({"message":err.message})
    }
  
}
export async function getStateById(req, res) 
{
    try {
        let StateId = req.params.stateId;
        let states = await StateModel.findById(StateId);
        res.status(200).json(states);
    } 
    catch(err)
    {
        return res.status(500).json({"message":err.message})
    }
  
}


export async function addState(req, res) 
{
    try {
        let newState = new StateModel(req.body)
        await newState.save();
        res.status(201).json(newState);
    } 
    catch(err)
    {
        return res.status(500).json({"message":err.message})
    }
  
}

export async function updateState(req, res) 
{
    try {
      console.log("Hi");
    } 
    catch(err)
    {
        return res.status(500).json({"message":err.message})
    }
  
}


export async function deleteState(req, res) 
{
    try {
      console.log("Hi");
    } 
    catch(err)
    {
        return res.status(500).json({"message":err.message})
    }
  
}


