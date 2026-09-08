const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

function deploy() {
  core.notice(
    "Deploying static website to s3 bucket by using javascript custom action",
  );
}

deploy();
