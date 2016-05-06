#!/bin/sh
npm install --save-dev
bower install --save-dev

echo 'Running gulp'
gulp

echo 'Service started'
node index.js