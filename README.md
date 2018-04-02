## node-notes

A simple CLI-based app inspired by my Week 6 group challenge at Makers Academy to remake AirBnB using node.js only for the most common question to be *what the hell is node.js doing anyway?*

Current features:
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
```
#### Removing a note
```
node app.js remove --title='example note title'
```
#### Listing all notes stored
```
node app.js list
```
#### Fetching a specific note
```
node app.js read --title='example note title'
```