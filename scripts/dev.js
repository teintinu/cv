#!/usr/bin/env node
const { build, cliopts } = require("estrella")
build({
  entry: "src/frontend/main.tsx",
  outfile: "public/frontend.js",
  bundle: true
})
// Run a local web server with livereload when -watch is set
cliopts.watch && require("live-server").start({
  port: 8181,
  root: require("path").join(__dirname, "../public"),
  wait: 1000
})