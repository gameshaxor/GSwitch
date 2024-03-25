function loadJS(FILE_URL, async = true) {
  let scriptEle = document.createElement("script");

  scriptEle.setAttribute("src", FILE_URL);
  scriptEle.setAttribute("type", "text/javascript");
  scriptEle.setAttribute("async", async);

  document.body.appendChild(scriptEle);

  // Success
  scriptEle.addEventListener("load", () => {
    console.log("Script loaded successfully!");
  });

   // Error
  scriptEle.addEventListener("error", () => {
    console.log("Error loading script!");
  });
}

window.addEventListener("load", function () {
  loadJS("https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js", true);
});
