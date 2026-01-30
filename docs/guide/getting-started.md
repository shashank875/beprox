---
description: Learn how to install and run BeProx on your machine
---
# Getting Started

## Prerequisites

Before running the project, ensure you have the following installed:

- **Rust**: [Install Rust](https://www.rust-lang.org/tools/install)
- **Bun**: [Install Bun](https://bun.sh/)
- **Tauri Prerequisites**: Follow the [Tauri System Configuration](https://tauri.app/v1/guides/getting-started/prerequisites) guide for your OS.

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jekibus/beprox.git
   cd beprox
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

## Development

Since BeProx needs to bind to port 80 and modify `/etc/hosts`, it requires administrative privileges during development.

```bash
sudo bun tauri dev
```
*Note: On macOS/Linux, `sudo` is required. On Windows, run your terminal as Administrator.*

## Build for Production

To build the application for your operating system:

```bash
bun tauri build
```

The output binary/bundle will be located in:
- **macOS**: `src-tauri/target/release/bundle/macos/BeProx.app`
- **Windows**: `src-tauri/target/release/bundle/msi/` or `nsis/`
- **Linux**: `src-tauri/target/release/bundle/deb/` or `appimage/`
