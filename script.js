/* ---------- Text in English and Hindi ---------- */
const TEXT = {
  en: {
    brand: "House Price Predictor",
    title: "What's a neighbourhood home worth?",
    subtitle: "Estimate the median house value of a California neighbourhood, one at a time or from a CSV file.",
    tabSingle: "Single prediction", tabFile: "CSV upload", tabHistory: "History",
    detailsTitle: "Neighbourhood details",
    f_MedInc: "Median income", h_MedInc: "in $10,000s",
    f_HouseAge: "House age", h_HouseAge: "average, in years",
    f_AveRooms: "Rooms", h_AveRooms: "average per home",
    f_AveBedrms: "Bedrooms", h_AveBedrms: "average per home",
    f_Population: "Population", h_Population: "of the neighbourhood",
    f_AveOccup: "Occupants", h_AveOccup: "average per home",
    f_Latitude: "Latitude", h_Latitude: "32 to 42",
    f_Longitude: "Longitude", h_Longitude: "-125 to -114",
    predict: "Predict price", predicting: "Predicting…", example: "Fill example", clear: "Clear",
    required: "Required", gtZero: "Must be greater than 0", between: "Must be between {min} and {max}",
    estimate: "Estimate", emptyResult: "Fill in the details and select Predict price, or try Fill example.",
    predictedLabel: "Predicted median house value", low: "Low", high: "High",
    rangeNote: "The range uses the model's average error as a rough guide. It is not a confidence interval.",
    copy: "Copy result", copied: "Copied",
    fileTitle: "Predict from a CSV file", dropMain: "Drop a CSV here or click to browse", dropOnly: "Only .csv files",
    changeFile: "Click to change.", requiredCols: "Required columns:",
    getPredictions: "Get predictions", working: "Working…", sample: "Download sample CSV",
    result: "Result", fileEmpty: "Your file with a prediction column will download automatically.",
    fileDone: "Done. predictions.csv has been downloaded.", notCsv: "Please choose a .csv file.",
    historyTitle: "Recent predictions", clearHistory: "Clear history", noHistory: "No predictions yet.",
    apiAddress: "API address", apiHint: "Leave empty if this page is served by the FastAPI app.",
    checking: "Checking API…", online: "API online", offline: "API offline", avgError: "avg error",
    unreachable: "Can't reach the API. Check that the server is running and the API address below is right.",
    generic: "Something went wrong.", loaded: "Inputs loaded from history"
  },
  hi: {
    brand: "मकान कीमत अनुमानक",
    title: "किसी इलाके के मकान की कीमत कितनी होगी?",
    subtitle: "कैलिफ़ोर्निया के किसी इलाके में मकान की औसत कीमत का अनुमान लगाएँ, एक-एक करके या CSV फ़ाइल से।",
    tabSingle: "एक अनुमान", tabFile: "CSV अपलोड", tabHistory: "इतिहास",
    detailsTitle: "इलाके की जानकारी",
    f_MedInc: "औसत आय", h_MedInc: "$10,000 की इकाई में",
    f_HouseAge: "मकान की उम्र", h_HouseAge: "औसत, वर्षों में",
    f_AveRooms: "कमरे", h_AveRooms: "प्रति मकान औसत",
    f_AveBedrms: "शयनकक्ष", h_AveBedrms: "प्रति मकान औसत",
    f_Population: "जनसंख्या", h_Population: "इलाके की",
    f_AveOccup: "रहने वाले", h_AveOccup: "प्रति मकान औसत",
    f_Latitude: "अक्षांश", h_Latitude: "32 से 42",
    f_Longitude: "देशांतर", h_Longitude: "-125 से -114",
    predict: "कीमत का अनुमान लगाएँ", predicting: "अनुमान लग रहा है…", example: "उदाहरण भरें", clear: "साफ़ करें",
    required: "ज़रूरी है", gtZero: "0 से बड़ा होना चाहिए", between: "{min} और {max} के बीच होना चाहिए",
    estimate: "अनुमान", emptyResult: "जानकारी भरें और कीमत का अनुमान लगाएँ दबाएँ, या उदाहरण भरें आज़माएँ।",
    predictedLabel: "अनुमानित औसत मकान कीमत", low: "कम", high: "ज़्यादा",
    rangeNote: "यह दायरा मॉडल की औसत त्रुटि पर आधारित मोटा अंदाज़ा है, कोई कॉन्फ़िडेंस इंटरवल नहीं।",
    copy: "नतीजा कॉपी करें", copied: "कॉपी हो गया",
    fileTitle: "CSV फ़ाइल से अनुमान", dropMain: "CSV यहाँ छोड़ें या क्लिक करके चुनें", dropOnly: "सिर्फ़ .csv फ़ाइलें",
    changeFile: "बदलने के लिए क्लिक करें।", requiredCols: "ज़रूरी कॉलम:",
    getPredictions: "अनुमान पाएँ", working: "प्रक्रिया जारी है…", sample: "सैंपल CSV डाउनलोड करें",
    result: "नतीजा", fileEmpty: "अनुमान वाले कॉलम के साथ आपकी फ़ाइल अपने-आप डाउनलोड हो जाएगी।",
    fileDone: "हो गया। predictions.csv डाउनलोड हो गई है।", notCsv: "कृपया .csv फ़ाइल चुनें।",
    historyTitle: "पिछले अनुमान", clearHistory: "इतिहास मिटाएँ", noHistory: "अभी कोई अनुमान नहीं है।",
    apiAddress: "API का पता", apiHint: "अगर यह पेज FastAPI से चल रहा है तो खाली छोड़ दें।",
    checking: "API जाँची जा रही है…", online: "API चालू", offline: "API बंद", avgError: "औसत त्रुटि",
    unreachable: "API से संपर्क नहीं हो पा रहा। जाँचें कि सर्वर चल रहा है और नीचे दिया API पता सही है।",
    generic: "कुछ गड़बड़ हो गई।", loaded: "इतिहास से जानकारी भर दी गई"
  }
};

