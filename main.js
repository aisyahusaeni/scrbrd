import ScoreboardView from "./scoreboard/ScoreboardViewjs";


let playerOneScore= 0;
let playerTwoScore= 0;
const root = document.querySelector("app");
const view= new ScoreboardView(root,"Player One", "Player Two");

