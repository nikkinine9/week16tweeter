<template>
  <div>
    <div id="navbar">
      <router-link to="/userhome"><img id="tweeter-logo" src="../assets/home.png" alt="A Tweeter Logo"></router-link>
      <h4 id="logout-btn" @click="logout">Logout</h4> |
      <router-link to="/profile"><h4 id="nav-link">Profile</h4></router-link> |
      <router-link to="/userfeed"><h4 id="nav-link">Timeline</h4></router-link> |
      <router-link to="/discover"><h4 id="nav-link">Tweeter Feed</h4></router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "navbar-section",
  methods: {
    logout: function() {
      axios
        .request({
          method: "DELETE",
          url: "https://tweeterest.ml/api/login",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "v3tzh7hqWijLgsPMYiznht9nmJe2fFNiUIAqqgqHvwkSL"
          },
          data: {
            loginToken: cookies.get("loginToken")
          }
        })
        .then(response => {
          console.log(response);
          cookies.remove("loginToken");
          cookies.remove("userId");
          this.$router.push("/");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
// MOBILE
#logout-btn {
  color: white;
  padding: 3px;
  border-radius: 5%;
  cursor: pointer;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
}
#logout-btn:hover {
  transform: scale(0.9);
}
a:visited {
  color: white;
  font-family: "Arimo", sans-serif;
}
a:link {
  color: white;
  font-family: "Arimo", sans-serif;
  text-decoration: none;
}
#homepage-title {
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: darkblue;
  margin-top: 5vh;
  font-size: 40px;
}
#navbar {
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  background-color: darkblue;
  padding: 10px;
  font-family: "Arimo", sans-serif;
  color: white;
  column-gap: 2px;
}
// TABLET
@media only screen and (min-width: 670px) {
}
// DESKTOP
@media only screen and (min-width: 1020px) {
  #navbar {
    display: grid;
    align-items: center;
    justify-items: center;
    text-align: center;
    grid-template-columns: 2fr 1fr 2fr 1fr 1fr 1fr 1fr 1fr;
    padding: 10px;
    font-family: "Arimo", sans-serif;
    color: white;
  }
  #nav-link {
    display: inline-block;
    vertical-align: middle;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
    font-size: 18px;
    padding: 7px;
  }
  #nav-link:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 51%;
    right: 51%;
    bottom: 0;
    background: white;
    height: 3px;
    transition-property: left, right;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  #nav-link:hover:before,
  #nav-link:focus:before,
  #nav-link:active:before {
    left: 0;
    right: 0;
  }
}
</style>