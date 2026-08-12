const header = document.querySelector(".site-header");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

document.querySelectorAll(".mobile-nav").forEach((menu) => {
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.removeAttribute("open");

      const targetId = link.hash?.slice(1);
      if (!targetId || link.pathname !== window.location.pathname) return;
      window.setTimeout(() => {
        const target = document.getElementById(targetId);
        if (!target) return;
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
        target.addEventListener("blur", () => target.removeAttribute("tabindex"), { once: true });
      }, 0);
    });
  });
});

document.addEventListener("click", (event) => {
  document.querySelectorAll(".mobile-nav[open]").forEach((menu) => {
    if (!menu.contains(event.target)) menu.removeAttribute("open");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  document.querySelectorAll(".mobile-nav[open]").forEach((menu) => {
    menu.removeAttribute("open");
    menu.querySelector("summary")?.focus();
  });
});

const fallbackCopy = (text) => {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } finally {
    textarea.remove();
  }

  return copied;
};

document.querySelectorAll("[data-copy-text]").forEach((button) => {
  const originalLabel = button.textContent.trim();

  button.addEventListener("click", async () => {
    const text = button.dataset.copyText;
    const container = button.closest(".wechat-copy, .case-contact-card") ?? button.parentElement;
    const status = container?.querySelector(".copy-status");
    let copied = false;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        copied = true;
      } else {
        copied = fallbackCopy(text);
      }
    } catch {
      copied = fallbackCopy(text);
    }

    if (copied) {
      button.textContent = "已复制";
      if (status) status.textContent = `已复制：${text}`;
    } else if (status) {
      status.textContent = `复制失败，请手动复制：${text}`;
    }

    window.setTimeout(() => {
      button.textContent = originalLabel;
      if (status && copied) status.textContent = "";
    }, 2400);
  });
});
