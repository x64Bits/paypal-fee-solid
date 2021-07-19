const fs = require("fs");
const archiver = require("archiver");
const inquirer = require("inquirer");
const fse = require("fs-extra");

const projectFolder = process.env.INIT_CWD;

const parentFolder = `${projectFolder}`;
const distFolder = `${parentFolder}/dist/`;

const manifestSrc = `${projectFolder}/extension/`;
const manifestDest = `${projectFolder}/dist/`;

const manifestName = "manifest.json";

const extFileName = "extension.zip";

const questions = [
  {
    name: "PLATFORM",
    type: "platform",
    message: "For which browser do you want to generate this extension?",
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    const platform = answers.PLATFORM;

    function zipDirectory(source, out) {
      const archive = archiver("zip", { zlib: { level: 9 } });
      const stream = fs.createWriteStream(out);

      return new Promise((resolve, reject) => {
        archive
          .directory(source, false)
          .on("error", (err) => reject(err))
          .pipe(stream);

        stream.on("close", () => resolve());
        archive.finalize();
      });
    }

    fs.copyFile(
      `${manifestSrc}${platform}-${manifestName}`,
      `${manifestDest}${manifestName}`,
      (err) => {
        if (err) {
          console.log("Error copying manifest.json file");
          throw err;
        }
        console.log(
          "\x1b[32m",
          `✓ ${platform} extension generated successfully`
        );
      }
    );

    // Copy assets icons

    function copyAssets() {
      const sourceDir = `${manifestSrc}icons`;
      const assetsDir = `${distFolder}extension`;

      console.log({ from: sourceDir, to: assetsDir });
      if (!fs.existsSync(assetsDir)) {
        fs.mkdir(assetsDir, function () {
          fse.copy(sourceDir, assetsDir, function (err) {
            if (err) return console.error(err);
          });
        });
      }
    }

    copyAssets();

    zipDirectory(distFolder, `${process.cwd()}/${extFileName}`);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error);
    } else {
      console.log(error);
    }
  });
