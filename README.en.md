# xsinfo

xsinfo is a knowledge documentation and sharing platform primarily designed to organize and publish tips and experiences related to software development and system usage. Through this platform, you can learn various practical technical content covering Linux usage, development tool configuration, programming techniques, and more.

## Project Features

- **Rich Content**: Covers practical topics such as Linux usage tips, JetBrains IDE keyboard shortcuts, Clion configuration, and more.
- **User-Friendly Documentation**: Features a clear document structure for easy reference and learning.
- **Regular Updates**: Content is continuously updated to ensure the provision of the latest and most practical technical information.

## Directory Structure

- `docs/`: Contains all documentation, including Linux usage, JetBrains configuration, gaming-related content, etc.
- `docs/.vitepress/`: VitePress configuration files used to build the documentation website.
- `docs/public/`: Static resources such as images and icons.
- `package.json`: Project dependency configuration file.
- `run_prod.sh`: Script for deploying and running the project.

## How to Run

1. Ensure you have Node.js and npm installed.
2. Install project dependencies:
   ```bash
   npm install
   ```
3. Run the project:
   ```bash
   npm run dev
   ```
4. Build the production version:
   ```bash
   npm run build
   ```

## How to Contribute

Pull requests and issues are welcome to help improve content and features. If you have new technical articles or configuration tips, feel free to submit them to the `docs/` directory.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.