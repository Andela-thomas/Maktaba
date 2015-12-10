# Maktaba
[![Code Climate](https://codeclimate.com/github/Andela-thomas/Maktaba/badges/gpa.svg)](https://codeclimate.com/github/Andela-thomas/Maktaba)
[![Test Coverage](https://codeclimate.com/github/Andela-thomas/Maktaba/badges/coverage.svg)](https://codeclimate.com/github/Andela-thomas/Maktaba/coverage)

## circleCI
   https://circleci.com/gh/Andela-thomas/Maktaba
# What you need
  1. Nodejs https://nodejs.org
  2. mongodb https://www.mongodb.org


# setting up Maktaba
  1. first clone the repository
    ```
      $ git clone <project url>
    ```
  2.  cd to Maktaba folder and install the project dependecies
   ```
    $ npm install
  ```
  3. Create a `.env` file in your root directory, it should contain the following

      `DATABASE_URL` This the url to you mongodb database

      `EXPRESS_SESSION_KEY` This is the encrypton key that will be used to create session and token

# Running tests
  To run you tests, run `npm test` you terminal
  ```
    $ npm test
  ```
