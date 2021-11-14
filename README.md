Brick QA Assignment - Cypress
## Installation
The following instructions assume you're running this on Linux (Debian). For a full list of install instructions please go to [cypress.io](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements) to install.

```sh
Create a directory where you wish to keep this Repo
cd /your/project/path
git clone git@github.com:unang09/Brick-QA-Assignment---Cypress.git
npm ci
```

## Usage
```sh
# To open Cypress test runner
npx cypress open

# To run suite of tests headless locally
npx cypress run

#To run suite of tests using specific browser
npx cypress run --browser chrome
npx cypress run --browser firefox