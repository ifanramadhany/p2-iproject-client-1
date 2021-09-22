<template>
  <div class="container-home-page">
    <!-- header comp  -->
    <header-comp></header-comp>

    <div class="dashboard">
      <!-- card post  -->
      <div class="card-post">
        <div class="main-post">
          <div class="album">
            <iframe
              v-if="dataAddPost"
              title="deezer-widget"
              :src="dataAddPost.embed"
              width="410"
              height="230"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media; clipboard-write"
            ></iframe>
          </div>
          <div v-if="!dataAddPost" class="title">Title</div>
          <div v-if="!dataAddPost" class="artist">Artist</div>
          <div v-if="dataAddPost" class="title">{{ dataAddPost.title }}</div>
          <div v-if="dataAddPost" class="artist">{{ dataAddPost.artist }}</div>
          <label v-if="dataAddPost" for="exampleFormControlTextarea1"
            >Caption</label
          >
          <div class="embed">
            <textarea
              v-model="caption"
              v-if="dataAddPost"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="2"
              placeholder="caption here.."
            ></textarea>
          </div>
        </div>

        <div class="post-add">
          <button
            v-if="dataAddPost"
            @click="addPostToDbHandler()"
            style="margin-bottom: 3px"
            type="submit"
            class="btn btn-primary"
          >
            Post
          </button>
        </div>
      </div>
      <div class="card-post-2">
        <div class="">
          <div class="form-outline">
            <label class="form-label" for="form1"
              >Please Search Music First..</label
            >
          </div>
          <div class="search">
            <input
              v-model="search"
              type="search"
              id="form1"
              class="form-control"
              placeholder="search.. "
            />
            <button
              @click="searchHandler()"
              type="button"
              class="btn btn-primary"
            >
              <i class="fas fa-search"></i>
            </button>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Artist</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <!-- searc card  -->
              <search-card></search-card>
            </tbody>
          </table>
          <button
            v-if="dataAddPost"
            @click="clear()"
            style="margin-bottom: 3px"
            type="submit"
            class="btn btn-secondary"
          >
            Clear
          </button>
        </div>
      </div>
    </div>

    <div class="footer">
      <img
        src="https://i.postimg.cc/4xGgG0t1/hacktiv-footer-black.png"
        alt=""
        style="height: 60px"
      />
    </div>
  </div>
</template>

<script>
import SearchCard from "../components/SearchCard.vue";
import { mapActions, mapMutations, mapState } from "vuex";
import HeaderComp from "../components/HeaderComp.vue";
export default {
  components: { SearchCard, HeaderComp },
  name: "AddPostPage",
  data() {
    return {
      search: "",
      caption: "",
    };
  },
  computed: {
    ...mapState(["dataAddPost", "dataMusic", "addPostFlagger"]),
  },
  methods: {
    ...mapMutations(["CLEAR_DATA_MUSIC", "POST_FLAGGER_FALSE"]),
    ...mapActions(["getMusic", "addPostToDb", "fetchPostData"]),
    async searchHandler() {
      console.log(this.search);
      await this.getMusic(this.search);
    },
    async addPostToDbHandler() {
      const payload = {
        title: this.dataMusic.title,
        artist: this.dataMusic.artist,
        embedUrl: this.dataMusic.embed,
        caption: this.caption
      }
      await this.addPostToDb(payload)
      if(this.addPostFlagger) {
        this.$router.push("/")
        this.POST_FLAGGER_FALSE();
        this.fetchPostData();
        swal("add new post successfully", "", "success");
      }
    },
    clear() {
      this.CLEAR_DATA_MUSIC();
      console.log("anjay");
    },
  },
};
</script>

<style scoped>
.container-home-page {
  height: 100vh;
  /* width: 100vw; */
  background-color: white;
  display: grid;

  grid-template-rows: 1.2fr 8fr 1fr;
  grid-template-areas:
    "header"
    "dashboard"
    "footer";
}

span {
  color: rgb(36, 34, 34);
}

.header {
  background-color: rgb(85, 85, 85);
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.header a:hover {
  text-decoration: none;
  color: teal;
  font-size: 18px;
  transition: 0.1s;
}

.header a {
  background-color: white;
  padding: 6px;
  border-radius: 15px;
}

.header h1 {
  font-family: "Dancing Script", cursive;
  color: aliceblue;
  font-size: 50px;
}

.header a {
  color: aliceblue;
  margin-right: 2%;
}

.header a:hover {
  color: rgb(36, 34, 34);
  margin-right: 2%;
}

.profile {
  display: flex;
  /* background-color: aqua; */
  margin-left: 1%;
}

.profile h3 {
  font-size: small;
  color: aliceblue;
}

.profile img {
  height: 40px;
  border-radius: 50%;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dashboard {
  background-color: rgb(165, 165, 165);
  grid-area: dashboard;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}

.card-post {
  background-color: white;
  width: 500px;
  height: 500px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: grid;
  grid-template-rows: 8fr 2fr;
  grid-template-areas:
    "main-post"
    "like-comment";
}

.card-post-2 {
  background-color: white;
  width: 300px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
}

.search {
  padding: 10px;
  display: flex;
}

.main-post {
  background-color: gray;
  grid-area: main-post;
  border-radius: 10px;
  margin: 20px;
  display: grid;
  grid-template-rows: 9fr 1fr 1fr 2fr;
  grid-template-areas:
    "album"
    "title"
    "artist"
    "embed";
}

.album {
  background-color: black;
  border-radius: 10px;
  margin: 13px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.title {
  background-color: gray;
  /* border-top: solid; */
  /* border-left: solid; */
  /* border-right: solid; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-radius: 4px; */
  color: white;
}

.artist {
  background-color: gray;
  /* border-style: solid; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-radius: 4px; */
  color: white;
}

.embed {
  background-color: gray;
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.embed p {
  font-size: small;
  color: rgb(36, 34, 34);
}

.post-add {
  background-color: white;
  grid-area: like-comment;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
}

.footer {
  background-color: black;
  grid-area: footer;
}
</style>
