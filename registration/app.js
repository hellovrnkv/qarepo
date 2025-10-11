const API_URL = "/users/registration";
const MOCK_ON_ERROR = true;

const $ = (sel) => document.querySelector(sel);
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValid(email, password) {
  return emailRe.test(email) && String(password).length >= 6;
}

function showError(msg) {
  const box = $("#errorBox");
  if (!box) return;
  if (msg) {
    box.textContent = msg;
    box.hidden = false;
  } else {
    box.textContent = "";
    box.hidden = true;
  }
}

function applyI18n(lang) {
  const dict = (window.DICT && window.DICT[lang]) || window.DICT.en;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (dict[key] != null) node.textContent = dict[key];
  });
  const email = $("#email");
  if (email && dict.emailPlaceholder) email.placeholder = dict.emailPlaceholder;
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("[registration] protocol:", location.protocol,
              "MOCK_ON_ERROR:", MOCK_ON_ERROR,
              "API_URL:", API_URL);

  const langSelect = $("#langSelect");
  const form = $("#regForm");
  const email = $("#email");
  const password = $("#password");
  const submitBtn = $("#submitBtn");
  const modal = $("#successModal");
  const closeModalBtn = $("#closeModalBtn");

  let currentLang = "en";
  applyI18n(currentLang);
  langSelect.addEventListener("change", () => {
    currentLang = langSelect.value;
    applyI18n(currentLang);
  });

  function updateState() {
    const ok = isValid(email.value.trim(), password.value);
    submitBtn.disabled = !ok;
  }
  email.addEventListener("input", () => { showError(""); updateState(); });
  password.addEventListener("input", () => { showError(""); updateState(); });
  updateState();

  function closeModal() { modal.hidden = true; }
  closeModalBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", (e) => {
    if (!modal.hidden && e.key === "Escape") closeModal();
  });

  function mockSuccess() {
    console.warn("[registration] Using mock success.");
    showError("");          
    modal.hidden = false;   
    form.reset();           
    updateState();           
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    showError("");

    const body = {
      email: email.value.trim(),
      password: password.value,
      date: Math.floor(Date.now() / 1000),
      is_active: true
    };

    if (!isValid(body.email, body.password)) {
      const d = (window.DICT && window.DICT[currentLang]) || window.DICT.en;
      showError(d.required || "Both fields are required");
      return;
    }

    submitBtn.disabled = true;

    if (location.protocol === "file:") {
      return mockSuccess();
    }

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      if (!res.ok) {
        if (MOCK_ON_ERROR) {
          console.warn("[registration] HTTP", res.status, "→ mock success");
          return mockSuccess();
        } else {
          const txt = await res.text();
          throw new Error(txt || `HTTP ${res.status}`);
        }
      }

      mockSuccess();
    } catch (err) {
      console.warn("[registration] Network error:", err);
      if (MOCK_ON_ERROR) {
        return mockSuccess();
      } else {
        showError(String(err?.message || err));
      }
    } finally {
      submitBtn.disabled = true; 
    }
  });
});
