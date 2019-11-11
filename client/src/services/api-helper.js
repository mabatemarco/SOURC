import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3000"
})

//runs on page start to see if user has logged in before
export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false;
}

//log in, takes username and password
export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

//register new user, takes username and password
export const registerUser = async (registerData) => {
  const resp = await api.post('/auth/register', registerData)
  return resp.data
}

//get all projects
const getProjects = async () => {
  const response = await api.get('/projects');
  return response.data
}

//get one project and all associated users, takes project id
const getProject = async (id) => {
  const response = await api.get(`/projects/${id}`);
  return response.data
}

//create new project, takes project data and creator user id
const createProject = async (creatorId, data) => {
  const response = await api.post(`/projects/create/${creatorId}`, data);
  return response.data
}

//edit project, takes project data and project id
const editProject = async (projectId, data) => {
  const response = await api.put(`/projects/${projectId}`, data);
  return response.data
}

//delete project, take project id
const deleteProject = async (id) => {
  const response = await api.delete(`projects/${id}`);
  return response.data
}

//get all users
const getUsers = async () => {
  const response = await api.get('/users');
  return response.loginData
}

//get one user and all associated projects, takes userid
const getUser = async (id) => {
  const response = await api.get(`/users/${id}`);
  return response.data
}

//edit user profile, takes user id and data
const editUser = async (userId, data) => {
  const response = await api.put(`/users/${userId}`, data);
  return response.data
}

//delete user, takes user id
const deleteUser = async (id) => {
  const response = await api.delete(`/users/${id}`);
  return response.data
}

//user application to project, takes project id and user id
const apply = async (projectId, userId) => {
  const response = await api.put(`projects/${projectId}/${userId}`);
  return response.data
}

//approve member to project, takes project id and user id
const apply = async (projectId, userId) => {
  const response = await api.put(`projects/${projectId}/${userId}`);
  return response.data
}