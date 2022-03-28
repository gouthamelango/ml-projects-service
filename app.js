/**
 * name : app.js.
 * author : Aman Karki.
 * created-date : 13-July-2020.
 * Description : Root file.
 */

require("dotenv").config();

// express
const express = require("express");
const app = express();

// Health check
require("./healthCheck")(app);

// Setup application config, establish DB connections and set global constants.
require("./config/connections");
require("./config/globals")();

// Check if all environment variables are provided.
const environmentData = require("./envVariables")();

if (!environmentData.success) {
  console.log("Server could not start . Not all environment variable is provided");
  process.exit();
}

//required modules
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const expressValidator = require('express-validator');

//To enable cors
app.use(cors());
app.use(expressValidator())

app.use(fileUpload());
app.use(bodyParser.json({ limit: "50MB" }));
app.use(bodyParser.urlencoded({ limit: "50MB", extended: false }));

app.use(express.static("public"));

app.all('*', (req, res, next) => {
  console.log({"Debugging ML Projects Service": true});
  console.log("-------Request log starts here------------------");
  console.log("Request URL: ", req.url);
  console.log("Request Headers: ", JSON.stringify(req.headers));
  console.log("Request Body: ", JSON.stringify(req.body));
  // console.log("Request Files: ", req.files);
  console.log("-------Request log ends here------------------");
  next();
});


const userProjectsHelper = require("./module/userProjects/helper");

app.post('/dhavan', async(req, res) => {



                let createdProject = await userProjectsHelper.add(
                  req.body,
                  "f:979738b7-253c-4adf-9673-a857eeb86115:b3649713-cfce-4a89-83dc-7b19730a6ee8",
                  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImFjY2Vzc3YxX2tleTEifQ.eyJhdWQiOiJodHRwczovL3N0YWdpbmcuc3VuYmlyZGVkLm9yZy9hdXRoL3JlYWxtcy9zdW5iaXJkIiwic3ViIjoiZjo5Nzk3MzhiNy0yNTNjLTRhZGYtOTY3My1hODU3ZWViODYxMTU6YjM2NDk3MTMtY2ZjZS00YTg5LTgzZGMtN2IxOTczMGE2ZWU4Iiwicm9sZXMiOlt7InJvbGUiOiJQVUJMSUMiLCJzY29wZSI6W119XSwiaXNzIjoiaHR0cHM6Ly9zdGFnaW5nLnN1bmJpcmRlZC5vcmcvYXV0aC9yZWFsbXMvc3VuYmlyZCIsInR5cCI6IkJlYXJlciIsImV4cCI6MTYzODYwMTk2OCwiaWF0IjoxNjM4NTE1NTY4fQ.XmgALjwk9XxAAg6DZL4Nh_OF5cOAxdqMRmhyunLOxfDufpvenszW2JG1i05p83m-EVDPCkmewwtMmqJZETdn1VAMluYcNw2Hwl4qPVyoKEJaupYH7EKJmDCvQcnRNQ21hiD5AEYd990XCp1YPoZTL_W9G9JgmuW9anR6wINJzMXaxwAAbNPfJNzcsGbhDxWnAqsbhVOTWS74eOVDde-jkMZd0oM_Mq75DVf-lQmvnjJTcpm8yGhlB8EyqwanbV21FbiZmGlkhFY43iHT6i82X-fE_58PA2OWtnjYImLJaD1oB2THSCj4a0B12PEYwjRuaTl_KkmrCfmRDFWFw2ZHXg",
                  req.headers["x-app-id"]  ? 
                  req.headers["x-app-id"]  : 
                  req.headers.appname ? req.headers.appname : "",
                  req.headers["x-app-ver"] ? 
                  req.headers["x-app-ver"] : 
                  req.headers.appversion ? req.headers.appversion : ""
              );

              createdProject.result = createdProject.data;


                res.send(createdProject);
})
 



// Router module
const router = require("./routes");

//add routing
router(app);

//listen to given port
app.listen(process.env.APPLICATION_PORT, () => {
  console.log("Environment : " + process.env.APPLICATION_ENV);
  console.log("Application is running on the port : " + process.env.APPLICATION_PORT);
});

module.exports = app;