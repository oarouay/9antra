import React, { useEffect } from 'react'
import CourseCard from './CourseCard'
import '../styles/CourseCard.css'
import { useCourseStore } from "../store/course";
function Courses() {
  const {fetchCourses,courses} = useCourseStore();
  useEffect(() => {
          fetchCourses();
      }, [fetchCourses]);
  return (
    <div id="courses" className="wrapper">
      <div className="head">
        <h1>Discover Our Courses</h1>
        <button className="btn button-secondary">View More</button>
      </div>
      <div className="course-grid">
        {courses.length > 0 ? (
          courses.map((course) => (
            console.log(course.tuition),
            <CourseCard
              key={course._id} 
              image={course.image}
              price={course.tuition}
              name={course.title}
            />
          ))
        ) : (
          <p>Loading courses...</p>
        )}
        <button className="btn button-secondary third">View More</button>
      </div>
    </div>
  )
}

export default Courses