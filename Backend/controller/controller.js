const datamodel = require("../model/data");


// GET DATA
const Getdata = async (req, res) => {
    try {

        const User = await datamodel.find();
        res.json(User);


    } catch (error) {

        return res.status(500).json({ message: error?.message })
    }

3

}

// CREATE DATA

const Postdata = async (req, res) => {

    const { title, Description } = req.body;
    if (!title, !Description) {
        return res.status(400).json({ message: "Please add data" });
    }

    try {
        const data = await datamodel.create(req.body);
        res.status(200).json({ message: "Data Added to Database" })
    } catch (error) {
        return res.status(500).json({ message: error?.message });
    }
}


// DETELE DATA

const Deletedata = async (req, res) => {
    const {id} = req.params;
    console.log(id)
    const DataExist = await datamodel.findById(id);
    if (!DataExist) {
        return res.status(404).json({ message: "data not found" });
    }
    try {
        const dataDelete = await datamodel.findByIdAndDelete(id);
        res.status(200).json({ message: "data Deleted" })
    } catch (error) {
        return res.status(500).json({ message: error?.message });

    }
}

// UPDATEDATA

const Updatedata=async(req,res)=>{
    const {id}=req.params;
    const dataExist=await datamodel.findById(id)
    if(!dataExist){
        return res.status(404).json({ message: "data not found" });
    }
    try{
       const data=await datamodel.findByIdAndUpdate(id,req.body);
       res.status(200).json({ message: "data Updated" })
    }
    catch(err){
        return res.status(500).json({ message: err?.message });
    }
}

module.exports = { Getdata, Postdata,Deletedata,Updatedata }