# Deno, Hono and React Router

The
[custom framework example](https://github.com/remix-run/custom-react-router-framework-example)
configured to run on Deno and Hono.

## Running the app

```sh
deno install
deno task build:client
deno task preview
```

## Caveats

It runs, but never production ready. Read the original docs for reference.

- [React Router](https://reactrouter.com/start/data/custom)
  - [example](https://github.com/remix-run/custom-react-router-framework-example)
- [Hono](https://hono.dev/docs/getting-started/deno)
  - [example](https://github.com/honojs/examples/tree/main/hono-vite-jsx)
  - [adapter](https://github.com/yusukebe/hono-react-router-adapter)
  - [honox](https://github.com/honojs/honox)
