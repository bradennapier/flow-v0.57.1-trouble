## If use yarn@^0.56.0
```
> yarn run flow version
yarn run v1.2.1
$ /Users/gin0606/Downloads/flow-test/node_modules/.bin/flow version
Flow, a static type checker for JavaScript, version 0.56.0

> yarn run flow
yarn run v1.2.1
> /Users/gin0606/Downloads/flow-test/node_modules/.bin/flow
The flow server's version didn't match the client's, so it exited.
Going to launch a new one.

Launching Flow server for /Users/gin0606/Downloads/flow-test
Spawned flow server (pid=48670)
Logs will go to /private/tmp/flow/zSUserszSgin0606zSDownloadszSflow-test.log
Error: src/index.js:5
  5: let numerror: number = 'string';
                            ^^^^^^^^ string. This type is incompatible with
  5: let numerror: number = 'string';
                   ^^^^^^ number


Found 1 error
error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

## If use yarn@0.57.1
```
> yarn run flow version
yarn run v1.2.1
$ /Users/gin0606/Downloads/flow-test/node_modules/.bin/flow version
Flow, a static type checker for JavaScript, version 0.57.1
✨  Done in 0.21s.

> yarn run flow
yarn run v1.2.1
$ /Users/gin0606/Downloads/flow-test/node_modules/.bin/flow
No errors!
✨  Done in 0.21s.
```
