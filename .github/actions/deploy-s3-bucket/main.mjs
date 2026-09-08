import core from "@actions/core";

function deploy() {
  core.notice(
    "Deploying static website to s3 bucket by using javascript custom action",
  );
}

deploy();
