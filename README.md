# demo-grunt-connect-hang

On windows using grunt `v0.4.2` using grunt-contrib-connect the process hangs after a task fails instead of closing as expected. 

There are two folders with a package.json and a Gruntfile

* One with grunt `v0.4.2` (stream properly but hang)
* One for grunt `v0.4.1` (doesn't always stream properly but finishes)

For each folder:

````
$ npm install
````
Each has two tasks:

----

````
$ grunt build
````

1. run grunt-contrib-connect
1. pass a task
1. this exits on both versions

----

````
$ grunt test
````

1. run grunt-contrib-connect
1. fail a task
1. in WebStorm as external task this fails when used on on grunt `v0.4.2`. On `grunt v0.4.1` it passes (except you might suffer the node,js windows buffer problem).

----

Fun problem. Where to go with this? 