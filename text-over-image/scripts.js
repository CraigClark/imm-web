// Toggle global background overlay transparency
document.getElementById("background").addEventListener("click", function () {
  // Get the current value of --container-bg-space
  const currentBg = getComputedStyle(document.documentElement)
    .getPropertyValue("--container-bg-space")
    .trim();

  // Toggle between transparent and 47% opaque background
  if (currentBg === "rgba(21, 10, 18, 0.47)") {
    // If currently 47% opaque, set to fully transparent
    document.documentElement.style.setProperty(
      "--container-bg-space",
      "rgba(21, 10, 18, 0)"
    );
  } else {
    // If currently transparent, set to 47% opacity
    document.documentElement.style.setProperty(
      "--container-bg-space",
      "rgba(21, 10, 18, 0.47)"
    );
  }
});

// Toggle title colour between two options
document.getElementById("color").addEventListener("click", function () {
  // Get the current value of --title-color-space
  const currentColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--title-color-space")
    .trim();

  // Toggle the colour between #ceb8a0 and #FCF6C2
  document.documentElement.style.setProperty(
    "--title-color-space",
    currentColor === "#ceb8a0" ? "#FCF6C2" : "#ceb8a0"
  );
});

// Toggle text shadow for header and paragraph
document.getElementById("shadow").addEventListener("click", function () {
  // Get the current value of --text-shadow-space
  const currentShadow = getComputedStyle(document.documentElement)
    .getPropertyValue("--text-shadow-space")
    .trim();

  // Toggle between no shadow and a dark, deep shadow effect
  document.documentElement.style.setProperty(
    "--text-shadow-space",
    currentShadow === "6px 6px 13px rgba(0, 0, 0, 0.89)"
      ? "none" // If shadow is active, turn it off
      : "6px 6px 13px rgba(0, 0, 0, 0.89)" // If shadow is off, turn it on
  );
});

// Reset all CSS variables modified by JavaScript back to their default values
document.getElementById("original").addEventListener("click", function () {
  // Remove all inline styles on the root element (where JS applied styles)
  // This restores all CSS variable values to those defined in the stylesheet
  document.documentElement.removeAttribute("style");
});
