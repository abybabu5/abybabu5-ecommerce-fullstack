import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-e-clone-ad92b.cloudfunctions.net/api'
    //'http://localhost:5001/e-clone-ad92b/us-central1/api'
});

export default instance;
