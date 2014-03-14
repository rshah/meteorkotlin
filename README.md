# Another Hello World in Kotlin and Meteor

This is a hello world like i created when learning Kotlin, Meteor and javascript.

## Setup
I created this example inspired from this blog post:
http://blog.jetbrains.com/kotlin/2013/10/writing-kotlin-in-the-browser/

Basically these are my steps:

    - Create initial Kotlin project like mentioned in the blog
    - Create Meteor project inside the initial Kotlin project, in my case the directory name is 'meteor'
    - Create output artifact directory and set the output artifact to that directory in my case 'meteor/client/kotlin'
    - Copy kotlin.js into lib directory of your Meteor project, in my case 'meteor/lib'
    - Fix kotlin.js as in my kotlin.js (if necessary, as with default kotlin.js, Meteor cannot recognize the Kotlin object)

Then build the kotlin app, when finished just run the 'mrt'
