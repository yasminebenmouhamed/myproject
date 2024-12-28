import React, { useState, useEffect } from "react";
import {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../services/courseService";

function AdminPanel() {
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    image: null,
  });
  const [editingCourse, setEditingCourse] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const response = await getCourses();
    setCourses(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("price", formData.price);
    if (formData.image) data.append("image", formData.image);

    if (editingCourse) {
      await updateCourse(editingCourse._id, data);
    } else {
      await createCourse(data);
    }
    fetchCourses();
    setFormData({ title: "", price: "", image: null });
    setEditingCourse(null);
  };

  const handleDelete = async (id) => {
    await deleteCourse(id);
    fetchCourses();
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <input
          type="file"
          onChange={(e) =>
            setFormData({ ...formData, image: e.target.files[0] })
          }
        />
        <button type="submit">{editingCourse ? "Update" : "Create"}</button>
      </form>
      <div>
        {courses.map((course) => (
          <div key={course._id}>
            <h2>{course.title}</h2>
            <p>{course.price}</p>
            <img
              src={`http://localhost:5000/${course.image}`}
              alt={course.title}
              width="100"
            />
            <button onClick={() => setEditingCourse(course)}>Edit</button>
            <button onClick={() => handleDelete(course._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;