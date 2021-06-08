const fs = require("fs");
module.exports = () => {
  const gitingnore = `${process.env.GITHUB_WORKSPACE}/.gitignore`;

  const contents = fs.readFileSync(gitingnore, "utf8").split();
  console.log(contents);
};
