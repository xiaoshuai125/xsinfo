#!/bin/bash

echo "npm install"
npm install
echo "run docs:build"
npm run docs:build
echo "run docs:preview"
npm run docs:preview