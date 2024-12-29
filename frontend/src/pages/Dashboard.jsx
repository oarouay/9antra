import React, { useState,useEffect } from "react";
import CourseItem from "../components/CourseItem";
import "../styles/CourseItem.css";
import { useCourseStore } from "../store/course";
import { ToastContainer, toast } from 'react-toastify';
function Dashboard() {
    const {fetchCourses,courses} = useCourseStore();
    useEffect(() => {
        fetchCourses();
    }, [fetchCourses]);
    console.log(courses);
    const [isEditFormVisible, setEditFormVisible] = useState(false);
    const [currentCourse, setCurrentCourse] = useState(null);
    const [newCourse, setNewCourse] = useState({
        title: "",
        description: "",
        weeks: "",
        tuition: "",
        minimumSkill: "",
        image: "",
    });

    const handleEdit = (id) => {
        const course = courses.find((course) => course._id === id);
        if (course) {
            setCurrentCourse(course);
            setEditFormVisible(true);
        }
    };
    const {deleteCourse}=useCourseStore();

    const handleDelete = async (id) => {
        const {success,message}=await deleteCourse(id);
        if(success){
            toast.success(message);
        }else{
              toast.error(message);
        }
    };
    const {updatedCourse}=useCourseStore();
  const handleUpdatingCourse = async (event) => {
    event.preventDefault();
    const {success,message}=await updatedCourse(currentCourse._id,currentCourse);
    if(success){
        toast.success(message);
    }else{
          toast.error(message);
    }
    setEditFormVisible(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentCourse({ ...currentCourse, [name]: value });
  };
  const {createCourse} = useCourseStore();
  const handleAddFormSubmit = async() => {
    event.preventDefault();
   const {success,message}=await createCourse(newCourse);
   if(success){
       toast.success(message);
   }else{
         toast.error(message);
   }
  };

  const handleNewCourseInputChange = (event) => {
    const { name, value } = event.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  return (
    <>
      <div className="course-container">
        <h1 className="course-title">Add New Course</h1>
        <form onSubmit={handleAddFormSubmit} className="add-form">
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={newCourse.title}
              onChange={handleNewCourseInputChange}
              required
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={newCourse.description}
              onChange={handleNewCourseInputChange}
              required
            />
          </label>
          <label>
            Weeks:
            <input
              type="number"
              name="weeks"
              value={newCourse.weeks}
              onChange={handleNewCourseInputChange}
              required
            />
          </label>
          <label>
            Tuition:
            <input
              type="number"
              name="tuition"
              value={newCourse.tuition}
              onChange={handleNewCourseInputChange}
              required
            />
          </label>
          <label>
            Minimum Skill:
            <input
              type="text"
              name="minimumSkill"
              value={newCourse.minimumSkill}
              onChange={handleNewCourseInputChange}
              required
            />
          </label>
          <label>
            Image URL:
            <input
              type="text"
              name="image"
              value={newCourse.image}
              onChange={handleNewCourseInputChange}
              required
            />
          </label>
          <button type="submit">Add Course</button>
        </form>

        <h1 className="course-title">Course List</h1>
        <ul className="course-list">
          {courses.map((course) => (
            <CourseItem
              key={course._id}
              course={course}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </ul>

        {isEditFormVisible && (
          <div className="edit-form">
            <h2>Edit Course</h2>
            <form onSubmit={handleUpdatingCourse}>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  value={currentCourse.title}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Description:
                <input
                  type="text"
                  name="description"
                  value={currentCourse.description}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Tuition:
                <input
                  type="number"
                  name="tuition"
                  value={currentCourse.tuition}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Minimum Skill:
                <input
                  type="text"
                  name="minimumSkill"
                  value={currentCourse.minimumSkill}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Image URL:
                <input
                  type="text"
                  name="image"
                  value={currentCourse.image}
                  onChange={handleInputChange}
                />
              </label>
              <div className="botna">
                <button type="submit">Save</button>
                <button
                  type="button"
                  onClick={() => setEditFormVisible(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
        <ToastContainer />
      </div>
      
    </>
  );
}

export default Dashboard;
