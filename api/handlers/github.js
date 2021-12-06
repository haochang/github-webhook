const AWS = require("aws-sdk");
const codebuild = new AWS.CodeBuild({ apiVersion: '2016-10-06' });

module.exports.handler = async event => {
  console.log(`hello`, event.body);
  const params = {
    projectName: "insights-webui-angular-deploy"
  };
  const data = await codebuild.startBuild(params).promise();
  console.log(`data`, data);
  return {
    statusCode: 200,
    body: 'Hello world'
  };
}