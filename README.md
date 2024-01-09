# Family Care Project

## Overview
The Family Care Project, under `@family-care-proyect/source`, is dedicated to providing a unified platform for family care management. This repository includes the backend, mobile, and web application source code. The project emphasizes ease of use, security, and cross-platform compatibility.

![Version](https://img.shields.io/badge/version-0.0.0-brightgreen)

## Scripts
#### Backend
| Command | Description |
|---------|-------------|
| `npm run build:backend` | Build the backend application |
| `npm run serve:backend` | Serve the backend application |

#### Mobile
| Command | Description |
|---------|-------------|
| `npm run start:mobile` | Start the mobile application |
| `npm run build:mobile` | Build the mobile application |

#### Web
| Command | Description |
|---------|-------------|
| `npm run build:web` | Build the web application |
| `npm run serve:web` | Serve the web application |

# Family Care Project Structure

The `family-care-project` is a comprehensive suite organized into several modules, each with specific roles and configurations. Below is the detailed structure of the project:

## Project Modules

### `family-care-backend`
- **Root:** `apps/family-care-backend`
- **Type:** Application
- **Source Root:** `apps/family-care-backend/src`
- **Targets:** build, serve, lint, test

### `family-care-common`
- **Root:** `libs/family-care-common`
- **Type:** Library
- **Source Root:** `libs/family-care-common/src`
- **Targets:** lint, test

### `family-care-mobile`
- **Root:** `apps/family-care-mobile`
- **Type:** Application
- **Source Root:** `apps/family-care-mobile/src`
- **Targets:** eas-build-pre-install, eas-build-post-install, android, ios, nx-release-publish, start, serve, run-ios, run-android, build, submit, build-list, sync-deps, ensure-symlink, prebuild, install, update, export, export-web, lint, test

### `family-care-web`
- **Root:** `apps/family-care-web`
- **Type:** Application
- **Source Root:** `apps/family-care-web/src`
- **Targets:** build, serve, preview, test, lint, serve-static

## Overview

Each module in the `family-care-project` is designed to cater to different aspects of family care management:

- **family-care-backend:** Handles core application processes and data management.
- **family-care-common:** Provides common functionalities and utilities used across the project.
- **family-care-mobile:** Dedicated to mobile application development, encompassing a wide range of targets for comprehensive mobile solutions.
- **family-care-web:** Focuses on web application development, ensuring seamless web-based experiences with various targets for deployment and testing.


## Libraries
#### UI and Design
- **react-native-paper**
- **monday-ui-react-core**

#### Navigation and Requests
- **@react-navigation**
- **axios**

#### Frameworks and Tools
- **expo**
- **express**
- **react**
- **react-native**
- **vite**

#### Database and Authentication
- **sequelize**
- **expo-local-authentication**

#### Others
- **winston**
- **react-native-vector-icons**

For a complete list of dependencies, see `package.json`.

## Contribute
We welcome contributions! Please read our [contributing guidelines](#contributing) to get started.

## License
This project is under the [MIT License](./LICENSE).
