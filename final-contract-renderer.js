(function () {
  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function formatMoney(value) {
    const n = Number(value);
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number.isFinite(n) ? n : 0);
  }

  function formatDisplayDate(value) {
    if (!value) return "";
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return String(value);
    return d.toLocaleString("en-US", {
      dateStyle: "long",
      timeStyle: "short",
    });
  }

  function compactBrandingFooterHtml() {
    return `
      <p>Rust and Ruin — “One of the Top 5 Bands for Hire in New England” — GigSalad</p>
      <p>Thank you for trusting us with your event.</p>
    `;
  }

  function getContractBacklineFee(contract = {}) {
    return contract.backline_fee ?? contract.backlineFee ?? contract.backlineTechFee ?? contract.backline_tech_fee ?? 0;
  }

  function ensureBacklineSummaryLine(wrap, contract = {}) {
    const summary = wrap.querySelector(".contract-summary");
    if (!summary || /backline\s+tech/i.test(summary.textContent || "")) return;
    const summaryColumn = summary.children[1] || summary.lastElementChild || summary;
    const line = document.createElement("p");
    line.textContent = `Backline tech: ${formatMoney(getContractBacklineFee(contract))}`;

    const lines = Array.from(summaryColumn.querySelectorAll("p"));
    const insertAfter = lines.find((el) => /additional\s+on-site\s+time\s+fee/i.test(el.textContent || ""))
      || lines.find((el) => /performance\s+time\s+fee/i.test(el.textContent || ""));
    if (insertAfter?.parentNode) {
      insertAfter.parentNode.insertBefore(line, insertAfter.nextSibling);
    } else {
      summaryColumn.appendChild(line);
    }
  }

  function renderFinalContractDocument(options = {}) {
    const {
      sourceHtml = "",
      sourceElement = null,
      contract = {},
      bandDNA = {},
      signed = false,
      typedSignature = "",
    } = options;

    const wrap = document.createElement("div");
    wrap.className = "contract-pdf-export";
    wrap.innerHTML = sourceElement
      ? sourceElement.innerHTML
      : sourceHtml || "<p><em>Contract text will appear here once saved from the booking app.</em></p>";

    wrap.querySelectorAll(".signature-note").forEach((el) => el.remove());
    ensureBacklineSummaryLine(wrap, contract);

    const clientSignature = String(typedSignature || contract.client_signature || contract.signatureName || "").trim();
    const clientName = escapeHtml(contract.client_name || contract.clientName || "—");
    const clientEmail = escapeHtml(contract.client_email || contract.clientEmail || "—");
    const clientPhone = escapeHtml(contract.client_phone || contract.clientPhone || "—");
    const dateSigned = signed
      ? escapeHtml(formatDisplayDate(contract.signed_at || contract.signatureDate) || "—")
      : escapeHtml(contract.signatureDate || contract.agreementCreatedDate || "—");
    const bandName = escapeHtml(contract.band_name || bandDNA.bandName || "Band");
    const bandEmail = escapeHtml(contract.band_email || bandDNA.contactEmail || "—");
    const bandPhone = escapeHtml(contract.band_phone || bandDNA.contactPhone || "—");
    const managerSignature = escapeHtml(contract.manager_name || bandDNA.managerName || contract.band_signature_name || bandDNA.signoffName || "—");
    const bandSignature = escapeHtml(contract.band_signature_name || bandDNA.signoffName || contract.band_name || "Band representative");
    const venueAddress = escapeHtml(contract.venue_address || contract.venueAddress || contract.venue_name || "—");

    const signatures = wrap.querySelector(".contract-signatures");
    if (signatures) {
      signatures.innerHTML = `
        <div>
          <p>Client name: ${clientName}</p>
          <p>Client email: ${clientEmail}</p>
          <p>Client phone: ${clientPhone}</p>
          <p>Client signature: ${escapeHtml(clientSignature || "—")}</p>
          <p>Date signed: ${dateSigned}</p>
        </div>
        <div>
          <p>Manager signature: ${managerSignature}</p>
          <p>Venue address: ${venueAddress}</p>
          <p>Band signature: ${bandSignature}</p>
          <p>${bandName}</p>
          <p>Band email: ${bandEmail}</p>
          <p>Band phone: ${bandPhone}</p>
        </div>
      `;
    }

    let footer = wrap.querySelector(".contract-footer");
    if (!footer) {
      footer = document.createElement("footer");
      footer.className = "contract-footer";
      wrap.appendChild(footer);
    }
    footer.innerHTML = compactBrandingFooterHtml();
    return wrap.outerHTML;
  }

  window.GigOSContractRenderer = {
    renderFinalContractDocument,
  };
})();
