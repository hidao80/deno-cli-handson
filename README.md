# deno-cli

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

A minimal CLI built with Deno + TypeScript that prints `Hello, world!`. It can be built into a single executable file with `deno compile`.

## Requirements

- [Deno](https://deno.land/) 2.x

## Setup

```sh
git clone https://github.com/hidao80/deno-cli.git
cd deno-cli
```

## Usage

```sh
# Run directly from GitHub, without cloning
deno run https://raw.githubusercontent.com/hidao80/deno-cli/main/main.ts

# Run the source directly
deno task dev

# Run tests
deno task test

# Build a single executable (output to dist/hello)
deno task compile
./hello
```

## Project Structure

```
deno-cli/
├── deno.json       # Task and dependency definitions
├── main.ts         # Entry point
└── main_test.ts    # Tests
```

## License

[MIT](./LICENSE)
