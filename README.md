# Pipeline

Pipeline automates the build and deployment of a node js application running on the google cloud platform through the use of Github actions and triggers a message to a Telegram channel when an update is made to the repository.

## Process 

CI/CD

- Create project on GCP
- Build/containerize sample node js app
- Upload app to container registry  
- Deploy on cloud run 
- Set up service account/roles 
- Generate key
- Create repository in GitHub
- Push code to repository
- Set up workflow in GitHub Actions
- Update repository SECRETs
- Test 

Telegram 
- Set up telegram channel 
- Get webhook URL
- Create webhook/Telegram trigger (applet)
- Update workflow/YAML file
- Test 

Service link:
- https://helloworld-3ytqdf55bq-uc.a.run.app/

Telegram channel:
- https://t.me/pipelineupdates

## Next steps:
- Building and testing node js - (https://docs.github.com/en/actions/guides/building-and-testing-
nodejs)
- Including MYSQL in the backend - https://cloud.google.com/architecture/setup-mysql
- Google Cloud Build - https://cloud.google. You com/build

## Quicklinks: 
- Google Cloud Shell - https://shell.cloud.google.com/
- Google Console - https://console.cloud.google.com/

## Resources:
- Build and deploy node js https://cloud.google.com/run/docs/quickstarts/build-and-deploy/nodejs?hl=en_US
- Get started with google cloud https://cloud.google.com/docs/?_ga=2.33727521.-1487606709.1620355765
- Creating service accounts on google cloud https://cloud.google.com/iam/docs/creating-managing-service-accounts
- Getting start authetication https://cloud.google.com/docs/authentication/getting-started
- Understanding roles https://cloud.google.com/iam/docs/understanding-roles
- CI/CD deploy solutions to GCP https://gcp-examquestions.com/ci-cd-solutions-deploy-to-google-cloud-run-using-github-actions/
- Ship code to GCP https://itnext.io/github-actions-ship-code-to-gcp-cloud-run-8d607f34e1cd
- IFTTT documenation https://platform.ifttt.com/docs
- How to create IFTTT action - https://community.progress.com/s/article/How-to-create-the-IFTTT-action
- Mastering markdown https://guides.github.com/features/mastering-markdown/
- Workflow syntax for GHA https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions
