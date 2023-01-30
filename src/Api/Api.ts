// Base url from env file to make request to server
const baseUrl = process.env.REACT_APP_BASEURL;

const api = {
    async getBallotData() {
        const res = await fetch(`${baseUrl}api/getBallotData`);
        return await res.json();
    }
  };
  
  export default api;