import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    weeks: {
        type: String,
        required: true,
    },
    tuition: {
        type: Number,
        required: true,
    },
    minimumSkill: {
        type: String,
        required: true,
        enum: ["beginner", "intermediate", "advanced"],
    },
    image: {
        type: String, 
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    },{timestamps: true});

const Course = mongoose.model("Course", courseSchema);

export default Course;