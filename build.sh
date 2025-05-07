#!/bin/bash
# Install dependencies
npm install

# Build packages
npm run build:data-provider
npm run build:mcp
npm run build:data-schemas

# Build client
cd client
npm install
npm run build
