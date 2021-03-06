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

### apply changes to stack

This command applies changes to Route 53 endpoints, Cloudfront aliases and stages dns mapping.

```
npm run stack:apply

# or

up stack plan -v && up stack apply -v
```
