<template>
  <div>
    <div v-if="loginToken != undefined">
      <nav-bar-section></nav-bar-section>
      <div v-for="user in users" :key="user.userId">
        <p>Email: {{ user.email }}</p>
        <p>Username: {{ user.username }}</p>
        <p :userBio="user.bio">Bio: {{user.bio }}</p>
        <p>birthdate: {{ user.birthdate }}</p>
        <p> userId: {{user.userId}}</p><br>
      </div>
      <following-page></following-page>
      <footer-container></footer-container>
    </div>
    <div id="login-error" v-else>
      <error-message></error-message>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import FollowingPage from "../components/Following.vue";
import NavBarSection from "../components/NavBar.vue";
import FooterContainer from "../components/Footer.vue";
import ErrorMessage from "../components/404error.vue";

export default {
  name: "user-homepage",
  components: {
    NavBarSection,
    FooterContainer,
    FollowingPage,
    ErrorMessage,
  },
  data() {
    return {
      loginToken: cookies.get("loginToken"),
      users: [],
                bioUpdate: "",
                password: "",
                show: false,
                userBio: ""
    };
  }
};
</script>

<style lang="scss" scoped>
//MOBILE
* {
  margin: 0;
  padding: 0;
}
a:visited {
  color: darkblue;
  font-family: "Arimo", sans-serif;
}
a:link {
  color: darkblue;
  font-family: "Arimo", sans-serif;
}
//TABLET
@media only screen and (min-width: 670px) {
}
</style>