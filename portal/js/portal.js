function statusOf(now, opens, due, dueSoonHours) {
  const t = now.getTime();
  const o = new Date(opens).getTime();
  const d = new Date(due).getTime();
  if (t < o) return "Upcoming";
  if (t > d) return "Closed";
  const hoursLeft = (d - t) / 36e5;
  if (hoursLeft <= dueSoonHours) return "Due Soon";
  return "Open";
}

function statusClass(label) {
  if (label === "Open") return "status-open";
  if (label === "Due Soon") return "status-soon";
  if (label === "Closed") return "status-closed";
  return "status-upcoming";
}

function hrefOrNull(url) {
  if (!url || !String(url).trim()) return null;
  return String(url).trim();
}

async function loadConfig() {
  const [cal, links] = await Promise.all([
    fetch("../config/course-calendar.json").then((r) => r.json()),
    fetch("../config/submission-links.json").then((r) => r.json()),
  ]);
  return { cal, links };
}

function renderStudent(root, cal, links, now) {
  const hours = cal.due_soon_hours || 48;
  const next = cal.milestones.find((m) => new Date(m.due).getTime() >= now.getTime());
  if (next) {
    const st = statusOf(now, next.opens, next.due, hours);
    root.querySelector("#next-ms").innerHTML =
      "<strong>Next:</strong> " +
      next.title +
      " · due " +
      new Date(next.due).toLocaleString("en-IN") +
      ' · <span class="status ' +
      statusClass(st) +
      '">' +
      st +
      "</span>";
  } else {
    root.querySelector("#next-ms").textContent = "All configured milestones are past due.";
  }

  const box = root.querySelector("#ms-list");
  box.innerHTML = "";
  cal.milestones.forEach((m) => {
    const st = statusOf(now, m.opens, m.due, hours);
    const url = hrefOrNull(links[m.student_key]);
    const card = document.createElement("div");
    card.className = "card";
    const closed = st === "Closed" || st === "Upcoming";
    const btnLabel = url ? "Submit" : "Form not configured";
    card.innerHTML =
      "<h3>" +
      m.title +
      "</h3><p>Due: " +
      new Date(m.due).toLocaleString("en-IN") +
      '</p><p>Status: <span class="status ' +
      statusClass(st) +
      '">' +
      st +
      "</span></p>";
    const a = document.createElement("a");
    a.className = "btn";
    a.textContent = st === "Closed" ? "Submission Closed" : btnLabel;
    if (!url || st === "Closed" || st === "Upcoming") {
      a.setAttribute("aria-disabled", "true");
      a.href = "#";
      a.addEventListener("click", (e) => e.preventDefault());
    } else {
      a.href = url;
    }
    card.appendChild(a);
    if (!url) {
      const p = document.createElement("p");
      p.className = "muted";
      p.textContent = "Faculty has not pasted a student form URL yet.";
      card.appendChild(p);
    }
    box.appendChild(card);
  });
}

function renderFaculty(root, cal, links, now) {
  const hours = cal.due_soon_hours || 48;
  const tb = root.querySelector("#fac-body");
  tb.innerHTML = "";
  cal.milestones.forEach((m) => {
    const st = statusOf(now, m.opens, m.due, hours);
    const su = hrefOrNull(links[m.student_key]);
    const fu = hrefOrNull(links[m.faculty_key]);
    const tr = document.createElement("tr");
    function cellLink(url, label) {
      if (!url) return "<td>Not configured</td>";
      return '<td><a href="' + url + '">' + label + "</a></td>";
    }
    tr.innerHTML =
      "<td>" +
      m.title +
      "</td><td>" +
      new Date(m.due).toLocaleDateString("en-IN") +
      '</td><td class="' +
      statusClass(st) +
      '">' +
      st +
      "</td>" +
      cellLink(su, "Student form") +
      cellLink(fu, "Responses") +
      "<td>" +
      (m.event || "—") +
      "</td>";
    tb.appendChild(tr);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const mode = document.body.getAttribute("data-mode");
  try {
    const { cal, links } = await loadConfig();
    const now = new Date();
    if (mode === "student") renderStudent(document, cal, links, now);
    if (mode === "faculty") renderFaculty(document, cal, links, now);
  } catch (e) {
    const el = document.querySelector("#config-error");
    if (el) el.textContent = "Could not load config JSON (open via GitHub Pages or a local static server).";
  }
});
