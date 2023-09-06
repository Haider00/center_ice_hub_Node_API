import axios from "axios";

const url = "http://localhost:3000/api";
const apiUrlNHL = "https://statsapi.web.nhl.com/api/v1/";

const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};
axios.defaults.baseURL = url;
class Api {
  async setToken(payload) {
    config.headers.Authorization = payload.token;
    return "token";
  }
  async userLogin(payload) {
    const { data } = await axios.post("/login", payload, config);
    return data;
  }
  async getTeams(req, res) {
    const { data } = await axios.get(apiUrlNHL + "teams");
    const teamNames = data.teams.map((team) => team.name);
    const sortedArray = teamNames.sort();
    return sortedArray;
  }
  async getTeamPlayers(code) {
    var res = null;
    var url = apiUrlNHL + "teams/" + code + "/roster";
    await axios.get(url).then((response) => {
      res = response;
    });
    console.log("res", res);
    return res;
  }
}

export const api = new Api();
