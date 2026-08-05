const header = document.querySelector(".site-header");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

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