const FIELDS = [
  { name: "MedInc",     step: 0.01, min: 0,    ex: 4.5 },
  { name: "HouseAge",   step: 1,    min: 0,    ex: 25 },
  { name: "AveRooms",   step: 0.1,  min: 0,    ex: 5.5 },
  { name: "AveBedrms",  step: 0.1,  min: 0,    ex: 1.1 },
  { name: "Population", step: 1,    min: 0,    ex: 1200 },
  { name: "AveOccup",   step: 0.1,  min: 0,    ex: 3 },
  { name: "Latitude",   step: 0.01, min: 32,   max: 42,   ex: 34.05 },
  { name: "Longitude",  step: 0.01, min: -125, max: -114, ex: -118.25 },
];

/* ---------- State and helpers ---------- */
const $ = id => document.getElementById(id);
const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};
const state = {
  lang: store.get("lang", "en"),
  cur: store.get("cur", "usd"),
  health: "checking", healthData: null,
  last: null,                      // latest prediction {price, low, high}
  file: null,
  history: store.get("history", []),
};
const INR_RATE = 88;               // approximate 1 USD in rupees; change if you like

const t = (k, vars = {}) => (TEXT[state.lang][k] ?? k).replace(/\{(\w+)\}/g, (_, v) => vars[v]);
const api = p => $("apiBase").value.replace(/\/$/, "") + p;
const apiBase = $("apiBase");
apiBase.value = location.protocol === "file:" ? "http://127.0.0.1:8000" : "";

function money(usd) {
  if (state.cur === "inr") return "₹" + Math.round(usd * INR_RATE).toLocaleString("en-IN");
  return "$" + Math.round(usd).toLocaleString("en-US");
}
const num = s => Number(String(s).replace(/[^0-9.]/g, ""));

function toast(msg) {
  const el = $("toast");
  el.textContent = msg; el.classList.add("show");
  clearTimeout(toast.id); toast.id = setTimeout(() => el.classList.remove("show"), 1800);
}

/* ---------- Form ---------- */
const form = $("form");
form.innerHTML = FIELDS.map(f => `
  <div>
    <label for="${f.name}"><span data-i18n="f_${f.name}"></span><small data-i18n="h_${f.name}"></small></label>
    <input type="number" id="${f.name}" step="${f.step}" inputmode="decimal" required>
    <div class="hint" id="e_${f.name}"></div>
  </div>`).join("") + `
  <div class="actions">
    <button class="btn primary" id="predictBtn" type="submit" data-i18n="predict"></button>
    <button class="btn ghost" id="exampleBtn" type="button" data-i18n="example"></button>
    <button class="btn ghost" id="resetBtn" type="button" data-i18n="clear"></button>
  </div>`;

