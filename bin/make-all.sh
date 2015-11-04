#!/usr/bin/env bash

# make simple, compiled curl.js
./make.sh ../dist/curl/curl.js ../src/curl.js

# make compiled link.js
./make.sh ../dist/curl/plugin/link.js ../src/curl/plugin/link.js

# Just copy js to dist
./make.sh ../dist/curl/plugin/js.js ../src/curl/plugin/js.js
