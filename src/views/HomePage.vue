<template>
  <div>
    <h1
      id="homepage-title"
    >
      <i>Tweeter</i>
    </h1>
    <div
      id="homepage-container"
    >
      <h4>
        What are other tweeters talking about right now?<br /><br /><br />
      </h4>
      <br />
      <img
        id="twt-photo-gif"
        src="../assets/post-tweet.png"
        alt="Tweeter Social Media Icon GIF"
      />
      <br />
      <br />
    </div>
    <div id="bottom-container">
      <div id="first-container">
        <button id="homepage-btn">
          <router-link to="/login">Have an account? Login Here</router-link>
        </button>
        <button id="homepage-btn">
          <router-link to="/signup">Explore Tweeter</router-link>
        </button>
      </div>
      <div id="last-container">
        <h3>Let's see what's happening...</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homepage-page",
  components: {
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
// MOBILE
body {
  background-color: #f0f0f0;
  background-image: url("../assets/background2.png");
  background-size: 100%;
}
a:visited {
  color:darkblue;
  font-family: "Arimo", sans-serif;
}
a:link {
  color: darkblue;
  font-family: "Arimo", sans-serif;
}
#homepage-title {
  text-align: center;
  font-family: 'Press Start 2P', cursive;
  color: black;
  margin-top: 5vh;
  font-size: 28px;
  align-items: center;
  justify-items: center;
}
#tweeter {
  font-family: 'Press Start 2P', cursive;
  color: black;
  line-height: 1vh;
}
#homepage-container {
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: darkblue;
  margin-top: 2vh;
  font-size: 20px;
  width: 40%;
  margin-left: 30%;
  margin-top: 5vh;
  background-color: #f0f0f0;
  background-image: url("../assets/background2.png");
  background-size: 1000px;
  align-items: center;
  justify-items: center;
}
#first-container {
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  grid-template-columns: 1fr 1fr;
  margin: 10px;
  background-color: #f0f0f0;
  background-image: url("../assets/background2.png");
  background-size: 100%;
  color: darkblue;
}
#last-container {
  text-align: center;
  font-family: "Arimo", sans-serif;
  color: darkblue;
  margin-top: 8vh;
  font-size: 25px;
  width: 40%;
  margin-left: 30%;
  background-color: #f0f0f0;
  background-image: url("../assets/background2.png");
  background-size: 100%;
}
#bottom-container {
  background-color: #f0f0f0;
  background-image: url("../assets/background2.png");
  background-size: 100%;
  padding: 20px;
}
#homepage-btn {
  background-color: #f0f0f0;
  background-image: url("../assets/background2.png");
  background-size: 100%;
  color: black;
  border: 1px solid black;
  width: 60%;
  text-align: center;
  font-family: "Arimo", sans-serif;
  padding: 5px;
  border-radius: 10%;
  font-size: 16px;
}
#twt-photo-gif {
  width: 100%;
  border-radius: 50%;
}
#twt-photo {
  width: 75%;
  margin: 5vh;
  margin-left: 12.5%;
}
// TABLET
@media only screen and (min-width: 670px) {
  #twt-photo-gif {
    width: 75%;
    border-radius: 50%;
  }
  #tweeter {
    font-size: 28px;
  }
}
// DESKTOP
@media only screen and (min-width: 1020px) {
  a:visited {
    color: darkblue;
  }
  a:link {
    color: darkblue;
  }
  #homepage-title {
    margin-top: 5vh;
    font-size: 40px;
    align-items: center;
    justify-items: center;
  }
  #homepage-container {
    text-align: center;
    font-family: "Arimo", sans-serif;
    color: darkblue;
    margin-top: 2vh;
    font-size: 40px;
    width: 40%;
    margin-left: 30%;
    align-items: center;
    justify-items: center;
  }
  #first-container {
    display: grid;
    align-items: center;
    justify-items: center;
    text-align: center;
    grid-template-columns: 1fr 1fr;
  }
  #last-container {
    text-align: center;
    font-family: "Arimo", sans-serif;
    color: darkblue;
    margin-top: 5vh;
    margin-bottom: 3vh;
    font-size: 40px;
    width: 40%;
    margin-left: 30%;
  }
  #bottom-container {
    padding: 20px;
  }
  #homepage-btn {
    color: black;
    border: 1px solid black;
    width: 30%;
    margin-top: 7vh;
    text-align: center;
    font-family: "Arimo", sans-serif;
    padding: 5px;
    border-radius: 10%;
    font-size: 16px;
  }
  #twt-photo-gif {
    width: 50%;
    align-items: center;
    justify-items: center;
    border-radius: 50%;
  }
}
</style>