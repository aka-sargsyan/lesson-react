import * as axius from 'axios';

const instance = axius.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: { 'API-KEY': "2e35f25e-594b-44da-bc65-97b49b0658fb" }
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,).
      then(response => response.data);
  },

  follow(userId = null) {
    return instance.post(`follow/${userId}`).then(response => response.data)
  },

  unfollow(userId = null) {
    return instance.delete(`follow/${userId}`).then(response => response.data)
  },

  profileUserId(userId = 2) {
    return instance.get(`profile/${userId}`)
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`).then(response => response)
  }
}


// axius.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`, {}, { withCredentials: true, headers: { 'API-KEY': "2e35f25e-594b-44da-bc65-97b49b0658fb" } }).
// then(response => {
//   if (response.data.resultCode == 0) {
//     props.setClickedButton(false, null);
//     props.addFollow(props.user.id);

//   }
// }
// );
// }