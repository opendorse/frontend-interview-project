import axios from "axios";

axios.defaults.headers.common = { "Content-Type": "application/json" };

axios.defaults.baseURL =
  "https://od-app-sampleproject-ncus.azurewebsites.net/api";
