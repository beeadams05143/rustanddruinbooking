const depositDefault = 50;
const additionalSongFee = 50;

function createInitialAgreementState() {
  return {
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    performanceDate: "",
    performanceTime: "",
    performanceEndTime: "",
    holidayWeekend: false,
    hours: "",
    feeTotal: "",
    depositAmount: "50",
    depositEnabled: true,
    depositWaived: false,
    promoCredit: false,
    liveVideoCredit: false,
    depositPaid: "",
    amountDueDayOf: "",
    bandConfig: "Full Band",
    additionalMusicians: "0",
    venueAddress: "",
    nonPerformanceHours: "",
    chargeNonPerformance: false,
    backlineSound: false,
    travelOutside: false,
    travelHours: "",
    travelPerformerCount: "4",
    lodgingEnabled: false,
    lodgingRate: "250",
    addonTent: false,
    addonLights: false,
    addonGenerator: false,
    addonAdditionalSong: false,
    addonRecordedSong: false,
    addonMCing: false,
    addonDJing: false,
    requestedSongs: "",
    signatureName: "",
    signatureChecked: false,
    signatureDate: "",
    agreementCreatedDate: todayString(),
  };
}

const state = {
  agreement: createInitialAgreementState(),
  invoice: {
    invoiceNumber: "INV-001",
    clientName: "",
    clientEmail: "",
    issueDate: "",
    dueDate: "",
    description: "Live performance",
    performanceFee: "",
    depositDue: "",
    depositPaid: "",
    addons: "",
    totalOverride: "",
  },
  receipt: {
    receiptNumber: "RCPT-001",
    clientName: "",
    paymentDate: "",
    amountPaid: "",
    paymentMethod: "Venmo",
    relatedInvoice: "",
  },
  calendar: {
    overridePin: "",
    client: null,
    monthOffset: 0,
    selectedDate: "",
    selectedEventId: "",
    events: [],
    contracts: [],
    assignments: [],
    blackouts: [],
    session: null,
  },
  billing: {
    invoices: [],
    receipts: [],
  },
  workOrders: [],
  workOrderView: {
    focusId: "",
    showCreate: true,
  },
  musicianEditor: {
    id: "",
  },
  musicians: [],
  activeTab: "agreement",
};


const agreementFields = [
  "clientName",
  "clientEmail",
  "clientPhone",
  "performanceDate",
  "performanceTime",
  "performanceEndTime",
  "holidayWeekend",
  "hours",
  "feeTotal",
  "depositAmount",
  "depositEnabled",
  "depositWaived",
  "promoCredit",
  "liveVideoCredit",
  "depositPaid",
  "amountDueDayOf",
  "bandConfig",
  "additionalMusicians",
  "venueAddress",
  "backlineSound",
  "nonPerformanceHours",
  "chargeNonPerformance",
  "travelOutside",
  "travelHours",
  "travelPerformerCount",
  "lodgingEnabled",
  "lodgingRate",
  "addonTent",
  "addonLights",
  "addonGenerator",
  "addonAdditionalSong",
  "addonRecordedSong",
  "addonMCing",
  "addonDJing",
  "requestedSongs",
  "signatureName",
  "signatureChecked",
];

const invoiceFields = [
  "invoiceNumber",
  "invoiceClientName",
  "invoiceClientEmail",
  "invoiceIssueDate",
  "invoiceDueDate",
  "invoiceDescription",
  "invoicePerformanceFee",
  "invoiceDepositDue",
  "invoiceDepositPaid",
  "invoiceAddons",
  "invoiceTotalOverride",
];

const receiptFields = [
  "receiptNumber",
  "receiptClientName",
  "receiptPaymentDate",
  "receiptAmountPaid",
  "receiptPaymentMethod",
  "receiptRelatedInvoice",
];

function toNumber(value) {
  const parsed = Number.parseFloat(value);
  return Number.isNaN(parsed) ? 0 : parsed;
}

function toMoney(value) {
  if (Number.isNaN(value)) return "$0.00";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);
}

