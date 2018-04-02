# node-notes

*"What the hell is Node.JS anyway?" - member of a group project*

A simple CLI app inspired by the struggles my group and I went through to set up an AirBNB clone using technology we'd never used before during the 6th week of Makers. Whilst I managed to set up and understand to some degree how to set up the Express framework using Node.JS, I'd like to do a bit more than just poke some commands I found scouring the internet!

This was *not* a TDD-driven application (*gasp*) - simply wished to experiment with a quickly built CLI app.


#### Self-reflection (finished 2nd April '18):
- Learned more about what Node.JS is and how to employ third party libraries to do tedious tasks
- A better insight into certain aspects such as what JSON is and how to manipulate it to do your (evil) bidding
- Using third party libraries such as lodash and yargs
- Hands on experience with experimenting with ES6 syntax
- Need to write more concise (read: less shitty) commit messages
 ---

## Features:
 - Adds, lists all stored notes and removes notes
 - Fetches a specific note by its title if found and output to terminal
 - Messages output to terminal whether command is successful


## Installation 

```
git clone https://github.com/defc0nONE/node-notes.git
npm install
cd node-notes
```

## Usage

#### Adding a note
```
node app.js add --title='example note title' --body='example note text'
OR
node app.js add -t='shortened syntax title example' -b='short body example'
```
#### Removing a note
```
node app.js remove --title='example note title'
OR
node app.js remove -t='shortened syntax title example'
```
#### Listing all notes stored
```
node app.js list
```
#### Fetching a specific note
```
node app.js read --title='example note title'
OR
node app.js read -t='shortened syntax title example'
```
#### Requesting help on the app or any feature
```
node app.js --help
node app.js add --help
etc.
```