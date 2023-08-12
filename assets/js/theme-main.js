const ua = navigator.userAgent;

if (
  ua.includes("Chrome") || ua.includes("Chromium") ||
  ua.includes("Safari") || ua.includes("Edge")
) {
  const element = document.getElementById("wei");
  element.setAttribute("aria-disabled", false);
}
