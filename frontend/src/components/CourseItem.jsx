import React from 'react'
import '../styles/CourseItem.css'

function CourseItem({ course, onEdit, onDelete }) {
  return (
    <li className="course-item">
      <div className="course-image-container">
        <img src={course.image} alt={course.title} className="course-image" />
      </div>
      <div className="course-info">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <p>
          <strong>Weeks:</strong> {course.weeks}
        </p>
        <p>
          <strong>Tuition:</strong> ${course.tuition}
        </p>
        <p>
          <strong>Skill Level:</strong> {course.minimumSkill}
        </p>
      </div>
      <div className="course-buttons">
        <button className="edit-button" onClick={() => onEdit(course._id)}>
          Edit
        </button>
        <button className="delete-button" onClick={() => onDelete(course._id)}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default CourseItem