import {create} from "zustand";
const API_BASE_URL = "http://localhost:5000/api";
export const useCourseStore = create((set) => ({
    courses: [],
    setCourses: (courses) => set({courses}),
    createCourse: async(newCourse)=>{
        if(!newCourse.title || !newCourse.description || !newCourse.weeks || !newCourse.tuition || !newCourse.minimumSkill){
            return {success:false, message:"All fields are required"};
        }
        const res = await fetch('/api/coureses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCourse),
        });
        const data = await res.json();
        set((state) => ({courses: [...state.courses, data.data]}));
        return {success:true, message:"Course is created"};
    },
    fetchCourses: async()=>{
        const res = await fetch(`${API_BASE_URL}/coureses`);
        const data = await res.json();
        set({courses: data.data});
    },
    deleteCourse: async(id)=>{
        const res = await fetch(`/api/coureses/${id}`, {
            method: 'DELETE',
        });
        const data = await res.json();
        if(!data.success){return {success:false, message:data.message};}
        set((state) => ({courses: state.courses.filter((course) => course._id !== id)}));
        return {success:true, message:"Course is deleted"};
    },
    updatedCourse: async(id, updatedCourse)=>{
        const res = await fetch(`/api/coureses/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedCourse),
        });
        const data = await res.json();
        if(!data.success){return {success:false, message:data.message};}
        //update UI ma8ir mana3mlou refresh
        set((state) => ({courses: state.courses.map((course) => (course._id === id ? data.data : course))}));
        return {success:true, message:"Course is updated"};
    }
}));