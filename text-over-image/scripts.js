document.getElementById("background").addEventListener("click", function () {
  // Get the current value of --container-bg-space
  const currentBg = getComputedStyle(document.documentElement)
    .getPropertyValue("--container-bg-space")
    .trim();

  // Toggle between the two values
  if (currentBg === "rgba(21, 10, 18, 0.47)") {
    document.documentElement.style.setProperty(
      "--container-bg-space",
      "rgba(21, 10, 18, 0)"
    ); // Reset to transparent
  } else {
    document.documentElement.style.setProperty(
      "--container-bg-space",
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

document.getElementById("shadow").addEventListener("click", function () {
  // Get the current value of --text-shadow-space
  const currentShadow = getComputedStyle(document.documentElement)
    .getPropertyValue("--text-shadow-space")
    .trim();

  // Toggle between the default value and the specified shadow
  document.documentElement.style.setProperty(
    "--text-shadow-space",
    currentShadow === "6px 6px 13px rgba(0, 0, 0, 0.89)"
      ? "none"
      : "6px 6px 13px rgba(0, 0, 0, 0.89)"
  );
});

document.getElementById("original").addEventListener("click", function () {
  // Remove all inline styles on the root element to revert to stylesheet values
  document.documentElement.removeAttribute("style");
});
