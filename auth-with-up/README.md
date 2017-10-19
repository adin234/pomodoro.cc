auth for pomodoro.cc

## requirements

- up
- aws account configured (~/.aws or env)
- node 8+

## installation

```
npm i
```

## test

```
npm t
```

## deployment with up

please install & configure [`up`](https://apex.github.io/up/) and setup your aws credentials

### deploy a stage

```
up deploy [production|development] -v
```

### plan changes to resources

```
up stack plan -v
```

### apply changes to resources

```
up stack apply -v
```

### status of resources

```
up stack status -v
```