function validate() {
  const values = {};
  let ok = true;
  for (const f of FIELDS) {
    const el = $(f.name), raw = el.value.trim();
    const v = raw === "" ? NaN : Number(raw);
    let msg = "";
    if (Number.isNaN(v)) msg = t("required");
    else if (f.max !== undefined && (v < f.min || v > f.max)) msg = t("between", { min: f.min, max: f.max });
    else if (f.max === undefined && v <= 0) msg = t("gtZero");
    el.classList.toggle("bad", !!msg);
    $("e_" + f.name).textContent = msg;
    if (msg) ok = false; else values[f.name] = v;
  }
  return ok ? values : null;
}

form.addEventListener("submit", async e => {
  e.preventDefault();
  const body = validate();
  if (!body) return;
  const btn = $("predictBtn");
  btn.disabled = true; btn.textContent = t("predicting");
  $("result").innerHTML = `<h2>${t("estimate")}</h2><div class="skeleton"></div>`;
  try {
    const res = await fetch(api("/predict"), {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(formatDetail(data.detail));
    const [lo, hi] = data.estimated_range.split(" to ");
    state.last = { price: num(data.predicted_price), low: num(lo), high: num(hi) };
    addHistory(body, state.last);
    renderResult();
  } catch (err) {
    showError("result", t("estimate"), err);
  } finally {
    btn.disabled = false; btn.textContent = t("predict");
  }
});

$("exampleBtn").onclick = () => { FIELDS.forEach(f => $(f.name).value = f.ex); validate(); };
$("resetBtn").onclick = () => {
  form.reset();
  FIELDS.forEach(f => { $(f.name).classList.remove("bad"); $("e_" + f.name).textContent = ""; });
  state.last = null; renderResult();
};

function formatDetail(d) {
  if (Array.isArray(d)) return d.map(x => `${(x.loc || []).slice(-1)[0]}: ${x.msg}`).join("; ");
  return d || t("generic");
}
function showError(id, title, err) {
  const msg = err.message === "Failed to fetch" ? t("unreachable") : err.message;
  $(id).innerHTML = `<h2>${title}</h2><div class="error">${msg}</div>`;
}

/* ---------- Result ---------- */
function renderResult() {
  const box = $("result"), r = state.last;
  if (!r) { box.innerHTML = `<h2>${t("estimate")}</h2><p class="empty">${t("emptyResult")}</p>`; return; }
  box.innerHTML = `
    <h2>${t("estimate")}</h2>
    <div class="label">${t("predictedLabel")}</div>
    <div class="price">${money(r.price)}</div>
    <div class="range"><i></i></div>
    <div class="meta">
      <span>${t("low")}<strong>${money(r.low)}</strong></span>
      <span>${t("high")}<strong>${money(r.high)}</strong></span>
    </div>
    <div class="result-actions"><button class="btn ghost small" id="copyBtn">${t("copy")}</button></div>
    <p class="note">${t("rangeNote")}</p>`;
  $("copyBtn").onclick = async () => {
    const text = `${money(r.price)} (${money(r.low)} – ${money(r.high)})`;
    try { await navigator.clipboard.writeText(text); toast(t("copied")); } catch {}
  };
}

/* ---------- History ---------- */
function addHistory(inputs, r) {
  state.history.unshift({ time: Date.now(), inputs, ...r });
  state.history = state.history.slice(0, 15);
  store.set("history", state.history);
  renderHistory();
}
function renderHistory() {
  $("histCount").textContent = state.history.length;
  const list = $("histList");
  if (!state.history.length) { list.innerHTML = `<li class="empty" style="cursor:default">${t("noHistory")}</li>`; return; }
  const locale = state.lang === "hi" ? "hi-IN" : "en-IN";
  list.innerHTML = state.history.map((h, i) => `
    <li data-i="${i}">
      <div>
        <div class="h-price">${money(h.price)}</div>
        <div class="h-meta">${h.inputs.Latitude}, ${h.inputs.Longitude} · ${t("f_MedInc")} ${h.inputs.MedInc}</div>
      </div>
      <div class="h-meta">${new Date(h.time).toLocaleString(locale, { dateStyle: "medium", timeStyle: "short" })}</div>
    </li>`).join("");
}
$("histList").addEventListener("click", e => {
  const li = e.target.closest("li[data-i]");
  if (!li) return;
  const h = state.history[+li.dataset.i];
  FIELDS.forEach(f => $(f.name).value = h.inputs[f.name]);
  state.last = { price: h.price, low: h.low, high: h.high };
  renderResult(); setTab("single"); toast(t("loaded"));
});
$("clearHist").onclick = () => { state.history = []; store.set("history", []); renderHistory(); };

/* ---------- Tabs ---------- */
function setTab(name) {
  ["single", "file", "history"].forEach(n => $("view-" + n).classList.toggle("hidden", n !== name));
  document.querySelectorAll("[data-tab]").forEach(b => b.setAttribute("aria-selected", b.dataset.tab === name));
}
document.querySelectorAll("[data-tab]").forEach(b => b.onclick = () => setTab(b.dataset.tab));

/* ---------- CSV upload ---------- */
const drop = $("drop"), fileInput = $("fileInput");
function renderDrop() {
  $("dropTitle").textContent = state.file ? state.file.name : t("dropMain");
  $("dropSub").textContent = state.file
    ? `${(state.file.size / 1024).toFixed(1)} KB. ${t("changeFile")}` : t("dropOnly");
}
function chooseFile(f) {
  if (!f) return;
  if (!f.name.toLowerCase().endsWith(".csv")) { showError("fileResult", t("result"), new Error(t("notCsv"))); return; }
  state.file = f; $("uploadBtn").disabled = false; renderDrop();
}
drop.onclick = () => fileInput.click();
drop.onkeydown = e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fileInput.click(); } };
fileInput.onchange = () => chooseFile(fileInput.files[0]);
["dragenter", "dragover"].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.add("over"); }));
["dragleave", "drop"].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.remove("over"); }));
drop.addEventListener("drop", e => chooseFile(e.dataTransfer.files[0]));

