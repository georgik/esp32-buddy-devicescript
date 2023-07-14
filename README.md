# ESP32 Buddy DeviceScript animation

Simple example usign DeviceScript to display animation on the screen.

This project uses [DeviceScript](https://microsoft.github.io/devicescript/).

## Project structures

```
.devicescript      reserved folder for devicescript generated files
src/main.ts        default DeviceScript entry point
...
```


## Local/container development

-  install [Node.js LTS 16+](https://nodejs.org/en/download)

```bash
nvm install 16
nvm use 16
```

-  install DeviceScript compiler and tools

```bash
npm install
```

### Using Visual Studio Code

- open the project folder in code

```bash
code .
```

- install the [DeviceScript extension](https://microsoft.github.io/devicescript/getting-started/vscode)

- start debugging!

### Using the command line

- start the watch build and developer tools server

```bash
npm run watch
```

-  navigate to devtools page (see terminal output) 
to use the simulators or deploy to hardware.

-  open `src/main.ts` in your favorite TypeScript IDE and start editing.