function todayString() {
  return new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function parseTimeValue(timeValue) {
  if (!timeValue || typeof timeValue !== "string") return null;
  const normalized = timeValue.trim().toUpperCase();

  const match12 = normalized.match(/^(\d{1,2}):(\d{2})\s*([AP]M)$/);
  if (match12) {
    let hours = Number(match12[1]);
    const minutes = Number(match12[2]);
    const meridiem = match12[3];
    if (
      Number.isNaN(hours) ||
      Number.isNaN(minutes) ||
      hours < 1 ||
      hours > 12 ||
      minutes < 0 ||
      minutes > 59
    ) {
      return null;
    }
    if (meridiem === "AM") {
      hours = hours === 12 ? 0 : hours;
    } else {
      hours = hours === 12 ? 12 : hours + 12;
    }
    return { hours, minutes };
  }

  const match24 = normalized.match(/^(\d{1,2}):(\d{2})$/);
  if (match24) {
    const hours = Number(match24[1]);
    const minutes = Number(match24[2]);
    if (
      Number.isNaN(hours) ||
      Number.isNaN(minutes) ||
      hours < 0 ||
      hours > 23 ||
      minutes < 0 ||
      minutes > 59
    ) {
      return null;
    }
    return { hours, minutes };
  }

  return null;
}

function formatTime(timeValue) {
  if (!timeValue) return "__";
  const parsed = parseTimeValue(timeValue);
  if (!parsed) return timeValue;
  const date = new Date();
  date.setHours(parsed.hours, parsed.minutes, 0, 0);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

function formatDate(dateValue) {
  if (!dateValue) return "__";
  const [year, month, day] = dateValue.split("-").map(Number);
  if (!year || !month || !day) return dateValue;
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function hoursBetweenTimes(startTime, endTime) {
  if (!startTime || !endTime) return 0;
  const parsedStart = parseTimeValue(startTime);
  const parsedEnd = parseTimeValue(endTime);
  if (!parsedStart || !parsedEnd) return 0;
  const startMinutes = parsedStart.hours * 60 + parsedStart.minutes;
  let endMinutes = parsedEnd.hours * 60 + parsedEnd.minutes;
  if (endMinutes < startMinutes) {
    endMinutes += 24 * 60;
  }
  return Math.max(0, (endMinutes - startMinutes) / 60);
}

const STORAGE_KEY = "rustandruin-booking-draft";
const CALENDAR_SETTINGS_KEY = "rustandruin-calendar-settings";
const SUPABASE_URL =
  window.RR_SUPABASE_CONFIG?.url || "https://ipxjalcgiaqcyubrxqxu.supabase.co";
const SUPABASE_ANON_KEY =
  window.RR_SUPABASE_CONFIG?.anonKey || "sb_publishable_-XW9I_e7OR4TUMq0B4SG-Q_el-7vKPJ";
const OVERRIDE_PIN_SETTING = "override_pin";
const CALENDAR_AUTH_SEEN_KEY = "rustandruin-calendar-auth-seen";
const AUTO_HOLD_NOTE = "Pending contract signature (auto-created from agreement)";
let holdSyncTimer = null;
let switchTopView = null;

function saveDraft() {
  try {
    const payload = {
      agreement: state.agreement,
      invoice: state.invoice,
      receipt: state.receipt,
      workOrders: state.workOrders,
      musicians: state.musicians,
      assignments: state.calendar.assignments,
      blackouts: state.calendar.blackouts,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (error) {
    // ignore storage failures
  }
}

function loadDraft() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return;
    const parsed = JSON.parse(stored);
    if (parsed.agreement) {
      state.agreement = { ...state.agreement, ...parsed.agreement };
    }
    if (parsed.invoice) {
      state.invoice = { ...state.invoice, ...parsed.invoice };
    }
    if (parsed.receipt) {
      state.receipt = { ...state.receipt, ...parsed.receipt };
    }
    if (Array.isArray(parsed.workOrders)) {
      state.workOrders = parsed.workOrders;
    }
    if (Array.isArray(parsed.musicians)) {
      state.musicians = parsed.musicians;
    }
    if (Array.isArray(parsed.assignments)) {
      state.calendar.assignments = parsed.assignments;
    }
    if (Array.isArray(parsed.blackouts)) {
      state.calendar.blackouts = parsed.blackouts;
    }
  } catch (error) {
    // ignore invalid storage
  }
}

function saveCalendarSettings() {
  try {
    const payload = {
      overridePin: state.calendar.overridePin,
    };
    localStorage.setItem(CALENDAR_SETTINGS_KEY, JSON.stringify(payload));
  } catch (error) {
    // ignore storage failures
  }
}

function loadCalendarSettings() {
  try {
    const stored = localStorage.getItem(CALENDAR_SETTINGS_KEY);
    if (!stored) return;
    const parsed = JSON.parse(stored);
    if (parsed.overridePin) state.calendar.overridePin = parsed.overridePin;
  } catch (error) {
    // ignore invalid storage
  }
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function formatDateInput(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatTimeInput(date) {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

function parseLocalDate(dateStr) {
  if (!dateStr) return null;
  const [year, month, day] = dateStr.split("-").map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day);
}

function combineDateTime(dateStr, timeStr) {
  if (!dateStr || !timeStr) return null;
  const [year, month, day] = dateStr.split("-").map(Number);
  const parsedTime = parseTimeValue(timeStr);
  if (!parsedTime) return null;
  return new Date(year, month - 1, day, parsedTime.hours, parsedTime.minutes || 0);
}

function formatHourValue(value) {
  const rounded = Math.round(value * 100) / 100;
  if (Number.isInteger(rounded)) return String(rounded);
  return rounded.toFixed(2).replace(/\.?0+$/, "");
}

function formatNumberInput(value) {
  const rounded = Math.round(value * 100) / 100;
  if (Number.isInteger(rounded)) return String(rounded);
  return rounded.toFixed(2);
}

function updatePerformanceHoursFromTimes() {
  const startTime = state.agreement.performanceTime;
  const endTime = state.agreement.performanceEndTime;
  if (!startTime || !endTime) return;
  const computedHours = hoursBetweenTimes(startTime, endTime);
  if (computedHours <= 0) return;
  const hoursValue = formatHourValue(computedHours);
  state.agreement.hours = hoursValue;
  const hoursInput = document.getElementById("hours");
  if (hoursInput) hoursInput.value = hoursValue;
}

function formatShortDateTime(value) {
  if (!value) return "";
  const date = new Date(value);
  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function buildMessage(type) {
  const clientName = state.agreement.clientName || "there";
  const eventDate = state.agreement.performanceDate || "your event date";
  const venue = state.agreement.venueAddress || "your venue";

  if (type === "invoice") {
    const subject = `Rust and Ruin Invoice – ${eventDate}`;
    const body = `Hello ${state.invoice.clientName || clientName},\n\nAttached is your invoice for ${eventDate}. Please review the details and submit payment at your earliest convenience.\n\nThanks,\nRust and Ruin\nInstagram: @Rust and Ruin\nFacebook: @rustandruinvt`;
    return { title: "Invoice Message", subject, body };
  }

  if (type === "receipt") {
    const subject = `Rust and Ruin Receipt – ${state.receipt.paymentDate || eventDate}`;
    const body = `Hello ${state.receipt.clientName || clientName},\n\nAttached is your receipt. Thank you for your payment and for hosting Rust and Ruin.\n\nWe look forward to performing for you.\n\nThanks,\nRust and Ruin\nInstagram: @Rust and Ruin\nFacebook: @rustandruinvt`;
    return { title: "Receipt Message", subject, body };
  }

  const subject = `Rust and Ruin Performance Agreement – ${eventDate}`;
  const body = `Hello ${clientName},\n\nAttached is the performance agreement for ${eventDate} at ${venue}. Please review and sign the agreement. You can sign with a finger/stylus on your phone, then send a clear photo or scan, or print and sign, return by mail.\n\nNext steps\n1. Sign and return the agreement.\n2. Submit the deposit.\n\nWe look forward to performing for you.\n\nThanks,\nRust and Ruin\nInstagram: @Rust and Ruin\nFacebook: @rustandruinvt`;
  return { title: "Agreement Message", subject, body };
}

function updateMessagePreview() {
  const message = buildMessage(state.activeTab);
  const title = document.getElementById("messageTitle");
  const body = document.getElementById("messageBody");
  if (title) title.textContent = message.title;
  if (body) body.textContent = `${message.subject}\n\n${message.body}`;
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function isBetween(target, start, end) {
  const t = startOfDay(target).getTime();
  const s = startOfDay(start).getTime();
  const e = startOfDay(end).getTime();
  return t >= s && t <= e;
}

function getNthWeekdayOfMonth(year, monthIndex, weekday, nth) {
  const first = new Date(year, monthIndex, 1);
  const firstWeekday = (7 + weekday - first.getDay()) % 7;
  return new Date(year, monthIndex, 1 + firstWeekday + (nth - 1) * 7);
}

function getLastWeekdayOfMonth(year, monthIndex, weekday) {
  const last = new Date(year, monthIndex + 1, 0);
  const offset = (7 + last.getDay() - weekday) % 7;
  return new Date(year, monthIndex + 1, 0 - offset);
}

function getClosestWeekend(date) {
  const day = date.getDay();
  const prevSaturday = addDays(date, -((day + 1) % 7));
  const nextSaturday = addDays(date, (6 - day + 7) % 7);
  const prevDiff = Math.abs(startOfDay(date) - startOfDay(prevSaturday));
  const nextDiff = Math.abs(startOfDay(nextSaturday) - startOfDay(date));

  const chosen = prevDiff <= nextDiff ? prevSaturday : nextSaturday;
  return {
    start: addDays(chosen, -1),
    end: addDays(chosen, 1),
  };
}

function isHolidayWeekend(date) {
  const year = date.getFullYear();

  const memorialDay = getLastWeekdayOfMonth(year, 4, 1); // last Monday in May
  const laborDay = getNthWeekdayOfMonth(year, 8, 1, 1); // first Monday in Sept
  const presidentsDay = getNthWeekdayOfMonth(year, 1, 1, 3); // third Monday in Feb
  const columbusDay = getNthWeekdayOfMonth(year, 9, 1, 2); // second Monday in Oct
  const thanksgiving = getNthWeekdayOfMonth(year, 10, 4, 4); // fourth Thursday in Nov

  const memorialWeekendStart = addDays(memorialDay, -3);
  const memorialWeekendEnd = memorialDay;
  const laborWeekendStart = addDays(laborDay, -3);
  const laborWeekendEnd = laborDay;
  const presidentsWeekendStart = addDays(presidentsDay, -3);
  const presidentsWeekendEnd = presidentsDay;
  const columbusWeekendStart = addDays(columbusDay, -3);
  const columbusWeekendEnd = columbusDay;
  const thanksgivingWeekendStart = thanksgiving;
  const thanksgivingWeekendEnd = addDays(thanksgiving, 3);

  const julyFourth = new Date(year, 6, 4);
  const julyFourthStart = addDays(julyFourth, -1);
  const julyFourthEnd = addDays(julyFourth, 1);

  const halloween = new Date(year, 9, 31);
  const halloweenWeekend = getClosestWeekend(halloween);
  const valentines = new Date(year, 1, 14);
  const valentinesWeekend = getClosestWeekend(valentines);

  const christmasWeekStart = new Date(year, 11, 21);
  const christmasWeekEnd = new Date(year, 11, 27);

  const newYearsStart = new Date(year, 11, 31);
  const newYearsEnd = new Date(year + 1, 0, 1);

  return (
    isBetween(date, memorialWeekendStart, memorialWeekendEnd) ||
    isBetween(date, laborWeekendStart, laborWeekendEnd) ||
    isBetween(date, presidentsWeekendStart, presidentsWeekendEnd) ||
    isBetween(date, columbusWeekendStart, columbusWeekendEnd) ||
    isBetween(date, thanksgivingWeekendStart, thanksgivingWeekendEnd) ||
    isBetween(date, julyFourthStart, julyFourthEnd) ||
    isBetween(date, halloweenWeekend.start, halloweenWeekend.end) ||
    isBetween(date, valentinesWeekend.start, valentinesWeekend.end) ||
    isBetween(date, christmasWeekStart, christmasWeekEnd) ||
    isBetween(date, newYearsStart, newYearsEnd)
  );
}

function updateHolidayFromDate() {
  const dateValue = document.getElementById("performanceDate").value;
  if (!dateValue) return;

  const [year, month, day] = dateValue.split("-").map(Number);
  const selectedDate = new Date(year, month - 1, day);
  const isHoliday = isHolidayWeekend(selectedDate);

  state.agreement.holidayWeekend = isHoliday;
  const holidayCheckbox = document.getElementById("holidayWeekend");
  if (holidayCheckbox) holidayCheckbox.checked = isHoliday;

  const warning = document.getElementById("holidayWarning");
  if (warning) warning.classList.toggle("hidden", !isHoliday);
}

function setText(selector, value) {
  document.querySelectorAll(selector).forEach((el) => {
    el.textContent = value;
  });
}

function getAgreementTotals() {
  const depositEnabled = state.agreement.depositEnabled !== false;
  const rawDepositAmount = depositEnabled
    ? state.agreement.depositAmount
      ? toNumber(state.agreement.depositAmount)
      : depositDefault
    : 0;
  const depositWaived = depositEnabled && state.agreement.depositWaived;
  const depositCredits = depositEnabled && !depositWaived
    ? (state.agreement.promoCredit ? 5 : 0) +
      (state.agreement.liveVideoCredit ? 10 : 0)
    : 0;
  const adjustedDeposit = depositWaived
    ? 0
    : Math.max(0, rawDepositAmount - depositCredits);
  const addonFees = {
    addonTent: 25,
    addonLights: 10,
    addonGenerator: 75,
    addonAdditionalSong: additionalSongFee,
    addonRecordedSong: 5,
    addonMCing: 50,
    addonDJing: 50,
  };
  const addOnTotal = Object.entries(addonFees).reduce((total, [key, value]) => {
    return state.agreement[key] ? total + value : total;
  }, 0);
  const baseBandMembers = state.agreement.bandConfig === "Full Band" ? 4 : 2;
  const extraMembers = toNumber(state.agreement.additionalMusicians);
  const bandMembers = baseBandMembers + (extraMembers > 0 ? extraMembers : 0);
  const manualPerformanceHours = toNumber(state.agreement.hours);
  const computedHours =
    manualPerformanceHours > 0
      ? manualPerformanceHours
      : hoursBetweenTimes(
          state.agreement.performanceTime,
          state.agreement.performanceEndTime
        );
  const performanceFeeAuto = computedHours * 50 * bandMembers;
  const performanceFeeEffective = performanceFeeAuto;
  const nonPerformanceHours = toNumber(state.agreement.nonPerformanceHours);
  const onsiteFee = state.agreement.chargeNonPerformance
    ? nonPerformanceHours * 50 * bandMembers
    : 0;
  const backlineFee = state.agreement.backlineSound ? 50 : 0;
  const holidayFee = state.agreement.holidayWeekend
    ? computedHours * 50 * bandMembers
    : 0;
  const travelHours = toNumber(state.agreement.travelHours);
  const roundTripTravelHours = travelHours * 2;
  const travelBandMembers = Math.max(0, toNumber(state.agreement.travelPerformerCount));
  const travelFee = state.agreement.travelOutside
    ? roundTripTravelHours * 25 * travelBandMembers
    : 0;
  const lodgingFee = state.agreement.lodgingEnabled
    ? toNumber(state.agreement.lodgingRate)
    : 0;
  const travelLodgingTotal = travelFee + lodgingFee;
  const feeSubtotal = performanceFeeEffective + backlineFee + addOnTotal + adjustedDeposit;
  const totalWithDeposit =
    performanceFeeEffective +
    addOnTotal +
    adjustedDeposit +
    travelFee +
    lodgingFee +
    onsiteFee +
    holidayFee +
    backlineFee;

  return {
    depositAmount: adjustedDeposit,
    rawDepositAmount,
    depositEnabled,
    depositWaived,
    depositCredits,
    addOnTotal,
    feeSubtotal,
    totalWithDeposit,
    performanceFee: performanceFeeEffective,
    performanceFeeAuto,
    travelFee,
    travelHours,
    bandMembers,
    lodgingFee,
    addonFees,
    onsiteFee,
    travelBandMembers,
    travelLodgingTotal,
    holidayFee,
    performanceHoursTotal: computedHours,
    eventSubtotal: performanceFeeEffective + onsiteFee + backlineFee + holidayFee,
    backlineFee,
    performanceFeeAuto,
    performanceFeeEffective,
  };
}

function updateFeesAndDepositsFields(totals) {
  if (totals.depositEnabled && !totals.depositWaived && !state.agreement.depositAmount) {
    state.agreement.depositAmount = String(depositDefault);
    const depositInput = document.getElementById("depositAmount");
    if (depositInput) depositInput.value = state.agreement.depositAmount;
  }

  const feeValue = formatNumberInput(totals.performanceFeeEffective);
  state.agreement.feeTotal = feeValue;
  const feeInput = document.getElementById("feeTotal");
  if (feeInput) feeInput.value = feeValue;

  const backlineInput = document.getElementById("feeBackline");
  if (backlineInput) backlineInput.value = toMoney(totals.backlineFee);

  const addonsInput = document.getElementById("feeAddons");
  if (addonsInput) addonsInput.value = toMoney(totals.addOnTotal);

  const depositDueInput = document.getElementById("feeDepositDue");
  if (depositDueInput) depositDueInput.value = toMoney(totals.depositAmount);

  const dayOfDue = Math.max(0, totals.totalWithDeposit - totals.depositAmount);
  const dayOfValue = toMoney(dayOfDue);
  state.agreement.amountDueDayOf = dayOfValue;
  const dayOfInput = document.getElementById("amountDueDayOf");
  if (dayOfInput) dayOfInput.value = dayOfValue;
}

function updateAgreementPreview() {
  const totals = getAgreementTotals();
  updateFeesAndDepositsFields(totals);
  document.querySelectorAll("[data-fill='clientName']").forEach((el) => {
    el.textContent = state.agreement.clientName || "__";
  });
  setText("[data-fill='clientEmail']", state.agreement.clientEmail || "__");
  setText("[data-fill='clientPhone']", state.agreement.clientPhone || "__");
  setText("[data-fill='performanceDate']", formatDate(state.agreement.performanceDate));
  setText("[data-fill='performanceTime']", formatTime(state.agreement.performanceTime));
  setText("[data-fill='performanceEndTime']", formatTime(state.agreement.performanceEndTime));
  setText("[data-fill='hours']", state.agreement.hours || "__");
  setText(
    "[data-fill='performanceHoursDisplay']",
    totals.performanceHoursTotal.toFixed(2)
  );
  setText(
    "[data-fill='nonPerformanceHours']",
    state.agreement.chargeNonPerformance
      ? state.agreement.nonPerformanceHours || "__"
      : "__"
  );
  setText(
    "[data-fill='nonPerformanceHoursDisplay']",
    state.agreement.chargeNonPerformance
      ? toNumber(state.agreement.nonPerformanceHours).toFixed(2)
      : "0.00"
  );
  setText(
    "[data-fill='holidayFee']",
    state.agreement.holidayWeekend ? toMoney(totals.holidayFee) : "$0.00"
  );
  setText("[data-fill='bandConfig']", state.agreement.bandConfig);
  setText("[data-fill='venueAddress']", state.agreement.venueAddress || "__");
  setText("[data-fill='depositPaid']", state.agreement.depositPaid || "__");
  setText("[data-fill='depositDue']", toMoney(totals.depositAmount));
  setText("[data-fill='amountDueDayOf']", state.agreement.amountDueDayOf || "__");
  setText("[data-fill='requestedSongs']", state.agreement.requestedSongs || "None");
  setText("[data-fill='signatureName']", state.agreement.signatureName || "__");
  setText("[data-fill='agreementCreatedDate']", state.agreement.agreementCreatedDate || todayString());

  const promoBlock = document.getElementById("promoCreditsBlock");
  if (promoBlock) {
    promoBlock.classList.toggle("hidden", totals.depositCredits <= 0);
  }

  setText("[data-fill='performanceFee']", toMoney(totals.performanceFeeEffective));
  setText("[data-fill='performanceFeeAuto']", toMoney(totals.performanceFeeAuto));
  setText(
    "[data-fill='depositAmount']",
    !totals.depositEnabled
      ? "Not required"
      : totals.depositWaived
      ? "Waived"
      : toMoney(totals.depositAmount)
  );
  setText(
    "[data-fill='depositCredits']",
    totals.depositCredits > 0 ? `-${toMoney(totals.depositCredits)}` : "$0.00"
  );
  setText("[data-fill='addonTotal']", toMoney(totals.addOnTotal));
  setText("[data-fill='feesSubtotal']", toMoney(totals.feeSubtotal));
  setText("[data-fill='totalWithDeposit']", toMoney(totals.totalWithDeposit));
  setText("[data-fill='travelHours']", state.agreement.travelHours || "__");
  setText("[data-fill='travelBandMembers']", String(totals.travelBandMembers || 0));
  setText(
    "[data-fill='travelFee']",
    state.agreement.travelOutside ? toMoney(totals.travelFee) : "$0.00"
  );
  setText("[data-fill='lodgingFee']", toMoney(totals.lodgingFee));
  setText("[data-fill='travelLodgingTotal']", toMoney(totals.travelLodgingTotal));
  setText("[data-fill='onsiteFee']", toMoney(totals.onsiteFee));
  setText("[data-fill='performanceHoursTotal']", totals.performanceHoursTotal.toFixed(2));
  setText("[data-fill='eventSubtotal']", toMoney(totals.eventSubtotal));
  setText("[data-fill='backlineFee']", toMoney(totals.backlineFee));
  updateMessagePreview();
  const selectedAddons = Object.entries(totals.addonFees)
    .filter(([key]) => state.agreement[key])
    .map(([key, value]) => {
      const labelMap = {
        addonTent: "Tent",
        addonLights: "Lights",
        addonGenerator: "Generator",
        addonAdditionalSong: "Additional song",
        addonRecordedSong: "Recorded song beyond first",
        addonMCing: "MC'ing",
        addonDJing: "DJ'ing",
      };
      return `${labelMap[key]} (${toMoney(value)})`;
    })
    .join(", ");
  setText("[data-fill='addonsSelected']", selectedAddons || "None");

  const lodgingWrap = document.getElementById("lodgingRateWrap");
  if (lodgingWrap) {
    lodgingWrap.classList.toggle("hidden", !state.agreement.lodgingEnabled);
  }

  const travelDetails = document.getElementById("travelDetails");
  if (travelDetails) {
    travelDetails.classList.toggle("hidden", !state.agreement.travelOutside);
  }

  const warning = document.getElementById("holidayWarning");
  if (warning) {
    warning.classList.toggle("hidden", !state.agreement.holidayWeekend);
  }

  const nonPerformanceField = document.getElementById("nonPerformanceHours");
  if (nonPerformanceField) {
    nonPerformanceField.disabled = !state.agreement.chargeNonPerformance;
  }

  const depositAmountInput = document.getElementById("depositAmount");
  if (depositAmountInput) {
    depositAmountInput.disabled = !totals.depositEnabled || totals.depositWaived;
  }

  const depositWaivedInput = document.getElementById("depositWaived");
  if (depositWaivedInput) {
    depositWaivedInput.disabled = !totals.depositEnabled;
  }

  const promoCreditInput = document.getElementById("promoCredit");
  if (promoCreditInput) {
    promoCreditInput.disabled = !totals.depositEnabled || totals.depositWaived;
  }

  const liveVideoCreditInput = document.getElementById("liveVideoCredit");
  if (liveVideoCreditInput) {
    liveVideoCreditInput.disabled = !totals.depositEnabled || totals.depositWaived;
  }
}

function updateInvoicePreview() {
  const totals = getInvoiceTotals();
  setText("[data-fill='invoiceNumber']", state.invoice.invoiceNumber || "__");
  setText("[data-fill='invoiceClientName']", state.invoice.clientName || "__");
  setText("[data-fill='invoiceClientEmail']", state.invoice.clientEmail || "__");
  setText("[data-fill='invoiceIssueDate']", formatDate(state.invoice.issueDate));
  setText("[data-fill='invoiceDueDate']", formatDate(state.invoice.dueDate));
  setText("[data-fill='invoiceDescription']", state.invoice.description || "__");
  setText("[data-fill='invoicePerformanceFee']", toMoney(totals.performanceFee));
  setText("[data-fill='invoiceDepositDue']", toMoney(totals.depositDue));
  setText("[data-fill='invoiceDepositPaid']", toMoney(totals.depositPaid));
  setText("[data-fill='invoiceAddons']", toMoney(totals.addons));
  setText("[data-fill='invoiceTotal']", totals.displayTotal);
  updateMessagePreview();
}

function getInvoiceTotals() {
  const performanceFee = toNumber(state.invoice.performanceFee);
  const depositDue = toNumber(state.invoice.depositDue);
  const depositPaid = toNumber(state.invoice.depositPaid);
  const addons = toNumber(state.invoice.addons);
  const totalDue = performanceFee + addons + depositDue;
  const displayTotal = state.invoice.totalOverride
    ? toMoney(toNumber(state.invoice.totalOverride))
    : toMoney(totalDue > 0 ? totalDue : 0);
  return { performanceFee, depositDue, depositPaid, addons, totalDue, displayTotal };
}

function updateReceiptPreview() {
  setText("[data-fill='receiptNumber']", state.receipt.receiptNumber || "__");
  setText("[data-fill='receiptClientName']", state.receipt.clientName || "__");
  setText("[data-fill='receiptPaymentDate']", formatDate(state.receipt.paymentDate));
  setText("[data-fill='receiptPaymentMethod']", state.receipt.paymentMethod || "__");
  setText("[data-fill='receiptRelatedInvoice']", state.receipt.relatedInvoice || "__");
  setText("[data-fill='receiptAmountPaid']", toMoney(toNumber(state.receipt.amountPaid)));
  updateMessagePreview();
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function eventStartDate(event) {
  const value = event?.start_time || event?.end_time || "";
  const parsed = new Date(value);
  return Number.isFinite(parsed.getTime()) ? parsed : null;
}

function getUpcomingWeekEvents() {
  const today = new Date();
  const windowStart = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0);
  const windowEnd = new Date(windowStart);
  windowEnd.setDate(windowEnd.getDate() + 7);

  return state.calendar.events
    .filter((event) => String(event.type || "").toLowerCase() !== "blackout")
    .map((event) => ({ event, start: eventStartDate(event) }))
    .filter(({ start }) => start && start >= windowStart && start < windowEnd)
    .sort((a, b) => a.start - b.start)
    .map(({ event }) => event);
}

function findMatchingInvoiceForEvent(event) {
  const eventTitle = normalizeText(event?.title);
  const eventDate = eventStartDate(event);
  if (!eventTitle && !eventDate) return null;

  const candidates = state.billing.invoices.filter((invoice) => {
    const invoiceClient = normalizeText(invoice?.client_name);
    const textMatch =
      Boolean(eventTitle && invoiceClient) &&
      (eventTitle.includes(invoiceClient) || invoiceClient.includes(eventTitle));
    if (textMatch) return true;

    if (eventDate) {
      const invoiceDate = new Date(invoice?.issue_date || invoice?.due_date || invoice?.created_at || 0);
      if (Number.isFinite(invoiceDate.getTime())) {
        const dayDiff = Math.abs(eventDate.getTime() - invoiceDate.getTime()) / (24 * 60 * 60 * 1000);
        return dayDiff <= 7;
      }
    }
    return false;
  });

  return candidates[0] || null;
}

function findMatchingReceiptForEvent(event, invoice) {
  const eventDate = eventStartDate(event);
  const eventTitle = normalizeText(event?.title);
  const invoiceNumber = String(invoice?.invoice_number || "").trim();
  return (
    state.billing.receipts.find((receipt) => {
      if (invoiceNumber && String(receipt?.related_invoice || "").trim() === invoiceNumber) {
        return true;
      }
      const receiptClient = normalizeText(receipt?.client_name);
      const textMatch =
        Boolean(eventTitle && receiptClient) &&
        (eventTitle.includes(receiptClient) || receiptClient.includes(eventTitle));
      if (textMatch) return true;

      if (eventDate) {
        const receiptDate = new Date(receipt?.payment_date || receipt?.created_at || 0);
        if (Number.isFinite(receiptDate.getTime())) {
          const dayDiff = Math.abs(eventDate.getTime() - receiptDate.getTime()) / (24 * 60 * 60 * 1000);
          return dayDiff <= 7;
        }
      }
      return false;
    }) || null
  );
}

function renderUpcomingShowsCard(events) {
  const summary = document.getElementById("upcomingShowsSummary");
  const list = document.getElementById("upcomingShowsList");
  if (!summary || !list) return;

  summary.textContent = events.length
    ? `${events.length} show${events.length === 1 ? "" : "s"} in the next 7 days.`
    : "No shows in the next 7 days.";

  list.innerHTML = "";
  if (!events.length) {
    list.innerHTML = "<li>No shows in the next 7 days.</li>";
    return;
  }

  events.forEach((event) => {
    const start = eventStartDate(event);
    const dayLabel = start
      ? start.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
      : "Date TBD";
    const status = eventTypeLabel(event.type || "Show");
    const item = document.createElement("li");
    item.textContent = `${dayLabel}: ${event.title || "Untitled show"} (${status})`;
    list.appendChild(item);
  });
}

function eventTypeLabel(typeValue) {
  const text = String(typeValue || "").trim();
  if (text.toLowerCase() === "hold") return "Contract Needed";
  return text || "Event";
}

function renderManagerChecklist(events) {
  const wrap = document.getElementById("managerChecklistList");
  if (!wrap) return;
  wrap.innerHTML = "";

  const openWorkOrders = state.workOrders.filter((item) => {
    const status = String(item?.status || "").toLowerCase();
    return !(status === "completed" || item?.completed === true);
  });
  const missingContracts = events.filter((event) => {
    const contract = state.calendar.contracts.find((item) => item.event_id === event.id);
    if (!contract) return true;
    const contractStatus = String(contract.status || "").toLowerCase();
    return !(contract.file_path || contractStatus.includes("signed"));
  });

  const invoiceSendNeeded = [];
  const receiptSendNeeded = [];
  const pendingMusicianConfirmations = [];

  events.forEach((event) => {
    const eventAssignments = state.calendar.assignments.filter(
      (item) =>
        item.event_id === event.id &&
        String(item.status || "").toLowerCase() !== "unavailable"
    );
    if (
      eventAssignments.length > 0 &&
      eventAssignments.some((item) => String(item.status || "").toLowerCase() !== "confirmed")
    ) {
      pendingMusicianConfirmations.push(event);
    }

    const matchedInvoice = findMatchingInvoiceForEvent(event);
    if (matchedInvoice && !matchedInvoice.file_path) {
      invoiceSendNeeded.push(event);
    }
    if (matchedInvoice) {
      const matchedReceipt = findMatchingReceiptForEvent(event, matchedInvoice);
      if (matchedReceipt && !matchedReceipt.file_path) {
        receiptSendNeeded.push(event);
      }
    }
  });

  const openChecklistTarget = (target) => {
    if (!switchTopView) return;
    if (target?.type === "workorder") {
      state.workOrderView.focusId = target.id || "";
      state.workOrderView.showCreate = false;
      switchTopView("workorders");
      renderWorkOrders();
      return;
    }
    if (target === "workorders") {
      state.workOrderView.focusId = "";
      state.workOrderView.showCreate = true;
      switchTopView("workorders");
      renderWorkOrders();
      return;
    }
    if (target === "contracts") {
      state.activeTab = "contracts";
      switchTopView("bookkeeping");
      return;
    }
    if (target === "invoice") {
      state.activeTab = "invoice";
      switchTopView("bookkeeping");
      return;
    }
    if (target === "receipt") {
      state.activeTab = "receipt";
      switchTopView("bookkeeping");
      return;
    }
    if (target === "calendar") {
      state.activeTab = "calendar";
      switchTopView("calendar");
    }
  };

  const rows = [];
  if (openWorkOrders.length) {
    openWorkOrders.slice(0, 5).forEach((item) => {
      rows.push({
        text: item.description || item.title || "Untitled task",
        tag: "Open task",
        target: { type: "workorder", id: item.id },
      });
    });
  } else {
    rows.push({
      text: "Open work orders: 0",
      tag: "Open",
      target: "workorders",
    });
  }
  rows.push(
    {
      text: `Contracts to come back signed (this week): ${missingContracts.length}`,
      tag: missingContracts.length ? "Required" : "Open",
      target: "contracts",
    },
    {
      text: `Band member confirmations needed (this week): ${pendingMusicianConfirmations.length}`,
      tag: pendingMusicianConfirmations.length ? "Required" : "Open",
      target: "calendar",
    },
    {
      text: `Invoices pending send (created this week): ${invoiceSendNeeded.length}`,
      tag: invoiceSendNeeded.length ? "Send" : "Open",
      target: "invoice",
    },
    {
      text: `Receipts pending send (created this week): ${receiptSendNeeded.length}`,
      tag: receiptSendNeeded.length ? "Send" : "Open",
      target: "receipt",
    },
  );

  rows.forEach((row) => {
    const el = document.createElement("div");
    el.className = "checklist-row";
    const left = document.createElement("span");
    left.textContent = row.text;
    const right = document.createElement("button");
    right.type = "button";
    right.className = "checklist-link";
    right.textContent = row.tag;
    right.addEventListener("click", () => openChecklistTarget(row.target));
    el.appendChild(left);
    el.appendChild(right);
    wrap.appendChild(el);
  });
}

async function updateShowRecordCounts() {
  const fullEl = document.getElementById("showCountFull");
  const duoEl = document.getElementById("showCountDuo");
  const totalEl = document.getElementById("showCountTotal");
  if (!fullEl || !duoEl || !totalEl) return;

  const currentYear = new Date().getFullYear();
  let bookedShows = state.calendar.events.filter((event) => {
    const kind = String(event?.type || "").toLowerCase();
    if (kind !== "confirmed") return false;
    const start = new Date(event?.start_time || 0);
    return Number.isFinite(start.getTime()) && start.getFullYear() === currentYear;
  });

  const client = state.calendar.client;
  if (client && state.calendar.session) {
    const yearStart = new Date(currentYear, 0, 1).toISOString();
    const nextYearStart = new Date(currentYear + 1, 0, 1).toISOString();
    const { data, error } = await client
      .from("events")
      .select("id,title,notes,type,start_time")
      .gte("start_time", yearStart)
      .lt("start_time", nextYearStart);
    if (!error && Array.isArray(data)) {
      bookedShows = data.filter((event) => {
        const kind = String(event?.type || "").toLowerCase();
        return kind === "confirmed";
      });
    }
  }

  const counts = bookedShows.reduce(
    (acc, event) => {
      const text = `${event?.title || ""} ${event?.notes || ""}`.toLowerCase();
      const hasAssignments = state.calendar.assignments.some(
        (item) => item.event_id === event.id
      );
      if (text.includes("full band") || text.includes("full")) {
        acc.full += 1;
      } else if (text.includes("duo") || !hasAssignments) {
        acc.duo += 1;
      } else {
        acc.full += 1;
      }
      return acc;
    },
    { full: 0, duo: 0 }
  );

  fullEl.textContent = String(counts.full);
  duoEl.textContent = String(counts.duo);
  totalEl.textContent = String(bookedShows.length);
}

function updateManagerDesk() {
  const upcoming = getUpcomingWeekEvents();
  renderUpcomingShowsCard(upcoming);
  renderManagerChecklist(upcoming);
  updateShowRecordCounts();
}

function updateOpsProgress() {
  const fill = document.getElementById("opsProgressFill");
  const summary = document.getElementById("opsProgressSummary");
  const detail = document.getElementById("opsProgressDetail");
  if (!fill || !summary || !detail) return;

  const workOrdersTotal = state.workOrders.length;
  const workOrdersDone = state.workOrders.filter((item) => {
    const status = String(item.status || "").toLowerCase();
    return status === "completed" || item.completed === true;
  }).length;

  const trackableContracts = state.calendar.contracts.filter((item) => {
    const status = String(item.status || "").toLowerCase();
    const path = String(item.file_path || "");
    return !(status.includes("created") || path.startsWith("created-contracts/"));
  });
  const contractsTotal = trackableContracts.length;
  const contractsDone = trackableContracts.filter((item) => {
    const status = String(item.status || "").toLowerCase();
    return Boolean(item.file_path) || status.includes("signed");
  }).length;

  const today = new Date();
  const activeEventIds = new Set(
    state.calendar.events
      .filter((item) => {
        if (String(item.type || "").toLowerCase() === "blackout") return false;
        const eventEnd = new Date(item.end_time || item.start_time || 0);
        return Number.isFinite(eventEnd.getTime()) && eventEnd >= today;
      })
      .map((item) => item.id)
  );

  const relevantAssignments = state.calendar.assignments.filter((item) => {
    if (!activeEventIds.has(item.event_id)) return false;
    const status = String(item.status || "").toLowerCase();
    return status !== "unavailable";
  });

  const assignmentsTotal = relevantAssignments.length;
  const assignmentsDone = relevantAssignments.filter((item) => {
    return String(item.status || "").toLowerCase() === "confirmed";
  }).length;

  const showEvents = state.calendar.events.filter(
    (item) => String(item.type || "").toLowerCase() !== "blackout"
  );
  const showsTotal = showEvents.length;
  const showsDone = showEvents.filter(
    (item) => String(item.type || "").toLowerCase() === "confirmed"
  ).length;

  const useAssignmentMetric = assignmentsTotal > 0;
  const totalItems =
    workOrdersTotal +
    contractsTotal +
    (useAssignmentMetric ? assignmentsTotal : showsTotal);
  const doneItems =
    workOrdersDone +
    contractsDone +
    (useAssignmentMetric ? assignmentsDone : showsDone);
  const percent = totalItems > 0 ? Math.round((doneItems / totalItems) * 100) : 0;

  fill.style.width = `${percent}%`;
  summary.textContent = `${percent}% complete across active jobs`;
  detail.textContent = `Work orders ${workOrdersDone}/${workOrdersTotal} • Contracts signed ${contractsDone}/${contractsTotal} • ${
    useAssignmentMetric
      ? `Musician confirmations ${assignmentsDone}/${assignmentsTotal}`
      : `Shows confirmed ${showsDone}/${showsTotal}`
  }`;
  updateManagerDesk();
}

async function fetchInvoices() {
  const client = state.calendar.client;
  if (!client || !state.calendar.session) {
    state.billing.invoices = [];
    updateInvoiceList();
    return;
  }
  const { data, error } = await client
    .from("invoices")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(200);
  if (error) {
    updateSupabaseStatus("Could not load invoices.", true);
    return;
  }
  state.billing.invoices = data || [];
  updateInvoiceList();
}

async function fetchReceipts() {
  const client = state.calendar.client;
  if (!client || !state.calendar.session) {
    state.billing.receipts = [];
    updateReceiptList();
    return;
  }
  const { data, error } = await client
    .from("receipts")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(200);
  if (error) {
    updateSupabaseStatus("Could not load receipts.", true);
    return;
  }
  state.billing.receipts = data || [];
  updateReceiptList();
}

function updateInvoiceList() {
  const list = document.getElementById("invoiceList");
  const status = document.getElementById("invoiceStatus");
  if (!list) return;
  if (!state.billing.invoices.length) {
    list.innerHTML = "<p class=\"muted\">No saved invoices yet.</p>";
    if (status) status.textContent = "";
    return;
  }
  list.innerHTML = "";
  state.billing.invoices.forEach((invoice) => {
    const card = document.createElement("div");
    card.className = "event-card";
    const header = document.createElement("header");
    header.innerHTML = `<span>${invoice.invoice_number}</span><span>${invoice.paid ? "Paid" : "Unpaid"}</span>`;
    const meta = document.createElement("div");
    meta.className = "event-meta";
    meta.textContent = `${invoice.client_name || "Client"} · ${formatShortDateTime(
      invoice.created_at
    )}`;
    const actions = document.createElement("div");
    actions.className = "event-actions";
    if (invoice.file_path) {
      const view = document.createElement("button");
      view.className = "btn ghost";
      view.textContent = "View PDF";
      view.addEventListener("click", async () => {
        const client = state.calendar.client;
        if (!client || !state.calendar.session) return;
        const { data, error } = await client
          .storage
          .from("signed-contracts")
          .createSignedUrl(invoice.file_path, 60);
        if (!error && data?.signedUrl) {
          window.open(data.signedUrl, "_blank");
        }
      });
      actions.appendChild(view);
    }
    const toggle = document.createElement("button");
    toggle.className = "btn ghost";
    toggle.textContent = invoice.paid ? "Mark unpaid" : "Mark paid";
    toggle.addEventListener("click", async () => {
      const client = state.calendar.client;
      if (!client || !state.calendar.session) return;
      await client
        .from("invoices")
        .update({ paid: !invoice.paid })
        .eq("id", invoice.id);
      await fetchInvoices();
    });
    actions.appendChild(toggle);
    card.appendChild(header);
    card.appendChild(meta);
    card.appendChild(actions);
    list.appendChild(card);
  });
}

function updateReceiptList() {
  const list = document.getElementById("receiptList");
  const status = document.getElementById("receiptStatus");
  if (!list) return;
  if (!state.billing.receipts.length) {
    list.innerHTML = "<p class=\"muted\">No saved receipts yet.</p>";
    if (status) status.textContent = "";
    return;
  }
  list.innerHTML = "";
  state.billing.receipts.forEach((receipt) => {
    const card = document.createElement("div");
    card.className = "event-card";
    const header = document.createElement("header");
    header.innerHTML = `<span>${receipt.receipt_number}</span><span>${receipt.paid ? "Paid" : "Unpaid"}</span>`;
    const meta = document.createElement("div");
    meta.className = "event-meta";
    meta.textContent = `${receipt.client_name || "Client"} · ${formatShortDateTime(
      receipt.created_at
    )}`;
    const actions = document.createElement("div");
    actions.className = "event-actions";
    if (receipt.file_path) {
      const view = document.createElement("button");
      view.className = "btn ghost";
      view.textContent = "View PDF";
      view.addEventListener("click", async () => {
        const client = state.calendar.client;
        if (!client || !state.calendar.session) return;
        const { data, error } = await client
          .storage
          .from("signed-contracts")
          .createSignedUrl(receipt.file_path, 60);
        if (!error && data?.signedUrl) {
          window.open(data.signedUrl, "_blank");
        }
      });
      actions.appendChild(view);
    }
    const toggle = document.createElement("button");
    toggle.className = "btn ghost";
    toggle.textContent = receipt.paid ? "Mark unpaid" : "Mark paid";
    toggle.addEventListener("click", async () => {
      const client = state.calendar.client;
      if (!client || !state.calendar.session) return;
      await client
        .from("receipts")
        .update({ paid: !receipt.paid })
        .eq("id", receipt.id);
      await fetchReceipts();
    });
    actions.appendChild(toggle);
    card.appendChild(header);
    card.appendChild(meta);
    card.appendChild(actions);
    list.appendChild(card);
  });
}

async function saveInvoiceToSupabase() {
  return saveInvoiceToSupabaseInternal(false);
}

async function saveInvoiceToSupabaseInternal(silent) {
  const client = state.calendar.client;
  const status = document.getElementById("invoiceStatus");
  if (!client || !state.calendar.session) {
    if (status && !silent) status.textContent = "Sign in to save invoices.";
    return;
  }
  const totals = getInvoiceTotals();
  const payload = {
    invoice_number: state.invoice.invoiceNumber || "INV-001",
    client_name: state.invoice.clientName,
    client_email: state.invoice.clientEmail,
    issue_date: state.invoice.issueDate || null,
    due_date: state.invoice.dueDate || null,
    description: state.invoice.description,
    performance_fee: totals.performanceFee,
    deposit_due: totals.depositDue,
    deposit_paid: totals.depositPaid,
    addons: totals.addons,
    total_override: state.invoice.totalOverride || null,
    total_due: toNumber(totals.displayTotal.replace(/[^0-9.-]/g, "")),
    paid: false,
  };

  const { data: existing } = await client
    .from("invoices")
    .select("id")
    .eq("invoice_number", payload.invoice_number)
    .order("created_at", { ascending: false })
    .limit(1);
  if (existing && existing.length) {
    const { error } = await client.from("invoices").update(payload).eq("id", existing[0].id);
    if (error) {
      console.error("Invoice update failed:", error);
      if (status && !silent) {
        status.textContent = formatSupabaseError(error, "Could not update invoice.");
      }
      return;
    }
  } else {
    const { error } = await client.from("invoices").insert(payload);
    if (error) {
      console.error("Invoice save failed:", error);
      if (status && !silent) {
        status.textContent = formatSupabaseError(error, "Could not save invoice.");
      }
      return;
    }
  }
  if (status && !silent) status.textContent = "Invoice saved.";
  await fetchInvoices();
}

async function saveReceiptToSupabase() {
  return saveReceiptToSupabaseInternal(false);
}

async function saveReceiptToSupabaseInternal(silent) {
  const client = state.calendar.client;
  const status = document.getElementById("receiptStatus");
  if (!client || !state.calendar.session) {
    if (status && !silent) status.textContent = "Sign in to save receipts.";
    return;
  }
  const payload = {
    receipt_number: state.receipt.receiptNumber || "RCPT-001",
    client_name: state.receipt.clientName,
    payment_date: state.receipt.paymentDate || null,
    amount_paid: toNumber(state.receipt.amountPaid),
    payment_method: state.receipt.paymentMethod,
    related_invoice: state.receipt.relatedInvoice,
    paid: true,
  };
  const { data: existing } = await client
    .from("receipts")
    .select("id")
    .eq("receipt_number", payload.receipt_number)
    .order("created_at", { ascending: false })
    .limit(1);
  if (existing && existing.length) {
    const { error } = await client.from("receipts").update(payload).eq("id", existing[0].id);
    if (error) {
      console.error("Receipt update failed:", error);
      if (status && !silent) {
        status.textContent = formatSupabaseError(error, "Could not update receipt.");
      }
      return;
    }
  } else {
    const { error } = await client.from("receipts").insert(payload);
    if (error) {
      console.error("Receipt save failed:", error);
      if (status && !silent) {
        status.textContent = formatSupabaseError(error, "Could not save receipt.");
      }
      return;
    }
  }
  if (status && !silent) status.textContent = "Receipt saved.";
  await fetchReceipts();
}

async function uploadInvoicePdf() {
  const client = state.calendar.client;
  const status = document.getElementById("invoiceStatus");
  const fileInput = document.getElementById("invoiceFile");
  if (!client || !state.calendar.session) {
    if (status) status.textContent = "Sign in to upload.";
    return;
  }
  const file = fileInput.files[0];
  if (!file) {
    if (status) status.textContent = "Choose an invoice PDF to upload.";
    return;
  }
  const invoiceNumber = state.invoice.invoiceNumber || "INV-001";
  const safeName = file.name.replace(/\s+/g, "-");
  const path = `invoices/${Date.now()}-${safeName}`.replace(/[^a-zA-Z0-9-_/.]/g, "");
  const { error: uploadError } = await client
    .storage
    .from("signed-contracts")
    .upload(path, file, { upsert: true });
  if (uploadError) {
    console.error("Invoice upload failed:", uploadError);
    if (status) status.textContent = formatSupabaseError(uploadError, "Invoice upload failed.");
    return;
  }
  const { data: existing } = await client
    .from("invoices")
    .select("id")
    .eq("invoice_number", invoiceNumber)
    .order("created_at", { ascending: false })
    .limit(1);
  if (existing && existing.length) {
    const { error } = await client.from("invoices").update({ file_path: path }).eq("id", existing[0].id);
    if (error) {
      console.error("Invoice file path update failed:", error);
      if (status) status.textContent = formatSupabaseError(error, "Invoice upload saved, but DB update failed.");
      return;
    }
  } else {
    const { error } = await client.from("invoices").insert({
      invoice_number: invoiceNumber,
      client_name: state.invoice.clientName,
      client_email: state.invoice.clientEmail,
      issue_date: state.invoice.issueDate || null,
      due_date: state.invoice.dueDate || null,
      description: state.invoice.description,
      performance_fee: toNumber(state.invoice.performanceFee),
      deposit_due: toNumber(state.invoice.depositDue),
      deposit_paid: toNumber(state.invoice.depositPaid),
      addons: toNumber(state.invoice.addons),
      total_override: state.invoice.totalOverride || null,
      total_due: toNumber(getInvoiceTotals().displayTotal.replace(/[^0-9.-]/g, "")),
      paid: false,
      file_path: path,
    });
    if (error) {
      console.error("Invoice row insert after upload failed:", error);
      if (status) status.textContent = formatSupabaseError(error, "Invoice upload succeeded, but DB insert failed.");
      return;
    }
  }
  if (status) status.textContent = "Invoice PDF uploaded.";
  fileInput.value = "";
  await fetchInvoices();
}

async function uploadReceiptPdf() {
  const client = state.calendar.client;
  const status = document.getElementById("receiptStatus");
  const fileInput = document.getElementById("receiptFile");
  if (!client || !state.calendar.session) {
    if (status) status.textContent = "Sign in to upload.";
    return;
  }
  const file = fileInput.files[0];
  if (!file) {
    if (status) status.textContent = "Choose a receipt PDF to upload.";
    return;
  }
  const receiptNumber = state.receipt.receiptNumber || "RCPT-001";
  const safeName = file.name.replace(/\s+/g, "-");
  const path = `receipts/${Date.now()}-${safeName}`.replace(/[^a-zA-Z0-9-_/.]/g, "");
  const { error: uploadError } = await client
    .storage
    .from("signed-contracts")
    .upload(path, file, { upsert: true });
  if (uploadError) {
    console.error("Receipt upload failed:", uploadError);
    if (status) status.textContent = formatSupabaseError(uploadError, "Receipt upload failed.");
    return;
  }
  const { data: existing } = await client
    .from("receipts")
    .select("id")
    .eq("receipt_number", receiptNumber)
    .order("created_at", { ascending: false })
    .limit(1);
  if (existing && existing.length) {
    const { error } = await client.from("receipts").update({ file_path: path }).eq("id", existing[0].id);
    if (error) {
      console.error("Receipt file path update failed:", error);
      if (status) status.textContent = formatSupabaseError(error, "Receipt upload saved, but DB update failed.");
      return;
    }
  } else {
    const { error } = await client.from("receipts").insert({
      receipt_number: receiptNumber,
      client_name: state.receipt.clientName,
      payment_date: state.receipt.paymentDate || null,
      amount_paid: toNumber(state.receipt.amountPaid),
      payment_method: state.receipt.paymentMethod,
      related_invoice: state.receipt.relatedInvoice,
      paid: true,
      file_path: path,
    });
    if (error) {
      console.error("Receipt row insert after upload failed:", error);
      if (status) status.textContent = formatSupabaseError(error, "Receipt upload succeeded, but DB insert failed.");
      return;
    }
  }
  if (status) status.textContent = "Receipt PDF uploaded.";
  fileInput.value = "";
  await fetchReceipts();
}

async function autoSaveInvoicePdf(blob, fileName) {
  const client = state.calendar.client;
  const status = document.getElementById("invoiceStatus");
  if (!client || !state.calendar.session) return;
  const safeName = fileName.replace(/\s+/g, "-");
  const path = `invoices/${Date.now()}-${safeName}`.replace(/[^a-zA-Z0-9-_/.]/g, "");
  const { error: uploadError } = await client
    .storage
    .from("signed-contracts")
    .upload(path, blob, { upsert: true, contentType: "application/pdf" });
  if (uploadError) {
    if (status) status.textContent = "Auto-upload failed.";
    return;
  }
  const invoiceNumber = state.invoice.invoiceNumber || "INV-001";
  await client
    .from("invoices")
    .update({ file_path: path })
    .eq("invoice_number", invoiceNumber);
  if (status) status.textContent = "Invoice saved + PDF uploaded.";
  await fetchInvoices();
}

async function autoSaveReceiptPdf(blob, fileName) {
  const client = state.calendar.client;
  const status = document.getElementById("receiptStatus");
  if (!client || !state.calendar.session) return;
  const safeName = fileName.replace(/\s+/g, "-");
  const path = `receipts/${Date.now()}-${safeName}`.replace(/[^a-zA-Z0-9-_/.]/g, "");
  const { error: uploadError } = await client
    .storage
    .from("signed-contracts")
    .upload(path, blob, { upsert: true, contentType: "application/pdf" });
  if (uploadError) {
    if (status) status.textContent = "Auto-upload failed.";
    return;
  }
  const receiptNumber = state.receipt.receiptNumber || "RCPT-001";
  await client
    .from("receipts")
    .update({ file_path: path })
    .eq("receipt_number", receiptNumber);
  if (status) status.textContent = "Receipt saved + PDF uploaded.";
  await fetchReceipts();
}

function setCreatedContractStatus(message, isError = false) {
  const el = document.getElementById("createdContractStatus");
  if (!el) return;
  el.textContent = message;
  el.classList.toggle("warning", isError);
}

async function autoSaveCreatedAgreementPdf(blob, fileName) {
  const client = state.calendar.client;
  if (!client || !state.calendar.session || !blob) return;

  const safeFileName = fileName.replace(/\s+/g, "-");
  const path = `created-contracts/${Date.now()}-${safeFileName}`.replace(/[^a-zA-Z0-9-_/.]/g, "");
  const { error: uploadError } = await client
    .storage
    .from("signed-contracts")
    .upload(path, blob, { upsert: true, contentType: "application/pdf" });
  if (uploadError) {
    setCreatedContractStatus("Could not save created contract PDF.", true);
    return;
  }

  const contractName = `${state.agreement.clientName || "Client"} Agreement ${
    state.agreement.performanceDate || ""
  }`.trim();
  const { data: existing } = await client
    .from("contracts")
    .select("id")
    .eq("name", contractName)
    .ilike("status", "created")
    .order("uploaded_at", { ascending: false })
    .limit(1);

  if (existing && existing.length) {
    const { error: updateError } = await client
      .from("contracts")
      .update({
        file_path: path,
        status: "Created",
        event_id: null,
      })
      .eq("id", existing[0].id);
    if (updateError) {
      setCreatedContractStatus("Saved PDF, but could not update created contract row.", true);
      return;
    }
  } else {
    const { error: insertError } = await client
      .from("contracts")
      .insert({
        name: contractName,
        file_path: path,
        event_id: null,
        status: "Created",
      });
    if (insertError) {
      setCreatedContractStatus("Saved PDF, but could not store created contract metadata.", true);
      return;
    }
  }

  setCreatedContractStatus("Created contract saved.");
  await fetchContracts();
}

function initSupabaseClient() {
  if (!window.supabase || !window.supabase.createClient) {
    state.calendar.client = null;
    return;
  }
  state.calendar.client = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );
}

function updateSupabaseStatus(message, isError = false) {
  ["supabaseStatus", "loginStatus"].forEach((id) => {
    const status = document.getElementById(id);
    if (!status) return;
    status.textContent = message;
    status.classList.toggle("warning", isError);
  });
}

function syncTopAuthTabLabel() {
  const topLoginTab = document.querySelector('.top-tab[data-top="login"]');
  if (!topLoginTab) return;
  topLoginTab.textContent = state.calendar.session ? "Sign out" : "Sign in";
}

function updateCalendarAuthVisibility() {
  const authSection = document.getElementById("calendarAuthSection");
  if (!authSection) return;
  const signedInOnce = localStorage.getItem(CALENDAR_AUTH_SEEN_KEY) === "1";
  authSection.classList.toggle("hidden", Boolean(state.calendar.session) && signedInOnce);
}

function setCalendarEventFormExpanded(expanded) {
  const wrap = document.getElementById("calendarEventFormWrap");
  const toggle = document.getElementById("toggleCalendarForm");
  if (wrap) wrap.classList.toggle("hidden", !expanded);
  if (toggle) toggle.textContent = expanded ? "Hide event form" : "Add event";
}

function updateMusicianAssignmentsVisibility() {
  const needed = document.getElementById("calendarMusiciansNeeded")?.value || "no";
  const wrap = document.getElementById("musicianAssignmentsWrap");
  if (wrap) wrap.classList.toggle("hidden", needed !== "yes");
  if (needed === "yes") renderMusicianAssignments();
}

function syncAuthFields(email = "", password = "") {
  const authEmail = document.getElementById("authEmail");
  const authPassword = document.getElementById("authPassword");
  const loginEmail = document.getElementById("loginEmail");
  const loginPassword = document.getElementById("loginPassword");
  if (authEmail) authEmail.value = email;
  if (authPassword) authPassword.value = password;
  if (loginEmail) loginEmail.value = email;
  if (loginPassword) loginPassword.value = password;
}

function formatSupabaseError(error, fallback) {
  if (!error) return fallback;
  const details = [error.message, error.details, error.hint].filter(Boolean).join(" | ");
  return `${fallback}${details ? ` ${details}` : ""}`;
}

async function signInWithCredentials(email, password) {
  const client = state.calendar.client;
  if (!client) {
    updateSupabaseStatus("Supabase client not available.", true);
    return false;
  }
  if (!email || !password) {
    updateSupabaseStatus("Enter email and password first.", true);
    return false;
  }
  const { error } = await client.auth.signInWithPassword({ email, password });
  if (error) {
    console.error("Sign in failed:", error);
    const lower = (error.message || "").toLowerCase();
    if (lower.includes("email not confirmed")) {
      updateSupabaseStatus(
        "Sign in failed: email not confirmed. Open your Supabase confirmation email first.",
        true
      );
      return false;
    }
    if (lower.includes("invalid login credentials")) {
      updateSupabaseStatus(
        `Sign in failed: invalid email/password. ${error.message || ""}`.trim(),
        true
      );
    } else {
      updateSupabaseStatus(
        `Sign in failed: ${error.message}${error.status ? ` (status ${error.status})` : ""}`,
        true
      );
    }
    return false;
  }
  syncAuthFields(email, password);
  localStorage.setItem(CALENDAR_AUTH_SEEN_KEY, "1");
  await refreshAuthState();
  await loadOverridePin();
  await ensureHoldEventForAgreement();
  await fetchEventsForMonth();
  await fetchContracts();
  await fetchMusicians();
  await fetchMusicianAssignments();
  await fetchMusicianBlackouts();
  await fetchInvoices();
  await fetchReceipts();
  return true;
}

async function requestPasswordReset(email) {
  const client = state.calendar.client;
  if (!client) {
    updateSupabaseStatus("Supabase client not available.", true);
    return;
  }
  if (!email) {
    updateSupabaseStatus("Enter your email first, then tap Reset password.", true);
    return;
  }
  const { error } = await client.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.href,
  });
  if (error) {
    updateSupabaseStatus(`Password reset failed: ${error.message}`, true);
    return;
  }
  updateSupabaseStatus("Password reset email sent. Open it, reset password, then sign in.");
}

async function requestMagicLink(email) {
  const client = state.calendar.client;
  if (!client) {
    updateSupabaseStatus("Supabase client not available.", true);
    return;
  }
  if (!email) {
    updateSupabaseStatus("Enter your email first, then tap Email magic link.", true);
    return;
  }
  const { error } = await client.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: false,
      emailRedirectTo: window.location.href,
    },
  });
  if (error) {
    updateSupabaseStatus(`Magic link failed: ${error.message}`, true);
    return;
  }
  updateSupabaseStatus("Magic link sent. Open the email link, then return to the app.");
}

async function openContractForEvent(eventId) {
  const client = state.calendar.client;
  if (!client || !state.calendar.session) return;
  let contract = state.calendar.contracts.find((item) => item.event_id === eventId);
  if (!contract) {
    await fetchContracts();
    contract = state.calendar.contracts.find((item) => item.event_id === eventId);
  }
  if (!contract) {
    const event = state.calendar.events.find((item) => item.id === eventId);
    if (event?.title) {
      contract = state.calendar.contracts.find((item) =>
        item.name.toLowerCase().includes(event.title.toLowerCase())
      );
      if (contract) {
        const { error } = await client
          .from("contracts")
          .update({ event_id: eventId })
          .eq("id", contract.id);
        if (error) {
          updateSupabaseStatus("Could not link contract to event.", true);
        } else {
          await fetchContracts();
          updateSupabaseStatus("Contract matched by name and linked.");
        }
      }
    }
  }
  if (!contract) {
    updateSupabaseStatus("No contract linked to this event yet.", true);
    return;
  }
  if (!contract.file_path) {
    updateSupabaseStatus("Draft contract saved. Upload a signed PDF to open it.", true);
    return;
  }
  const { data, error } = await client
    .storage
    .from("signed-contracts")
    .createSignedUrl(contract.file_path, 60);
  if (error || !data?.signedUrl) {
    updateSupabaseStatus(`Could not open contract: ${error?.message || "Unknown error"}`, true);
    return;
  }
  window.open(data.signedUrl, "_blank");
}

async function refreshAuthState() {
  const client = state.calendar.client;
  if (!client) return;
  const { data } = await client.auth.getSession();
  state.calendar.session = data?.session || null;
  if (state.calendar.session) {
    localStorage.setItem(CALENDAR_AUTH_SEEN_KEY, "1");
  }
  syncTopAuthTabLabel();
  updateCalendarAuthVisibility();
  updateSupabaseStatus(state.calendar.session ? "Signed in." : "Signed out.");
  const loginSignInBtn = document.getElementById("loginSignIn");
  if (loginSignInBtn) {
    loginSignInBtn.textContent = state.calendar.session ? "Sign out" : "Sign in";
  }
  if (state.calendar.session) {
    await loadOverridePin();
    await fetchMusicians();
    await fetchMusicianAssignments();
    await fetchMusicianBlackouts();
  } else {
    renderMusicianList();
    renderMusicianAssignments();
    renderAssignmentSummaryLists();
    renderBlackoutList();
  }
  if (switchTopView) {
    switchTopView(state.calendar.session ? "home" : "login");
  }
}

async function loadOverridePin() {
  const client = state.calendar.client;
  if (!client || !state.calendar.session) return;
  const { data, error } = await client
    .from("app_settings")
    .select("value")
    .eq("key", OVERRIDE_PIN_SETTING)
    .maybeSingle();

  if (error) {
    updateSupabaseStatus("Could not load override PIN.", true);
    return;
  }

  if (data?.value) {
    state.calendar.overridePin = data.value;
    const pinField = document.getElementById("overridePin");
    if (pinField) pinField.value = "••••";
  }
}

async function fetchEventsForMonth() {
  const client = state.calendar.client;
  if (!client || !state.calendar.session) {
    state.calendar.events = [];
    renderCalendar();
    updateEventList();
    updateOpsProgress();
    return;
  }

  const monthStart = getCalendarMonth();
  const rangeStart = new Date(monthStart.getFullYear(), monthStart.getMonth(), 1);
  const rangeEnd = new Date(monthStart.getFullYear(), monthStart.getMonth() + 1, 0, 23, 59, 59);

  const { data, error } = await client
    .from("events")
    .select("*")
    .lt("start_time", rangeEnd.toISOString())
    .gt("end_time", rangeStart.toISOString())
    .order("start_time", { ascending: true });

  if (error) {
    updateSupabaseStatus("Could not load calendar events.", true);
    return;
  }

  state.calendar.events = data || [];
  renderCalendar();
  updateEventList();
  updateContractEventOptions();
  renderAssignmentSummaryLists();
  updateOpsProgress();
}

async function fetchContracts() {
  const client = state.calendar.client;
  if (!client || !state.calendar.session) {
    state.calendar.contracts = [];
    updateContractList();
    updateCreatedContractList();
    renderContractsHub();
    updateOpsProgress();
    return;
  }

  const { data, error } = await client
    .from("contracts")
    .select("*")
    .order("uploaded_at", { ascending: false })
    .limit(200);

  if (error) {
    updateSupabaseStatus("Could not load contracts.", true);
    return;
  }

  state.calendar.contracts = data || [];
  updateContractList();
  updateCreatedContractList();
  renderContractsHub();
  renderAssignmentSummaryLists();
  updateOpsProgress();
}

function getCalendarMonth() {
  const base = new Date();
  return new Date(base.getFullYear(), base.getMonth() + state.calendar.monthOffset, 1);
}

function renderCalendar() {
  const grid = document.getElementById("calendarGrid");
  const title = document.getElementById("calendarTitle");
  if (!grid || !title) return;

  const monthStart = getCalendarMonth();
  const monthName = monthStart.toLocaleString(undefined, { month: "long", year: "numeric" });
  title.textContent = monthName;
  grid.innerHTML = "";

  const startWeekday = monthStart.getDay();
  const daysInMonth = new Date(monthStart.getFullYear(), monthStart.getMonth() + 1, 0).getDate();
  const prevMonthDays = new Date(monthStart.getFullYear(), monthStart.getMonth(), 0).getDate();

  const totalCells = 42;
  const selectedKey = state.calendar.selectedDate || "";

  for (let i = 0; i < totalCells; i += 1) {
    const cell = document.createElement("div");
    cell.className = "calendar-day";

    let dayNumber = i - startWeekday + 1;
    let cellMonth = monthStart.getMonth();
    let cellYear = monthStart.getFullYear();
    let muted = false;

    if (dayNumber <= 0) {
      dayNumber = prevMonthDays + dayNumber;
      cellMonth -= 1;
      muted = true;
    } else if (dayNumber > daysInMonth) {
      dayNumber -= daysInMonth;
      cellMonth += 1;
      muted = true;
    }

    const cellDate = new Date(cellYear, cellMonth, dayNumber);
    const cellKey = formatDateInput(cellDate);

    if (muted) cell.classList.add("muted");
    if (cellKey === selectedKey) cell.classList.add("selected");

    const titles = document.createElement("div");
    titles.className = "calendar-titles";

    const dayEvents = state.calendar.events.filter((event) => {
      const start = new Date(event.start_time);
      const end = new Date(event.end_time);
      return cellDate >= startOfDay(start) && cellDate <= startOfDay(end);
    });

    const dayContracts = state.calendar.contracts.filter((contract) =>
      dayEvents.some((event) => event.id === contract.event_id)
    );
    const signedContracts = dayContracts.filter((contract) => contract.file_path);
    const pendingContracts = dayContracts.filter((contract) => !contract.file_path);

    if (signedContracts.length) {
      signedContracts.slice(0, 2).forEach((contract) => {
        const item = document.createElement("button");
        item.className = "calendar-title-item";
        item.textContent = contract.name || "Signed contract";
        item.title = "Open signed contract";
        item.addEventListener("click", (evt) => {
          evt.stopPropagation();
          openContractForEvent(contract.event_id);
        });
        titles.appendChild(item);
      });
    } else if (pendingContracts.length) {
      const pending = document.createElement("div");
      pending.className = "calendar-clip";
      pending.textContent = `📎 ${pendingContracts[0].name || "Contract needed"}`;
      titles.appendChild(pending);
    } else {
      dayEvents.slice(0, 1).forEach((event) => {
        const item = document.createElement("button");
        item.className = "calendar-title-item";
        item.textContent = event.title || event.type;
        item.title = "Edit event";
        item.addEventListener("click", (evt) => {
          evt.stopPropagation();
          selectEventForEdit(event, cellKey);
        });
        titles.appendChild(item);
      });
    }

    const hasSignedContract = dayEvents.some((event) =>
      state.calendar.contracts.find(
        (contract) => contract.event_id === event.id && contract.file_path
      )
    );
    const hasDraftContract = dayEvents.some((event) =>
      state.calendar.contracts.find(
        (contract) => contract.event_id === event.id && !contract.file_path
      )
    );

    const dayTop = document.createElement("div");
    dayTop.className = "calendar-day-top";
    const number = document.createElement("div");
    number.className = "calendar-day-number";
    number.textContent = dayNumber;
    dayTop.appendChild(number);

    if (hasSignedContract || hasDraftContract) {
      const marker = document.createElement("span");
      marker.className = "calendar-contract-marker";
      if (hasSignedContract) {
        marker.classList.add("signed");
        marker.textContent = "✓";
        marker.title = "Signed contract uploaded";
      } else {
        marker.classList.add("pending");
        marker.textContent = "📎";
        marker.title = "Contract still needed";
      }
      dayTop.appendChild(marker);
    }

    cell.appendChild(dayTop);
    cell.appendChild(titles);
    cell.addEventListener("click", () => {
      state.calendar.selectedDate = cellKey;
      state.calendar.selectedEventId = "";
      renderCalendar();
      populateCalendarForm(cellKey);
      setCalendarEventFormExpanded(true);
      const titleInput = document.getElementById("calendarEventTitle");
      if (titleInput) titleInput.focus();
      updateEventList();
    });

    grid.appendChild(cell);
  }
}

function populateCalendarForm(dateValue) {
  const startDate = document.getElementById("calendarStartDate");
  const endDate = document.getElementById("calendarEndDate");
  if (startDate) startDate.value = dateValue;
  if (endDate) endDate.value = dateValue;
  const musiciansNeeded = document.getElementById("calendarMusiciansNeeded");
  if (musiciansNeeded) musiciansNeeded.value = "no";
  updateMusicianAssignmentsVisibility();
  const selectedLabel = document.getElementById("selectedEventLabel");
  if (selectedLabel) {
    selectedLabel.textContent = `Selected date: ${formatDate(dateValue)} | Selected event: None`;
  }
}

function populateCalendarFormFromEvent(event) {
  if (!event) return;
  setCalendarEventFormExpanded(true);
  const type = document.getElementById("calendarType");
  const title = document.getElementById("calendarEventTitle");
  const startDate = document.getElementById("calendarStartDate");
  const startTime = document.getElementById("calendarStartTime");
  const endDate = document.getElementById("calendarEndDate");
  const endTime = document.getElementById("calendarEndTime");
  const monthlyWeek = document.getElementById("calendarMonthlyWeek");
  const musiciansNeeded = document.getElementById("calendarMusiciansNeeded");
  const notes = document.getElementById("calendarNotes");
  const contractEventId = document.getElementById("contractEventId");

  const start = new Date(event.start_time);
  const end = new Date(event.end_time);
  if (type) {
    const normalizedType = String(event.type || "").toLowerCase() === "hold"
      ? "Contract Needed"
      : (event.type || "Contract Needed");
    type.value = normalizedType;
  }
  if (title) title.value = event.title || "";
  if (startDate) startDate.value = formatDateInput(start);
  if (startTime) startTime.value = formatTimeInput(start);
  if (endDate) endDate.value = formatDateInput(end);
  if (endTime) endTime.value = formatTimeInput(end);
  if (monthlyWeek) monthlyWeek.value = "";
  if (musiciansNeeded) {
    const hasAssignments = state.calendar.assignments.some((item) => item.event_id === event.id);
    musiciansNeeded.value = hasAssignments ? "yes" : "no";
  }
  updateMusicianAssignmentsVisibility();
  if (notes) notes.value = event.notes || "";
  if (contractEventId) contractEventId.value = event.id;
}

async function upsertPendingContractForEvent(eventId, eventTitle = "") {
  const client = state.calendar.client;
  if (!client || !state.calendar.session || !eventId) return;
  const { data: existingContract, error: selectError } = await client
    .from("contracts")
    .select("*")
    .eq("event_id", eventId)
    .limit(1);
  if (selectError) return;
  const contractName = `${eventTitle || "Event"} Agreement`.trim();
  if (!existingContract || !existingContract.length) {
    await client.from("contracts").insert({
      name: contractName,
      file_path: null,
      event_id: eventId,
      status: "Pending signature",
    });
    return;
  }
  if (!existingContract[0].file_path) {
    await client
      .from("contracts")
      .update({ name: contractName, status: "Pending signature" })
      .eq("id", existingContract[0].id);
  }
}

async function clearPendingDraftContractForEvent(eventId) {
  const client = state.calendar.client;
  if (!client || !state.calendar.session || !eventId) return;
  await client
    .from("contracts")
    .delete()
    .eq("event_id", eventId)
    .is("file_path", null);
}

function getMonthlyWeekdayDate(year, monthIndex, weekday, weekValue) {
  if (weekValue === "last") {
    const date = new Date(year, monthIndex + 1, 0);
    while (date.getDay() !== weekday) {
      date.setDate(date.getDate() - 1);
    }
    return date;
  }
  const weekNumber = Number(weekValue);
  if (!Number.isFinite(weekNumber) || weekNumber < 1 || weekNumber > 4) return null;
  const first = new Date(year, monthIndex, 1);
  const offset = (weekday - first.getDay() + 7) % 7;
  const day = 1 + offset + (weekNumber - 1) * 7;
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  if (day > daysInMonth) return null;
  return new Date(year, monthIndex, day);
}

function buildMonthlyRecurringPayloads(basePayload, baseStart, baseEnd, weekValue, count = 12) {
  const payloads = [];
  const weekday = baseStart.getDay();
  const durationMs = baseEnd.getTime() - baseStart.getTime();
  const startHours = baseStart.getHours();
  const startMinutes = baseStart.getMinutes();

  for (let i = 0; i < count; i += 1) {
    const monthDate = new Date(baseStart.getFullYear(), baseStart.getMonth() + i, 1);
    const recurringDate = getMonthlyWeekdayDate(
      monthDate.getFullYear(),
      monthDate.getMonth(),
      weekday,
      weekValue
    );
    if (!recurringDate) continue;
    recurringDate.setHours(startHours, startMinutes, 0, 0);
    const recurringEnd = new Date(recurringDate.getTime() + durationMs);
    payloads.push({
      ...basePayload,
      start_time: recurringDate.toISOString(),
      end_time: recurringEnd.toISOString(),
    });
  }
  return payloads;
}

function selectEventForEdit(event, selectedDateOverride = "") {
  if (!event) return;
  const selectedDate = selectedDateOverride || formatDateInput(new Date(event.start_time));
  state.calendar.selectedDate = selectedDate;
  state.calendar.selectedEventId = event.id;
  const selectedLabel = document.getElementById("selectedEventLabel");
  if (selectedLabel) {
    selectedLabel.textContent = `Selected date: ${formatDate(selectedDate)} | Selected event: ${event.title || event.type}`;
  }
  populateCalendarFormFromEvent(event);
  renderCalendar();
    updateEventList();
    updateContractList();
    renderContractsHub();
    renderMusicianAssignments();
}

function updateEventList() {
  const list = document.getElementById("eventList");
  const selectedLabel = document.getElementById("selectedEventLabel");
  if (!list) return;

  const selected = state.calendar.selectedDate;
  if (!selected) {
    list.innerHTML = "<p class=\"muted\">Select a date on the calendar to view events.</p>";
    if (selectedLabel) selectedLabel.textContent = "Select a date to view events.";
    state.calendar.selectedEventId = "";
    renderMusicianAssignments();
    return;
  }
  const selectedDate = parseLocalDate(selected);
  if (!selectedDate) return;

  const events = state.calendar.events.filter((event) => {
    const start = new Date(event.start_time);
    const end = new Date(event.end_time);
    return selectedDate >= startOfDay(start) && selectedDate <= startOfDay(end);
  });

  if (!events.length) {
    list.innerHTML = "<p class=\"muted\">No events for selected date.</p>";
    state.calendar.selectedEventId = "";
    if (selectedLabel) selectedLabel.textContent = `Selected date: ${formatDate(selected)} | Selected event: None`;
    renderMusicianAssignments();
    return;
  }

  list.innerHTML = "";
  events.forEach((event) => {
    const card = document.createElement("div");
    card.className = "event-card";
    if (state.calendar.selectedEventId === event.id) {
      card.classList.add("selected");
    }
    const header = document.createElement("header");
    header.innerHTML = `<span>${event.title || eventTypeLabel(event.type)}</span><span>${eventTypeLabel(event.type)}</span>`;
    header.addEventListener("click", () => {
      selectEventForEdit(event, selected);
    });
    const meta = document.createElement("div");
    meta.className = "event-meta";
    meta.textContent = `${formatShortDateTime(event.start_time)} → ${formatShortDateTime(
      event.end_time
    )}`;
    meta.addEventListener("click", () => {
      selectEventForEdit(event, selected);
    });
    const notes = document.createElement("div");
    notes.className = "event-meta";
    notes.textContent = event.notes || "";
    notes.addEventListener("click", () => {
      selectEventForEdit(event, selected);
    });

    const actions = document.createElement("div");
    actions.className = "event-actions";
    const selectBtn = document.createElement("button");
    selectBtn.className = "btn ghost";
    selectBtn.textContent = "Edit";
    selectBtn.addEventListener("click", () => {
      selectEventForEdit(event, selected);
    });
    actions.appendChild(selectBtn);
    const del = document.createElement("button");
    del.className = "btn ghost";
    del.textContent = "Delete";
    del.addEventListener("click", () => deleteCalendarEvent(event.id));
    actions.appendChild(del);

    card.appendChild(header);
    card.appendChild(meta);
    if (event.notes) card.appendChild(notes);
    const contract = state.calendar.contracts.find((item) => item.event_id === event.id);
    if (contract && !contract.file_path) {
      const badge = document.createElement("span");
      badge.className = "badge-inline draft";
      badge.textContent = "🚩 Pending contract";
      card.appendChild(badge);
    }
    if (contract && contract.file_path) {
      const link = document.createElement("button");
      link.className = "btn ghost";
      link.textContent = "View contract";
      link.addEventListener("click", (evt) => {
        evt.preventDefault();
        openContractForEvent(event.id);
      });
      card.appendChild(link);
    }
    card.appendChild(actions);
    list.appendChild(card);
  });

  if (selectedLabel) {
    const current = events.find((item) => item.id === state.calendar.selectedEventId);
    selectedLabel.textContent = current
      ? `Selected date: ${formatDate(selected)} | Selected event: ${current.title || current.type}`
      : `Selected date: ${formatDate(selected)} | Selected event: None`;
  }
  renderMusicianAssignments();
}

async function deleteCalendarEvent(id) {
  const client = state.calendar.client;
  if (client && state.calendar.session) {
    const { error: assignmentError } = await client
      .from("musician_assignments")
      .delete()
      .eq("event_id", id);
    if (assignmentError) {
      updateSupabaseStatus(`Could not delete assignments: ${assignmentError.message}`, true);
      return;
    }

    // Clear contract links first so FK constraints do not block event deletion.
    const { error: clearDraftContractsError } = await client
      .from("contracts")
      .delete()
      .eq("event_id", id)
      .is("file_path", null);
    if (clearDraftContractsError) {
      updateSupabaseStatus(
        `Could not clear pending contracts for this event: ${clearDraftContractsError.message}`,
        true
      );
      return;
    }
    const { error: unlinkSignedContractsError } = await client
      .from("contracts")
      .update({ event_id: null })
      .eq("event_id", id)
      .not("file_path", "is", null);
    if (unlinkSignedContractsError) {
      updateSupabaseStatus(
        `Could not unlink signed contracts from this event: ${unlinkSignedContractsError.message}`,
        true
      );
      return;
    }

    const { error: eventError } = await client.from("events").delete().eq("id", id);
    if (eventError) {
      updateSupabaseStatus(`Could not delete event: ${eventError.message}`, true);
      return;
    }
    updateSupabaseStatus("Event deleted.");
  } else {
    state.calendar.events = state.calendar.events.filter((event) => event.id !== id);
    state.calendar.assignments = state.calendar.assignments.filter(
      (assignment) => assignment.event_id !== id
    );
    saveDraft();
  }
  if (state.calendar.selectedEventId === id) {
    state.calendar.selectedEventId = "";
  }
  await fetchMusicianAssignments();
  await fetchEventsForMonth();
  await fetchContracts();
}

async function handleCalendarSave() {
  const client = state.calendar.client;
  const warning = document.getElementById("calendarConflict");
  const pinWrap = document.getElementById("overridePinWrap");
  const pinInput = document.getElementById("overridePinInput");

  if (!client || !state.calendar.session) {
    updateSupabaseStatus("Sign in to save events.", true);
    return;
  }

  const type = document.getElementById("calendarType").value;
  const title = document.getElementById("calendarEventTitle").value.trim();
  const startDate = document.getElementById("calendarStartDate").value;
  const startTime = document.getElementById("calendarStartTime").value;
  let endDate = document.getElementById("calendarEndDate").value;
  const endTime = document.getElementById("calendarEndTime").value;
  const monthlyWeek = document.getElementById("calendarMonthlyWeek").value;
  const notes = document.getElementById("calendarNotes").value.trim();

  if (!endDate && startDate) endDate = startDate;
  if (monthlyWeek && startDate) {
    endDate = startDate;
    const endDateInput = document.getElementById("calendarEndDate");
    if (endDateInput) endDateInput.value = startDate;
  }

  const start = combineDateTime(startDate, startTime);
  const end = combineDateTime(endDate, endTime);

  if (!start || !end || end <= start) {
    updateSupabaseStatus("Start/end date and time are required.", true);
    return;
  }

  let effectiveEnd = end;
  if (monthlyWeek) {
    // For monthly repeats, anchor duration to times only so mobile date-pickers
    // cannot accidentally create month-long spans across every day.
    let durationMs = Math.round(hoursBetweenTimes(startTime, endTime) * 60 * 60 * 1000);
    if (!Number.isFinite(durationMs) || durationMs <= 0) {
      durationMs = 60 * 60 * 1000;
    }
    effectiveEnd = new Date(start.getTime() + durationMs);
  }

  const { data: conflicts, error } = await client
    .from("events")
    .select("*")
    .lt("start_time", effectiveEnd.toISOString())
    .gt("end_time", start.toISOString());

  if (error) {
    updateSupabaseStatus("Could not check conflicts.", true);
    return;
  }

  const conflictList = (conflicts || []).filter((event) => {
    if (event.id === state.calendar.selectedEventId) return false;
    return event.type !== "Blackout";
  });
  if (conflictList.length) {
    warning.classList.remove("hidden");
    warning.textContent = `Conflict: ${conflictList
      .map((event) => event.title || event.type)
      .join(", ")}. Enter PIN to override.`;
    pinWrap.classList.remove("hidden");

    if (!pinInput.value || pinInput.value !== state.calendar.overridePin) {
      updateSupabaseStatus("Override PIN required for conflicting events.", true);
      return;
    }
    warning.textContent = "Override accepted. Saving event...";
  } else {
    warning.classList.add("hidden");
    pinWrap.classList.add("hidden");
    if (pinInput) pinInput.value = "";
  }

  const payload = {
    type,
    title,
    start_time: start.toISOString(),
    end_time: effectiveEnd.toISOString(),
    notes,
    override: conflictList.length > 0,
  };
  let savedEventId = state.calendar.selectedEventId || "";

  if (state.calendar.selectedEventId) {
    if (monthlyWeek) {
      const recurringPayloads = buildMonthlyRecurringPayloads(
        payload,
        start,
        effectiveEnd,
        monthlyWeek,
        12
      );
      if (!recurringPayloads.length) {
        updateSupabaseStatus("Could not build monthly schedule from selected week.", true);
        return;
      }
      const sortedRecurring = [...recurringPayloads].sort(
        (a, b) => new Date(a.start_time) - new Date(b.start_time)
      );
      const [firstPayload, ...remainingPayloads] = sortedRecurring;
      const { error: updateError } = await client
        .from("events")
        .update(firstPayload)
        .eq("id", state.calendar.selectedEventId);
      if (updateError) {
        updateSupabaseStatus(`Could not update selected event: ${updateError.message}`, true);
        return;
      }
      if (remainingPayloads.length) {
        const { error: insertError } = await client
          .from("events")
          .insert(remainingPayloads);
        if (insertError) {
          updateSupabaseStatus(`Updated selected event, but recurring save failed: ${insertError.message}`, true);
          return;
        }
      }
      updateSupabaseStatus(`Selected event updated and monthly schedule saved (${sortedRecurring.length} events).`);
    } else {
      const { error: updateError } = await client
        .from("events")
        .update(payload)
        .eq("id", state.calendar.selectedEventId);
      if (updateError) {
        updateSupabaseStatus("Could not update selected event.", true);
        return;
      }
      updateSupabaseStatus("Selected event updated.");
    }
  } else {
    if (monthlyWeek) {
      const recurringPayloads = buildMonthlyRecurringPayloads(
        payload,
        start,
        effectiveEnd,
        monthlyWeek,
        12
      );
      if (!recurringPayloads.length) {
        updateSupabaseStatus("Could not build monthly schedule from selected week.", true);
        return;
      }
      const { data: insertedEvents, error: insertError } = await client
        .from("events")
        .insert(recurringPayloads)
        .select("id,start_time");
      if (insertError) {
        updateSupabaseStatus(`Could not save monthly schedule: ${insertError.message}`, true);
        return;
      }
      const sortedInserted = [...(insertedEvents || [])].sort(
        (a, b) => new Date(a.start_time) - new Date(b.start_time)
      );
      savedEventId = sortedInserted?.[0]?.id || "";
      updateSupabaseStatus(`Monthly schedule saved (${sortedInserted.length} events).`);
    } else {
      const { data: insertedEvent, error: insertError } = await client
        .from("events")
        .insert(payload)
        .select()
        .single();
      if (insertError) {
        updateSupabaseStatus("Could not save event.", true);
        return;
      }
      savedEventId = insertedEvent?.id || "";
      updateSupabaseStatus("Event saved.");
    }
  }

  await saveAssignmentsForEvent(savedEventId);
  const needsContract = ["contract needed", "hold"].includes(String(type || "").toLowerCase());
  if (needsContract) {
    await upsertPendingContractForEvent(savedEventId, title || type);
  } else if (savedEventId) {
    await clearPendingDraftContractForEvent(savedEventId);
  }

  clearCalendarForm();
  await fetchEventsForMonth();
  await fetchContracts();
  updateContractEventOptions();
}

function clearCalendarForm() {
  const ids = [
    "calendarEventTitle",
    "calendarStartTime",
    "calendarEndTime",
    "calendarMonthlyWeek",
    "calendarMusiciansNeeded",
    "calendarNotes",
  ];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  state.calendar.selectedEventId = "";
  const selectedLabel = document.getElementById("selectedEventLabel");
  if (selectedLabel) {
    selectedLabel.textContent = state.calendar.selectedDate
      ? `Selected date: ${formatDate(state.calendar.selectedDate)} | Selected event: None`
      : "Select a date to view events.";
  }
  const contractEventId = document.getElementById("contractEventId");
  if (contractEventId) contractEventId.value = "";
  updateMusicianAssignmentsVisibility();
  renderMusicianAssignments();
}

async function handleContractUpload() {
  const client = state.calendar.client;
  const status = document.getElementById("contractStatus");
  if (!client || !state.calendar.session) {
    if (status) status.textContent = "Sign in to upload.";
    return;
  }

  const name = document.getElementById("contractName").value.trim();
  const fileInput = document.getElementById("contractFile");
  const selectedEventId = state.calendar.selectedEventId || "";
  const eventId = document.getElementById("contractEventId").value || selectedEventId || null;
  const file = fileInput.files[0];

  if (!file) {
    if (status) status.textContent = "Choose a PDF to upload.";
    return;
  }

  const safeName = name || file.name.replace(/\\s+/g, "-");
  const path = `contracts/${Date.now()}-${safeName}`.replace(/[^a-zA-Z0-9-_/.]/g, "");

  const { error: uploadError } = await client
    .storage
    .from("signed-contracts")
    .upload(path, file, { upsert: true });

  if (uploadError) {
    if (status) status.textContent = "Upload failed.";
    return;
  }

  if (eventId) {
    const { data: existing } = await client
      .from("contracts")
      .select("*")
      .eq("event_id", eventId)
      .limit(1);
    if (existing && existing.length) {
      const { error: updateError } = await client
        .from("contracts")
        .update({ file_path: path, name: safeName, status: "Signed" })
        .eq("id", existing[0].id);
      if (updateError) {
        if (status) status.textContent = "Saved file but could not update contract.";
        return;
      }
    } else {
      const { error: insertError } = await client.from("contracts").insert({
        name: safeName,
        file_path: path,
        event_id: eventId,
        status: "Signed",
      });
      if (insertError) {
        if (status) status.textContent = "Saved file but could not store metadata.";
        return;
      }
    }
  } else {
    const { error: insertError } = await client.from("contracts").insert({
      name: safeName,
      file_path: path,
      event_id: eventId,
      status: "Signed",
    });
    if (insertError) {
      if (status) status.textContent = "Saved file but could not store metadata.";
      return;
    }
  }

  if (status) status.textContent = "Contract uploaded.";
  fileInput.value = "";
  document.getElementById("contractName").value = "";
  if (eventId) {
    const { error: eventUpdateError } = await client
      .from("events")
      .update({ type: "Confirmed" })
      .eq("id", eventId);
    if (eventUpdateError && status) {
      status.textContent = "Contract uploaded, but event could not be marked confirmed.";
    }
  }
  await fetchContracts();
  await fetchEventsForMonth();
  if (eventId) {
    await openContractForEvent(eventId);
  }
}

function updateContractList() {
  const list = document.getElementById("contractList");
  const draftList = document.getElementById("contractDraftList");
  if (!list) return;
  const signedContracts = state.calendar.contracts.filter((contract) => {
    if (!contract?.file_path) return false;
    const status = String(contract.status || "").toLowerCase();
    const path = String(contract.file_path || "");
    return status.includes("signed") || path.startsWith("contracts/");
  });
  if (!signedContracts.length) {
    list.innerHTML = "<p class=\"muted\">No signed contracts yet.</p>";
  } else {
    list.innerHTML = "";
    signedContracts.forEach((contract) => {
      const card = document.createElement("div");
      card.className = "event-card";
      const header = document.createElement("header");
      header.innerHTML = `<span>${contract.name}</span><span>${formatShortDateTime(
        contract.uploaded_at
      )}</span>`;
      if (!contract.event_id && state.calendar.selectedEventId) {
        const linkBtn = document.createElement("button");
        linkBtn.className = "btn ghost";
        linkBtn.textContent = "Link to selected event";
        linkBtn.addEventListener("click", async () => {
          const client = state.calendar.client;
          if (!client || !state.calendar.session) return;
          const { error } = await client
            .from("contracts")
            .update({ event_id: state.calendar.selectedEventId })
            .eq("id", contract.id);
          if (error) {
            updateSupabaseStatus("Could not link contract to event.", true);
            return;
          }
          await fetchContracts();
          await fetchEventsForMonth();
          updateSupabaseStatus("Contract linked to event.");
        });
        card.appendChild(linkBtn);
      }
      const link = document.createElement("button");
      link.className = "btn ghost";
      link.textContent = "Download";
      link.addEventListener("click", async (event) => {
        event.preventDefault();
        const client = state.calendar.client;
        if (!client) return;
        const { data, error } = await client
          .storage
          .from("signed-contracts")
          .createSignedUrl(contract.file_path, 60);
        if (!error && data?.signedUrl) {
          window.open(data.signedUrl, "_blank");
        }
      });
      card.appendChild(header);
      card.appendChild(link);
      list.appendChild(card);
    });
  }

  if (!draftList) return;
  const draftContracts = state.calendar.contracts
    .filter((contract) => {
      if (contract?.file_path) return false;
      const status = String(contract.status || "").toLowerCase();
      return !status.includes("created");
    })
    .sort((a, b) => new Date(b.uploaded_at || b.created_at || 0) - new Date(a.uploaded_at || a.created_at || 0));

  if (!draftContracts.length) {
    draftList.innerHTML = "<p class=\"muted\">No draft contracts waiting.</p>";
    return;
  }
  draftList.innerHTML = "";
  draftContracts.forEach((contract) => {
    const card = document.createElement("div");
    card.className = "event-card";
    const header = document.createElement("header");
    header.innerHTML = `<span>${contract.name || "Draft contract"}</span><span>${contract.status || "Pending signature"}</span>`;
    const meta = document.createElement("div");
    meta.className = "event-meta";
    const linkedEvent = state.calendar.events.find((event) => event.id === contract.event_id);
    meta.textContent = linkedEvent
      ? `${linkedEvent.title || eventTypeLabel(linkedEvent.type)} · ${formatShortDateTime(linkedEvent.start_time)}`
      : "No event linked yet";
    card.appendChild(header);
    card.appendChild(meta);
    if (!contract.event_id && state.calendar.selectedEventId) {
      const actions = document.createElement("div");
      actions.className = "event-actions";
      const linkBtn = document.createElement("button");
      linkBtn.className = "btn ghost";
      linkBtn.textContent = "Link to selected event";
      linkBtn.addEventListener("click", async () => {
        const client = state.calendar.client;
        if (!client || !state.calendar.session) return;
        const { error } = await client
          .from("contracts")
          .update({ event_id: state.calendar.selectedEventId })
          .eq("id", contract.id);
        if (error) {
          updateSupabaseStatus("Could not link contract to event.", true);
          return;
        }
        await fetchContracts();
        updateSupabaseStatus("Draft contract linked to event.");
      });
      actions.appendChild(linkBtn);
      card.appendChild(actions);
    }
    draftList.appendChild(card);
  });
}

function updateCreatedContractList() {
  const list = document.getElementById("createdContractList");
  if (!list) return;
  const createdContracts = state.calendar.contracts
    .filter((contract) => {
      if (!contract?.file_path) return false;
      const status = String(contract.status || "").toLowerCase();
      const path = String(contract.file_path || "");
      return status.includes("created") || path.startsWith("created-contracts/");
    })
    .sort((a, b) => new Date(b.uploaded_at || 0) - new Date(a.uploaded_at || 0));
  if (!createdContracts.length) {
    list.innerHTML = "<p class=\"muted\">No created contracts saved yet.</p>";
    return;
  }
  list.innerHTML = "";
  createdContracts.forEach((contract) => {
    const card = document.createElement("div");
    card.className = "event-card";
    const header = document.createElement("header");
    header.innerHTML = `<span>${contract.name || "Created contract"}</span><span>${formatShortDateTime(
      contract.uploaded_at
    )}</span>`;
    const actions = document.createElement("div");
    actions.className = "event-actions";
    const openBtn = document.createElement("button");
    openBtn.className = "btn ghost";
    openBtn.textContent = "Open PDF";
    openBtn.addEventListener("click", async () => {
      const client = state.calendar.client;
      if (!client || !state.calendar.session) return;
      const { data, error } = await client
        .storage
        .from("signed-contracts")
        .createSignedUrl(contract.file_path, 60);
      if (!error && data?.signedUrl) {
        window.open(data.signedUrl, "_blank");
      }
    });
    actions.appendChild(openBtn);
    card.appendChild(header);
    card.appendChild(actions);
    list.appendChild(card);
  });
}

function setContractsHubStatus(message, isError = false) {
  const el = document.getElementById("contractsHubStatus");
  if (!el) return;
  el.textContent = message;
  el.classList.toggle("warning", isError);
}

function contractTimestampLabel(contract) {
  return formatShortDateTime(contract.uploaded_at || contract.created_at || "");
}

async function openContractPdfPath(filePath) {
  const client = state.calendar.client;
  if (!client || !state.calendar.session || !filePath) return;
  const { data, error } = await client
    .storage
    .from("signed-contracts")
    .createSignedUrl(filePath, 60);
  if (!error && data?.signedUrl) {
    window.open(data.signedUrl, "_blank");
  }
}

async function uploadSignedFromPendingContract(contract, file, signedChecked = false) {
  const client = state.calendar.client;
  if (!client || !state.calendar.session) {
    setContractsHubStatus("Sign in to upload signed contracts.", true);
    return;
  }
  if (!contract?.id || !file) {
    setContractsHubStatus("Choose a PDF first.", true);
    return;
  }
  if (!signedChecked) {
    setContractsHubStatus("Check 'Signed contract uploaded' before uploading.", true);
    return;
  }
  const safeName = String(file.name || "signed-contract.pdf").replace(/\s+/g, "-");
  const path = `contracts/${Date.now()}-${safeName}`.replace(/[^a-zA-Z0-9-_/.]/g, "");
  const { error: uploadError } = await client
    .storage
    .from("signed-contracts")
    .upload(path, file, { upsert: true });
  if (uploadError) {
    setContractsHubStatus("Upload failed.", true);
    return;
  }
  // Keep original draft pending row for future reuse, and create/update a signed record.
  const signedName = contract.name || "Contract";
  let existingSignedQuery = client
    .from("contracts")
    .select("id")
    .eq("name", signedName)
    .not("file_path", "is", null)
    .order("uploaded_at", { ascending: false })
    .limit(1);
  if (contract.event_id) {
    existingSignedQuery = existingSignedQuery.eq("event_id", contract.event_id);
  } else {
    existingSignedQuery = existingSignedQuery.is("event_id", null);
  }
  const { data: existingSigned, error: existingSignedError } = await existingSignedQuery;
  if (existingSignedError) {
    setContractsHubStatus("File uploaded, but signed lookup failed.", true);
    return;
  }

  let signedSaveError = null;
  if (existingSigned && existingSigned.length) {
    const { error } = await client
      .from("contracts")
      .update({
        file_path: path,
        status: "Signed",
        uploaded_at: new Date().toISOString(),
      })
      .eq("id", existingSigned[0].id);
    signedSaveError = error;
  } else {
    const { error } = await client
      .from("contracts")
      .insert({
        name: signedName,
        file_path: path,
        event_id: contract.event_id || null,
        status: "Signed",
      });
    signedSaveError = error;
  }
  if (signedSaveError) {
    setContractsHubStatus("File uploaded, but signed contract save failed.", true);
    return;
  }
  if (contract.event_id) {
    await client.from("events").update({ type: "Confirmed" }).eq("id", contract.event_id);
  }
  await fetchContracts();
  await fetchEventsForMonth();
  setContractsHubStatus("Signed contract uploaded. Draft kept for reuse.");
}

function editDraftContract(contract) {
  const linkedEvent = state.calendar.events.find((event) => event.id === contract.event_id);
  if (linkedEvent) {
    const start = new Date(linkedEvent.start_time);
    const end = new Date(linkedEvent.end_time || linkedEvent.start_time);
    state.agreement.clientName = linkedEvent.title || "";
    state.agreement.performanceDate = formatDateInput(start);
    state.agreement.performanceTime = formatTimeInput(start);
    state.agreement.performanceEndTime = formatTimeInput(end);
  } else if (contract?.name) {
    state.agreement.clientName = String(contract.name).replace(/\s+Agreement$/i, "").trim();
  }
  syncAgreementForm();
  updateAgreementPreview();
  saveDraft();
  if (switchTopView) {
    state.activeTab = "agreement";
    switchTopView("bookkeeping");
  }
  setContractsHubStatus("Draft loaded in Agreement. Update details and generate a new contract.");
}

function renderContractsHub() {
  const pendingList = document.getElementById("contractsHubPendingList");
  const signedList = document.getElementById("contractsHubSignedList");
  if (!pendingList || !signedList) return;

  const pendingContracts = state.calendar.contracts
    .filter((contract) => {
      if (contract?.file_path) return false;
      const status = String(contract.status || "").toLowerCase();
      return !status.includes("created");
    })
    .sort((a, b) => new Date(b.uploaded_at || b.created_at || 0) - new Date(a.uploaded_at || a.created_at || 0));

  const signedContracts = state.calendar.contracts
    .filter((contract) => {
      if (!contract?.file_path) return false;
      const status = String(contract.status || "").toLowerCase();
      const path = String(contract.file_path || "");
      if (status.includes("created") || path.startsWith("created-contracts/")) return false;
      return true;
    })
    .sort((a, b) => new Date(b.uploaded_at || b.created_at || 0) - new Date(a.uploaded_at || a.created_at || 0));

  if (!pendingContracts.length) {
    pendingList.innerHTML = "<p class=\"muted\">No pending contracts.</p>";
  } else {
    pendingList.innerHTML = "";
    pendingContracts.forEach((contract) => {
      const card = document.createElement("div");
      card.className = "event-card";
      const linkedEvent = state.calendar.events.find((event) => event.id === contract.event_id);
      const header = document.createElement("header");
      header.innerHTML = `<span>${contract.name || "Pending contract"}</span><span>${contract.status || "Pending signature"}</span>`;
      const meta = document.createElement("div");
      meta.className = "event-meta";
      meta.textContent = linkedEvent
        ? `${linkedEvent.title || eventTypeLabel(linkedEvent.type)} · ${formatShortDateTime(linkedEvent.start_time)}`
        : "No event linked";

      const actions = document.createElement("div");
      actions.className = "event-actions";
      const signedWrap = document.createElement("label");
      signedWrap.className = "checkbox";
      const signedCheck = document.createElement("input");
      signedCheck.type = "checkbox";
      signedCheck.checked = false;
      signedWrap.appendChild(signedCheck);
      signedWrap.appendChild(document.createTextNode("Signed contract uploaded"));
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "application/pdf";
      fileInput.className = "hidden";
      const uploadBtn = document.createElement("button");
      uploadBtn.className = "btn ghost";
      uploadBtn.textContent = "Upload signed PDF";
      uploadBtn.addEventListener("click", () => fileInput.click());
      const editBtn = document.createElement("button");
      editBtn.className = "btn ghost";
      editBtn.textContent = "Edit Draft";
      editBtn.addEventListener("click", () => {
        editDraftContract(contract);
      });
      fileInput.addEventListener("change", async () => {
        const file = fileInput.files?.[0];
        if (!file) return;
        await uploadSignedFromPendingContract(contract, file, signedCheck.checked === true);
      });
      actions.appendChild(signedWrap);
      actions.appendChild(uploadBtn);
      actions.appendChild(editBtn);

      card.appendChild(header);
      card.appendChild(meta);
      card.appendChild(fileInput);
      card.appendChild(actions);
      pendingList.appendChild(card);
    });
  }

  if (!signedContracts.length) {
    signedList.innerHTML = "<p class=\"muted\">No signed contracts yet.</p>";
  } else {
    signedList.innerHTML = "";
    signedContracts.forEach((contract) => {
      const card = document.createElement("div");
      card.className = "event-card";
      const header = document.createElement("header");
      header.innerHTML = `<span>${contract.name || "Contract"}</span><span>Signed · ${contractTimestampLabel(contract)}</span>`;
      const actions = document.createElement("div");
      actions.className = "event-actions";
      const openBtn = document.createElement("button");
      openBtn.className = "btn ghost";
      openBtn.textContent = "Open PDF";
      openBtn.addEventListener("click", async () => {
        await openContractPdfPath(contract.file_path);
      });
      actions.appendChild(openBtn);
      card.appendChild(header);
      card.appendChild(actions);
      signedList.appendChild(card);
    });
  }
}

function updateContractEventOptions() {
  const select = document.getElementById("contractEventId");
  if (!select) return;
  select.innerHTML = "<option value=\"\">No link</option>";
  state.calendar.events.forEach((event) => {
    const option = document.createElement("option");
    option.value = event.id;
    option.textContent = `${event.title || eventTypeLabel(event.type)} (${formatShortDateTime(
      event.start_time
    )})`;
    select.appendChild(option);
  });
}

async function ensureHoldEventForAgreement() {
  const client = state.calendar.client;
  if (!client || !state.calendar.session) {
    return { ok: false, reason: "not_signed_in" };
  }

  const date = state.agreement.performanceDate;
  const startTime = state.agreement.performanceTime;
  const endTime = state.agreement.performanceEndTime;
  const title = state.agreement.clientName || "Contract Needed";

  const start = combineDateTime(date, startTime);
  const end = combineDateTime(date, endTime);
  if (!start || !end || end <= start) {
    return { ok: false, reason: "missing_fields" };
  }

  const dayStart = new Date(start.getFullYear(), start.getMonth(), start.getDate(), 0, 0, 0);
  const dayEnd = new Date(start.getFullYear(), start.getMonth(), start.getDate(), 23, 59, 59);

  const { data: existing } = await client
    .from("events")
    .select("*")
    .in("type", ["Hold", "Contract Needed"])
    .gte("start_time", dayStart.toISOString())
    .lte("start_time", dayEnd.toISOString())
    .limit(50);

  const autoHold = (existing || []).find((event) =>
    (event.notes || "").toLowerCase().includes("auto-created from agreement")
  );
  const exactHold = (existing || []).find((event) => event.title === title);
  const matchedHold = autoHold || exactHold || null;
  let eventId = matchedHold ? matchedHold.id : null;

  if (!eventId) {
    const { data, error } = await client
      .from("events")
      .insert({
        type: "Contract Needed",
        title,
        start_time: start.toISOString(),
        end_time: end.toISOString(),
        notes: AUTO_HOLD_NOTE,
        override: false,
      })
      .select()
      .single();
    if (error) return { ok: false, reason: "event_insert_failed" };
    eventId = data.id;
  } else {
    const { error } = await client
      .from("events")
      .update({
        type: "Contract Needed",
        title,
        start_time: start.toISOString(),
        end_time: end.toISOString(),
        notes: AUTO_HOLD_NOTE,
        override: false,
      })
      .eq("id", eventId);
    if (error) return { ok: false, reason: "event_update_failed" };
  }

  const { data: existingContract } = await client
    .from("contracts")
    .select("*")
    .eq("event_id", eventId)
    .limit(1);

  if (!existingContract || !existingContract.length) {
    const { error } = await client.from("contracts").insert({
      name: `${title} Agreement`,
      file_path: null,
      event_id: eventId,
      status: "Pending signature",
    });
    if (error) return { ok: false, reason: "contract_insert_failed" };
  } else if (!existingContract[0].file_path) {
    const { error } = await client
      .from("contracts")
      .update({ name: `${title} Agreement`, status: "Pending signature" })
      .eq("id", existingContract[0].id);
    if (error) return { ok: false, reason: "contract_update_failed" };
  }

  await fetchEventsForMonth();
  await fetchContracts();
  return { ok: true, reason: "synced", eventId };
}

function scheduleAgreementHoldSync() {
  if (holdSyncTimer) {
    clearTimeout(holdSyncTimer);
  }
  holdSyncTimer = setTimeout(() => {
    ensureHoldEventForAgreement();
  }, 700);
}

function setAgreementCalendarStatus(message, isError = false) {
  const status = document.getElementById("agreementCalendarStatus");
  if (!status) return;
  status.textContent = message;
  status.classList.toggle("warning", isError);
}

function focusCalendarOnDate(dateStr) {
  const target = parseLocalDate(dateStr);
  if (!target) return;
  const now = new Date();
  const monthDiff =
    (target.getFullYear() - now.getFullYear()) * 12 +
    (target.getMonth() - now.getMonth());
  state.calendar.monthOffset = monthDiff;
  state.calendar.selectedDate = formatDateInput(target);
}

async function addAgreementToCalendarPending() {
  setAgreementCalendarStatus("Adding contract-needed event to calendar...");
  const result = await ensureHoldEventForAgreement();
  if (result?.ok) {
    const dateValue = state.agreement.performanceDate;
    if (dateValue) {
      focusCalendarOnDate(dateValue);
      await fetchEventsForMonth();
      renderCalendar();
      updateEventList();
    }
    updateSupabaseStatus("Contract-needed event added/updated in calendar.");
    setAgreementCalendarStatus("Added. Open Calendar tab to review the pending contract event.");
    return true;
  }
  if (result?.reason === "not_signed_in") {
    updateSupabaseStatus("Sign in on Calendar tab first, then tap Add to Calendar (Pending).", true);
    setAgreementCalendarStatus("Sign in on Calendar tab first.", true);
    return false;
  }
  if (result?.reason === "missing_fields") {
    updateSupabaseStatus(
      "Set performance date, start time, and end time in Agreement, then tap Add to Calendar (Pending).",
      true
    );
    setAgreementCalendarStatus("Missing date/start/end time in Agreement.", true);
    return false;
  }
  const reasonLabel = result?.reason ? ` (${result.reason})` : "";
  updateSupabaseStatus(`Could not add contract-needed event right now${reasonLabel}.`, true);
  setAgreementCalendarStatus(`Could not add contract-needed event${reasonLabel}.`, true);
  return false;
}

function resetAgreementForm() {
  state.agreement = createInitialAgreementState();
  syncAgreementForm();
  updateAgreementPreview();
  saveDraft();
  setAgreementCalendarStatus("Agreement form reset.");
}

async function submitAgreement() {
  const added = await addAgreementToCalendarPending();
  if (!added) return;
  resetAgreementForm();
  setAgreementCalendarStatus("Submitted. Pending hold added and form reset.");
}

function syncAgreementForm() {
  agreementFields.forEach((field) => {
    const el = document.getElementById(field);
    if (!el) return;
    if (el.type === "checkbox") {
      el.checked = state.agreement[field];
    } else {
      el.value = state.agreement[field];
    }
  });
}

function syncInvoiceForm() {
  const map = {
    invoiceNumber: "invoiceNumber",
    invoiceClientName: "clientName",
    invoiceClientEmail: "clientEmail",
    invoiceIssueDate: "issueDate",
    invoiceDueDate: "dueDate",
    invoiceDescription: "description",
    invoicePerformanceFee: "performanceFee",
    invoiceDepositDue: "depositDue",
    invoiceDepositPaid: "depositPaid",
    invoiceAddons: "addons",
    invoiceTotalOverride: "totalOverride",
  };

  Object.keys(map).forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.value = state.invoice[map[id]];
  });
}

