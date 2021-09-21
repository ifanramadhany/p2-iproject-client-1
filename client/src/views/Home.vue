<template>
  <div class="container-home-page">
    <!-- header comp  -->
    <header-comp></header-comp>

    <div class="dashboard">
      <!-- card post  -->
      <card-post-comp></card-post-comp>
      <card-post-comp></card-post-comp>
      <card-post-comp></card-post-comp>
      <card-post-comp></card-post-comp>
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
import CardPostComp from '../components/CardPostComp.vue';
import HeaderComp from '../components/HeaderComp.vue';
// @ is an alias to /src

export default {
  name: "Home",
  components: { CardPostComp, HeaderComp },
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
  flex-direction: column;
  align-items: center;
}

.card-post {
  background-color: white;
  margin: 2%;
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
  color:rgb(36, 34, 34);
}


.like-comment {
  background-color: white;
  grid-area: like-comment;
  border-radius: 5px;
  margin: 10px;
  display: flex;
  justify-content: space-around;
}

.footer {
  background-color: black;
  grid-area: footer;
}
</style>
