import Vue from "vue";
import Vuex from "vuex";
import deezer from "../apis/deezer";
import localHost from "../apis/localHost"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    dataMusic: "",
    dataAddPost: "",
    dataPost: [],
    userData: {},
    addPostFlagger: false
  },
  mutations: {
    POST_FLAGGER_FALSE(state) {
      state.addPostFlagger = false
    },
    POST_FLAGGER(state) {
      state.addPostFlagger = true
    },
    FILL_USER_DATA(state, payload) {
      state.userData = payload
    },
    LOGOUT(state) {
      state.isLoggedIn = false
      localStorage.clear()
    },
    LOGIN(state) {
      state.isLoggedIn = true
    },
    FILL_DATA_POST(state, payload) {
      state.dataPost = payload
    },
    CLEAR_DATA_MUSIC(state) {
      state.dataMusic = ""
      state.dataAddPost = ""
    },
    FILL_DATA_MUSIC(state, payload) {
      state.dataMusic = payload
    },
    FILL_DATA_ADD_POST(state, payload) {
      state.dataAddPost = payload
    }
  },
  actions: {
    async addPostToDb(context, payload) {
      const access_token = localStorage.getItem("access_token")
      try {
        const response = await localHost({
          method: 'post',
          url: '/posts',
          headers: {
            access_token
          },
          data: payload
        })
        context.commit("POST_FLAGGER")
      } catch (err) {
        console.log(err.response);
      }
    },
    async googleLogin(context, googleUser) {
      var idToken = googleUser.getAuthResponse().id_token;
      try {
        const response = await localHost({
          method: 'post',
          url: 'users/auth/google',
          data: {
            idToken
          }
        })
        // console.log(response.data);
        localStorage.setItem("access_token", response.data.access_token)
        context.commit("LOGIN")
        context.dispatch("fetchUserData")
        context.dispatch("fetchPostData")
        swal("login successfully", "", "success");
      } catch (err) {
        console.log(err.response);
      }
    },
    async logout(context) {
      // google logout
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function() {
        console.log("User signed out.");
      });
      context.commit("LOGOUT")
    },
    async fetchUserData(context) {
      const access_token = localStorage.getItem("access_token")
      try {
        const response = await localHost({
          method: 'get',
          url: '/users/data',
          headers: {
            access_token
          }
        })
        context.commit("FILL_USER_DATA", response.data)
      } catch (err) {
        console.log(err.response);
      }
    },
    async login(context, payload) {
      const {email, password} = payload
      try {
        const response = await localHost({
          method: 'post',
          url: '/users/login',
          data: {
            email,
            password
          }
        })
        // console.log(response.data);
        localStorage.setItem("access_token", response.data.access_token)
        context.commit("LOGIN")
        context.dispatch("fetchUserData")
        context.dispatch("fetchPostData")
        swal("login successfully", "", "success");
      } catch (err) {
        swal(`${err.response.data.message}`, "", "error");
        console.log(err.response);
      }
    },
    async fetchPostData(context) {
      try {
        const response = await localHost({
          method: 'get',
          url: '/posts',
        })
        context.commit("FILL_DATA_POST", response.data)
      } catch (err) {
        console.log(err.response);
      }
    },
    async getMusic(context, payload) {
      const response = await deezer({
        method: "get",
        url: "/search",
        params: {
          q: payload,
        },
        headers: {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key":
            "d2bc998eeemsh938640842b8b649p1505b9jsna840a9397f50",
        },
      });
      console.log(response.data.data[0]);
      const data = {
        embed: `https://widget.deezer.com/widget/dark/track/${response.data.data[0].id}`,
        title: response.data.data[0].title,
        artist: response.data.data[0].artist.name,
      }
      context.commit("FILL_DATA_MUSIC", data)
    },
  },
  modules: {},
});
