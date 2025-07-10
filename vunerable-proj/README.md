# Vulnerable Demo Project

This is a deliberately vulnerable Node.js project for Snyk demonstration purposes.

## Features
- Uses outdated and vulnerable dependencies
- Contains insecure code patterns (hardcoded secret, use of eval)

## Usage

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Visit [http://localhost:3000](http://localhost:3000)

## Warning
**Do not use this code in production! It is intentionally insecure.**
