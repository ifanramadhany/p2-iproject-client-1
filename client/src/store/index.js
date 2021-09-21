import Vue from "vue";
import Vuex from "vuex";
import deezer from "../apis/deezer";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    dataMusic: "",
    dataAddPost: "",
  },
  mutations: {
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
