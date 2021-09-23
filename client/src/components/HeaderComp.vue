<template>
  <div class="header">
    <div v-if="isLoggedIn" class="profile">
      <a @click.prevent="changeProfile()">
        <img
          :src="userData.profileUrl"
          alt=""
        />
      </a>
      <div class="change-profile" v-if="profile" style="margin-left: 10px">
        <input @change="uploadImage" class="custom-file-upload" type="file" />
        <i @click="closeChangeProfile()" class="fas fa-times btn-x" style="padding-left: 7px"></i>
        <i @click="changeProfileHandler()" class="fas fa-check btn-x"> Change</i>
      </div>
      <div v-if="!profile" style="margin-left: 10px">
        <h3 style="font-size: 20px">{{userData.username}}</h3>
        <h3>{{userData.email}}</h3>
      </div>
    </div>
    <h1 @click="toHomePage()">SepotipaiGram</h1>
    <router-link v-if="isLoggedIn" to="/add-post">
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
      profileUrl: "",
    };
  },
  methods: {
    ...mapMutations(["CHANGE_PROFILE_FALSE"]),
    ...mapActions(["logout", "changeProfileImage"]),
    uploadImage(event) {
      // console.log(event);
      this.profileUrl = event.target.files[0];
    },
    async logoutHandler() {
      await this.logout();
      if (!this.isLoggedIn) {
        this.$router.push("/login");
        swal("logout successfully", "", "success");
      }
    },
    toHomePage() {
      this.$router.push("/");
    },
    changeProfile() {
      this.profile = true;
    },
    closeChangeProfile() {
      this.profile = false
    },
    async changeProfileHandler() {
      await this.changeProfileImage(this.profileUrl)
      if(this.changeProfileFlagger) {
        this.$router.push("/")
        this.CHANGE_PROFILE_FALSE()
        this.closeChangeProfile()
        swal("profile image has been updated", "", "success");
      }
    }

  },
  computed: {
    ...mapState(["isLoggedIn", "userData", "changeProfileFlagger"]),
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
