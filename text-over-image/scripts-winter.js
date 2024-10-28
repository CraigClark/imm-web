// Toggle position for winter theme
document.getElementById("position").addEventListener("click", function () {
  // Get the current value of --position-winter
  const currentPosition = getComputedStyle(document.documentElement)
    .getPropertyValue("--position-winter")
    .trim();

  // Toggle between "end" and an empty string to reset to default (center)
  document.documentElement.style.setProperty(
    "--position-winter",
    currentPosition === "end" ? "" : "end"
  );
});

document.getElementById("background").addEventListener("click", function () {
  // Get the current value of --container-bg-winter
  const currentBg = getComputedStyle(document.documentElement)
    .getPropertyValue("--container-bg-winter")
    .trim();

  // Toggle between the transparent and opaque gradient
  document.documentElement.style.setProperty(
    "--container-bg-winter",
    currentBg ===
      "linear-gradient(to top, rgba(31, 46, 67, 1) 0%, rgba(32, 47, 68, 1) 1%, rgba(69, 103, 150, 0.44) 56%, rgba(91, 123, 168, 0.06) 94%, rgba(91, 123, 168, 0) 100%)"
      ? "linear-gradient(to top, rgba(31, 46, 67, 0) 0%, rgba(32, 47, 68, 0) 1%, rgba(69, 103, 150, 0) 56%, rgba(91, 123, 168, 0) 94%, rgba(91, 123, 168, 0) 100%)"
      : "linear-gradient(to top, rgba(31, 46, 67, 1) 0%, rgba(32, 47, 68, 1) 1%, rgba(69, 103, 150, 0.44) 56%, rgba(91, 123, 168, 0.06) 94%, rgba(91, 123, 168, 0) 100%)"
  );
});

document.getElementById("shadow").addEventListener("click", function () {
  // Get the current value of --text-shadow-winter
  const currentShadow = getComputedStyle(document.documentElement)
    .getPropertyValue("--text-shadow-winter")
    .trim();

  // Toggle between the transparent and opaque shadow
  document.documentElement.style.setProperty(
    "--text-shadow-winter",
    currentShadow === "0.2vw 0.2vw 0 rgba(0, 0, 0, 0.86)"
      ? "0.2vw 0.2vw 0 rgba(0, 0, 0, 0)"
      : "0.2vw 0.2vw 0 rgba(0, 0, 0, 0.86)"
  );
});

// Reset all CSS variables modified by JavaScript back to their default values
document.getElementById("original").addEventListener("click", function () {
  // Remove all inline styles on the root element (where JS applied styles)
  // This restores all CSS variable values to those defined in the stylesheet
  document.documentElement.removeAttribute("style");
});
