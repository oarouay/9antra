import React, { useState } from "react";

const EditForm = ({ course, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState(course);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass updated course data to parent
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Edit Course</h2>
      <label style={styles.label}>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </label>
      <label style={styles.label}>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          style={styles.textarea}
        />
      </label>
      <label style={styles.label}>
        Weeks:
        <input
          type="text"
          name="weeks"
          value={formData.weeks}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </label>
      <label style={styles.label}>
        Tuition:
        <input
          type="number"
          name="tuition"
          value={formData.tuition}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </label>
      <label style={styles.label}>
        Minimum Skill:
        <select
          name="minimumSkill"
          value={formData.minimumSkill}
          onChange={handleChange}
          required
          style={styles.input}
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </label>
      <label style={styles.label}>
        Image URL:
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </label>
      <div style={styles.buttons}>
        <button type="submit" style={styles.submitButton}>
          Save
        </button>
        <button type="button" onClick={onCancel} style={styles.cancelButton}>
          Cancel
        </button>
      </div>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  input: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
  textarea: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    resize: "vertical",
  },
  buttons: {
    display: "flex",
    gap: "10px",
  },
  submitButton: {
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  cancelButton: {
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default EditForm;
