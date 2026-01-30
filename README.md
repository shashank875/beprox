# BeProx

BeProx is a powerful desktop application for developers that acts as a **Local Domain Proxy**, mapping custom domains (e.g., `myapp.local`) to your local running services (e.g., `localhost:5173`).

## 📚 Documentation

Full documentation is available in the `docs` directory or at [https://jekibus.github.io/beprox/](https://jekibus.github.io/beprox/) (once deployed).

- [Getting Started](docs/guide/getting-started.md)
- [Roadmap](docs/roadmap.md)

## �️ Development

### Prerequisites

- **Rust**: [Install Rust](https://www.rust-lang.org/tools/install)
- **Bun**: [Install Bun](https://bun.sh/)
- **Tauri Prerequisites**: Follow the [Tauri System Configuration](https://tauri.app/v1/guides/getting-started/prerequisites) guide for your OS.

### Quick Start

1. **Install dependencies**
   ```bash
   bun install
   ```

2. **Run App**
   ```bash
   sudo bun tauri dev
   ```

3. **Run Docs**
   ```bash
   bun docs:dev
   ```

## 📝 License

MIT
