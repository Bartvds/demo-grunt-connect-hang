# demo-grunt-connect-hang

There are two folders with a package.json and a Gruntfile

* One with grunt `0.4.2` (stream properly but hang)
* One for grunt `0.4.1` (doesn't always stream properly but finishes)


For each folder:

````
$ npm install
````


**Pass** run grunt-contrib-connect, then pass a async task
````
$ grunt pass
````


**Fail** run grunt-contrib-connect, then fail a async task.

In WebStorm as external task this fails when used on on grunt `0.4.2`. 

On `grunt 0.4.1` it passes.

````
$ grunt fail
````

