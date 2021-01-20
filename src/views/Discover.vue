<template>
  <div id="tweeter-discover">
    <div v-if="loginToken != undefined">
      <nav-bar-section></nav-bar-section>
      <h2 id="homepage-title">CHIRPS<br>
        <span id="tweeter"></span>
      </h2>
      <show-tweets id="show-tweets" :tweetId="tweet.tweetId"></show-tweets>
      <footer-container></footer-container>
    </div>
    <div id="login-error" v-else>
      <error-message></error-message>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import ShowTweets from "../components/ShowTweets.vue";
import NavBarSection from "../components/NavBar.vue";
import ErrorMessage from "../components/404error.vue";
import FooterContainer from "../components/Footer.vue";

export default {
  name: "disover-page",
  components: {
    NavBarSection,
    ErrorMessage,
    ShowTweets,
    FooterContainer
  },
  data() {
    return {
      loginToken: cookies.get("loginToken"),
      username: cookies.get("userId"),
      tweet: ""
    };
  }
};
</script>

<style lang="scss" scoped>
hr {
  margin: 2vh;
  background-color: black;
}
#heart {
  width: 10%;
  margin-top: 1vh;
}
#tweet-user {
  color: darkblue;
}
#homepage-title {
  margin: 3vh;
  text-align: center;
  align-items: center;
  justify-items: center;
  color: darkblue;
  font-family: "Arimo", sans-serif;
}
#show-tweets {
  margin-bottom: 5vh;
  font-family: "Arimo", sans-serif;
  color: darkblue;
}
#tweeter {
  font-family: "Arimo", cursive;
  color: black;
  font-size: 20px;
}
// DESKTOP
@media only screen and (min-width: 1020px) {
  #homepage-title {
    margin: 3vh;
    text-align: center;
    align-items: center;
    justify-items: center;
    color: darkblue;
    font-family: "Arimo", sans-serif;
  }
  #tweeter {
    font-family: "Arimo", cursive;
    color: black;
    font-size: 24px;
  }
}
</style>