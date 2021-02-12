import * as axius from 'axios';
import Login from '../componet/login/Login';

const instance = axius.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: { 'API-KEY': "2e35f25e-594b-44da-bc65-97b49b0658fb" }
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,).then(response => response.data);
  },

  follow(userId = null) {
    return instance.post(`follow/${userId}`).then(response => response.data)
  },

  unfollow(userId = null) {
    return instance.delete(`follow/${userId}`).then(response => response.data)
  },

  profileUserId(userId) {
    console.warn("please use profileApi.getUserId")
    return profileAPI.getUserId(userId);
  }
}

export const profileAPI = {
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`).then(respons => respons.data)
  },

  updateStatus(text) {
    return instance.put(`profile/status`, { status: text }).then(respons => respons.data)
  },

  getUserId(userId) {
    return instance.get(`profile/${userId}`)
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`).then(response => response)
  },
  login(email, password, rememberMe=false) {
    return instance.post(`auth/login`, { email, password, rememberMe }).then(response => {
      return response.data})
  },
  logout() {
    return instance.delete(`auth/login`).then(response => {
      return response.data})
  }
}