function syncReceiptForm() {
  const map = {
    receiptNumber: "receiptNumber",
    receiptClientName: "clientName",
    receiptPaymentDate: "paymentDate",
    receiptAmountPaid: "amountPaid",
    receiptPaymentMethod: "paymentMethod",
    receiptRelatedInvoice: "relatedInvoice",
  };

  Object.keys(map).forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.value = state.receipt[map[id]];
  });
}

function setWorkOrderStatus(message, isError = false) {
  const el = document.getElementById("workOrderStatus");
  if (!el) return;
  el.textContent = message;
  el.classList.toggle("warning", isError);
}

function resetWorkOrderForm() {
  const date = document.getElementById("workOrderDate");
  const category = document.getElementById("workOrderCategory");
  const description = document.getElementById("workOrderDescription");
  const needed = document.getElementById("workOrderNeeded");
  const deadline = document.getElementById("workOrderDeadline");
  const files = document.getElementById("workOrderFiles");
  const status = document.getElementById("workOrderTaskStatus");
  const followUp = document.getElementById("workOrderFollowUp");
  if (date) date.value = "";
  if (category) category.value = "Bookkeeping";
  if (description) description.value = "";
  if (needed) needed.value = "";
  if (deadline) deadline.value = "";
  if (files) files.value = "";
  if (status) status.value = "Open";
  if (followUp) followUp.value = "";
}

