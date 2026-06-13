const header = document.querySelector(".site-header");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const ccclayDialog = document.querySelector("#case-ccclay");
const ccclayDialogLinks = document.querySelectorAll('[data-case-dialog="ccclay"]');
const ccclayCloseButtons = document.querySelectorAll("[data-close-case]");

const closeCcclayDialog = () => {
  if (!ccclayDialog) return;

  if (typeof ccclayDialog.close === "function" && ccclayDialog.open) {
    ccclayDialog.close();
    return;
  }

  ccclayDialog.removeAttribute("open");
  document.body.classList.remove("has-open-dialog");
};

const openCcclayDialog = () => {
  if (!ccclayDialog) return;

  if (typeof ccclayDialog.showModal === "function" && !ccclayDialog.open) {
    ccclayDialog.showModal();
  } else {
    ccclayDialog.setAttribute("open", "");
  }

  document.body.classList.add("has-open-dialog");
};

const clearCaseHash = () => {
  if (window.location.hash !== "#case-ccclay") return;

  window.history.pushState(
    null,
    "",
    `${window.location.pathname}${window.location.search}`,
  );
};

ccclayDialogLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    window.history.pushState(null, "", "#case-ccclay");
    openCcclayDialog();
  });
});

ccclayCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    closeCcclayDialog();
    clearCaseHash();
  });
});

ccclayDialog?.addEventListener("close", () => {
  document.body.classList.remove("has-open-dialog");
  clearCaseHash();
});

ccclayDialog?.addEventListener("click", (event) => {
  if (event.target !== ccclayDialog) return;

  closeCcclayDialog();
  clearCaseHash();
});

window.addEventListener("hashchange", () => {
  if (window.location.hash === "#case-ccclay") {
    openCcclayDialog();
  }
});

if (window.location.hash === "#case-ccclay") {
  openCcclayDialog();
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  if (link.matches("[data-case-dialog]")) return;

  link.addEventListener("click", (event) => {
    const targetSelector = link.getAttribute("href");
    if (!targetSelector || targetSelector === "#") return;

    const target = document.querySelector(targetSelector);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
