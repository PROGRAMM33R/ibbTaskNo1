## Task: Write a Node.js application that

1. receives HTTP POST requests only on a "/track" route
* gets data in JSON format passed in the request body
* saves the JSON data into a local file (append)
* if the data contains a "count" parameter, the application increments the value of the "count" key by the value of the 'count' parameter in a Redis database

2. receives HTTP GET requests only on a "/count" route
* returns the value of the "count" key from the Redis database
