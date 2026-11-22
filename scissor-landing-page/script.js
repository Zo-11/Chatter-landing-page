const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  mainNav.classList.toggle("is-open", !isOpen);
});

mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    mainNav.classList.remove("is-open");
  }
});

const form = document.querySelector("#shorten-form");
const result = document.querySelector("#form-result");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const url = new URL(document.querySelector("#long-url").value);
  const domain = document.querySelector("#domain").value || "scissor.link";
  const aliasInput = document.querySelector("#alias").value.trim();
  const alias = aliasInput
    ? aliasInput.toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-|-$/g, "")
    : Math.random().toString(36).slice(2, 8);
  const shortUrl = `https://${domain}/${alias || Math.random().toString(36).slice(2, 8)}`;

  result.hidden = false;
  result.textContent = `Demo preview: ${shortUrl} — this static page does not create a live redirect.`;
  result.dataset.url = url.href;
});

