<template>
  <div>
    <div id="show-tweets">
      <h4 @click="userFollows()" id="who-you-follow">WHO YOU FOLLOW</h4>
      <br>
      <div v-if="users.length > 0">
        <div id="tweet-container" v-for="user in users" :key="user.userId">
          <h3 class="user-username">{{ user.username }}</h3>
          <h4 class="content"><u>Bio</u>: {{ user.bio }}</h4>
          <h4 class="content"><u>Birthdate</u>: {{ user.birthdate }}</h4>
          <h4 class="content"><u>Email</u>: {{ user.email }}</h4>
          <br>
        </div>
      </div>
      <h2 id="no-followers-msg" v-else>
        This looks empty :( <br><br><br>
        Click <u>Who You Follow</u><br><br>
        OR <br><br>
        Check out <u>Discover</u> to find tweeters to follow!
      </h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "following-page",
  data() {
    return {
      loginToken: cookies.get("loginToken"),
      users: [],
      userId: cookies.get("userId")
    };
  },
  mounted: function() {
    this.userFollows();
  },
  methods: {
    userFollows: function() {
      axios
        .request({
          method: "GET",
          url: "https://tweeterest.ml/api/follows",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "v3tzh7hqWijLgsPMYiznht9nmJe2fFNiUIAqqgqHvwkSL"
          },
          params: {
            userId: this.userId
          }
        })
        .then(response => {
          console.log(response);
          this.users = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#show-tweets {
  margin-bottom: 5vh;
}
#who-you-follow {
  background-color: #f0f0f0;
  color: darkblue;
  border: 1px solid black;
  padding: 5px;
  border-radius: 7%;
  cursor: pointer;
  width: 50%;
  margin-left: 25%;
  margin-top: 7vh;
  text-align: center;
  font-family: "Arimo", sans-serif;
}
#show-tweets-btn {
  background-color: #f0f0f0;
  color: darkblue;
  border: 1px solid black;
  padding: 5px;
  border-radius: 7%;
  cursor: pointer;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  width: 50%;
  margin-left: 25%;
  margin-top: 7vh;
  text-align: center;
  font-family: "Arimo", sans-serif;
}
#show-tweets-btn:hover {
  transform: scale(0.9);
}
.tweet-btn {
  background-color: #f0f0f0;
  color: black;
  padding: 5px;
  border-radius: 7%;
  cursor: pointer;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  width: 30%;
  text-align: center;
  margin: 1vh;
}
.tweet-btn:hover {
  transform: scale(0.9);
}
#delete-edit-post {
  align-items: center;
  justify-items: center;
  display: grid;
}
#tweet-container {
  border: 1px solid black;
  margin: 7px;
  padding: 5px;
  font-family: "Arimo", sans-serif;
  color: darkblue;
  line-height: 4vh;
}
hr {
  margin: 2vh;
  background-color: black;
}
#heart {
  width: 10%;
  margin-top: 1vh;
}
#update-comments {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 2fr;
}
#no-followers-msg {
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: darkblue;
  margin: 5vh;
}
.user-username {
  color: darkblue;
}
.content {
  color: black;
}
//TABLET
@media only screen and (min-width: 670px) {
  #show-tweets-btn {
    background-color: #f0f0f0;
    color: darkblue;
    border: 1px solid black;
    padding: 5px;
    border-radius: 7%;
    cursor: pointer;
    transform: perspective(1px) translateZ(0);
    transition-duration: 0.3s;
    transition-property: transform;
    width: 25%;
    margin-left: 37.5%;
    margin-top: 7vh;
    text-align: center;
    font-family: "Arimo", sans-serif;
  }
  #show-tweets-btn:hover {
    transform: scale(0.9);
  }
  #tweet-container {
    border: 1px solid black;
    margin: 7px;
    padding: 5px;
    font-family: "Arimo", sans-serif;
    width: 75%;
    margin-left: 12.5%;
  }
  #who-you-follow {
    background-color: #f0f0f0;
    color: darkblue;
    border: 1px solid black;
    padding: 5px;
    border-radius: 7%;
    cursor: pointer;
    width: 25%;
    margin-left: 37.5%;
    margin-top: 7vh;
    text-align: center;
    font-family: "Arimo", sans-serif;
  }
}
//DESKTOP
@media only screen and (min-width: 1020px) {
  #tweet-container {
    border: 1px solid black;
    margin: 7px;
    padding: 5px;
    font-family: "Arimo", sans-serif;
    width: 60%;
    margin-left: 20%;
  }
  #show-tweets-btn {
    width: 10%;
    margin-left: 45%;
  }
  #who-you-follow {
    background-color: #f0f0f0;
    color: darkblue;
    border: 1px solid black;
    padding: 5px;
    border-radius: 7%;
    cursor: pointer;
    width: 10%;
    margin-left: 45%;
    margin-top: 7vh;
    text-align: center;
    font-family: "Arimo", sans-serif;
  }
}
</style>