import Vue from "vue";
import VueRouter from "vue-router";
import SignUpPage from "../views/SignUp.vue";
import LoginPage from "../views/Login.vue";
import HomePage from "../views/HomePage.vue";
import UserHomePage from "../views/UserHomePage.vue";
import ProfilePage from "../views/Profile.vue";
import UserTweetsPage from "../views/UserTweets.vue";
import DiscoverPage from "../views/Discover.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/signup",
        name: "signup-page",
        component: SignUpPage,
    },
    {
        path: "/login",
        name: "login-page",
        component: LoginPage,
    },
    {
        path: "/userhome",
        name: "user-homepage",
        component: UserHomePage,
    },
    {
        path: "/profile",
        name: "user-profile",
        component: ProfilePage,
    },
    {
        path: "/userfeed",
        name: "user-tweets-page",
        component: UserTweetsPage,
    },
    {
        path: "/",
        name: "homepage-page",
        component: HomePage,
    },
    {
        path: "/discover",
        name: "discover-page",
        component: DiscoverPage,
    },
];

const router = new VueRouter({
    routes,
});

export default router;