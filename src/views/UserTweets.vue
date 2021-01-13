<template>
  <div>
    <div v-if="loginToken != undefined">
      <nav-bar-section />
      <following-tweets :tweetId="tweet.tweetId" />
      <footer-container />
    </div>
    <div id="login-error" v-else>
      <error-message />
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
// import ErrorMessage from "../components/404error.vue";
// import FollowingTweets from "../components/FollowingTweets.vue";
export default {
  name: "user-tweets-page",
  components: {
    // ErrorMessage,
    // FollowingTweets,
  },
  data() {
    return {
      loginToken: cookies.get("loginToken"),
      tweet: ""
    };
  }
};
</script>

<style lang="scss" scoped></style>