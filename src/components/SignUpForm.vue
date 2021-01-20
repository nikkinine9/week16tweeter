<template>
  <div id="signup-form">
    <p>Email</p>
    <input type="text" id="email-input" v-model="email">
    <p>Username</p>
    <input type="text" id="username-input" v-model="username">
    <p>Password</p>
    <input type="password" id="password-input" v-model="password">
    <p>Bio</p>
    <textarea id="bio-input" v-model="bio"></textarea>
    <p>Birthday</p>
    <input type="text" id="birthday-input" placeholder="yyyy-mm-dd" v-model="birthdate">
    <button id="signup-btn" @click="signupUser">Sign Up</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "signup-form",
  data() {
    return {
      email: "",
      username: "",
      password: "",
      bio: "",
      birthdate: ""
    };
  },
  methods: {
    signupUser: function() {
      axios
        .request({
          method: "POST",
          url: "https://tweeterest.ml/api/users",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "v3tzh7hqWijLgsPMYiznht9nmJe2fFNiUIAqqgqHvwkSL"
          },
          data: {
            email: this.email,
            username: this.username,
            password: this.password,
            bio: this.bio,
            birthdate: this.birthdate
          }
        })
        .then((response) => {
          cookies.set("loginToken", response.data.loginToken);
          cookies.set("userId", response.data.userId);
          this.$router.push("/userhome");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  font-family: "Arimo", sans-serif;
  letter-spacing: 2px;
  color: darkblue;
  padding: 5px;
}
input {
  border-radius: 10%;
  padding: 5px;
  margin: 5px;
}
#birthday-input {
  text-align: center;
}
#signup-btn {
  margin: 2vh;
  padding: 5px;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  cursor: pointer;
}
#signup-btn:hover {
  transform: scale(0.9);
}
</style>