function renderWorkOrders() {
  const list = document.getElementById("workOrderList");
  if (!list) return;
  const createSection = document.getElementById("workOrderNewSection");
  const showAllBtn = document.getElementById("workOrderShowAll");
  const hasFocus = Boolean(state.workOrderView?.focusId);
  if (createSection) {
    createSection.classList.toggle("hidden", state.workOrderView?.showCreate === false);
  }
  if (showAllBtn) {
    showAllBtn.classList.toggle("hidden", !hasFocus && state.workOrderView?.showCreate !== false);
  }
  list.innerHTML = "";
  if (!state.workOrders.length) {
    list.innerHTML = "<p class=\"muted\">No work orders yet.</p>";
    updateOpsProgress();
    return;
  }

  const rows = hasFocus
    ? state.workOrders.filter((item) => item.id === state.workOrderView.focusId)
    : state.workOrders;

  if (hasFocus && !rows.length) {
    list.innerHTML = "<p class=\"muted\">That task is no longer available.</p>";
    updateOpsProgress();
    return;
  }

  rows.forEach((order) => {
    const taskStatus =
      order.status || (order.completed ? "Completed" : "Open");
    const card = document.createElement("article");
    card.className = `work-order-card${taskStatus === "Completed" ? " done" : ""}`;

    const head = document.createElement("div");
    head.className = "work-order-head";

    const titleWrap = document.createElement("div");
    const title = document.createElement("h4");
    title.textContent = order.description || order.title || "Untitled Task";
    const meta = document.createElement("p");
    const created = order.date ? formatDate(order.date) : "No date";
    const deadline = order.deadline ? formatDate(order.deadline) : "No deadline";
    meta.className = "work-order-meta";
    meta.textContent = `Date: ${created} • Deadline: ${deadline}`;
    titleWrap.appendChild(title);
    titleWrap.appendChild(meta);

    const category = document.createElement("span");
    const categoryValue = order.category || "Other";
    category.className = "priority-tag normal";
    category.textContent = categoryValue;

    head.appendChild(titleWrap);
    head.appendChild(category);
    card.appendChild(head);

    const addLabeledNote = (label, value) => {
      if (!value) return;
      const note = document.createElement("p");
      note.className = "work-order-note";
      const strong = document.createElement("strong");
      strong.textContent = `${label}: `;
      note.appendChild(strong);
      note.appendChild(document.createTextNode(value));
      card.appendChild(note);
    };
    addLabeledNote("Needs", order.needed);
    addLabeledNote("Files", order.files);
    addLabeledNote("Follow up", order.followUp);

    const statusTag = document.createElement("span");
    statusTag.className = `priority-tag ${taskStatus.toLowerCase().replace(/\s+/g, "-")}`;
    statusTag.textContent = taskStatus;
    card.appendChild(statusTag);

    const actions = document.createElement("div");
    actions.className = "work-order-actions";

    const toggle = document.createElement("button");
    toggle.className = "btn ghost";
    toggle.setAttribute("type", "button");
    toggle.setAttribute("data-action", "toggle");
    toggle.setAttribute("data-id", order.id);
    toggle.textContent = taskStatus === "Completed" ? "Mark Open" : "Mark Completed";

    const remove = document.createElement("button");
    remove.className = "btn ghost";
    remove.setAttribute("type", "button");
    remove.setAttribute("data-action", "delete");
    remove.setAttribute("data-id", order.id);
    remove.textContent = "Delete";

    actions.appendChild(toggle);
    actions.appendChild(remove);
    card.appendChild(actions);
    list.appendChild(card);
  });
  updateOpsProgress();
}

