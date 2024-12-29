import Course from '../Models/course.model.js';
import mongoose from 'mongoose';

export const getCourses = async (req, res) => {
    try {
        const courses =await Course.find({});
        res.status(200).json({success:true, data:courses});
    } catch (error) {
        console.log("Error in fetching courses", error.message);
        res.status(500).json({success:false, message:"Server Error"});
    }
};

export const createCourse = async (req, res) => {
    const course= req.body; // utilisateur bech yeb3ath fi body

    if(!course.title || !course.description || !course.weeks || !course.tuition || !course.minimumSkill || !course.image){
        return res.status(400).json({success:false, message:"All fields are required"});
    }

    const newCourse =new Course(course);

    try {
        await newCourse.save();
        res.status(201).json({success:true, data:newCourse});
    } catch (error) {
        console.log("Error in creating a course", error.message);
        res.status(500).json({success:false, message:"Server Error"});   
    }
}

export const updatedCourse = async (req, res) => {
    const {id} = req.params;
    const course = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Invalid course id"});
    }

    try {
        const updatedCourse = await Course.findByIdAndUpdate(id, course, {new:true});
        res.status(200).json({success:true, data:updatedCourse});
    } catch (error) {
        console.log("Error in updating a course", error.message);
        res.status(500).json({success:false, message:"Server Error"});   
    }
}
export const deleteCourse = async (req, res) => {
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Invalid course id"});
    }
    try {
        await Course.findByIdAndDelete(id);
        res.status(200).json({success:true, message:"Course is deleted"});
    } catch (error) {
        res.status(500).json({success:false, message:"Server Error"});
    }
}