import * as core from "@actions/core";
import * as github from "@actions/github";
import * as exec from "@actions/exec";

function deploy() {
  // Get input values from the action's metadata file
  const bucketName = core.getInput("bucket-name", { required: true });
  const bucketRegion = core.getInput("bucket-region", { required: true });
  const deployFolder = core.getInput("deploy-folder", { required: true });

  // Log the input values for debugging purposes
  core.notice(`Bucket Name: ${bucketName}`);
  core.notice(`Bucket Region: ${bucketRegion}`);
  core.notice(`Deploy Folder: ${deployFolder}`);

  // // Check if the deploy folder exists
  // const fs = require("fs");
  // if (!fs.existsSync(deployFolder)) {
  //   core.setFailed(`Deploy folder "${deployFolder}" does not exist.`);
  //   return;
  // }

  // Log the deployment details
  core.notice(
    `Deploying static website from "${deployFolder}" to S3 bucket "${bucketName}" in region "${bucketRegion}".`,
  );

  // get the current GitHub context
  const context = github.context;
  core.notice(`GitHub Context: ${JSON.stringify(context, null, 2)}`);

  // Deploy the static website to the specified S3 bucket using the provided inputs
  const s3Uri = `s3://${bucketName}`;
  exec.exec(`aws s3 sync ${deployFolder} ${s3Uri} -- region ${bucketRegion}`);

  core.notice(
    "Deploying static website to s3 bucket by using javascript custom action",
  );
}

deploy();
