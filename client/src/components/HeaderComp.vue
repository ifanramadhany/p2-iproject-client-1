<template>
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
    <h1 @click="toHomePage()">SepotipaiGram</h1>
    <router-link to="/add-post">
      <span class="las la-plus-circle"></span>
      <span>Add Post</span>
    </router-link>
    <router-link to="/enjoy-music">
      <span class="las la-music"></span>
      <span>Enjoy Music</span>
    </router-link>
    <div v-if="isLoggedIn" class="icon">
      <a href="" @click.prevent="logoutHandler()"><span>Logout</span></a>
      <img src="https://img.icons8.com/material/35/000000/exit.png" />
    </div>

    <div v-if="!isLoggedIn" class="icon">
      <router-link to="/login" href=""><span>Signin</span></router-link>
      <img
        src="https://img.icons8.com/ios-filled/35/000000/login-rounded.png"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "HeaderComp",
  methods: {
    toHomePage() {
      this.$router.push("/");
    },
  },
  computed: {
    ...mapState(["isLoggedIn"]),
  },
};
</script>

<style>
.header h1 {
  cursor: pointer;
}
</style>
