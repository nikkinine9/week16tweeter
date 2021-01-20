<template>
  <div>
    <div v-if="loginToken != undefined">
      <nav-bar-section></nav-bar-section>
      <profile-page></profile-page>
      <hr>
      <delete-profile></delete-profile>
      <footer-container></footer-container>
    </div>
    <div id="login-error" v-else>
      <error-message></error-message>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import NavBarSection from "../components/NavBar.vue";
import ProfilePage from "../components/EditProfile.vue";
import DeleteProfile from "../components/DeleteProfile.vue";
import FooterContainer from "../components/Footer.vue";
import ErrorMessage from "../components/404error.vue";
export default {
  name: "user-profile",
  components: {
    NavBarSection,
    ProfilePage,
    DeleteProfile,
    ErrorMessage,
    FooterContainer
  },
  data() {
    return {
      loginToken: cookies.get("loginToken")
    };
  }
};
</script>

<style lang="scss" scoped>
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
hr {
  margin-top: 5vh;
  margin-bottom: 5vh;
  background-color: black;
  height: 1px;
  width: 75%;
  margin-left: 12.5%;
}
</style>