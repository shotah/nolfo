ifneq (,$(wildcard ./.env))
	include .env
endif
JSII_SILENCE_WARNING_UNTESTED_NODE_VERSION := 1
SHELL := /bin/bash
export

all: install test

.PHONY: install
install: npm-auth
	npm install

.PHONY: test
test:
	npm run test

.PHONY: coverage
coverage:
	npm run coverage

.PHONY: lint
lint:
	npm run lint

.PHONY: fix
fix:
	npm run fix

# build
.PHONY: build
build:
	npm run build

# run dev web
.PHONY: dev
dev: build
	npm run start

.PHONY: npm-auth
npm-auth:
	npm config set "@fortawesome:registry" https://npm.fontawesome.com/
	npm config set "//npm.fontawesome.com/:_authToken" ${FONTAWESOME_TOKEN}

# Used to upgrade all npm packages to latest version without breaking anything
.PHONY: npm-upgrade
npm-upgrade: npm-auth
	npm prune
	npm list -g npm-check-updates || npm i -g npm-check-updates
	npx ncu -u
	npm update



#####################
# CDK Commands
#####################

# # Welcome to your CDK TypeScript project

# You should explore the contents of this project. It demonstrates a CDK app with an instance of a stack (`SampleAppStack`)
# which contains an Amazon SQS queue that is subscribed to an Amazon SNS topic.

# The `cdk.json` file tells the CDK Toolkit how to execute your app.

# ## Useful commands

# * `npm run build`   compile typescript to js
# * `npm run watch`   watch for changes and compile
# * `npm run test`    perform the jest unit tests
# * `cdk deploy`      deploy this stack to your default AWS account/region
# * `cdk diff`        compare deployed stack with current state
# * `cdk synth`       emits the synthesized CloudFormation template

# initialize the CDK application -- only run once
PHONY: cdk-init
cdk-init:
	cdk init sample-app --language typescript

# install the CDK dependencies locally and sets up AWS account -- only run once
# add --force to overwrite existing bootstrap and Upgrade bootstrap stack to bootstrap version 6
PHONY: cdk-bootstrap
cdk-bootstrap:
	cdk bootstrap --force

# Outputs the CloudFormation template for the CDK application
PHONY: cdk-synth
cdk-synth:
	cdk synth

# deploy the CDK application
PHONY: cdk-deploy
cdk-deploy:
	cdk deploy -f

# destroy the CDK application
PHONY: cdk-destroy
cdk-destroy:
	cdk destroy -f

# list the CDK application
PHONY: cdk-list
cdk-list:
	cdk list

# diff the CDK application
PHONY: cdk-diff
cdk-diff:
	cdk diff

# context the CDK application
PHONY: cdk-context
cdk-context:
	cdk context

# version the CDK application
PHONY: cdk-version
cdk-version:
	cdk version
