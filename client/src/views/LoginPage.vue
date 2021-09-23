<template>
  <div id="container-register-page">
    <div id="content-register-page">
      <div class="title-app">
        <router-link to="/" style="text-decoration: none">
        <h1>SepotipaiGram</h1>
        </router-link>
        
        <h2>Login</h2>
      </div>
      <div class="wrapper-form-login">
        <form @submit.prevent="loginHandler()" id="login-form" class="form-login">
          <div class="mb-3">
            <label for="email-login" class="form-label">Email</label>
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="email-login"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="password-login" class="form-label"
              >Password</label
            >
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="password-login"
            />
          </div>
          <div class="google">
            <button
              style="margin-right: 4%"
              type="submit"
              class="btn btn-primary"
            >
              Login
            </button>
            <button
              id="regiter-page-button"
              style="background-color: gray; margin-right: 30px"
              class="btn btn-primary"
              @click="toRegisterPage()"
            >
              Register
            </button>
            <!-- button google sign in  -->
            <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess"></GoogleLogin>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleLogin from 'vue-google-login';
import { mapActions, mapState } from "vuex";
export default {
  name: 'LoginPage',
  computed: {
    ...mapState(["isLoggedIn"])
  },
  components: {
    GoogleLogin
  },
  data() {
    return {
      email: "",
      password: "",
      params: {
        client_id:
          "835876374944-femkmg6hmaihghhm9hha2finje5kenbs.apps.googleusercontent.com",
      },
      renderParams: {
        width: 250,
        height: 40,
        longtitle: true,
      },
    }
  },
  methods: {
    ...mapActions(["login", "googleLogin"]),
    async onSuccess(googleUser) {
      await this.googleLogin(googleUser)
      if(this.isLoggedIn && localStorage.getItem("access_token")) {
        this.$router.push('/');
      }
    },
    toRegisterPage() {
      this.$router.push("/register")
    },
    async loginHandler() {
      const payload = {
        email: this.email,
        password: this.password
      }
      // console.log(payload);
      await this.login(payload)
      if(this.isLoggedIn && localStorage.getItem("access_token")) {
        this.$router.push("/")
      }
    },
  }
}
</script>

<style>
  #container-register-page {
  background-image: url('../assets/background-restaurant.jpg');
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  
}


#content-register-page {
  background-color: rgba(157, 157, 157, 0.7);
  display: grid;
  grid-template-rows: 25% 75%;
  grid-template-areas: 
  'one'
  'two'
  ;
  height: auto;
  width: 50%;
  border-radius: 10px;
}

.title-app h1 {
  font-family: "Dancing Script", cursive;
  color: aliceblue;
  font-size: 50px;
}
.title-app h1:hover {
  font-family: "Dancing Script", cursive;
  color: rgb(97, 97, 97);
  font-size: 55px;
  transition: 0.1s;
}

.wrapper-form-login label{
  color: black;
}

.wrapper-add-login{
  color: black;
}

.wrapper-form-login {
  grid-area: two;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper-add-login {
  grid-area: two;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-login {
  margin-bottom: 30px;
}


.mb-3 {
  height: 10vh;
} 

.google {
  display: flex;
  align-items: center;
  justify-content: center;
}

.g-signin2 {
  margin: 15px;
}

.fas {
  color: white;
}

.btn {
  background-color: DodgerBlue; /* Blue background */
  border: none; /* Remove borders */
  padding: 8px 12px; /* Some padding */
  font-size: 15px; /* Set a font size */
  cursor: pointer; /* Mouse pointer on hover */
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: RoyalBlue;
}

.sidebar a:hover {
  color: teal;
  font-size: 18px;
  transition: 0.1s
}

#animContainer{
  height: 100vh;
}

</style>