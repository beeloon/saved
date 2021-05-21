const fs = require('fs').promises;

const changeDatePositions = (date) => {
  const [day, month, year] = date.split('.');

  return `${month}.${day}.${year}`;
};

const renameDirectories = async () => {
  const rootDirectoryContent = await fs.readdir(__dirname);

  rootDirectoryContent
    .filter((dirName) => dirName.match(/\d{2}.\d{2}.\d{2}/g))
    .forEach(async (dirName) => {
      await fs.rename(dirName, changeDatePositions(dirName));
    });
};

renameDirectories();
