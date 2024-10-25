document.getElementById("background").addEventListener("click", function () {
  // Get the current value of --container-bg
  const currentBg = getComputedStyle(document.documentElement)
    .getPropertyValue("--container-bg")
    .trim();

  // Toggle between the two values
  if (currentBg === "rgba(21, 10, 18, 0.47)") {
    document.documentElement.style.setProperty(
      "--container-bg",
      "rgba(21, 10, 18, 0)"
    ); // Reset to transparent
  } else {
    document.documentElement.style.setProperty(
      "--container-bg",
      "rgba(21, 10, 18, 0.47)"
    ); // Set to 47% transparency
  }
});

document.getElementById("color").addEventListener("click", function () {
  // Get the current value of --title-color-space
  const currentColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--title-color-space")
    .trim();

  // Toggle the variable between #ceb8a0 and #FCF6C2
  document.documentElement.style.setProperty(
    "--title-color-space",
    currentColor === "#ceb8a0" ? "#FCF6C2" : "#ceb8a0"
  );
});

document.getElementById("original").addEventListener("click", function () {
  // Remove all inline styles on the root element to revert to stylesheet values
  document.documentElement.removeAttribute("style");
});
