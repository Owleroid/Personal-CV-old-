var firstCanvas = document.getElementById("Communication");
var communicationBar = firstCanvas.getContext("2d");

communicationBar.beginPath();
communicationBar.arc(60,60,52,0,2*Math.PI);
communicationBar.lineWidth="5";
communicationBar.strokeStyle="#64657a";
communicationBar.stroke();

communicationBar.beginPath();
communicationBar.arc(60,60,52,0,2*Math.PI*0.8);
communicationBar.lineWidth="5";
communicationBar.strokeStyle="#76b76d";
communicationBar.stroke();

communicationBar.font = "10px Open Sans";
communicationBar.fillStyle = "#ffffff";
communicationBar.textAlign = "center";
communicationBar.fillText("COMMUNICATION", 60, 65);

var secondCanvas = document.getElementById("Teamwork");
var teamworkBar = secondCanvas.getContext("2d");

teamworkBar.beginPath();
teamworkBar.arc(60,60,52,0,2*Math.PI);
teamworkBar.lineWidth="5";
teamworkBar.strokeStyle="#64657a";
teamworkBar.stroke();

teamworkBar.beginPath();
teamworkBar.arc(60,60,52,0,2*Math.PI*0.90);
teamworkBar.lineWidth="5";
teamworkBar.strokeStyle="#76b76d";
teamworkBar.stroke();

teamworkBar.font = "10px Open Sans";
teamworkBar.fillStyle = "#ffffff";
teamworkBar.textAlign = "center";
teamworkBar.fillText("TEAMWORK", 60, 65);

var thirdCanvas = document.getElementById("Patience");
var patienceBar = thirdCanvas.getContext("2d");

patienceBar.beginPath();
patienceBar.arc(60,60,52,0,2*Math.PI);
patienceBar.lineWidth="5";
patienceBar.strokeStyle="#64657a";
patienceBar.stroke();

patienceBar.beginPath();
patienceBar.arc(60,60,52,0,2*Math.PI*1);
patienceBar.lineWidth="5";
patienceBar.strokeStyle="#76b76d";
patienceBar.stroke();

patienceBar.font = "10px Open Sans";
patienceBar.fillStyle = "#ffffff";
patienceBar.textAlign = "center";
patienceBar.fillText("PATIENCE", 60, 65);

var fourthCanvas = document.getElementById("Accountability");
var accountabilityBar = fourthCanvas.getContext("2d");

accountabilityBar.beginPath();
accountabilityBar.arc(60,60,52,0,2*Math.PI);
accountabilityBar.lineWidth="5";
accountabilityBar.strokeStyle="#64657a";
accountabilityBar.stroke();

accountabilityBar.beginPath();
accountabilityBar.arc(60,60,52,0,2*Math.PI*0.85);
accountabilityBar.lineWidth="5";
accountabilityBar.strokeStyle="#76b76d";
accountabilityBar.stroke();

accountabilityBar.font = "10px Open Sans";
accountabilityBar.fillStyle = "#ffffff";
accountabilityBar.textAlign = "center";
accountabilityBar.fillText("ACCOUNTABILITY", 60, 65);
