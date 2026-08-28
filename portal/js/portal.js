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

function daysRemaining(now, due) {
  const ms = new Date(due).getTime() - now.getTime();
  if (ms < 0) return 0;
  return Math.ceil(ms / 86400000);
}

async function loadConfig() {
  const [cal, links] = await Promise.all([
    fetch("../config/course-calendar.json").then((r) => r.json()),
    fetch("../config/submission-links.json").then((r) => r.json()),
  ]);
  return { cal, links };
}

function getStages(cal) {
  return cal.stages || cal.milestones || [];
}

function renderStudentHero(root, cal, now) {
  const pbl = cal.pbl || {};
  const meta = root.querySelector("#pbl-meta");
  if (meta) {
    meta.innerHTML =
      "<p><strong>" +
      (pbl.title || "Design & Development of a Real-World Database-Driven Application") +
      "</strong></p>" +
      "<p class=\"muted\">Team size: " +
      (pbl.team_size || "4–5") +
      " · Duration: " +
      (pbl.duration_weeks || 10) +
      " weeks · Total: " +
      (pbl.total_marks || 100) +
      " marks</p>";
  }

  const stages = getStages(cal);
  const hours = cal.due_soon_hours || 48;
  let current = null;
  let next = null;

  stages.forEach((s) => {
    const st = statusOf(now, s.opens, s.due, hours);
    if (!current && (st === "Open" || st === "Due Soon")) current = s;
    if (!next && new Date(s.due).getTime() >= now.getTime()) next = s;
  });
  if (!next && stages.length) next = stages[stages.length - 1];

  const target = current || next;
  const hero = root.querySelector("#stage-hero");
  if (hero && target) {
    const st = statusOf(now, target.opens, target.due, hours);
    const days = daysRemaining(now, target.due);
    hero.innerHTML =
      "<h2>Current focus</h2>" +
      "<p class=\"stage-title\">" +
      target.title +
      "</p>" +
      "<p><strong>Status:</strong> <span class=\"status " +
      statusClass(st) +
      "\">" +
      st +
      "</span></p>" +
      "<p><strong>Due:</strong> " +
      new Date(target.due).toLocaleString("en-IN") +
      "</p>" +
      "<p><strong>Days remaining:</strong> " +
      days +
      "</p>" +
      "<p><strong>Weightage:</strong> " +
      (target.weight || "—") +
      " marks</p>";
  }
}

function makeBtn(label, url, enabled, extraClass) {
  const a = document.createElement("a");
  a.className = "btn" + (extraClass ? " " + extraClass : "");
  a.textContent = label;
  if (!enabled || !url) {
    a.setAttribute("aria-disabled", "true");
    a.href = "#";
    a.addEventListener("click", (e) => e.preventDefault());
  } else {
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
  }
  return a;
}

function renderStudentStages(root, cal, links, now) {
  const hours = cal.due_soon_hours || 48;
  const box = root.querySelector("#ms-list");
  if (!box) return;
  box.innerHTML = "";

  getStages(cal).forEach((s) => {
    const st = statusOf(now, s.opens, s.due, hours);
    const url = hrefOrNull(links[s.student_key]);
    const card = document.createElement("div");
    card.className = "card stage-card";

    let html =
      "<h3>" +
      s.title +
      " <span class=\"weight\">(" +
      (s.weight || "?") +
      " marks)</span></h3>" +
      "<p><strong>Opens:</strong> " +
      new Date(s.opens).toLocaleDateString("en-IN") +
      " · <strong>Due:</strong> " +
      new Date(s.due).toLocaleDateString("en-IN") +
      "</p>" +
      '<p>Status: <span class="status ' +
      statusClass(st) +
      '">' +
      st +
      "</span></p>";

    if (s.deliverables && s.deliverables.length) {
      html += "<p><strong>Required deliverables:</strong></p><ul>";
      s.deliverables.forEach((d) => {
        html += "<li>" + d + "</li>";
      });
      html += "</ul>";
    }

    card.innerHTML = html;

    const row = document.createElement("div");
    row.className = "btn-row";

    if (s.guidelines) {
      row.appendChild(makeBtn("View Guidelines", s.guidelines, true, "btn-secondary"));
    }
    if (s.template) {
      row.appendChild(makeBtn("Use Template", s.template, true, "btn-secondary"));
    }

    const submitLabel =
      st === "Closed" ? "Submission Closed" : url ? "Submit" : "Form not configured";
    const canSubmit = url && (st === "Open" || st === "Due Soon");
    row.appendChild(makeBtn(submitLabel, url, canSubmit, "btn-primary"));

    card.appendChild(row);

    if (!url && st !== "Closed") {
      const p = document.createElement("p");
      p.className = "muted";
      p.textContent = "Faculty has not pasted a student form URL in submission-links.json.";
      card.appendChild(p);
    }

    box.appendChild(card);
  });
}

function renderFaculty(root, cal, links, now) {
  const hours = cal.due_soon_hours || 48;
  const tb = root.querySelector("#fac-body");
  if (!tb) return;
  tb.innerHTML = "";

  getStages(cal).forEach((s) => {
    const st = statusOf(now, s.opens, s.due, hours);
    const su = hrefOrNull(links[s.student_key]);
    const fu = hrefOrNull(links[s.faculty_key]);
    const tr = document.createElement("tr");

    function cellLink(url, label) {
      if (!url) return "<td>Not configured</td>";
      return '<td><a href="' + url + '" target="_blank" rel="noopener">' + label + "</a></td>";
    }

    tr.innerHTML =
      "<td>" +
      s.title +
      " (" +
      (s.weight || "?") +
      ")</td><td>" +
      new Date(s.due).toLocaleDateString("en-IN") +
      '</td><td class="' +
      statusClass(st) +
      '">' +
      st +
      "</td>" +
      cellLink(su, "Student form") +
      cellLink(fu, "Responses") +
      "<td><a href=\"../pbl/rubrics/faculty-rubric.md\">Rubric</a></td>" +
      "<td>" +
      (s.event || s.checkpoint || "—") +
      "</td>";
    tb.appendChild(tr);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const mode = document.body.getAttribute("data-mode");
  try {
    const { cal, links } = await loadConfig();
    const now = new Date();
    if (mode === "student") {
      renderStudentHero(document, cal, now);
      renderStudentStages(document, cal, links, now);
    }
    if (mode === "faculty") renderFaculty(document, cal, links, now);
  } catch (e) {
    const el = document.querySelector("#config-error");
    if (el)
      el.textContent =
        "Could not load config JSON. Open via GitHub Pages or a local static server (not file://).";
  }
});
