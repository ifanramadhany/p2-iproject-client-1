<template>
  <div class="container-home-page">
    <div class="header">
      <div class="profile">
        <a>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt=""
          />
        </a>
        <div style="margin-left: 10px">
          <h3 style="font-size: 20px">amad1</h3>
          <h3>amad1@mail.com</h3>
        </div>
      </div>
      <h1>SepotipaiGram</h1>
      <router-link to="/">
        <span class="las la-plus-circle"></span>
        <span>Add Post</span>
      </router-link>
      <router-link to="/favorite">
        <span class="las la-music"></span>
        <span>Enjoy Music</span>
      </router-link>
      <div class="icon">
        <a href="" @click.prevent="logoutHandler()"><span>Logout</span></a>
        <img src="https://img.icons8.com/material/35/000000/exit.png" />
      </div>

      <div class="icon">
        <router-link to="/login" href=""><span>Signin</span></router-link>
        <img
          src="https://img.icons8.com/ios-filled/35/000000/login-rounded.png"
        />
      </div>
    </div>

    <div class="dashboard">
      <!-- card post  -->
      <div class="card-post">
        <div class="main-post">
          <div class="album">
            <iframe
              title="deezer-widget"
              src="https://widget.deezer.com/widget/dark/track/1425844092"
              width="410"
              height="230"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media; clipboard-write"
            ></iframe>
          </div>
          <div class="title">STAY</div>
          <div class="artist">The Kid Laroy</div>
          <label for="exampleFormControlTextarea1">your caption here..</label>
          <div class="embed">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="2"
            ></textarea>
          </div>
        </div>

        <div class="post-add">
          <button
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
            <label class="form-label" for="form1">Please Search Music First..</label>
          </div>
          <div class="search">
            <input type="search" id="form1" class="form-control" />
            <button type="button" class="btn btn-primary">
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
    <search-card></search-card>
    <search-card></search-card>
    
  </tbody>
</table>
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
import SearchCard from '../components/SearchCard.vue';
export default {
  components: { SearchCard },
  name: "AddPostPage",
};
</script>

<style>
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

.search{
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
