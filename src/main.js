import { createApp } from "vue";
import App from "./App.vue";

//BOOTSTRAP

import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

//FONTAWESOME

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlay as play } from "@fortawesome/free-solid-svg-icons";
library.add(play);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
