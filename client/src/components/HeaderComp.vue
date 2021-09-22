<template>
  <div class="header">
    <div class="profile">
      <a @click.prevent="changeProfile()">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt=""
        />
      </a>
      <div v-if="profile" style="margin-left: 10px">
        <input class="custom-file-upload" type="file" />
        <i @click="CloseChangeProfile()" class="fas fa-times btn-x"></i>
      </div>
      <div v-if="!profile" style="margin-left: 10px">
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
  data() {
    return {
      profile: false,
    };
  },
  methods: {
    toHomePage() {
      this.$router.push("/");
    },
    changeProfile() {
      this.profile = true;
    },
    CloseChangeProfile() {
      this.profile = false
    }
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

.btn-x {
  cursor: pointer;
}

.custom-file-upload {
  width: 100px;
}
</style>
