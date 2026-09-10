(function () {
  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function toMoney(value) {
    const amount = Number(value || 0);
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number.isFinite(amount) ? amount : 0);
  }

  function formatDate(value) {
    if (!value) return "";
    if (/^\d{4}-\d{2}-\d{2}$/.test(String(value))) {
      const [year, month, day] = String(value).split("-").map(Number);
      return new Date(year, month - 1, day).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
    const parsed = new Date(value);
    if (!Number.isFinite(parsed.getTime())) return String(value);
    return parsed.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  function paymentForLabel(receipt = {}) {
    const paymentFor = String(receipt.paymentFor || receipt.payment_for || "Deposit").trim() || "Deposit";
    const other = String(receipt.paymentForOther || receipt.payment_for_other || "").trim();
    return paymentFor === "Other" && other ? other : paymentFor;
  }

  function row(label, value) {
    const clean = String(value ?? "").trim();
    if (!clean) return "";
    return `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(clean)}</p>`;
  }

  function renderReceiptDocument(receipt = {}, bandDNA = {}) {
    const bandName = bandDNA.bandName || bandDNA.band_name || "the band";
    const contact = [bandDNA.contactEmail || bandDNA.contact_email, bandDNA.contactPhone || bandDNA.contact_phone]
      .filter(Boolean)
      .join(" · ");
    const relatedInvoice = receipt.relatedInvoice || receipt.related_invoice || "";
    const eventDate = receipt.eventDate || receipt.event_date || "";
    const venueName = receipt.venueName || receipt.venue_name || "";
    return `
      <div class="receipt" id="receiptPreview">
        <div class="invoice-header">
          <div>
            <p class="contract-tag">Receipt</p>
            <h2>${escapeHtml(bandName)}</h2>
            <p>${escapeHtml(receipt.receiptNumber || receipt.receipt_number || "")}</p>
          </div>
          <div>
            ${row("Payment date", formatDate(receipt.paymentDate || receipt.payment_date))}
            ${row("Payment for", paymentForLabel(receipt))}
            ${row("Payment method", receipt.paymentMethod || receipt.payment_method)}
          </div>
        </div>
        <div class="invoice-body">
          ${row("Client", receipt.clientName || receipt.client_name)}
          ${row("Related invoice", relatedInvoice)}
          ${row("Event date", formatDate(eventDate))}
          ${row("Venue", venueName)}
          <div class="invoice-total">
            <span>Amount paid</span>
            <span>${toMoney(receipt.amountPaid ?? receipt.amount_paid)}</span>
          </div>
        </div>
        <footer class="contract-footer">
          <p>Thank you for supporting live music.</p>
          ${contact ? `<p>${escapeHtml(contact)}</p>` : ""}
        </footer>
      </div>
    `;
  }

  window.GigOSReceiptRenderer = {
    renderReceiptDocument,
    formatDate,
    toMoney,
    paymentForLabel,
  };
})();
