# Chatbot intents

This is a collection of intents for chatbots to understand what a user wants to do. Each intent is mapped to a domain and an action. All actions are JSON arrays of strings for easy cross-platform use. The project is sued by alana to build smarter bots. 

Example:

`Will it rain tomorrow?` has the intent `weather`,`rain`

## Repo Organization
- **Locations** - directory containing locations  around the world.
- **dates** - directory holding date & time intents
- **intents** -- main directory
  - `[Domain]` -- Intent domain
    - `[actions]`.json -- JSON Array of text phrases that describe user intentention

## Domains
Domains represnet larger clusters of actions such as navigation, weather, music, timer, calendar, etc.

## Actions
Actions are specific verbs
