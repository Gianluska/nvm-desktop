import { View } from "./src/scripts/View.js";

export default function App() {
  function start() {
    renderActualVersion();
    renderLocalVersions();
  }

  function renderActualVersion() {
    fetch("http://localhost:3000/api/GetNodeVersion")
      .then((res) => res.json())
      .then((res) => View.renderActualVersion(res.version));
  }

  function renderLocalVersions() {
    fetch("http://localhost:3000/api/GetNodeList")
      .then((res) => res.json())
      .then((res) => View.renderLocalVersions(res.versionList));
  }

  function changeNodeVersion(version) {
    (async () => {
      const bodyObj = {version: version};
      const options = {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyObj),
      };

      const rawResponse = await fetch(
        "http://localhost:3000/api/ChangeNodeVersion",
        options
      )
        .then((res) => res.json())
        .then((_) => {
          View.resetValues();
          start();
        })
        .catch((err) => console.log(err));

      return await rawResponse;
    })();
  }

  return {
    start,
    changeNodeVersion,
  };
}
