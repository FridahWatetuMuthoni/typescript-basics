# Typescript Notes

## Installing Typescript

1. Install Typescript

```bash
npm init -y
npm install typescript --save-dev

```

2. Create a tsconfig.json File

```bash
npx tsc --init

```

3.  Compile the TypeScript Code

```bash
npx tsc index.ts
```

4. Compile the TypeScript Code => watch mode

```bash
npx tsc --watch

```

5. Creating an npm script to run typescript and javascript code

```json
{
  "scripts": {
    "build": "tsc app.ts --target es2017",
    "start": "npm run build && node app.js"
  }
}
```
