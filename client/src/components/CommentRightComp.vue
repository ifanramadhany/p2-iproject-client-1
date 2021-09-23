<template>
  <div class="comments-child">
    <div v-if="userData.id === comment.UserId" class="message-right">
      <h6 style="font-size: 12px">
        {{comment.username}}
        <img
          :src="comment.profileUrl"
          alt=""
          width="25px"
          style="border-radius: 5px; margin: 2px"
        />
      </h6>
      <h6 style="font-family: arial; font-weight: bold">
        {{comment.comment}}
      </h6>
    </div>

    <div v-if="userData.id !== comment.UserId" class="message-left">
      <h6 style="font-size: 12px">
        <img
          :src="comment.profileUrl"
          alt=""
          width="25px"
          style="border-radius: 5px; margin: 2px"
        />{{comment.username}}
      </h6>
      <h6 style="font-family: arial; font-weight: bold">
        {{comment.comment}}
      </h6>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "CommentRightComp",
  props: ["comment"],
  computed: {
    ...mapState(["userData"]),
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
  width: 500px;
  height: 450px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: grid;
  grid-template-rows: 1fr 8fr 1.6fr;
  grid-template-areas:
    "title"
    "comments"
    "input";
}

.title-comment {
  /* background-color: green; */
  grid-area: title;
}

.comments-comment {
  background-color: gray;
  grid-area: comments;
  overflow-y: scroll;
}

.comments-child {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  text-align: right;
}

.message-right {
  border-radius: 10px;
  background-color: white;
  margin: 15px;
  padding: 2px 10px;
  max-width: 75%;
  /* display:inline-block; */
}

.message-left {
  border-radius: 10px;
  background-color: white;
  align-self: flex-start;
  margin: 15px;
  padding: 2px 10px;
  text-align: left;
  max-width: 75%;
  /* display:inline-block; */
}

.input-comment {
  background-color: rgb(189, 189, 189);
  grid-area: input;
  border-radius: 0 0 10px 10px;
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

/* chat feature */
.input_msg_write input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  /* border: medium none;
  color: #4c4c4c; */
  font-size: 15px;
  min-height: 48px;
  width: 90%;
  padding: 5px;
  margin: 10px;
}

.type_msg {
  border-top: 1px solid #c4c4c4;
  position: relative;
}
.msg_send_btn {
  background: #05728f none repeat scroll 0 0;
  border: medium none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  height: 33px;
  position: absolute;
  right: 40px;
  top: 17px;
  width: 33px;
}
.messaging {
  padding: 0 0 50px 0;
}
.msg_history {
  height: 516px;
  overflow-y: auto;
}
</style>