$("uploadBtn").onclick = async () => {
  if (!state.file) return;
  const btn = $("uploadBtn");
  btn.disabled = true; btn.textContent = t("working");
  try {
    const fd = new FormData(); fd.append("file", state.file);
    const res = await fetch(api("/predict-file"), { method: "POST", body: fd });
    if (!res.ok) { const d = await res.json().catch(() => ({})); throw new Error(formatDetail(d.detail)); }
    downloadBlob(await res.blob(), "predictions.csv");
    $("fileResult").innerHTML = `<h2>${t("result")}</h2><p class="success">${t("fileDone")}</p>`;
  } catch (err) {
    showError("fileResult", t("result"), err);
  } finally {
    btn.disabled = false; btn.textContent = t("getPredictions");
  }
};
$("sampleBtn").onclick = () => {
  const rows = [FIELDS.map(f => f.ex).join(","), "8.3,41,6.98,1.02,322,2.55,37.88,-122.23", "2.1,15,4.2,1.0,2500,3.4,36.7,-119.8"];
  downloadBlob(new Blob([FIELDS.map(f => f.name).join(",") + "\n" + rows.join("\n") + "\n"], { type: "text/csv" }), "sample.csv");
};
function downloadBlob(blob, name) {
  const a = Object.assign(document.createElement("a"), { href: URL.createObjectURL(blob), download: name });
  document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(a.href);
}

/* ---------- Health check ---------- */
async function checkHealth() {
  state.health = "checking"; renderStatus();
  try {
    const res = await fetch(api("/health"));
    state.healthData = await res.json(); state.health = "up";
  } catch { state.health = "down"; }
  renderStatus();
}
function renderStatus() {
  $("status").className = "status " + (state.health === "checking" ? "" : state.health);
  const d = state.healthData;
  $("statusText").textContent =
    state.health === "checking" ? t("checking") :
    state.health === "down" ? t("offline") :
    `${t("online")}${d ? " · " + t("avgError") + " " + d.avg_error : ""}`;
}
apiBase.addEventListener("change", checkHealth);

/* ---------- Theme, language, currency ---------- */
$("themeBtn").onclick = () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch {}
};
document.querySelectorAll("[data-lang]").forEach(b => b.onclick = () => { state.lang = b.dataset.lang; store.set("lang", state.lang); applyAll(); });
document.querySelectorAll("[data-cur]").forEach(b => b.onclick = () => { state.cur = b.dataset.cur; store.set("cur", state.cur); applyAll(); });

function applyAll() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = t(el.dataset.i18n));
  document.querySelectorAll("[data-lang]").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === state.lang));
  document.querySelectorAll("[data-cur]").forEach(b => b.setAttribute("aria-pressed", b.dataset.cur === state.cur));
  if (document.querySelector("input.bad")) validate();
  renderDrop(); renderStatus(); renderHistory();
  if (!$("result").querySelector(".error") && !$("result").querySelector(".skeleton")) renderResult();
  if (!$("fileResult").innerHTML || $("fileResult").querySelector(".empty"))
    $("fileResult").innerHTML = `<h2>${t("result")}</h2><p class="empty">${t("fileEmpty")}</p>`;
}

applyAll();
checkHealth();
