import axios from "axios";

const url = "http://localhost:3000/api";
const apiUrlNHL = "https://statsapi.web.nhl.com/api/v1/";
const apiUrlNHL2 =
  "https://www.dailyfaceoff.com/_next/data/pHdvnzpuNACHYQop34zYg/teams/";

const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    " Access-Control-Allow-Methods": " GET, DELETE, HEAD, OPTIONS",
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
    return res;
  }
  async getDailyLineUps(payload) {
    var res = null;
    const teamName = payload.team.toLowerCase().replace(/ /g, "-");
    await axios.get(url + "/daily_lineups/" + teamName).then((response) => {
      res = response;
    });
    return res.data;
  }
  async insertLineups(payload) {
    const { data } = await axios.post("/daily_lineups", payload, config);
    return data;
  }
  async getlineups(payload) {
    console.log(payload);
    var res = null;
    const teamNamel = payload.teamName.toLowerCase().replace(/ /g, "-");
    console.log("teamNamel", teamNamel);
    await axios
      .get(
        "https://www.dailyfaceoff.com/_next/data/QCbC4gwcIQPVQ4S4akU2O/teams/boston-bruins/line-combinations.json?slug=boston-bruins",
        { mode: "cors" }
      )
      .then((response) => {
        console.log("response>>>", response);
        res = response;
      })
      .catch((err) => {
        console.log("response>>>>>E", err);
      });
    return res.data;
  }
}

export const api = new Api();
