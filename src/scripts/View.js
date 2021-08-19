const View = {
  nodeVersionElem: document.querySelector("#currentVersion"),
  nodeLocalVersionElem: document.querySelector("#localVersion"),
  renderActualVersion(version) {
    View.nodeVersionElem.innerHTML = version;
  },
  renderLocalVersions(versionList) {
    versionList.map((version) => {
      View.nodeLocalVersionElem.innerHTML +=
      `<button class="local__version" onclick='changeNodeVersionLocal("${version}")'>
        <img src="../assets/node.png" alt="Node Logo" />
        ${version}
      </button>`;
    });
  },
  resetValues() {
    View.nodeVersionElem.innerHTML = "";
    View.nodeLocalVersionElem.innerHTML = "";
  },
};

export { View };
