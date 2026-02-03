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
- **macOS**: `src-tauri/target/release/bundle/dmg/` or macos/
- **Windows**: `src-tauri/target/release/bundle/msi/` or `nsis/`
- **Linux**: `src-tauri/target/release/bundle/deb/` or `appimage/`

## Download from release in Github

### macOS
1. Download the `.dmg` file for your architecture:
   - **Apple Silicon (M1/M2/M3):** `BeProx_..._aarch64.dmg`
   - **Intel:** `BeProx_..._x64.dmg`
2. Open the `.dmg` and drag the app to your `Applications` folder.
3. **Important:** Since the app is not code-signed, you might see a message saying the app is "damaged". To fix this:
   - Open your terminal.
   - Run the following command:
     ```bash
     xattr -cr /Applications/BeProx.app
     ```

### Windows
1. Download the installer:
   - **Standard Installer:** `.exe`
   - **Enterprise:** `.msi`
2. Run the installer and follow the prompts.
3. You may see a "Windows protected your PC" warning (SmartScreen). Click "More info" -> "Run anyway".

### Linux (Ubuntu/Debian)
1. Download the `.deb` file.
2. Install it using `apt` or `dpkg`:
   ```bash
   bun install
   ```
