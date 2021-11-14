import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-clone-a85db.cloudfunctions.net/api',
  // 'http://localhost:5001/clone-a85db/us-central1/api'
});

export default instance;
