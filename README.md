# awesome-server
An http server based on gulp-connect.  When html, js, css or image has changed, it will refresh the browser automatically.

# install
```
npm install awesome-server -g
```

# usage
Go to the directory which you want to serve, and then:

```
awesome-server
```

# options
### port
The default `port` is `3000`, if you want to set a custom port, you can add `--port` parameter, just as follows:
```
awesome-server --port 8080
```

### host
The default `host` is your `IP adress`, if you want to set a custom host, you can add `--host` parameter, just as follows:
```
awesome-server --host localhost
```

# Todo
* Ignore node_modules changes
* show the server address