function submitWorkOrder() {
  const date = document.getElementById("workOrderDate")?.value || "";
  const category = document.getElementById("workOrderCategory")?.value || "Other";
  const description = document.getElementById("workOrderDescription")?.value.trim() || "";
  const needed = document.getElementById("workOrderNeeded")?.value.trim() || "";
  const deadline = document.getElementById("workOrderDeadline")?.value || "";
  const files = document.getElementById("workOrderFiles")?.value.trim() || "";
  const status = document.getElementById("workOrderTaskStatus")?.value || "Open";
  const followUp = document.getElementById("workOrderFollowUp")?.value.trim() || "";

  if (!description) {
    setWorkOrderStatus("Task description is required.", true);
    return;
  }
  if (!needed) {
    setWorkOrderStatus("Please fill out what needs to be done.", true);
    return;
  }

  state.workOrders.unshift({
    id: `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    date,
    category,
    description,
    needed,
    deadline,
    files,
    status,
    followUp,
    completed: status === "Completed",
    createdAt: new Date().toISOString(),
  });
  state.workOrderView.focusId = "";
  state.workOrderView.showCreate = true;
  saveDraft();
  renderWorkOrders();
  resetWorkOrderForm();
  setWorkOrderStatus("Work order submitted.");
}

function updateMusicianStatus(message, isError = false) {
  const el = document.getElementById("musicianStatus");
  if (!el) return;
  el.textContent = message;
  el.classList.toggle("warning", isError);
}

function updateRosterBlackoutStatus(message, isError = false) {
  const el = document.getElementById("rosterBlackoutStatus");
  if (!el) return;
  el.textContent = message;
  el.classList.toggle("warning", isError);
}

function musicianDisplayName(musician) {
  return musician?.name || "Unknown musician";
}

function populateMusicianSelects() {
  const selects = [
    "rosterBlackoutMusician",
    "assignmentFilterMusician",
    "blackoutMusician",
  ];
  const sorted = [...state.musicians].sort((a, b) =>
    String(a.name || "").localeCompare(String(b.name || ""))
  );

  selects.forEach((id) => {
    const select = document.getElementById(id);
    if (!select) return;
    const current = select.value;
    if (id === "assignmentFilterMusician") {
      select.innerHTML = "<option value=\"\">All musicians</option>";
    } else {
      select.innerHTML = "<option value=\"\">Select musician</option>";
    }
    sorted.forEach((musician) => {
      const option = document.createElement("option");
      option.value = musician.id;
      option.textContent = `${musicianDisplayName(musician)}${musician.active === false ? " (Inactive)" : ""}`;
      select.appendChild(option);
    });
    if (current && [...select.options].some((opt) => opt.value === current)) {
      select.value = current;
    }
  });
}

function renderMusicianList() {
  const list = document.getElementById("musicianList");
  if (!list) return;
  if (!state.musicians.length) {
    list.innerHTML = "<p class=\"muted\">No musicians on roster yet.</p>";
    populateMusicianSelects();
    return;
  }
  list.innerHTML = "";
  const sorted = [...state.musicians].sort((a, b) =>
    String(a.name || "").localeCompare(String(b.name || ""))
  );
  sorted.forEach((musician) => {
    const card = document.createElement("div");
    card.className = "event-card";
    const header = document.createElement("header");
    const statusLabel = musician.active === false ? "Inactive" : "Active";
    header.innerHTML = `<span>${musicianDisplayName(musician)}</span><span>${statusLabel}</span>`;
    const meta = document.createElement("div");
    meta.className = "event-meta";
    meta.textContent = musician.role || "No role set";
    const contact = document.createElement("div");
    contact.className = "event-meta";
    const contactParts = [musician.email, musician.phone].filter(Boolean);
    contact.textContent = contactParts.length ? contactParts.join(" · ") : "No contact info";
    card.appendChild(header);
    card.appendChild(meta);
    card.appendChild(contact);
    if (musician.notes) {
      const notes = document.createElement("div");
      notes.className = "event-meta";
      notes.textContent = musician.notes;
      card.appendChild(notes);
    }
    const actions = document.createElement("div");
    actions.className = "event-actions";
    const toggle = document.createElement("button");
    toggle.className = "btn ghost";
    toggle.dataset.action = "toggle-musician";
    toggle.dataset.id = musician.id;
    toggle.textContent = musician.active === false ? "Set active" : "Set inactive";
    const edit = document.createElement("button");
    edit.className = "btn ghost";
    edit.dataset.action = "edit-musician";
    edit.dataset.id = musician.id;
    edit.textContent = "Edit";
    const remove = document.createElement("button");
    remove.className = "btn ghost";
    remove.dataset.action = "delete-musician";
    remove.dataset.id = musician.id;
    remove.textContent = "Delete";
    actions.appendChild(edit);
    actions.appendChild(toggle);
    actions.appendChild(remove);
    card.appendChild(actions);
    list.appendChild(card);
  });
  populateMusicianSelects();
}

function clearMusicianForm() {
  ["musicianName", "musicianRole", "musicianEmail", "musicianPhone", "musicianNotes"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  const activeInput = document.getElementById("musicianActive");
  if (activeInput) activeInput.checked = true;
}

function setMusicianEditorState(id = "") {
  state.musicianEditor.id = id || "";
  const addBtn = document.getElementById("addMusician");
  const cancelBtn = document.getElementById("cancelMusicianEdit");
  const seedBtn = document.getElementById("seedMusicians");
  const isEditing = Boolean(state.musicianEditor.id);
  if (addBtn) addBtn.textContent = isEditing ? "Save changes" : "Add team member";
  if (cancelBtn) cancelBtn.classList.toggle("hidden", !isEditing);
  if (seedBtn) seedBtn.classList.toggle("hidden", isEditing);
}

function editMusicianFromList(id) {
  const musician = state.musicians.find((item) => item.id === id);
  if (!musician) return;
  state.musicianEditor.id = id;
  const map = {
    musicianName: musician.name || "",
    musicianRole: musician.role || "",
    musicianEmail: musician.email || "",
    musicianPhone: musician.phone || "",
    musicianNotes: musician.notes || "",
  };
  Object.entries(map).forEach(([fieldId, value]) => {
    const el = document.getElementById(fieldId);
    if (el) el.value = value;
  });
  const activeInput = document.getElementById("musicianActive");
  if (activeInput) activeInput.checked = musician.active !== false;
  setMusicianEditorState(id);
  updateMusicianStatus(`Editing ${musicianDisplayName(musician)}.`);
}

async function fetchMusicians() {
  const client = state.calendar.client;
  if (!client || !state.calendar.session) {
    renderMusicianList();
    renderMusicianAssignments();
    renderAssignmentSummaryLists();
    return;
  }
  const { data, error } = await client
    .from("musicians")
    .select("*")
    .order("name", { ascending: true });
  if (error) {
    updateMusicianStatus("Could not load musicians. Check Supabase tables/policies.", true);
    renderMusicianList();
    renderMusicianAssignments();
    renderAssignmentSummaryLists();
    return;
  }
  state.musicians = data || [];
  renderMusicianList();
  renderMusicianAssignments();
  renderAssignmentSummaryLists();
}

async function addMusicianFromForm() {
  const name = document.getElementById("musicianName")?.value.trim() || "";
  const role = document.getElementById("musicianRole")?.value.trim() || "";
  const email = document.getElementById("musicianEmail")?.value.trim() || "";
  const phone = document.getElementById("musicianPhone")?.value.trim() || "";
  const notes = document.getElementById("musicianNotes")?.value.trim() || "";
  const active = document.getElementById("musicianActive")?.checked !== false;
  if (!name) {
    updateMusicianStatus("Musician name is required.", true);
    return;
  }
  const payload = { name, role, email, phone, notes, active };
  const editId = state.musicianEditor.id || "";
  const client = state.calendar.client;
  if (editId) {
    const idx = state.musicians.findIndex((item) => item.id === editId);
    if (idx === -1) {
      setMusicianEditorState("");
      clearMusicianForm();
      updateMusicianStatus("Selected musician was not found.", true);
      return;
    }
    if (client && state.calendar.session && !String(editId).startsWith("local-musician-")) {
      const { data, error } = await client
        .from("musicians")
        .update(payload)
        .eq("id", editId)
        .select("*")
        .single();
      if (error) {
        updateMusicianStatus(`Could not update musician: ${error.message}`, true);
        return;
      }
      state.musicians[idx] = data;
    } else {
      state.musicians[idx] = { ...state.musicians[idx], ...payload };
    }
    saveDraft();
    renderMusicianList();
    renderMusicianAssignments();
    renderAssignmentSummaryLists();
    clearMusicianForm();
    setMusicianEditorState("");
    updateMusicianStatus("Musician updated.");
    return;
  }

  if (client && state.calendar.session) {
    const { data, error } = await client
      .from("musicians")
      .insert(payload)
      .select("*")
      .single();
    if (error) {
      updateMusicianStatus(`Could not save musician: ${error.message}`, true);
      return;
    }
    state.musicians.push(data);
  } else {
    state.musicians.push({
      id: `local-musician-${Date.now()}-${Math.random().toString(16).slice(2, 7)}`,
      ...payload,
    });
  }
  saveDraft();
  renderMusicianList();
  renderMusicianAssignments();
  renderAssignmentSummaryLists();
  clearMusicianForm();
  setMusicianEditorState("");
  updateMusicianStatus("Musician added.");
}

async function toggleMusicianActive(id) {
  const idx = state.musicians.findIndex((m) => m.id === id);
  if (idx === -1) return;
  const musician = state.musicians[idx];
  const nextValue = musician.active === false ? true : false;
  const client = state.calendar.client;
  if (client && state.calendar.session && !String(id).startsWith("local-musician-")) {
    const { error } = await client
      .from("musicians")
      .update({ active: nextValue })
      .eq("id", id);
    if (error) {
      updateMusicianStatus(`Could not update musician: ${error.message}`, true);
      return;
    }
  }
  musician.active = nextValue;
  saveDraft();
  renderMusicianList();
  renderMusicianAssignments();
  renderAssignmentSummaryLists();
}

async function deleteMusician(id) {
  const client = state.calendar.client;
  if (client && state.calendar.session && !String(id).startsWith("local-musician-")) {
    const { error } = await client.from("musicians").delete().eq("id", id);
    if (error) {
      updateMusicianStatus(`Could not delete musician: ${error.message}`, true);
      return;
    }
  }
  state.musicians = state.musicians.filter((m) => m.id !== id);
  state.calendar.assignments = state.calendar.assignments.filter((a) => a.musician_id !== id);
  if (state.musicianEditor.id === id) {
    clearMusicianForm();
    setMusicianEditorState("");
  }
  saveDraft();
  renderMusicianList();
  renderMusicianAssignments();
  renderAssignmentSummaryLists();
  updateMusicianStatus("Musician removed.");
}

async function seedDefaultMusicians() {
  const defaults = [
    { name: "Josh Adams", role: "Guitar / Vocals" },
    { name: "Beth Adams", role: "Vocals / Percussion" },
    { name: "Bassist", role: "Bass" },
    { name: "Drummer", role: "Drums" },
  ];
  defaults.forEach((item) => {
    const exists = state.musicians.some(
      (m) => String(m.name || "").toLowerCase() === item.name.toLowerCase()
    );
    if (!exists) {
      state.musicians.push({
        id: `local-musician-${Date.now()}-${Math.random().toString(16).slice(2, 7)}`,
        name: item.name,
        role: item.role,
        email: "",
        phone: "",
        notes: "",
        active: true,
      });
    }
  });
  saveDraft();
  renderMusicianList();
  renderMusicianAssignments();
  renderAssignmentSummaryLists();
  updateMusicianStatus("Default roster seeded.");
}

async function fetchMusicianAssignments() {
  const client = state.calendar.client;
  if (!client || !state.calendar.session) {
    renderMusicianAssignments();
    renderAssignmentSummaryLists();
    return;
  }
  const { data, error } = await client
    .from("musician_assignments")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(2000);
  if (error) {
    updateMusicianStatus("Could not load musician assignments.", true);
    renderMusicianAssignments();
    renderAssignmentSummaryLists();
    return;
  }
  state.calendar.assignments = data || [];
  renderMusicianAssignments();
  renderAssignmentSummaryLists();
}

function renderMusicianAssignments() {
  const wrap = document.getElementById("musicianAssignments");
  if (!wrap) return;
  wrap.innerHTML = "";
  const musiciansNeeded = document.getElementById("calendarMusiciansNeeded")?.value || "no";
  if (musiciansNeeded !== "yes") {
    wrap.innerHTML = "<p class=\"muted\">Musicians not required for this event.</p>";
    return;
  }
  let selectedEventId = state.calendar.selectedEventId;
  if (!selectedEventId && state.calendar.selectedDate) {
    const selectedDate = parseLocalDate(state.calendar.selectedDate);
    if (selectedDate) {
      const dayEvents = state.calendar.events.filter((event) => {
        const start = new Date(event.start_time);
        const end = new Date(event.end_time);
        return selectedDate >= startOfDay(start) && selectedDate <= startOfDay(end);
      });
      if (dayEvents.length === 1) {
        selectedEventId = dayEvents[0].id;
        state.calendar.selectedEventId = selectedEventId;
        const selectedLabel = document.getElementById("selectedEventLabel");
        if (selectedLabel) {
          selectedLabel.textContent = `Selected date: ${formatDate(state.calendar.selectedDate)} | Selected event: ${dayEvents[0].title || dayEvents[0].type}`;
        }
      }
    }
  }
  const activeMusicians = state.musicians.filter((m) => m.active !== false);
  if (!activeMusicians.length) {
    wrap.innerHTML = "<p class=\"muted\">Add team members in Musicians + Tech Crew first.</p>";
    return;
  }
  if (!selectedEventId) {
    const hint = document.createElement("p");
    hint.className = "muted";
    hint.textContent = "No event selected yet. Check the musicians needed, then click Save event to attach them.";
    wrap.appendChild(hint);
  }
  const eventAssignments = selectedEventId
    ? state.calendar.assignments.filter((a) => a.event_id === selectedEventId)
    : [];
  activeMusicians.forEach((musician) => {
    const row = document.createElement("div");
    row.className = "assignment-row";
    row.dataset.musicianId = musician.id;
    const existing = eventAssignments.find((a) => a.musician_id === musician.id);
    const isAssigned = Boolean(existing);
    row.innerHTML = `
      <div>
        <div class="assignment-name">${musicianDisplayName(musician)}</div>
        <div class="assignment-role">${musician.role || ""}</div>
      </div>
      <label class="checkbox assignment-check">
        <input data-field="assigned" type="checkbox" />
        Assigned
      </label>
      <div class="assignment-status">
        <select data-field="status">
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Unavailable">Unavailable</option>
        </select>
      </div>
      <input data-field="notes" placeholder="Assignment note" />
    `;
    const assignedToggle = row.querySelector("input[data-field='assigned']");
    const statusSelect = row.querySelector("select[data-field='status']");
    const notesInput = row.querySelector("input[data-field='notes']");
    if (assignedToggle) assignedToggle.checked = isAssigned;
    if (statusSelect) statusSelect.value = existing?.status || "Pending";
    if (notesInput) notesInput.value = existing?.notes || "";
    const syncEnabled = () => {
      const enabled = assignedToggle ? assignedToggle.checked : false;
      if (statusSelect) statusSelect.disabled = !enabled;
      if (notesInput) notesInput.disabled = !enabled;
    };
    if (assignedToggle) {
      assignedToggle.addEventListener("change", syncEnabled);
    }
    syncEnabled();
    wrap.appendChild(row);
  });
}

async function saveAssignmentsForEvent(eventId) {
  if (!eventId) return;
  const client = state.calendar.client;
  const musiciansNeeded = document.getElementById("calendarMusiciansNeeded")?.value || "no";
  if (musiciansNeeded !== "yes") {
    if (client && state.calendar.session) {
      await client.from("musician_assignments").delete().eq("event_id", eventId);
      await fetchMusicianAssignments();
    } else {
      state.calendar.assignments = state.calendar.assignments.filter((a) => a.event_id !== eventId);
      saveDraft();
      renderAssignmentSummaryLists();
    }
    return;
  }
  const wrap = document.getElementById("musicianAssignments");
  if (!wrap) return;
  const rows = [...wrap.querySelectorAll(".assignment-row[data-musician-id]")];
  const payload = rows.map((row) => {
    const assigned = row.querySelector("input[data-field='assigned']")?.checked === true;
    if (!assigned) return null;
    const musicianId = row.dataset.musicianId;
    const status = row.querySelector("select[data-field='status']")?.value || "Pending";
    const notes = row.querySelector("input[data-field='notes']")?.value.trim() || "";
    return {
      id: `local-assignment-${eventId}-${musicianId}`,
      event_id: eventId,
      musician_id: musicianId,
      status,
      notes,
    };
  }).filter(Boolean);

  if (client && state.calendar.session) {
    const { error: deleteError } = await client
      .from("musician_assignments")
      .delete()
      .eq("event_id", eventId);
    if (deleteError) {
      updateMusicianStatus(`Could not save assignments: ${deleteError.message}`, true);
      return;
    }
    if (payload.length) {
      const insertPayload = payload.map((item) => ({
        event_id: item.event_id,
        musician_id: item.musician_id,
        status: item.status,
        notes: item.notes || null,
      }));
      const { error: insertError } = await client
        .from("musician_assignments")
        .insert(insertPayload);
      if (insertError) {
        updateMusicianStatus(`Could not save assignments: ${insertError.message}`, true);
        return;
      }
    }
    await fetchMusicianAssignments();
  } else {
    state.calendar.assignments = state.calendar.assignments.filter((a) => a.event_id !== eventId);
    state.calendar.assignments.push(...payload);
    saveDraft();
    renderAssignmentSummaryLists();
  }
}

function renderAssignmentList() {
  const list = document.getElementById("assignmentList");
  if (!list) return;
  const filterMusician = document.getElementById("assignmentFilterMusician")?.value || "";
  const showPending = document.getElementById("assignmentStatusPending")?.checked !== false;
  const showConfirmed = document.getElementById("assignmentStatusConfirmed")?.checked !== false;

  const items = state.calendar.assignments.filter((assignment) => {
    if (filterMusician && assignment.musician_id !== filterMusician) return false;
    const status = String(assignment.status || "").toLowerCase();
    if (!showPending && status === "pending") return false;
    if (!showConfirmed && status === "confirmed") return false;
    return true;
  });

  if (!items.length) {
    list.innerHTML = "<p class=\"muted\">No assignments match this filter.</p>";
    return;
  }
  list.innerHTML = "";
  items.forEach((assignment) => {
    const musician = state.musicians.find((m) => m.id === assignment.musician_id);
    const event = state.calendar.events.find((e) => e.id === assignment.event_id);
    const card = document.createElement("div");
    card.className = "event-card";
    const header = document.createElement("header");
    header.innerHTML = `<span>${musicianDisplayName(musician)}</span><span>${assignment.status || "Pending"}</span>`;
    const meta = document.createElement("div");
    meta.className = "event-meta";
    meta.textContent = event
      ? `${event.title || eventTypeLabel(event.type)} · ${formatShortDateTime(event.start_time)}`
      : `Event ${assignment.event_id || "Unknown"}`;
    card.appendChild(header);
    card.appendChild(meta);
    if (assignment.notes) {
      const notes = document.createElement("div");
      notes.className = "event-meta";
      notes.textContent = assignment.notes;
      card.appendChild(notes);
    }
    list.appendChild(card);
  });
}

function renderBookedDatesList() {
  const list = document.getElementById("bookedDatesList");
  if (!list) return;
  const booked = state.calendar.events
    .filter((event) => String(event.type || "").toLowerCase() !== "blackout")
    .sort((a, b) => new Date(a.start_time) - new Date(b.start_time));
  if (!booked.length) {
    list.innerHTML = "<p class=\"muted\">No booked dates yet.</p>";
    return;
  }
  list.innerHTML = "";
  booked.slice(0, 40).forEach((event) => {
    const eventAssignments = state.calendar.assignments.filter(
      (item) => item.event_id === event.id
    );
    const confirmedNames = eventAssignments
      .filter((item) => String(item.status || "").toLowerCase() === "confirmed")
      .map((item) => musicianDisplayName(state.musicians.find((m) => m.id === item.musician_id)));
    const card = document.createElement("div");
    card.className = "event-card";
    const header = document.createElement("header");
    header.innerHTML = `<span>${event.title || eventTypeLabel(event.type)}</span><span>${eventTypeLabel(event.type)}</span>`;
    const meta = document.createElement("div");
    meta.className = "event-meta";
    meta.textContent = formatShortDateTime(event.start_time);
    const roster = document.createElement("div");
    roster.className = "event-meta";
    roster.textContent = confirmedNames.length
      ? `Confirmed: ${confirmedNames.join(", ")}`
      : "No confirmed musicians yet.";
    card.appendChild(header);
    card.appendChild(meta);
    card.appendChild(roster);
    list.appendChild(card);
  });
}

async function renderAvailableDatesList() {
  const list = document.getElementById("availableDatesList");
  if (!list) return;
  const today = startOfDay(new Date());
  const horizonMonths = 6;
  const endDate = new Date(today.getFullYear(), today.getMonth() + horizonMonths, 0);
  let eventsForAvailability = [...state.calendar.events];

  const client = state.calendar.client;
  if (client && state.calendar.session) {
    const rangeStartIso = today.toISOString();
    const rangeEndIso = new Date(
      endDate.getFullYear(),
      endDate.getMonth(),
      endDate.getDate(),
      23,
      59,
      59
    ).toISOString();
    const { data, error } = await client
      .from("events")
      .select("id,type,start_time,end_time")
      .lt("start_time", rangeEndIso)
      .gte("end_time", rangeStartIso);
    if (!error && Array.isArray(data)) {
      eventsForAvailability = data;
    }
  }

  const busyKeys = new Set(
    eventsForAvailability
      .filter((event) => String(event.type || "").toLowerCase() !== "blackout")
      .flatMap((event) => {
        const start = startOfDay(new Date(event.start_time));
        const end = startOfDay(new Date(event.end_time || event.start_time));
        if (!Number.isFinite(start.getTime()) || !Number.isFinite(end.getTime())) return [];
        const keys = [];
        for (
          let cursor = new Date(start.getFullYear(), start.getMonth(), start.getDate());
          cursor <= end;
          cursor.setDate(cursor.getDate() + 1)
        ) {
          keys.push(formatDateInput(cursor));
        }
        return keys;
      })
  );
  const monthBuckets = new Map();

  for (
    let date = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    const day = date.getDay();
    const isWeekend = day === 0 || day === 6;
    if (!isWeekend) continue;
    const key = formatDateInput(date);
    if (busyKeys.has(key)) continue;
    const monthLabel = date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    const existing = monthBuckets.get(monthLabel) || [];
    existing.push(formatDate(key));
    monthBuckets.set(monthLabel, existing);
  }

  const availableCount = [...monthBuckets.values()].reduce((sum, dates) => sum + dates.length, 0);
  if (!availableCount) {
    list.innerHTML = "<p class=\"muted\">No open weekend days in the next 6 months.</p>";
    return;
  }
  list.innerHTML = `<p class="muted">${availableCount} open weekend day(s) in next ${horizonMonths} months.</p>`;
  monthBuckets.forEach((dates, monthLabel) => {
    const card = document.createElement("div");
    card.className = "event-card";
    const header = document.createElement("header");
    header.innerHTML = `<span>${monthLabel}</span><span>${dates.length} open</span>`;
    const dateList = document.createElement("ul");
    dateList.className = "board-list";
    dates.forEach((label) => {
      const item = document.createElement("li");
      item.textContent = label;
      dateList.appendChild(item);
    });
    card.appendChild(header);
    card.appendChild(dateList);
    list.appendChild(card);
  });
}

function renderAssignmentSummaryLists() {
  renderAssignmentList();
  renderBookedDatesList();
  renderAvailableDatesList();
  updateOpsProgress();
}

function renderBlackoutList() {
  const list = document.getElementById("blackoutList");
  if (!list) return;
  if (!state.calendar.blackouts.length) {
    list.innerHTML = "<p class=\"muted\">No musician blackouts saved.</p>";
    return;
  }
  list.innerHTML = "";
  const sorted = [...state.calendar.blackouts].sort(
    (a, b) => new Date(b.start_time || 0) - new Date(a.start_time || 0)
  );
  sorted.slice(0, 100).forEach((entry) => {
    const musician = state.musicians.find((item) => item.id === entry.musician_id);
    const card = document.createElement("div");
    card.className = "event-card";
    const header = document.createElement("header");
    header.innerHTML = `<span>${musicianDisplayName(musician)}</span><span>Blackout</span>`;
    const meta = document.createElement("div");
    meta.className = "event-meta";
    meta.textContent = `${formatShortDateTime(entry.start_time)} → ${formatShortDateTime(
      entry.end_time
    )}`;
    card.appendChild(header);
    card.appendChild(meta);
    if (entry.notes) {
      const notes = document.createElement("div");
      notes.className = "event-meta";
      notes.textContent = entry.notes;
      card.appendChild(notes);
    }
    list.appendChild(card);
  });
}

async function fetchMusicianBlackouts() {
  const client = state.calendar.client;
  if (!client || !state.calendar.session) {
    renderBlackoutList();
    return;
  }
  const { data, error } = await client
    .from("musician_blackouts")
    .select("*")
    .order("start_time", { ascending: false })
    .limit(500);
  if (error) {
    updateRosterBlackoutStatus("Could not load musician blackouts.", true);
    renderBlackoutList();
    return;
  }
  state.calendar.blackouts = data || [];
  renderBlackoutList();
}

async function saveRosterBlackout() {
  const musicianId = document.getElementById("rosterBlackoutMusician")?.value || "";
  const startDate = document.getElementById("rosterBlackoutStartDate")?.value || "";
  const startTimeInput = document.getElementById("rosterBlackoutStartTime")?.value || "";
  const endDateInput = document.getElementById("rosterBlackoutEndDate")?.value || "";
  const endTimeInput = document.getElementById("rosterBlackoutEndTime")?.value || "";
  const notes = document.getElementById("rosterBlackoutNotes")?.value.trim() || "";
  const allDay = document.getElementById("rosterBlackoutAllDay")?.checked === true;

  if (!musicianId || !startDate) {
    updateRosterBlackoutStatus("Musician and start date are required.", true);
    return;
  }

  const startTime = allDay ? "00:00" : startTimeInput;
  const endDate = endDateInput || startDate;
  const endTime = allDay ? "23:59" : endTimeInput;
  const start = combineDateTime(startDate, startTime);
  const end = combineDateTime(endDate, endTime);
  if (!start || !end || end <= start) {
    updateRosterBlackoutStatus("Valid start/end date and time are required.", true);
    return;
  }

  const payload = {
    musician_id: musicianId,
    start_time: start.toISOString(),
    end_time: end.toISOString(),
    all_day: allDay,
    notes: notes || null,
  };
  const client = state.calendar.client;
  if (client && state.calendar.session) {
    const { error } = await client.from("musician_blackouts").insert(payload);
    if (error) {
      updateRosterBlackoutStatus(`Could not save blackout: ${error.message}`, true);
      return;
    }
    await fetchMusicianBlackouts();
  } else {
    state.calendar.blackouts.unshift({
      id: `local-blackout-${Date.now()}-${Math.random().toString(16).slice(2, 7)}`,
      ...payload,
    });
    saveDraft();
    renderBlackoutList();
  }
  updateRosterBlackoutStatus("Blackout saved.");
}

function setupListeners() {
  agreementFields.forEach((field) => {
    const el = document.getElementById(field);
    if (!el) return;
    const handler = () => {
      if (el.type === "checkbox") {
        state.agreement[field] = el.checked;
      } else {
        state.agreement[field] = el.value;
      }
      if (field === "lodgingEnabled") {
        updateAgreementPreview();
      }
      if (field === "performanceDate") {
        updateHolidayFromDate();
      }
      if (field === "performanceTime" || field === "performanceEndTime") {
        updatePerformanceHoursFromTimes();
      }
      if (field === "chargeNonPerformance" && !state.agreement.chargeNonPerformance) {
        state.agreement.nonPerformanceHours = "";
        const nonPerformanceField = document.getElementById("nonPerformanceHours");
        if (nonPerformanceField) nonPerformanceField.value = "";
      }
      if (field === "depositEnabled") {
        if (!state.agreement.depositEnabled) {
          state.agreement.depositWaived = false;
          state.agreement.promoCredit = false;
          state.agreement.liveVideoCredit = false;
          const waived = document.getElementById("depositWaived");
          if (waived) waived.checked = false;
          const promo = document.getElementById("promoCredit");
          if (promo) promo.checked = false;
          const live = document.getElementById("liveVideoCredit");
          if (live) live.checked = false;
        } else if (!state.agreement.depositAmount) {
          state.agreement.depositAmount = String(depositDefault);
          const depositInput = document.getElementById("depositAmount");
          if (depositInput) depositInput.value = state.agreement.depositAmount;
        }
      }
      if (
        field === "clientName" ||
        field === "performanceDate" ||
        field === "performanceTime" ||
        field === "performanceEndTime"
      ) {
        scheduleAgreementHoldSync();
      }
      updateAgreementPreview();
      saveDraft();
    };
    el.addEventListener("input", handler);
    el.addEventListener("change", handler);
  });

  invoiceFields.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("input", () => {
      const map = {
        invoiceNumber: "invoiceNumber",
        invoiceClientName: "clientName",
        invoiceClientEmail: "clientEmail",
        invoiceIssueDate: "issueDate",
        invoiceDueDate: "dueDate",
        invoiceDescription: "description",
        invoicePerformanceFee: "performanceFee",
        invoiceDepositDue: "depositDue",
        invoiceDepositPaid: "depositPaid",
        invoiceAddons: "addons",
        invoiceTotalOverride: "totalOverride",
      };
      state.invoice[map[id]] = el.value;
      updateInvoicePreview();
    });
  });

  receiptFields.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("input", () => {
      const map = {
        receiptNumber: "receiptNumber",
        receiptClientName: "clientName",
        receiptPaymentDate: "paymentDate",
        receiptAmountPaid: "amountPaid",
        receiptPaymentMethod: "paymentMethod",
        receiptRelatedInvoice: "relatedInvoice",
      };
      state.receipt[map[id]] = el.value;
      updateReceiptPreview();
    });
  });

  const invoiceBandFull = document.getElementById("invoiceBandFull");
  const invoiceBandDuo = document.getElementById("invoiceBandDuo");
  const invoiceDescription = document.getElementById("invoiceDescription");
  if (invoiceBandFull && invoiceBandDuo && invoiceDescription) {
    invoiceBandFull.addEventListener("change", () => {
      if (invoiceBandFull.checked) {
        invoiceBandDuo.checked = false;
        invoiceDescription.value = "Live performance - Full Band";
        state.invoice.description = invoiceDescription.value;
        updateInvoicePreview();
      }
    });
    invoiceBandDuo.addEventListener("change", () => {
      if (invoiceBandDuo.checked) {
        invoiceBandFull.checked = false;
        invoiceDescription.value = "Live performance - Duo";
        state.invoice.description = invoiceDescription.value;
        updateInvoicePreview();
      }
    });
  }

  const bookkeepingTabs = document.getElementById("bookkeepingTabs");
  const scheduleTabs = document.getElementById("scheduleTabs");
  const aboutTabs = document.getElementById("aboutTabs");
  const homeTab = document.getElementById("homeTab");
  const messagePreviewWrap = document.getElementById("messagePreviewWrap");
  const generatePdfBtn = document.getElementById("generatePdf");
  const sharePdfBtn = document.getElementById("sharePdf");
  let activeTop = "login";
  const navHistory = [];
  let suppressHistory = false;

  const updateBackButton = () => {
    const backBtn = document.getElementById("workspaceBack");
    if (!backBtn) return;
    const canGoBack = navHistory.length > 1;
    backBtn.classList.toggle("hidden", !canGoBack);
    backBtn.disabled = !canGoBack;
  };

  const rememberRoute = (topTarget, panelTarget) => {
    if (suppressHistory) return;
    const next = { top: topTarget, panel: panelTarget };
    const last = navHistory[navHistory.length - 1];
    if (last && last.top === next.top && last.panel === next.panel) {
      updateBackButton();
      return;
    }
    navHistory.push(next);
    if (navHistory.length > 80) navHistory.shift();
    updateBackButton();
  };

  const updateWorkspaceHead = (topTarget, panelTarget) => {
    const workspaceHead = document.querySelector(".workspace-head");
    const workspaceTitle = document.getElementById("workspaceTitle");
    const workspaceCrumb = document.getElementById("workspaceCrumb");
    if (workspaceHead) {
      workspaceHead.classList.toggle("hidden", topTarget === "home");
    }
    if (!workspaceTitle || !workspaceCrumb) return;
    const panelNames = {
      login: "Sign In",
      home: "Dashboard",
      workorders: "Work Orders",
      contractshub: "Contracts",
      shows: "Shows",
      agreement: "Agreement",
      invoice: "Invoice",
      receipt: "Receipt",
      calendar: "Event Calendar",
      contracts: "Signed Contracts",
      contractscreated: "Contracts Created",
      musicians: "Musicians + Tech Crew",
      allabout: "App Overview",
      howto: "How-To Playbook",
    };
    const folderNames = {
      login: "Front Desk",
      home: "Dashboard",
      bookkeeping: "Booking Folder",
      calendar: "Calendar Folder",
      contracts: "Contracts",
      workorders: "Work Orders",
      shows: "Shows",
      musicians: "Musicians + Tech Crew",
      about: "Guide Folder",
    };
    const folderLabel = folderNames[topTarget] || "Workspace";
    const panelLabel = panelNames[panelTarget] || "Overview";
    workspaceTitle.textContent = folderLabel;
    workspaceCrumb.textContent = `${folderLabel} / ${panelLabel}`;
  };

  const switchPanel = (target) => {
    if (!target) return;
    state.activeTab = target;
    document.getElementById("loginTab").classList.toggle("hidden", target !== "login");
    if (homeTab) homeTab.classList.toggle("hidden", target !== "home");
    document.getElementById("agreementTab").classList.toggle("hidden", target !== "agreement");
    document.getElementById("invoiceTab").classList.toggle("hidden", target !== "invoice");
    document.getElementById("receiptTab").classList.toggle("hidden", target !== "receipt");
    document.getElementById("calendarTab").classList.toggle("hidden", target !== "calendar");
    document.getElementById("contractsTab").classList.toggle("hidden", target !== "contracts");
    document.getElementById("contractsCreatedTab").classList.toggle("hidden", target !== "contractscreated");
    document.getElementById("contractsHubTab").classList.toggle("hidden", target !== "contractshub");
    document.getElementById("musiciansTab").classList.toggle("hidden", target !== "musicians");
    document.getElementById("showsTab").classList.toggle("hidden", target !== "shows");
    document.getElementById("workOrdersTab").classList.toggle("hidden", target !== "workorders");
    document.getElementById("allaboutTab").classList.toggle("hidden", target !== "allabout");
    document.getElementById("howtoTab").classList.toggle("hidden", target !== "howto");
    const inBookkeeping =
      target === "agreement" || target === "invoice" || target === "receipt";
    if (messagePreviewWrap) messagePreviewWrap.classList.toggle("hidden", !inBookkeeping);
    if (generatePdfBtn) generatePdfBtn.classList.toggle("hidden", !inBookkeeping);
    if (sharePdfBtn) sharePdfBtn.classList.toggle("hidden", !inBookkeeping);
    document.querySelectorAll(".section-tab[data-panel]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-panel") === target);
    });
    updateWorkspaceHead(activeTop, target);
    rememberRoute(activeTop, target);
    updateMessagePreview();
  };

  const switchTop = (topTarget) => {
    const signedIn = Boolean(state.calendar.session);
    if (!signedIn && topTarget !== "login") {
      updateSupabaseStatus("Sign in first to open the rest of Booking Suite.", true);
      topTarget = "login";
    }
    activeTop = topTarget;
    document.querySelectorAll(".top-tab[data-top]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-top") === topTarget);
    });
    if (bookkeepingTabs) bookkeepingTabs.classList.toggle("hidden", topTarget !== "bookkeeping");
    if (scheduleTabs) scheduleTabs.classList.toggle("hidden", topTarget !== "calendar");
    if (aboutTabs) aboutTabs.classList.toggle("hidden", topTarget !== "about");

    if (topTarget === "login") {
      switchPanel("login");
      return;
    }

    if (topTarget === "home") {
      switchPanel("home");
      return;
    }
    if (topTarget === "workorders") {
      switchPanel("workorders");
      return;
    }
    if (topTarget === "contracts") {
      switchPanel("contractshub");
      return;
    }
    if (topTarget === "shows") {
      switchPanel("shows");
      return;
    }
    if (topTarget === "musicians") {
      switchPanel("musicians");
      return;
    }

    if (topTarget === "bookkeeping") {
      const valid =
        state.activeTab === "agreement" ||
        state.activeTab === "invoice" ||
        state.activeTab === "receipt" ||
        state.activeTab === "contracts" ||
        state.activeTab === "contractscreated";
      switchPanel(valid ? state.activeTab : "agreement");
      return;
    }
    if (topTarget === "calendar") {
      const valid = state.activeTab === "calendar";
      switchPanel(valid ? state.activeTab : "calendar");
      return;
    }
    const valid = state.activeTab === "allabout" || state.activeTab === "howto";
    switchPanel(valid ? state.activeTab : "allabout");
  };
  switchTopView = switchTop;

  const workspaceBackBtn = document.getElementById("workspaceBack");
  if (workspaceBackBtn) {
    workspaceBackBtn.addEventListener("click", () => {
      if (navHistory.length <= 1) return;
      navHistory.pop();
      const previous = navHistory[navHistory.length - 1];
      if (!previous) {
        updateBackButton();
        return;
      }
      suppressHistory = true;
      switchTop(previous.top);
      if (state.activeTab !== previous.panel) {
        switchPanel(previous.panel);
      }
      suppressHistory = false;
      updateBackButton();
    });
  }

  document.querySelectorAll(".section-tab[data-panel]").forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-panel");
      switchPanel(target);
    });
  });

  document.querySelectorAll(".top-tab[data-top]").forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-top");
      switchTop(target);
    });
  });

  const homeWorkOrdersBtn = document.getElementById("homeWorkOrders");
  if (homeWorkOrdersBtn) {
    homeWorkOrdersBtn.addEventListener("click", () => {
      state.workOrderView.focusId = "";
      state.workOrderView.showCreate = true;
      switchTop("workorders");
      renderWorkOrders();
    });
  }

  document.getElementById("agreementPdf").addEventListener("click", () => generatePdf("agreement"));
  const submitAgreementBtn = document.getElementById("submitAgreement");
  if (submitAgreementBtn) {
    submitAgreementBtn.addEventListener("click", submitAgreement);
  }
  const resetAgreementBtn = document.getElementById("resetAgreement");
  if (resetAgreementBtn) {
    resetAgreementBtn.addEventListener("click", resetAgreementForm);
  }
  const addPendingHoldBtn = document.getElementById("addPendingHold");
  if (addPendingHoldBtn) {
    addPendingHoldBtn.addEventListener("click", addAgreementToCalendarPending);
  }
  const agreementCopyMessageBtn = document.getElementById("agreementCopyMessage");
  if (agreementCopyMessageBtn) {
    agreementCopyMessageBtn.addEventListener("click", async () => {
      state.activeTab = "agreement";
      await copyMessage();
    });
  }
  document.getElementById("invoicePdf").addEventListener("click", () => generatePdf("invoice"));
  const invoiceCopyMessageBtn = document.getElementById("invoiceCopyMessage");
  if (invoiceCopyMessageBtn) {
    invoiceCopyMessageBtn.addEventListener("click", async () => {
      state.activeTab = "invoice";
      await copyMessage();
    });
  }
  document.getElementById("receiptPdf").addEventListener("click", () => generatePdf("receipt"));
  const receiptCopyMessageBtn = document.getElementById("receiptCopyMessage");
  if (receiptCopyMessageBtn) {
    receiptCopyMessageBtn.addEventListener("click", async () => {
      state.activeTab = "receipt";
      await copyMessage();
    });
  }
  document.getElementById("generatePdf").addEventListener("click", () => generatePdf(state.activeTab));
  document.getElementById("sharePdf").addEventListener("click", shareLastPdf);

  const signInBtn = document.getElementById("signIn");
  if (signInBtn) {
    signInBtn.addEventListener("click", async () => {
      const email = document.getElementById("authEmail").value.trim();
      const password = document.getElementById("authPassword").value;
      await signInWithCredentials(email, password);
    });
  }

  const resetPasswordBtn = document.getElementById("resetPassword");
  if (resetPasswordBtn) {
    resetPasswordBtn.addEventListener("click", async () => {
      const email = document.getElementById("authEmail").value.trim();
      await requestPasswordReset(email);
    });
  }

  const signOutBtn = document.getElementById("signOut");
  const signOutCurrentUser = async () => {
    const client = state.calendar.client;
    if (!client) return;
    await client.auth.signOut();
    state.calendar.session = null;
    syncTopAuthTabLabel();
    updateCalendarAuthVisibility();
    const loginSignInBtn = document.getElementById("loginSignIn");
    if (loginSignInBtn) {
      loginSignInBtn.textContent = "Sign in";
    }
    updateSupabaseStatus("Signed out.");
    state.calendar.events = [];
    state.calendar.contracts = [];
    state.calendar.assignments = [];
    state.calendar.blackouts = [];
    state.billing.invoices = [];
    state.billing.receipts = [];
    renderCalendar();
    updateEventList();
    updateContractList();
    updateCreatedContractList();
    renderMusicianAssignments();
    renderAssignmentSummaryLists();
    renderBlackoutList();
    updateInvoiceList();
    updateReceiptList();
    updateOpsProgress();
    if (switchTopView) switchTopView("login");
  };
  if (signOutBtn) {
    signOutBtn.addEventListener("click", signOutCurrentUser);
  }

  const loginSignInBtn = document.getElementById("loginSignIn");
  if (loginSignInBtn) {
    loginSignInBtn.addEventListener("click", async () => {
      if (state.calendar.session) {
        await signOutCurrentUser();
        return;
      }
      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value;
      await signInWithCredentials(email, password);
    });
  }

  const loginResetBtn = document.getElementById("loginResetPassword");
  if (loginResetBtn) {
    loginResetBtn.addEventListener("click", async () => {
      const email = document.getElementById("loginEmail").value.trim();
      await requestPasswordReset(email);
    });
  }

  const loginMagicLinkBtn = document.getElementById("loginMagicLink");
  if (loginMagicLinkBtn) {
    loginMagicLinkBtn.addEventListener("click", async () => {
      const email = document.getElementById("loginEmail").value.trim();
      await requestMagicLink(email);
    });
  }

  const workOrderSubmitBtn = document.getElementById("workOrderSubmit");
  if (workOrderSubmitBtn) {
    workOrderSubmitBtn.addEventListener("click", submitWorkOrder);
  }
  const workOrderResetBtn = document.getElementById("workOrderReset");
  if (workOrderResetBtn) {
    workOrderResetBtn.addEventListener("click", () => {
      resetWorkOrderForm();
      setWorkOrderStatus("");
    });
  }
  const workOrderList = document.getElementById("workOrderList");
  if (workOrderList) {
    workOrderList.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-action][data-id]");
      if (!button) return;
      const { action, id } = button.dataset;
      const idx = state.workOrders.findIndex((item) => item.id === id);
      if (idx === -1) return;
      if (action === "toggle") {
        const current = state.workOrders[idx];
        const nowDone =
          current.status === "Completed" || current.completed === true;
        current.status = nowDone ? "Open" : "Completed";
        current.completed = !nowDone;
      } else if (action === "delete") {
        state.workOrders.splice(idx, 1);
        if (state.workOrderView.focusId === id) {
          state.workOrderView.focusId = "";
          state.workOrderView.showCreate = true;
        }
      }
      saveDraft();
      renderWorkOrders();
    });
  }
  const workOrderShowAllBtn = document.getElementById("workOrderShowAll");
  if (workOrderShowAllBtn) {
    workOrderShowAllBtn.addEventListener("click", () => {
      state.workOrderView.focusId = "";
      state.workOrderView.showCreate = true;
      renderWorkOrders();
    });
  }

  const addMusicianBtn = document.getElementById("addMusician");
  if (addMusicianBtn) {
    addMusicianBtn.addEventListener("click", addMusicianFromForm);
  }
  const cancelMusicianEditBtn = document.getElementById("cancelMusicianEdit");
  if (cancelMusicianEditBtn) {
    cancelMusicianEditBtn.addEventListener("click", () => {
      clearMusicianForm();
      setMusicianEditorState("");
      updateMusicianStatus("Edit canceled.");
    });
  }
  const seedMusiciansBtn = document.getElementById("seedMusicians");
  if (seedMusiciansBtn) {
    seedMusiciansBtn.addEventListener("click", seedDefaultMusicians);
  }
  const musicianList = document.getElementById("musicianList");
  if (musicianList) {
    musicianList.addEventListener("click", async (event) => {
      const button = event.target.closest("button[data-action][data-id]");
      if (!button) return;
      const { action, id } = button.dataset;
      if (action === "edit-musician") {
        editMusicianFromList(id);
      } else if (action === "toggle-musician") {
        await toggleMusicianActive(id);
      } else if (action === "delete-musician") {
        await deleteMusician(id);
      }
    });
  }
  const saveRosterBlackoutBtn = document.getElementById("saveRosterBlackout");
  if (saveRosterBlackoutBtn) {
    saveRosterBlackoutBtn.addEventListener("click", saveRosterBlackout);
  }
  const assignmentFilter = document.getElementById("assignmentFilterMusician");
  if (assignmentFilter) {
    assignmentFilter.addEventListener("change", renderAssignmentList);
  }
  const assignmentPending = document.getElementById("assignmentStatusPending");
  if (assignmentPending) {
    assignmentPending.addEventListener("change", renderAssignmentList);
  }
  const assignmentConfirmed = document.getElementById("assignmentStatusConfirmed");
  if (assignmentConfirmed) {
    assignmentConfirmed.addEventListener("change", renderAssignmentList);
  }

  const calendarPrev = document.getElementById("calendarPrev");
  const calendarNext = document.getElementById("calendarNext");
  if (calendarPrev) {
    calendarPrev.addEventListener("click", () => {
      state.calendar.monthOffset -= 1;
      fetchEventsForMonth();
    });
  }
  if (calendarNext) {
    calendarNext.addEventListener("click", () => {
      state.calendar.monthOffset += 1;
      fetchEventsForMonth();
    });
  }

  const calendarSave = document.getElementById("calendarSave");
  if (calendarSave) calendarSave.addEventListener("click", handleCalendarSave);
  const calendarClear = document.getElementById("calendarClear");
  if (calendarClear) calendarClear.addEventListener("click", clearCalendarForm);
  const toggleCalendarForm = document.getElementById("toggleCalendarForm");
  if (toggleCalendarForm) {
    toggleCalendarForm.addEventListener("click", () => {
      const wrap = document.getElementById("calendarEventFormWrap");
      const expanded = Boolean(wrap?.classList.contains("hidden"));
      setCalendarEventFormExpanded(expanded);
    });
  }

  const calendarStartDate = document.getElementById("calendarStartDate");
  if (calendarStartDate) {
    calendarStartDate.addEventListener("change", () => {
      if (calendarStartDate.value) {
        state.calendar.selectedDate = calendarStartDate.value;
        renderCalendar();
        updateEventList();
      }
    });
  }

  const calendarMusiciansNeeded = document.getElementById("calendarMusiciansNeeded");
  if (calendarMusiciansNeeded) {
    calendarMusiciansNeeded.addEventListener("change", () => {
      updateMusicianAssignmentsVisibility();
    });
  }

  const calendarAllDay = document.getElementById("calendarAllDay");
  if (calendarAllDay) {
    calendarAllDay.addEventListener("change", () => {
      const typeSelect = document.getElementById("calendarType");
      const startTime = document.getElementById("calendarStartTime");
      const endTime = document.getElementById("calendarEndTime");
      if (calendarAllDay.checked) {
        if (typeSelect) typeSelect.value = "Blackout";
        if (startTime) startTime.value = "00:00";
        if (endTime) endTime.value = "23:59";
        if (startTime) startTime.setAttribute("disabled", "disabled");
        if (endTime) endTime.setAttribute("disabled", "disabled");
      } else {
        if (startTime) startTime.removeAttribute("disabled");
        if (endTime) endTime.removeAttribute("disabled");
      }
    });
  }

  const uploadContract = document.getElementById("uploadContract");
  if (uploadContract) uploadContract.addEventListener("click", handleContractUpload);

  const invoiceSave = document.getElementById("invoiceSave");
  if (invoiceSave) invoiceSave.addEventListener("click", saveInvoiceToSupabase);
  const invoiceUpload = document.getElementById("invoiceUpload");
  if (invoiceUpload) invoiceUpload.addEventListener("click", uploadInvoicePdf);
  const receiptSave = document.getElementById("receiptSave");
  if (receiptSave) receiptSave.addEventListener("click", saveReceiptToSupabase);
  const receiptUpload = document.getElementById("receiptUpload");
  if (receiptUpload) receiptUpload.addEventListener("click", uploadReceiptPdf);

  const toggleMessage = document.getElementById("toggleMessage");
  if (toggleMessage) {
    toggleMessage.addEventListener("click", () => {
      const body = document.getElementById("messageBody");
      if (!body) return;
      body.classList.toggle("hidden");
      toggleMessage.textContent = body.classList.contains("hidden")
        ? "Show message"
        : "Hide message";
    });
  }
  switchTop(state.calendar.session ? "home" : "login");
  setMusicianEditorState("");
  renderWorkOrders();
  updateCreatedContractList();
  renderContractsHub();
}

async function generatePdf(type) {
  const statusEl = document.getElementById("pdfStatus");
  const shareButton = document.getElementById("sharePdf");
  if (!window.html2canvas || !window.jspdf) {
    statusEl.textContent = "PDF tools not loaded. Using Print instead.";
    window.print();
    return;
  }

  statusEl.textContent = "Generating PDF...";

  const previewMap = {
    agreement: "agreementPreview",
    invoice: "invoicePreview",
    receipt: "receiptPreview",
  };

  const target = document.getElementById(previewMap[type]);
  if (!target) return;

  document.body.classList.add("pdf-export");
  await new Promise((resolve) => requestAnimationFrame(resolve));

  let canvas = null;
  try {
    canvas = await window.html2canvas(target, {
      scale: 2,
      backgroundColor: "#ffffff",
      useCORS: true,
    });
  } catch (error) {
    statusEl.textContent = "PDF generation failed. Try refreshing the page.";
    document.body.classList.remove("pdf-export");
    return;
  }
  document.body.classList.remove("pdf-export");

  const imgData = canvas.toDataURL("image/png");
  const pdf = new window.jspdf.jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "letter",
  });

  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();
  const margin = 0;
  const maxWidth = pdfWidth - margin * 2;
  const maxHeight = pdfHeight - margin * 2;
  const scale = Math.min(maxWidth / canvas.width, maxHeight / canvas.height);
  const renderWidth = canvas.width * scale;
  const renderHeight = canvas.height * scale;
  const xOffset = (pdfWidth - renderWidth) / 2;
  const yOffset = (pdfHeight - renderHeight) / 2;

  pdf.addImage(imgData, "PNG", xOffset, yOffset, renderWidth, renderHeight);

  const fileNameMap = {
    agreement: `RustAndRuin-Agreement-${state.agreement.clientName || "Client"}.pdf`,
    invoice: `RustAndRuin-Invoice-${state.invoice.invoiceNumber}.pdf`,
    receipt: `RustAndRuin-Receipt-${state.receipt.receiptNumber}.pdf`,
  };

  const fileName = fileNameMap[type];
  pdf.save(fileName);
  lastPdfBlob = pdf.output("blob");
  lastPdfName = fileName;
  if (shareButton) {
    shareButton.disabled = !navigator.canShare;
  }
  statusEl.textContent = "PDF generated.";
  setTimeout(() => {
    statusEl.textContent = "";
  }, 3000);

  if (type === "agreement") {
    await ensureHoldEventForAgreement();
    if (lastPdfBlob) {
      await autoSaveCreatedAgreementPdf(lastPdfBlob, fileName);
    }
  } else if (type === "invoice") {
    await saveInvoiceToSupabaseInternal(true);
    if (lastPdfBlob) {
      await autoSaveInvoicePdf(lastPdfBlob, fileName);
    }
  } else if (type === "receipt") {
    await saveReceiptToSupabaseInternal(true);
    if (lastPdfBlob) {
      await autoSaveReceiptPdf(lastPdfBlob, fileName);
    }
  }
}

let lastPdfBlob = null;
let lastPdfName = "RustAndRuin-Agreement.pdf";

async function shareLastPdf() {
  const statusEl = document.getElementById("pdfStatus");
  if (!lastPdfBlob) {
    statusEl.textContent = "Generate a PDF first.";
    return;
  }

  const file = new File([lastPdfBlob], lastPdfName, { type: "application/pdf" });
  if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        files: [file],
        title: "Rust and Ruin Agreement",
      });
      statusEl.textContent = "Shared.";
    } catch (error) {
      statusEl.textContent = "Share canceled.";
    }
  } else {
    statusEl.textContent = "Sharing not supported. Use the downloaded PDF.";
  }
}

async function copyMessage() {
  const statusEl = document.getElementById("pdfStatus");
  const message = buildMessage(state.activeTab);
  const payload = `${message.subject}\n\n${message.body}`;

  try {
    await navigator.clipboard.writeText(payload);
    statusEl.textContent = "Message copied.";
  } catch (error) {
    statusEl.textContent = "Could not copy message.";
  }
}

function init() {
  loadDraft();
  loadCalendarSettings();
  if (!state.agreement.agreementCreatedDate) {
    state.agreement.agreementCreatedDate = todayString();
  }
  if (!state.agreement.chargeNonPerformance) {
    state.agreement.nonPerformanceHours = "";
  }
  syncAgreementForm();
  syncInvoiceForm();
  syncReceiptForm();
  const overridePinInput = document.getElementById("overridePin");
  if (overridePinInput) {
    overridePinInput.value = state.calendar.overridePin ? "••••" : "";
  }
  state.calendar.selectedDate = "";
  setCalendarEventFormExpanded(false);
  initSupabaseClient();
  updateCalendarAuthVisibility();
  refreshAuthState();
  updateHolidayFromDate();
  updatePerformanceHoursFromTimes();
  updateAgreementPreview();
  updateInvoicePreview();
  updateReceiptPreview();
  updateMessagePreview();
  setupListeners();
  scheduleAgreementHoldSync();
  renderCalendar();
  fetchEventsForMonth();
  fetchContracts();
  fetchMusicianAssignments();
  fetchMusicianBlackouts();
  fetchMusicians();
  fetchInvoices();
  fetchReceipts();
  renderMusicianList();
  renderMusicianAssignments();
  renderAssignmentSummaryLists();
  renderBlackoutList();
  updateOpsProgress();
}

init();
