const Runner = require("./Runner");

const CommandGet = {
  GetNodeVersion: () => {
    return Runner("node -v").replace(/[^\d.]/g, "")
  },
  GetNodeList: () => {
    let list = Runner("nvm ls").split("\n");

    list = list.filter((e) => e);

    list = list.map((version) => {
      if (version.charAt(2) === '*') {
        return version.replace(/[^\d.]/g, "").slice(0, -2);
      }
      return version.replace(/[^\d.]/g, "");
    });

    return list;
  },
};

module.exports = CommandGet;
