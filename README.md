# Guesspionage

## About
- Guesspionage is a number guessing game where you guess the number on screen which stays only for a limited period of time
- As you keep on progressing, the number gets difficult (It becomes big) memorize and also the time to guess the number decreases.
- Scores are calculated at the end for a particular game.

## Setup and Run

- Clone the application from GIT
- Make sure you have docker installed
- Run the compose command ``` docker-compose up -d ``` from the root directory.
- Proceed to ``` http://localhost:8080 ``` and you can expore the app.

## Tech
- Backend - NodeJS
- FrontEnd - Vue
- DB - Mongo
- Others - Docker

## Solution

- The questions are categorized into different levels - V.Easy, Easy, Normal, Hard, V.Hard and Impossible.
- There is a threshold parameter which can be configured to increase the difficulty and also to extend the gameplay time.
- Initially, the user starts a new game. A record is created which stores the game details and status.
- Settings are loaded which contain difficulty levels, threshold, countdown time and the no. of questions each level should have.
- According to this the user is presented with a number, When he hits the threshold score and the min no. of questions required for that level,  the difficulty increases.
- Scores are calculated at last for that particular game.

## Time Frame
- It took me around 8 hours to complete it. Initially I thought of doing it in React which I am familiar with. But then I changed it to Vue so as to experiment.

## Assumptions
- Difficulty Levels - V.Easy, Easy, Normal, Hard, V.Hard and Impossible
- Threshold - 10% (If the percentage of correct ans > threshold then the next level will load)

## What part of the application are you most proud of (if any)
- I am proud of the threshold. We can further increase the game time as much as we want with the threshold.

## Improvements
- Convert the displayed number to image using canvas.
- Using cache to push all our results to redis.

