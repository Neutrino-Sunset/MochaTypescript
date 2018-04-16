# Unit testing Typescript using Mocha.

Steps to create a basic Nodejs project with unit test support. In the first part of this walkthrough the Typescript files will transpile alongside the source files (this is almost never what you want). A later section of the walkthrough demonstrates how to change this so that Typescript files compile to their own output directory. 

Create a directory and initialise as a node project.

    > npm init

Make the entrypoint a Typescript file e.g. `Main.ts` accept other defaults.

Install the following libraries. `@types` libraries are required for VSCode Intellisense to work.

    > npm i -D typescript mocha mocha-typescript @types/node @types/mocha

* typescript - core typescript language support.
* mocha - unit test framework.
* @types/node - type definitions for node builtin types.
* @types/mocha - type definitions for mocha.

Create `tsconfig.json`

    > tsc --init

... in `tsconfig.json` uncomment `sourceMap`, required for debugging Typescript, and `experimental decorators`, required for mocha-typescript.

    "sourceMap": true,
    "experimentalDecorators": true,

Transpile Typescript using `tsc` in watch mode.

    > tsc -w

In `package.json` set scripts -> test to:

    _mocha.cmd *.spec.js

Run tests using

    > npm test

To enable debugging of the tests create a VSCode launch config.

In VSCode click Debug and 'Add Configuration' and select 'Nodejs' from the environment list to create a `launch.json` file.

Open `launch.json`, add a comma after the default configuration and press CTRL+SPACE, from the list of configurations select `Node.js - Mocha tests` and press TAB to add. In the `args` array to enable tests to be found in the project root directory change the path from `${workspaceFolder}/test` to `${workspaceFolder}`.


## Output Typescript files to subdirectory.

In `tsconfig.json` set:

    "outDir": "./out"

In `package.json` change the test command to:

    _mocha.cmd out/**/*.spec.js

Open `launch.json`. In the `args` array change the path from `${workspaceFolder}/test` to `${workspaceFolder}/out`.


