import axios from "axios";

const API_URL = "http://localhost:5000/api/courses";

export const getCourses = () => axios.get(API_URL);
export const createCourse = (formData) =>
  axios.post(API_URL, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const updateCourse = (id, formData) =>
  axios.put(`${API_URL}/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const deleteCourse = (id) => axios.delete(`${API_URL}/${id}`);
