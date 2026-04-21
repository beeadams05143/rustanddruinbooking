const depositDefault = 50;
const additionalSongFee = 50;
const AGREEMENT_STEP_COUNT = 5;

function createInitialAgreementState() {
  return {
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    performanceDate: "",
    performanceTime: "",
    performanceEndTime: "",
    holidayWeekend: false,
    holidayRateType: "timeAndHalf",
    hours: "",
    feeTotal: "",
    feeManualOverride: false,
    depositAmount: "",
    depositEnabled: false,
    depositWaived: false,
    promoCredit: false,
    liveVideoCredit: false,
    depositPaid: "",
    amountDueDayOf: "",
    eventType: "",
    bandConfig: "",
    additionalMusicians: "",
    venueAddress: "",
    nonPerformanceHours: "",
    chargeNonPerformance: false,
    backlineSound: false,
    travelOutside: false,
    travelHours: "",
    travelPerformerCount: "4",
    lodgingEnabled: false,
    lodgingRate: "250",
    friendsFamilyDiscount: false,
    friendsFamilyDiscountAmount: "",
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

function createInitialInvoiceState() {
  return {
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
  };
}

function createInitialReceiptState() {
  return {
    receiptNumber: "RCPT-001",
    clientName: "",
    paymentDate: "",
    amountPaid: "",
    paymentMethod: "Venmo",
    relatedInvoice: "",
  };
}

function createInitialQuoteBuilderState() {
  return {
    activeQuoteId: "",
    link: "",
    status: "",
    options: [],
    expiresAt: "",
    acceptedBanner: "",
  };
}

function createInitialPromoBuilderState() {
  return {
    venueType: "Pub / Brewery",
    bookingType: "Venue booking",
    relationship: "First Contact",
    genre: "",
    lineup: "",
    tone: "Warm",
    goal: "First outreach",
    contactName: "",
    venueName: "",
    city: "",
    openDates: "",
    venueConnection: "",
    customHook: "",
    message: "",
    templateTitle: "",
    selectedOption: 1,
  };
}

function createInitialEpkState() {
  return {
    bandName: "Rust and Ruin",
    shortBio: "",
    longBio: "",
    genres: "",
    lineupOptions: "",
    website: "",
    instagram: "@Rust and Ruin",
    facebook: "@rustandruinvt",
    musicLink: "",
    videoLink: "",
    photoLinks: "",
    contactEmail: "rustandruinvt@gmail.com",
    contactPhone: "",
    bookingNotes: "",
  };
}

function createInitialBandProfileState() {
  return {
    bandName: "Rust & Ruin",
    hometown: "Vermont",
    introLine: "retro-inspired acoustic duo (with a full band option)",
    genreTags: "Americana, retro, classic favorites, original music",
    genreLine: "classic favorites and originals inspired by the Laurel Canyon / 70s sound",
    artistReferences: "Brandi Carlile, Fleetwood Mac, The Eagles",
    vibeLine: "an easygoing, feel-good vibe",
    eventFitLine: "works really well in relaxed, social settings",
    originalsCoversLine: "a mix of classic favorites and originals",
    lineupSummary: "acoustic duo with a full band option",
    bioStoryLine: "",
    bioPerformanceSummary: "",
    bioMemberOneName: "Beth",
    bioMemberOneRole: "lead vocals",
    bioMemberOneDetail: "",
    bioMemberTwoName: "Josh",
    bioMemberTwoRole: "guitar and vocals",
    bioMemberTwoDetail: "",
    bioAdditionalMembers: "",
    bioShortDraft: "",
    bioFullDraft: "",
    proofPointPrimary: "We play over 100 shows a year.",
    proofPointSecondary: "Our goal is always the same: create a fun, welcoming atmosphere that keeps people engaged and sticking around.",
    offerLineOne: "Acoustic duo for intimate settings",
    offerLineTwo: "Full band for higher-energy receptions or larger events",
    offerLineThree: "Customizable setlists and a professional sound setup",
    residencyValueLine: "A recurring music night gives guests something to look forward to and helps create a recognizable vibe for the space.",
    regularsLine: "We love becoming part of the places we play regularly and helping build something people come back for.",
    signoffName: "Beth (and Josh)",
    signoffBand: "Rust & Ruin",
    signoffEmail: "rustandruinvt@gmail.com",
  };
}

function createInitialBusinessProfileState() {
  return {
    businessName: "Rust & Ruin",
    contactEmail: "rustandruinvt@gmail.com",
    contactPhone: "",
    defaultLineup: "Duo",
  };
}

function createInitialPricingProfileState() {
  return {
    baseRate: "",
    lineupRates: [],
    defaultPerformanceHours: "",
    defaultDepositAmount: String(depositDefault),
    defaultDepositEnabled: true,
    depositModel: "addition",
    defaultEventType: "",
    defaultBandConfig: "Duo",
  };
}

function createInitialWorkOrderWorkspaceState() {
  return {
    section: "tasks",
    promoChannel: "email",
    socialPostsVoice: "warm",
    marketingSocialTemplateIndex: null,
    epkSection: "profile",
    promoBuilder: createInitialPromoBuilderState(),
    promoTemplates: [],
    followUps: [],
    bandProfile: createInitialBandProfileState(),
    businessProfile: createInitialBusinessProfileState(),
    pricingProfile: createInitialPricingProfileState(),
    epk: createInitialEpkState(),
  };
}

const state = {
  bandDNA: {
    onboardingComplete: false,
    migratedFromLegacy: false,
    bandName: "",
    hometown: "",
    contactEmail: "",
    contactPhone: "",
    homeAddress: "",
    paymentMethods: "Cash, check, Venmo @rustandruinvt, PayPal @rustandruin",
    managerName: "",
    signoffName: "",
    oneLineBio: "",
    artistReferences: "",
    genreTags: [],
    bestFitEvents: "",
    proofPoint: "",
    tone: "Warm",
    lineups: [
      { name: "Duo", rate: "", count: 2, rateType: "hourly" },
      { name: "Full Band", rate: "", count: 4, rateType: "hourly" },
    ],
    minimumHours: "2",
    musicianHourlyRate: "50",
    defaultSetLength: "",
    defaultDeposit: "50",
    depositEnabled: true,
    depositModel: "addition",
    travelFreeWithinHours: "2",
    travelChargeType: "hourly_per_performer",
    travelHourlyRate: "25",
    travelFlatFee: "",
    addons: [
      { id: "tent", name: "Tent / outdoor cover", price: "25", enabled: true },
      { id: "lights", name: "Stage lights", price: "10", enabled: true },
      { id: "generator", name: "Generator", price: "75", enabled: true },
      { id: "mcing", name: "MC'ing", price: "50", enabled: true },
      { id: "djing", name: "DJ'ing between sets", price: "50", enabled: true },
      { id: "specialsong", name: "Special song request", price: "50", enabled: true },
      { id: "recordedsong", name: "Recorded song (beyond first)", price: "5", enabled: true },
    ],
    website: "",
    musicLink: "",
    videoLink: "",
    instagram: "",
    facebook: "",
  },
  agreement: createInitialAgreementState(),
  invoice: createInitialInvoiceState(),
  receipt: createInitialReceiptState(),
  quoteBuilder: createInitialQuoteBuilderState(),
  workspace: {
    top: "login",
    agreementStep: 1,
    bookingSaved: false,
    bookingEventId: "",
    contractWizardOpen: false,
    contractShareId: "",
  },
  calendar: {
    overridePin: "",
    hiddenSeededEventKeys: [],
    client: null,
    monthOffset: 0,
    selectedDate: "",
    selectedEventId: "",
    events: [],
    contracts: [],
    assignments: [],
    blackouts: [],
    session: null,
    authSubscription: null,
    syncChannel: null,
    syncTimer: null,
    syncRefreshTimer: null,
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
  workOrderWorkspace: createInitialWorkOrderWorkspaceState(),
  agreementDraftContext: {
    contractId: "",
    eventId: "",
    name: "",
  },
  musicianEditor: {
    id: "",
  },
  musicianShowCabinet: {
    musicianId: "",
  },
  musicianShowBookings: [],
  musicians: [],
  onboardingStep: 1,
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
  "holidayRateType",
  "hours",
  "depositAmount",
  "depositEnabled",
  "depositWaived",
  "promoCredit",
  "liveVideoCredit",
  "depositPaid",
  "eventType",
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
  "friendsFamilyDiscount",
  "friendsFamilyDiscountAmount",
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

function getBandDNA() {
  return state.bandDNA;
}

function personalizeSocialPost(template = "") {
  const dna = getBandDNA() || {};
  const signoffNames = String(dna.signoffName || "")
    .replace(/[()]/g, "")
    .split(/\band\b|&|,/i)
    .map((name) => name.trim())
    .filter(Boolean);
  const lineupNames = Array.isArray(dna.lineups)
    ? dna.lineups.flatMap((lineup) => {
        if (!lineup || typeof lineup !== "object") return [];
        if (Array.isArray(lineup.members)) {
          return lineup.members
            .map((member) => typeof member === "string" ? member.trim() : String(member?.name || "").trim())
            .filter(Boolean);
        }
        if (Array.isArray(lineup.musicians)) {
          return lineup.musicians
            .map((member) => typeof member === "string" ? member.trim() : String(member?.name || "").trim())
            .filter(Boolean);
        }
        if (typeof lineup.memberNames === "string") {
          return lineup.memberNames
            .split(/\band\b|&|,/i)
            .map((name) => name.trim())
            .filter(Boolean);
        }
        if (Array.isArray(lineup.memberNames)) {
          return lineup.memberNames.map((name) => String(name || "").trim()).filter(Boolean);
        }
        return [];
      })
    : [];
  const memberNames = [...new Set([...lineupNames, ...signoffNames])];
  const member1 = memberNames[0] || signoffNames[0] || "";
  const member2 = memberNames[1] || signoffNames[1] || "";
  const duoNames = member1 && member2 ? `${member1} and ${member2}` : member1 || member2 || "";

  return String(template || "")
    .replaceAll("[BAND NAME]", dna.bandName || "")
    .replaceAll("[MEMBER 1]", member1)
    .replaceAll("[MEMBER 2]", member2)
    .replaceAll("[DUO NAMES]", duoNames);
}

function updateBandDNA(updates = {}) {
  state.bandDNA = { ...state.bandDNA, ...updates };
  if (typeof updates.depositModel === "string") {
    state.workOrderWorkspace.pricingProfile.depositModel = updates.depositModel;
  }
  saveDraft();
  saveBandDNAToSupabase();
}

async function saveBandDNAToSupabase() {
  const client = state.calendar.client;
  if (!client || !state.calendar.session) return;
  try {
    const { error } = await client
      .from("app_settings")
      .upsert(
        {
          key: "band_dna",
          value: JSON.stringify(state.bandDNA),
        },
        { onConflict: "key" }
      );
    if (error) console.error("Could not save bandDNA:", error);
  } catch (e) {
    console.error("bandDNA save failed:", e);
  }
}

async function loadBandDNAFromSupabase() {
  const client = state.calendar.client;
  if (!client || !state.calendar.session) return false;
  try {
    const { data, error } = await client
      .from("app_settings")
      .select("value")
      .eq("key", "band_dna")
      .maybeSingle();
    if (error || !data?.value) return false;
    const parsed = JSON.parse(data.value);
    if (parsed && typeof parsed === "object") {
      state.bandDNA = { ...state.bandDNA, ...parsed };
      if (Array.isArray(parsed.lineups)) {
        state.bandDNA.lineups = parsed.lineups;
      }
      if (Array.isArray(parsed.genreTags)) {
        state.bandDNA.genreTags = parsed.genreTags;
      }
      if (Array.isArray(parsed.addons)) {
        state.bandDNA.addons = parsed.addons;
      }
      return true;
    }
    return false;
  } catch (e) {
    console.error("bandDNA load failed:", e);
    return false;
  }
}

function migrateLegacyToBandDNA() {
  if (state.bandDNA.migratedFromLegacy) return;

  const workOrderWorkspace = state.workOrderWorkspace || {};
  const bandProfile = workOrderWorkspace.bandProfile || {};
  const businessProfile = workOrderWorkspace.businessProfile || {};
  const pricingProfile = workOrderWorkspace.pricingProfile || {};
  const epk = workOrderWorkspace.epk || {};
  const promoBuilder = workOrderWorkspace.promoBuilder || {};
  const lineupRates = Array.isArray(pricingProfile.lineupRates)
    ? pricingProfile.lineupRates
    : [];

  state.bandDNA = {
    ...state.bandDNA,
    bandName: businessProfile.businessName || bandProfile.bandName || epk.bandName || "",
    hometown: bandProfile.hometown || "",
    contactEmail: businessProfile.contactEmail || epk.contactEmail || "",
    contactPhone: businessProfile.contactPhone || epk.contactPhone || "",
    managerName: bandProfile.signoffName || "",
    signoffName: bandProfile.signoffName || "",
    oneLineBio: bandProfile.introLine || epk.shortBio || "",
    artistReferences: bandProfile.artistReferences || "",
    genreTags: (bandProfile.genreTags || epk.genres || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
    bestFitEvents: bandProfile.eventFitLine || "",
    proofPoint: bandProfile.proofPointPrimary || "",
    tone: promoBuilder.tone || "Warm",
    minimumHours: pricingProfile.minimumHours || "2",
    musicianHourlyRate: pricingProfile.musicianHourlyRate || "50",
    defaultDeposit: pricingProfile.defaultDepositAmount || "50",
    depositEnabled: pricingProfile.defaultDepositEnabled !== false,
    depositModel: pricingProfile.depositModel || "addition",
    defaultSetLength: pricingProfile.defaultPerformanceHours || "",
    website: epk.website || "",
    musicLink: epk.musicLink || "",
    videoLink: epk.videoLink || "",
    instagram: epk.instagram || "",
    facebook: epk.facebook || "",
    lineups: lineupRates.length
      ? lineupRates.map((entry) => ({
          name: entry?.lineup || "",
          rate: entry?.rate || "",
          count: getLineupMusicianCount(entry?.lineup || ""),
          rateType: "hourly",
        }))
      : [
          { name: "Duo", rate: "", count: 2, rateType: "hourly" },
          { name: "Full Band", rate: "", count: 4, rateType: "hourly" },
        ],
    migratedFromLegacy: true,
    onboardingComplete: true,
  };
}

function getOnboardingStepTitle(stepNumber = 1) {
  return [
    "Who are you",
    "What you offer",
    "Travel + mileage",
    "Your sound",
    "Your presence + outreach tone",
  ][Number(stepNumber || 1) - 1] || "Who are you";
}

function getOnboardingGenreTagsFromDom() {
  return Array.from(document.querySelectorAll("#onboardingGenreChipList [data-tag]"))
    .map((chip) => chip.getAttribute("data-tag") || "")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function renderOnboardingGenreChips() {
  const wrap = document.getElementById("onboardingGenreChipList");
  if (!wrap) return;
  const tags = Array.isArray(state.bandDNA.genreTags) ? state.bandDNA.genreTags : [];
  wrap.innerHTML = tags.length
    ? tags.map((tag) => `
      <button class="btn ghost" type="button" data-remove-genre="${escapeHtml(tag)}" data-tag="${escapeHtml(tag)}">
        ${escapeHtml(tag)} ×
      </button>
    `).join("")
    : `<span class="muted">No genre tags added yet.</span>`;
}

function getLineupMusicianCount(lineupName = "", lineup = null) {
  if (lineup?.count && Number(lineup.count) > 0) {
    return Number(lineup.count);
  }
  const normalized = String(lineupName || "").toLowerCase();
  if (normalized.includes("duo")) return 2;
  if (normalized.includes("trio")) return 3;
  if (normalized.includes("full") || normalized.includes("band")) return 4;
  if (normalized.includes("solo")) return 1;
  return 1;
}

function getAutoCalculatedLineupRate(lineupName = "", musicianHourlyRate = "50") {
  return String(toNumber(musicianHourlyRate || "50") * getLineupMusicianCount(lineupName));
}

function updateOnboardingLineupRatePreviews() {
  const musicianHourlyRate = toNumber(
    document.getElementById("onboardingMusicianHourlyRate")?.value.trim() || "50"
  );
  document.querySelectorAll("#onboardingLineupList [data-lineup-row]").forEach((row) => {
    const name = row.querySelector("[data-lineup-name]")?.value.trim() || "";
    const countValue = row.querySelector("[data-lineup-count]")?.value.trim() || "";
    const count = Math.max(1, Number(countValue) || getLineupMusicianCount(name));
    const total = musicianHourlyRate * count;
    const preview = row.querySelector(".lineup-rate-preview");
    if (preview) {
      preview.textContent = `$${formatNumberInput(total)}/hr total (${count} musicians × $${formatNumberInput(musicianHourlyRate)}/hr)`;
    }
  });
}

function renderOnboardingWizard() {
  state.onboardingStep = Math.min(5, Math.max(1, Number(state.onboardingStep || 1)));
  const step = state.onboardingStep;
  const dna = getBandDNA();
  const stepBar = document.getElementById("onboardingStepBar");
  const stepLabel = document.getElementById("onboardingStepLabel");
  const backBtn = document.getElementById("onboardingBack");
  const nextBtn = document.getElementById("onboardingNext");

  if (stepBar) {
    stepBar.innerHTML = [1, 2, 3, 4, 5].map((pip) => `
      <button
        type="button"
        class="btn ghost${pip === step ? " active" : ""}"
        data-onboarding-goto="${pip}"
        aria-label="Go to step ${pip}"
      >${pip}</button>
    `).join("");
  }

  if (stepLabel) {
    stepLabel.textContent = `Step ${step} of 5 · ${getOnboardingStepTitle(step)}`;
  }

  const step1 = document.getElementById("onboardingStep1");
  if (step1) {
    step1.innerHTML = `
      <section class="panel form-panel">
        <h2>Who are you?</h2>
        <p class="muted">Let's start with the essentials you want reused across contracts, outreach, and booking details.</p>
        <div class="form-grid">
          <label>
            Band / act name
            <input id="onboardingBandName" type="text" value="${escapeHtml(dna.bandName || "")}" />
            <span class="inline-help">Used in your contract header and outreach materials.</span>
          </label>
          <label>
            Your hometown or base
            <input id="onboardingHometown" type="text" value="${escapeHtml(dna.hometown || "")}" />
            <span class="inline-help">Used to describe your act in outreach and EPK copy.</span>
          </label>
          <label>
            Booking contact name
            <input id="onboardingSignoffName" type="text" value="${escapeHtml(dna.signoffName || "")}" />
            <span class="inline-help">Used in your contract header and email signoff.</span>
          </label>
          <label>
            Booking email
            <input id="onboardingContactEmail" type="email" value="${escapeHtml(dna.contactEmail || "")}" />
            <span class="inline-help">Used in EPK contact blocks and outreach signoffs.</span>
          </label>
          <label>
            Booking phone
            <input id="onboardingContactPhone" type="tel" value="${escapeHtml(dna.contactPhone || "")}" />
            <span class="inline-help">Used when venues or clients need a direct callback number.</span>
          </label>
          <label>
            Home address for travel calculation
            <input id="onboardingHomeAddress" type="text" value="${escapeHtml(dna.homeAddress || "")}" />
            <span class="inline-help">Used as the home base for future travel calculations.</span>
          </label>
        </div>
        <label>
          Payment methods accepted
          <textarea id="onboardingPaymentMethods">${escapeHtml(dna.paymentMethods || "")}</textarea>
          <span class="inline-help">Used in invoices, receipts, and booking follow-up details.</span>
        </label>
      </section>
    `;
  }

  const step2 = document.getElementById("onboardingStep2");
  if (step2) {
    const lineups = Array.isArray(dna.lineups) && dna.lineups.length
      ? dna.lineups
      : [
          { name: "Duo", rate: "", count: 2, rateType: "hourly" },
          { name: "Full Band", rate: "", count: 4, rateType: "hourly" },
        ];
    const musicianHourlyRate = dna.musicianHourlyRate || "50";
    step2.innerHTML = `
      <section class="panel form-panel">
        <h2>What do you offer?</h2>
        <p class="muted">Set up your base musician rate, minimum hours, and lineups so new quotes are calculated automatically.</p>

        <div class="form-section booking-nested-section">
          <h3>Your base rate</h3>
          <div class="form-grid">
            <label>
              Rate per musician per hour
              <input id="onboardingMusicianHourlyRate" type="number" min="0" step="1" value="${escapeHtml(dna.musicianHourlyRate || "50")}" />
              <span class="inline-help">This is what each musician earns per hour. We'll calculate lineup totals automatically.</span>
            </label>
            <label>
              Minimum hours per show
              <input id="onboardingMinimumHours" type="number" min="0" step="0.5" value="${escapeHtml(dna.minimumHours || "2")}" />
              <span class="inline-help">Most shows have a 2-hour minimum.</span>
            </label>
          </div>
        </div>

        <div class="form-section booking-nested-section">
          <h3>Your lineups</h3>
          <div id="onboardingLineupList">
            ${lineups.map((lineup, index) => {
              const count = getLineupMusicianCount(lineup.name, lineup);
              const totalRate = toNumber(musicianHourlyRate) * count;
              return `
                <div class="form-section booking-nested-section onboarding-lineup-row" data-lineup-row="${index}">
                  <div class="form-grid">
                    <label>
                      Lineup name
                      <input type="text" data-lineup-name value="${escapeHtml(lineup.name || "")}" />
                    </label>
                    <label>
                      Musician count
                      <input type="number" min="1" step="1" data-lineup-count value="${escapeHtml(count)}" />
                    </label>
                  </div>
                  <p class="lineup-rate-preview">$${formatNumberInput(totalRate)}/hr total (${count} musicians × $${formatNumberInput(toNumber(musicianHourlyRate))}/hr)</p>
                  <div class="inline-actions">
                    <button class="btn ghost" type="button" data-remove-lineup="${index}">Remove</button>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
          <p><button class="btn ghost" id="onboardingAddLineup" type="button">Add lineup</button></p>
        </div>

        <div class="form-section booking-nested-section">
          <h3>Deposit</h3>
          <div class="form-grid">
            <label>
              Default deposit amount
              <input id="onboardingDefaultDeposit" type="number" min="0" step="1" value="${escapeHtml(dna.defaultDeposit || "")}" />
              <span class="inline-help">Used as the default booking deposit.</span>
            </label>
            <p>How does your deposit work?</p>
            <div class="form-grid">
              <button class="btn ghost${dna.depositModel === "credited" ? "" : " active"}" type="button" data-deposit-model="addition">
                In addition to the fee
                <span class="inline-help">
                  Client pays deposit + performance fee separately.
                  Total = $300 fee + $50 deposit = $350.
                </span>
              </button>
              <button class="btn ghost${dna.depositModel === "credited" ? " active" : ""}" type="button" data-deposit-model="credited">
                Credited toward the fee
                <span class="inline-help">
                  Deposit comes out of the total fee.
                  Total = $300 fee, $50 paid upfront, $250 day of show.
                </span>
              </button>
            </div>
            <input type="hidden" id="onboardingDepositModel" 
              value="${escapeHtml(dna.depositModel || "addition")}" />
            <label class="checkbox inline-note">
              <input id="onboardingDepositEnabled" type="checkbox" ${dna.depositEnabled !== false ? "checked" : ""} />
              Deposit enabled
              <span class="inline-help">Turns deposit defaults on for new bookings.</span>
            </label>
          </div>
        </div>
      </section>
    `;
  }

  const step3 = document.getElementById("onboardingStep3");
  if (step3) {
    step3.innerHTML = `
      <section class="panel form-panel">
        <h2>Travel + mileage</h2>
        <p>How far will you drive before charging for travel?</p>
        <label>
          Free travel radius (hours)
          <input id="onboardingTravelFreeWithinHours" type="number" min="0" step="0.25" value="${escapeHtml(dna.travelFreeWithinHours || "")}" />
          <span class="inline-help">Used as your included travel distance before extra charges apply.</span>
        </label>
        <p>How do you charge for travel beyond that?</p>
        <div class="form-grid">
          <button class="btn ghost${dna.travelChargeType === "irs_mileage" ? " active" : ""}" type="button" data-travel-type="irs_mileage">
            IRS mileage rate · $0.67/mile
          </button>
          <button class="btn ghost${dna.travelChargeType === "hourly_per_performer" ? " active" : ""}" type="button" data-travel-type="hourly_per_performer">
            Per performer, per hour · custom rate
          </button>
          <button class="btn ghost${dna.travelChargeType === "flat_fee" ? " active" : ""}" type="button" data-travel-type="flat_fee">
            Flat fee per show · custom amount
          </button>
        </div>
        <input id="onboardingTravelChargeType" type="hidden" value="${escapeHtml(dna.travelChargeType || "hourly_per_performer")}" />
        <div id="onboardingTravelHourlyWrap" class="${dna.travelChargeType === "hourly_per_performer" ? "" : "hidden"}">
          <label>
            Travel hourly rate
            <input id="onboardingTravelHourlyRate" type="number" min="0" step="1" value="${escapeHtml(dna.travelHourlyRate || "")}" />
            <span class="inline-help">Used when you charge per performer per hour outside your free radius.</span>
          </label>
        </div>
        <div id="onboardingTravelFlatWrap" class="${dna.travelChargeType === "flat_fee" ? "" : "hidden"}">
          <label>
            Flat fee per show
            <input id="onboardingTravelFlatFee" type="number" min="0" step="1" value="${escapeHtml(dna.travelFlatFee || "")}" />
            <span class="inline-help">Used when you prefer one flat travel add-on per show.</span>
          </label>
        </div>
      </section>
    `;
  }

  const step4 = document.getElementById("onboardingStep4");
  if (step4) {
    step4.innerHTML = `
      <section class="panel form-panel">
        <h2>Your sound</h2>
        <p>How would you describe your sound in one sentence?</p>
        <label>
          <textarea id="onboardingOneLineBio">${escapeHtml(dna.oneLineBio || "")}</textarea>
          <span class="inline-help">Shows up in your outreach emails and EPK bio.</span>
        </label>
        <p>Who are 2-3 artists you're compared to or inspired by?</p>
        <label>
          <input id="onboardingArtistReferences" type="text" value="${escapeHtml(dna.artistReferences || "")}" />
          <span class="inline-help">Used automatically in cold outreach scripts.</span>
        </label>
        <p>Genre tags</p>
        <div id="onboardingGenreChipList"></div>
        <label>
          Add a genre tag
          <input id="onboardingGenreInput" type="text" placeholder="Americana" />
          <span class="inline-help">Press Add to save a tag you want reused in outreach and EPK copy.</span>
        </label>
        <p><button class="btn ghost" id="onboardingAddGenre" type="button">Add genre tag</button></p>
        <p>What events are you the best fit for?</p>
        <label>
          <input id="onboardingBestFitEvents" type="text" value="${escapeHtml(dna.bestFitEvents || "")}" />
          <span class="inline-help">Used in booking copy to describe where you shine most.</span>
        </label>
        <p>What's a proof point — something concrete about your track record?</p>
        <label>
          <input id="onboardingProofPoint" type="text" value="${escapeHtml(dna.proofPoint || "")}" />
          <span class="inline-help">Used in first-contact outreach e.g. "We play 100+ shows a year".</span>
        </label>
      </section>
    `;
    renderOnboardingGenreChips();
  }

  const step5 = document.getElementById("onboardingStep5");
  if (step5) {
    step5.innerHTML = `
      <section class="panel form-panel">
        <h2>Your presence + outreach tone</h2>
        <div class="form-grid">
          <label>
            Website URL
            <input id="onboardingWebsite" type="url" value="${escapeHtml(dna.website || "")}" />
            <span class="inline-help">Used in EPK summaries and outreach signoffs.</span>
          </label>
          <label>
            Music link
            <input id="onboardingMusicLink" type="url" value="${escapeHtml(dna.musicLink || "")}" />
            <span class="inline-help">Used in outreach messages and EPK contact blocks.</span>
          </label>
          <label>
            Video link
            <input id="onboardingVideoLink" type="url" value="${escapeHtml(dna.videoLink || "")}" />
            <span class="inline-help">Used when a venue wants a fast performance sample.</span>
          </label>
          <label>
            Instagram handle
            <input id="onboardingInstagram" type="text" value="${escapeHtml(dna.instagram || "")}" />
            <span class="inline-help">Used in your EPK preview and outreach footer.</span>
          </label>
          <label>
            Facebook handle
            <input id="onboardingFacebook" type="text" value="${escapeHtml(dna.facebook || "")}" />
            <span class="inline-help">Used in your EPK preview and social links.</span>
          </label>
        </div>
        <p>Choose the outreach tone that feels most like you.</p>
        <div class="form-grid">
          ${["Warm", "Professional", "Upbeat"].map((tone) => `
            <button class="btn ghost${dna.tone === tone ? " active" : ""}" type="button" data-onboarding-tone="${tone}">
              ${tone}
            </button>
          `).join("")}
        </div>
        <input id="onboardingTone" type="hidden" value="${escapeHtml(dna.tone || "Warm")}" />
      </section>
    `;
  }

  [1, 2, 3, 4, 5].forEach((stepNumber) => {
    const panel = document.getElementById(`onboardingStep${stepNumber}`);
    if (panel) panel.classList.toggle("hidden", stepNumber !== step);
  });

  if (backBtn) backBtn.classList.toggle("hidden", step === 1);
  if (nextBtn) nextBtn.textContent = step === 5 ? "Finish setup" : "Continue";
}

function saveOnboardingStep(stepNumber) {
  const step = Number(stepNumber || state.onboardingStep || 1);

  if (step === 1) {
    updateBandDNA({
      bandName: document.getElementById("onboardingBandName")?.value.trim() || "",
      hometown: document.getElementById("onboardingHometown")?.value.trim() || "",
      signoffName: document.getElementById("onboardingSignoffName")?.value.trim() || "",
      managerName: document.getElementById("onboardingSignoffName")?.value.trim() || "",
      contactEmail: document.getElementById("onboardingContactEmail")?.value.trim() || "",
      contactPhone: document.getElementById("onboardingContactPhone")?.value.trim() || "",
      homeAddress: document.getElementById("onboardingHomeAddress")?.value.trim() || "",
      paymentMethods: document.getElementById("onboardingPaymentMethods")?.value.trim() || "",
    });
    return;
  }

  if (step === 2) {
    const musicianHourlyRate = document.getElementById("onboardingMusicianHourlyRate")?.value.trim() || "50";
    const lineups = Array.from(document.querySelectorAll("#onboardingLineupList [data-lineup-row]"))
      .map((row) => ({
        name: row.querySelector("[data-lineup-name]")?.value.trim() || "",
        count: Math.max(1, Number(row.querySelector("[data-lineup-count]")?.value.trim() || 1)),
      }))
      .map((entry) => ({
        name: entry.name,
        rate: String(toNumber(musicianHourlyRate) * entry.count),
        count: entry.count,
        rateType: "hourly",
      }))
      .filter((entry) => entry.name || entry.count);
    updateBandDNA({
      lineups: lineups.length ? lineups : [
        { name: "Duo", rate: String(toNumber(musicianHourlyRate) * 2), count: 2, rateType: "hourly" },
        { name: "Full Band", rate: String(toNumber(musicianHourlyRate) * 4), count: 4, rateType: "hourly" },
      ],
      musicianHourlyRate,
      minimumHours: document.getElementById("onboardingMinimumHours")?.value.trim() || "2",
      defaultDeposit: document.getElementById("onboardingDefaultDeposit")?.value.trim() || "",
      depositEnabled: Boolean(document.getElementById("onboardingDepositEnabled")?.checked),
      depositModel: document.getElementById("onboardingDepositModel")?.value || "addition",
    });
    return;
  }

  if (step === 3) {
    const travelChargeType = document.getElementById("onboardingTravelChargeType")?.value || "hourly_per_performer";
    updateBandDNA({
      travelFreeWithinHours: document.getElementById("onboardingTravelFreeWithinHours")?.value.trim() || "",
      travelChargeType,
      travelHourlyRate: document.getElementById("onboardingTravelHourlyRate")?.value.trim() || "",
      travelFlatFee: document.getElementById("onboardingTravelFlatFee")?.value.trim() || "",
    });
    return;
  }

  if (step === 4) {
    updateBandDNA({
      oneLineBio: document.getElementById("onboardingOneLineBio")?.value.trim() || "",
      artistReferences: document.getElementById("onboardingArtistReferences")?.value.trim() || "",
      genreTags: getOnboardingGenreTagsFromDom(),
      bestFitEvents: document.getElementById("onboardingBestFitEvents")?.value.trim() || "",
      proofPoint: document.getElementById("onboardingProofPoint")?.value.trim() || "",
    });
    return;
  }

  if (step === 5) {
    updateBandDNA({
      website: document.getElementById("onboardingWebsite")?.value.trim() || "",
      musicLink: document.getElementById("onboardingMusicLink")?.value.trim() || "",
      videoLink: document.getElementById("onboardingVideoLink")?.value.trim() || "",
      instagram: document.getElementById("onboardingInstagram")?.value.trim() || "",
      facebook: document.getElementById("onboardingFacebook")?.value.trim() || "",
      tone: document.getElementById("onboardingTone")?.value || "Warm",
    });
  }
}

function advanceOnboardingStep() {
  saveOnboardingStep(state.onboardingStep);
  const statusEl = document.getElementById("onboardingStatus");

  if (Number(state.onboardingStep || 1) === 5) {
    state.bandDNA.onboardingComplete = true;
    updateBandDNA({ onboardingComplete: true });
    saveDraft();
    if (statusEl) {
      statusEl.textContent = "You're all set. Your profile is saved and ready to use across bookings, outreach, and your EPK.";
    }
    window.setTimeout(() => {
      if (switchTopView) switchTopView("home");
    }, 1500);
    return;
  }

  state.onboardingStep = Math.min(5, Number(state.onboardingStep || 1) + 1);
  if (statusEl) statusEl.textContent = "";
  renderOnboardingWizard();
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
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

function formatMonthYearLabel(value) {
  if (!value) return "__";
  const date = value instanceof Date ? value : new Date(value);
  if (!Number.isFinite(date.getTime())) return String(value);
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

function formatShowDateTimeWithWeekday(value) {
  if (!value) return "";
  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) return String(value);
  return date.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function formatAvailableDateLabel(dateValue) {
  if (!dateValue) return "__";
  const [year, month, day] = dateValue.split("-").map(Number);
  if (!year || !month || !day) return dateValue;
  const date = new Date(year, month - 1, day);
  const baseLabel = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const holidayName = getHolidayWeekendLabel(date);
  return holidayName ? `${baseLabel} (${holidayName})` : baseLabel;
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
const CONTRACT_DRAFT_SNAPSHOTS_KEY = "rustandruin-contract-draft-snapshots";
const CALENDAR_SETTINGS_KEY = "rustandruin-calendar-settings";
const SUPABASE_URL =
  window.RR_SUPABASE_CONFIG?.url || "https://ipxjalcgiaqcyubrxqxu.supabase.co";
const SUPABASE_ANON_KEY =
  window.RR_SUPABASE_CONFIG?.anonKey || "sb_publishable_-XW9I_e7OR4TUMq0B4SG-Q_el-7vKPJ";
const OVERRIDE_PIN_SETTING = "override_pin";
const CALENDAR_AUTH_SEEN_KEY = "rustandruin-calendar-auth-seen";
const AUTO_HOLD_NOTE = "Pending contract signature (auto-created from agreement)";
let switchTopView = null;
const SYNC_POLL_INTERVAL_MS = 15000;
const DEFAULT_MUSICIAN_ROSTER = [
  { name: "Josh Adams", role: "Guitar / Vocals" },
  { name: "Beth Adams", role: "Vocals / Percussion" },
  { name: "Bassist", role: "Bass" },
  { name: "Drummer", role: "Drums" },
];
const SEEDED_TODD_SHOW_FILES = [
  { show_date: "2026-02-14", show_title: "Lebanon Legion" },
  { show_date: "2026-03-14", show_title: "Windsor Legion" },
  { show_date: "2026-05-16", show_title: "Dell Rice" },
  { show_date: "2026-06-27", show_title: "Horseshoe Acres" },
  { show_date: "2026-07-04", show_title: "Vanguilder BBQ" },
  { show_date: "2026-07-30", show_title: "Cheshire Fair" },
  { show_date: "2026-08-29", show_title: "Hartford 1978 Class Reunion" },
  { show_date: "2026-09-19", show_title: "NSRA Essex Fair" },
  { show_date: "2026-10-10", show_title: "St. John's Club" },
  { show_date: "2026-12-31", show_title: "New Year's Eve Lebanon American Legion" },
];
const SEEDED_DAN_SHOW_FILES = [
  { show_date: "2026-05-09", show_title: "Springfield Elks SHA Fundraiser" },
  { show_date: "2026-06-13", show_title: "Kingdom Campground" },
  { show_date: "2026-07-11", show_title: "Bombazine KOA" },
  { show_date: "2026-07-18", show_title: "Mike's Tiki Bar" },
  { show_date: "2026-07-25", show_title: "Kingdom Campground" },
  { show_date: "2026-08-15", show_title: "Wells Woodstock Show" },
  { show_date: "2026-09-05", show_title: "Sugar Ridge Campground" },
  { show_date: "2026-09-20", show_title: "Chester Craft Fair" },
];
const SEEDED_JENNY_GARY_SHOW_DATES = [
  "2026-02-14",
  "2026-03-14",
  "2026-05-09",
  "2026-05-16",
  "2026-06-13",
  "2026-06-27",
  "2026-07-04",
  "2026-07-11",
  "2026-07-18",
  "2026-07-25",
  "2026-07-30",
  "2026-08-15",
  "2026-08-29",
  "2026-09-05",
  "2026-09-19",
  "2026-09-20",
  "2026-10-10",
  "2026-12-31",
];
const SEEDED_MUSICIAN_BLACKOUTS = [
  { musician_name: "Jenny", start_date: "2026-08-21", end_date: "2026-08-22" },
  { musician_name: "Gary", start_date: "2026-08-21", end_date: "2026-08-22" },
  { musician_name: "Todd", start_date: "2026-10-03", end_date: "2026-10-03" },
];
const WORK_ORDER_SOCIAL_POST_TEMPLATES = [
  { category: "SHOW", title: "Show Announcement", warm: "We are playing at [VENUE] on [DATE] and we would love to see you there 🎸 Doors at [TIME]. Come early grab a drink and let us play you something good 🎶 #livemusicvt #rustandruin #[VENUE]", funny: "Guess who is playing at [VENUE] on [DATE]? Us. Obviously. Doors at [TIME] 🎤 Come watch us pretend we are rock stars 🎸😄 #livemusicvt #rustandruin", hype: "🔥🎸 IT IS SHOW DAY. We are taking over [VENUE] on [DATE] 🎤 Doors at [TIME]. Be there or regret it forever 🙌🔥 #livemusic #rustandruin #showday" },
  { category: "SHOW", title: "Show Reminder", warm: "Just a friendly reminder that we are playing tonight at [VENUE] 🎶 Doors at [TIME]. Come as you are and stay as long as you want 🎵 #livemusicvt #rustandruin", funny: "Hey. HEY. We are playing TONIGHT at [VENUE] 🎤 Doors at [TIME]. Put on pants and come see us 🎸😄🙌 #livemusic #rustandruin #tonight", hype: "🔥🙌 TONIGHT. [VENUE]. [TIME]. Do not make us play to an empty room 🎶 GET THERE 🔥🎸 #shownight #livemusic #rustandruin" },
  { category: "SHOW", title: "Show Recap", warm: "Last night at [VENUE] was something special 🙌 Thank you to everyone who came out and made it such a great night 🎶 You all are the reason we keep doing this 🎸 #livemusicvt #rustandruin #thankyou", funny: "We played last night at [VENUE] and honestly we killed it 🎤 You were also great. Good job everyone 🎸😄🙌 #livemusic #rustandruin", hype: "🔥🎸 WHAT A NIGHT at [VENUE]. The energy was unreal 🎶 Thank you for showing up and going all in with us 🙌🔥 Already counting down to the next one. #livemusic #rustandruin #bestcrowd" },
  { category: "SHOW", title: "New Booking", warm: "So excited to share that we just booked [VENUE] on [DATE] 🎸 Cannot wait to bring the music to this one 🎵 More dates coming soon 📅 #livemusicvt #rustandruin #newshow", funny: "We did a thing 😄 Just booked [VENUE] on [DATE] 📅 Mark your calendars. Tell your friends. Tell strangers 🎸😂 #newshow #rustandruin #livemusic", hype: "🔥📅 JUST BOOKED [VENUE] on [DATE] and we are PUMPED 🎸 This one is going to be a banger 🙌🔥 Stay tuned for more. #newshow #livemusic #rustandruin" },
  { category: "SHOW", title: "Available Dates", warm: "We still have some open dates in [MONTH] and would love to find the right fit 📅 If you are looking for live music for your venue or event send us a message 🎶 #livemusicvt #bookrustandruin", funny: "Our calendar has some suspicious empty spots in [MONTH] 📅 Know anyone who needs live music? We are asking for ourselves 😄🎸 #bookus #livemusic #rustandruin", hype: "🔥📅 [MONTH] is filling up fast but we still have a few dates left 🎤 If you want live music that actually gets people moving slide into our DMs 🙌🔥 #bookrustandruin #livemusic" },
  { category: "SHOW", title: "General Promo", warm: "Rust and Ruin is available for pubs breweries private events weddings and more 🎸 We bring the music and the good vibes wherever we go 🎶 Reach out to chat about your event 🙌 #livemusicvt #rustandruin #bookus", funny: "We play music. People enjoy it. You could enjoy it too 🎤 Hire us for your venue or event and we promise not to be weird about it 😄🎸😂 #bookus #rustandruin #livemusic", hype: "🔥🎸 Want live music that actually moves the room? Rust and Ruin plays pubs breweries private events and weddings 🎤 We bring serious energy every single time 🙌🔥 DM us to book. #bookrustandruin #livemusic #vermont" },
  { category: "BEHIND THE SCENES", title: "Practice Day", warm: "Today [DUO NAMES] are locked in and working through some new material 🎚️ Cannot wait to bring it to the stage soon 💪 #practicemakesperfect #rustandruin #livemusic", funny: "[MEMBER 1] is judging [MEMBER 2] and [MEMBER 2] is judging [MEMBER 1] and we both pretend everything is fine 😂 Progress 🎛️😄 #bandlife #rustandruin #practice", hype: "🔥🎛️ [DUO NAMES] are LOCKED IN today 🔊 New stuff in the works and it is sounding fire 💪🔥 Stay tuned. #newmusic #rustandruin #bandlife" },
  { category: "BEHIND THE SCENES", title: "Loading In", warm: "Load in day at [VENUE] 🚐 Getting everything set up and ready for tonight 🎛️ Come see the finished product later. Doors at [TIME] 🔊 #livemusicvt #rustandruin", funny: "Nothing says glamorous rock star life like hauling heavy gear up questionable staircases 😂 See you tonight at [VENUE] 🚐🎚️😄 #bandlife #rustandruin #glamorous", hype: "🔥🚐 LOAD IN MODE ACTIVATED. [VENUE] you are not ready for tonight 🔊 Doors at [TIME]. Be there 💪🔥 #showday #rustandruin #livemusic" },
  { category: "BEHIND THE SCENES", title: "Soundcheck", warm: "[DUO NAMES] just finished soundcheck and everything is sounding great 🎛️ Doors open at [TIME]. Come early and settle in 🔊 #livemusicvt #rustandruin", funny: "[MEMBER 1] said check one two approximately forty seven times 😂🎚️ See you tonight at [VENUE] 😄 #soundcheck #rustandruin #bandlife", hype: "🔥🔊 Soundcheck DONE and this room is going to sound incredible tonight 🎛️ [VENUE] at [TIME]. Get there early 💪🔥 #shownight #rustandruin #livemusic" },
  { category: "BEHIND THE SCENES", title: "After the Show", warm: "That is a wrap at [VENUE] 🎚️ What an incredible night. Thank you to everyone who came out and made it so special 🔊 We will see you again soon 💫 #livemusicvt #rustandruin #thankyou", funny: "We survived another show and honestly so did you 😂 Thanks for coming to [VENUE] and pretending our originals were your favorites 🎛️😄💪 #bandlife #rustandruin #livemusic", hype: "🔥🔊 THAT WAS ELECTRIC. [VENUE] you absolutely delivered tonight 🎚️ Thank you for the energy the singing and the dancing 💪🔥 Already ready for the next one. #bestcrowd #rustandruin #livemusic" },
  { category: "BEHIND THE SCENES", title: "Candid Moment", warm: "Just [MEMBER 1] and [MEMBER 2] doing what we love 🎛️ [ADD YOUR CAPTION] 💫 #rustandruin #bandlife #livemusic", funny: "This is what peak professionalism looks like 😂 [ADD YOUR CAPTION] 🎚️😄 #bandlife #rustandruin #behindthescenes", hype: "🔥🎛️ No filters no script just us doing what we love 🔊 [ADD YOUR CAPTION] 💪🔥 #rustandruin #reallife #livemusic" },
  { category: "BEHIND THE SCENES", title: "Road Trip", warm: "On our way to [VENUE] and the anticipation is real 🚐 Good music on the road good music on the stage tonight 🎛️ #rustandruin #roadtrip #livemusic", funny: "Current status driving to [VENUE] and hoping we remembered everything 😂 We definitely forgot something 🚐😄🎚️ #bandlife #rustandruin #roadtrip", hype: "🔥🚐 ROAD TRIP TO [VENUE] and we are bringing everything we have got tonight 🔊 See you there 💪🔥 #showday #rustandruin #livemusic" },
  { category: "BEHIND THE SCENES", title: "Gear Setup", warm: "Getting everything set up for tonight at [VENUE] 🎛️ The details matter and we take pride in every single one 🔊 Doors at [TIME] 💪 #livemusicvt #rustandruin", funny: "Forty five minutes of setup for ninety minutes of music 😂 The math is not mathing but we love it anyway 🎚️😄 See you tonight at [VENUE]. #bandlife #rustandruin #gearnerds", hype: "🔥🎛️ Setup mode. Every cable every mic every amp dialed in perfectly for tonight at [VENUE] 🔊 We take this seriously 💪🔥 #showday #rustandruin #livemusic" },
  { category: "GET TO KNOW US", title: "Meet the Band", warm: "In case you are new here we are [BAND NAME] 🤘 [MEMBER 1] sings and [MEMBER 2] plays guitar 🎼 We play Americana classic favorites and originals and we love what we do 💫 Come find us live sometime. #rustandruin #livemusic #vermont", funny: "[MEMBER 1] sings, [MEMBER 2] plays guitar, and together we have convinced hundreds of people to stay at bars longer than they planned 🤘📸😂 #rustandruin #livemusic #meettheband", hype: "🔥🤘 [DUO NAMES] have been playing 100 plus shows a year because we cannot stop 🎼💫🔥 Come experience it live. #rustandruin #livemusic #vermont" },
  { category: "GET TO KNOW US", title: "Throwback", warm: "Throwing it back to when [DUO NAMES] played [EVENT OR VENUE] 📸 What a memory. Grateful for every show and every crowd that has come along for the ride 💫 #throwback #rustandruin #livemusic", funny: "Throwback to [EVENT OR VENUE] when we were younger and possibly better looking 😄📸🥂 Some things never change. #throwback #rustandruin #bandlife", hype: "🔥📸 THROWBACK to [EVENT OR VENUE] and one of our favorite shows ever 🤘💫🔥 Every gig adds to the story. #throwback #rustandruin #livemusic" },
  { category: "GET TO KNOW US", title: "Song Request", warm: "We want to know what song you always want to hear us play 🎼 Drop it in the comments and we will do our best to make it happen 🤘 #rustandruin #songrequest #livemusic", funny: "Okay be honest. What song do you desperately wish we would play 😄🤘📸 No judgment. Mostly. Drop it below. #songrequest #rustandruin #livemusic", hype: "🔥🎼 SONG REQUEST TIME. What do you want to hear at our next show 🤘💫🔥 Tell us in the comments and we will see what we can do. #songrequest #rustandruin #livemusic" },
  { category: "GET TO KNOW US", title: "Milestone", warm: "[DUO NAMES] just hit [MILESTONE] and we are so grateful 🥂 Thank you from the bottom of our hearts 💫 #rustandruin #grateful #livemusic", funny: "We just hit [MILESTONE] which means we have officially done this too many times to quit now 😄🤘🥂 Thank you for enabling us. #rustandruin #bandlife #milestone", hype: "🔥🤘 [DUO NAMES] just hit [MILESTONE] AND WE ARE JUST GETTING STARTED 🎼💫🔥 Thank you to every venue every fan and everyone who has believed in us. The best is yet to come. #rustandruin #milestone #livemusic" },
];
const SEEDED_BOOKED_EVENTS = [
  { date: "2026-01-03", start: "19:00", end: "22:00", title: "Killarney's", type: "Confirmed" },
  { date: "2026-01-06", start: "13:00", end: "14:00", title: "Mertens House", type: "Confirmed" },
  { date: "2026-01-07", start: "13:00", end: "15:00", title: "Spfd Senior Ctr", type: "Confirmed" },
  { date: "2026-01-13", start: "13:00", end: "14:00", title: "Whitcolm Bld", type: "Confirmed" },
  { date: "2026-01-20", start: "13:00", end: "14:00", title: "Stoughton House", type: "Confirmed" },
  { date: "2026-01-27", start: "14:00", end: "15:00", title: "Gill Home", type: "Confirmed" },
  { date: "2026-02-10", start: "13:00", end: "14:00", title: "Mertens House", type: "Confirmed" },
  { date: "2026-02-13", start: "18:00", end: "21:00", title: "Burke Publick", type: "Confirmed" },
  { date: "2026-02-14", start: "19:00", end: "22:00", title: "Lebanon Legion", type: "Confirmed", notes: "Full Band" },
  { date: "2026-02-17", start: "13:00", end: "14:00", title: "Stoughton House", type: "Confirmed" },
  { date: "2026-02-24", start: "14:00", end: "15:00", title: "Gill Home", type: "Confirmed" },
  { date: "2026-03-07", start: "19:00", end: "22:00", title: "Killarney", type: "Confirmed" },
  { date: "2026-03-10", start: "13:30", end: "14:30", title: "Mertens House", type: "Confirmed" },
  { date: "2026-03-13", start: "18:00", end: "21:00", title: "Burke Publick", type: "Confirmed" },
  { date: "2026-03-14", start: "19:00", end: "22:00", title: "Windsor Legion", type: "Confirmed", notes: "Full Band" },
  { date: "2026-03-17", start: "13:00", end: "14:00", title: "Stoughton House", type: "Confirmed" },
  { date: "2026-03-24", start: "14:00", end: "15:00", title: "Gill Home", type: "Confirmed" },
  { date: "2026-03-28", start: "17:00", end: "20:00", title: "Harry's Bar", type: "Confirmed" },
  { date: "2026-04-07", start: "13:00", end: "14:30", title: "Whitcomb Bdg", type: "Confirmed" },
  { date: "2026-04-14", start: "13:30", end: "14:30", title: "Mertens House", type: "Confirmed" },
  { date: "2026-04-21", start: "13:00", end: "14:00", title: "Stoughton House", type: "Confirmed" },
  { date: "2026-04-28", start: "14:00", end: "15:00", title: "Gill Home", type: "Confirmed" },
  { date: "2026-05-09", start: "19:30", end: "21:00", title: "SHA Elks", type: "Confirmed", notes: "Full Band" },
  { date: "2026-05-12", start: "13:30", end: "14:30", title: "Mertens House", type: "Confirmed" },
  { date: "2026-05-16", start: "14:00", end: "17:00", title: "Dell Rice", type: "Confirmed", notes: "Full Band" },
  { date: "2026-05-19", start: "13:00", end: "14:00", title: "Stoughton House", type: "Confirmed" },
  { date: "2026-05-23", start: "17:30", end: "20:30", title: "Bear Naked", type: "Confirmed" },
  { date: "2026-05-26", start: "14:00", end: "15:00", title: "Gill Home", type: "Confirmed" },
  { date: "2026-06-09", start: "13:30", end: "14:30", title: "Mertens House", type: "Confirmed" },
  { date: "2026-06-13", start: "18:30", end: "21:30", title: "Kingdom Cpg", type: "Confirmed", notes: "Full Band" },
  { date: "2026-06-16", start: "13:00", end: "14:00", title: "Stoughton House", type: "Confirmed" },
  { date: "2026-06-23", start: "14:00", end: "15:00", title: "Gill Home", type: "Confirmed" },
  { date: "2026-06-27", start: "18:30", end: "21:30", title: "Horseshoe Acres", type: "Confirmed", notes: "Full Band" },
  { date: "2026-07-04", start: "18:00", end: "21:00", title: "Van Guilder BBQ", type: "Confirmed", notes: "Full Band" },
  { date: "2026-07-11", start: "19:00", end: "22:00", title: "Bomoseen KOA", type: "Confirmed", notes: "Full Band" },
  { date: "2026-07-14", start: "13:30", end: "14:30", title: "Mertens House", type: "Confirmed" },
  { date: "2026-07-18", start: "18:00", end: "21:00", title: "Mikes Tiki Bar", type: "Confirmed", notes: "Dan, Full Band" },
  { date: "2026-07-21", start: "13:00", end: "14:00", title: "Stoughton House", type: "Confirmed" },
  { date: "2026-07-25", start: "18:30", end: "21:30", title: "Kingdom Cmpg", type: "Confirmed", notes: "Full Band" },
  { date: "2026-07-28", start: "14:00", end: "15:00", title: "Gill Home", type: "Confirmed" },
  { date: "2026-07-30", start: "18:00", end: "21:00", title: "Cheshire Fair", type: "Confirmed", notes: "Full Band" },
  { date: "2026-08-04", start: "17:00", end: "19:00", title: "Chester PD Night Out", type: "Confirmed" },
  { date: "2026-08-08", start: "17:30", end: "20:30", title: "Bear Naked", type: "Confirmed" },
  { date: "2026-08-11", start: "13:30", end: "14:30", title: "Mertens House", type: "Confirmed" },
  { date: "2026-08-15", start: "14:00", end: "17:00", title: "Wells \"Woodstock\"", type: "Confirmed", notes: "Full Band" },
  { date: "2026-08-18", start: "13:00", end: "14:00", title: "Stoughton House", type: "Confirmed" },
  { date: "2026-08-25", start: "14:00", end: "15:00", title: "Gill Home", type: "Confirmed" },
  { date: "2026-08-29", start: "15:00", end: "17:00", title: "Hartford 1978", type: "Confirmed", notes: "Full Band" },
  { date: "2026-09-05", start: "18:30", end: "21:30", title: "Sugar Ridge Cmp", type: "Confirmed", notes: "Full Band" },
  { date: "2026-09-08", start: "13:30", end: "14:30", title: "Mertens House", type: "Confirmed" },
  { date: "2026-09-15", start: "13:00", end: "14:00", title: "Stoughton House", type: "Confirmed" },
  { date: "2026-09-19", start: "14:30", end: "16:30", title: "NSRA Essex Fair", type: "Confirmed", notes: "Full Band" },
  { date: "2026-09-22", start: "14:00", end: "15:00", title: "Gill Home", type: "Confirmed" },
  { date: "2026-10-10", start: "12:30", end: "14:30", title: "St John's Club", type: "Confirmed", notes: "Full Band" },
  { date: "2026-10-13", start: "13:30", end: "14:30", title: "Mertens House", type: "Confirmed" },
  { date: "2026-10-20", start: "13:00", end: "14:00", title: "Stoughton House", type: "Confirmed" },
  { date: "2026-10-27", start: "14:00", end: "15:00", title: "Gill Home", type: "Confirmed" },
  { date: "2026-11-10", start: "13:30", end: "14:30", title: "Mertens House", type: "Confirmed" },
  { date: "2026-11-17", start: "13:00", end: "14:00", title: "Stoughton House", type: "Confirmed" },
  { date: "2026-11-24", start: "14:00", end: "15:00", title: "Gill Home", type: "Confirmed" },
  { date: "2026-12-08", start: "13:30", end: "14:30", title: "Mertens House", type: "Confirmed" },
  { date: "2026-12-12", start: "17:30", end: "20:30", title: "Bear Naked", type: "Confirmed" },
  { date: "2026-12-15", start: "13:00", end: "14:00", title: "Stoughton House", type: "Confirmed" },
  { date: "2026-12-22", start: "14:00", end: "15:00", title: "Gill Home", type: "Confirmed" },
];
const FULL_BAND_SHOW_DATE_KEYS = new Set([
  "2026-02-14",
  "2026-03-14",
  "2026-05-09",
  "2026-05-16",
  "2026-06-13",
  "2026-06-27",
  "2026-07-04",
  "2026-07-11",
  "2026-07-18",
  "2026-07-25",
  "2026-07-30",
  "2026-08-15",
  "2026-08-29",
  "2026-09-05",
  "2026-09-19",
  "2026-09-20",
  "2026-10-10",
  "2026-12-31",
]);
const SEEDED_CONFIRMED_SHOW_DATE_KEYS = new Set([
  ...SEEDED_BOOKED_EVENTS.map((event) => event.date),
  "2026-09-20",
  "2026-12-31",
]);

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    return false;
  }
}

function safeStorageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

function saveDraft() {
  try {
    if (Array.isArray(state.bandDNA.lineups)) {
      const musicianRate = parseFloat(state.bandDNA.musicianHourlyRate || 50);
      state.bandDNA.lineups = state.bandDNA.lineups.map((lineup) => {
        if (!lineup.rate || lineup.rate === "" || parseFloat(lineup.rate) === 0) {
          const count = lineup.count || getLineupMusicianCount(lineup.name);
          return { ...lineup, rate: String(musicianRate * count) };
        }
        return lineup;
      });
    }

    const payload = {
      bandDNA: state.bandDNA,
      agreement: state.agreement,
      quoteBuilder: {
        activeQuoteId: state.quoteBuilder.activeQuoteId,
        link: state.quoteBuilder.link,
        status: state.quoteBuilder.status,
        options: Array.isArray(state.quoteBuilder.options) ? state.quoteBuilder.options : [],
        expiresAt: state.quoteBuilder.expiresAt,
        acceptedBanner: state.quoteBuilder.acceptedBanner,
      },
      agreementDraftContext: state.agreementDraftContext,
      activeTab: state.activeTab,
      workspace: state.workspace,
      invoice: state.invoice,
      receipt: state.receipt,
      workOrders: state.workOrders,
      workOrderWorkspace: state.workOrderWorkspace,
      musicians: state.musicians,
      assignments: state.calendar.assignments,
      blackouts: state.calendar.blackouts,
      hiddenSeededEventKeys: state.calendar.hiddenSeededEventKeys,
      musicianShowBookings: state.musicianShowBookings,
    };
    safeStorageSet(STORAGE_KEY, JSON.stringify(payload));
  } catch (error) {
    // ignore storage failures
  }
}

function persistVisibleFormState() {
  if (state.activeTab === "agreement") {
    syncAgreementStateFromForm();
    updatePerformanceHoursFromTimes();
    updateHolidayFromDate();
    updateAgreementPreview();
  } else if (state.activeTab === "invoice") {
    updateInvoicePreview();
  } else if (state.activeTab === "receipt") {
    updateReceiptPreview();
  }
  saveDraft();
}

function loadDraft() {
  try {
    const stored = safeStorageGet(STORAGE_KEY);
    if (!stored) return;
    const parsed = JSON.parse(stored);
    if (parsed.bandDNA && typeof parsed.bandDNA === "object") {
      state.bandDNA = { ...state.bandDNA, ...parsed.bandDNA };
      if (Array.isArray(parsed.bandDNA.lineups)) state.bandDNA.lineups = parsed.bandDNA.lineups;
      if (Array.isArray(parsed.bandDNA.addons)) state.bandDNA.addons = parsed.bandDNA.addons;
      if (Array.isArray(parsed.bandDNA.genreTags)) state.bandDNA.genreTags = parsed.bandDNA.genreTags;
    }
    if (parsed.agreement) {
      state.agreement = { ...state.agreement, ...parsed.agreement };
    }
    if (parsed.quoteBuilder && typeof parsed.quoteBuilder === "object") {
      state.quoteBuilder = {
        ...state.quoteBuilder,
        ...parsed.quoteBuilder,
        options: Array.isArray(parsed.quoteBuilder.options)
          ? parsed.quoteBuilder.options
          : state.quoteBuilder.options,
      };
    }
    if (parsed.agreementDraftContext) {
      state.agreementDraftContext = {
        ...state.agreementDraftContext,
        ...parsed.agreementDraftContext,
      };
    }
    if (parsed.activeTab) {
      state.activeTab = parsed.activeTab;
    }
    if (parsed.workspace && typeof parsed.workspace === "object") {
      state.workspace = { ...state.workspace, ...parsed.workspace };
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
    if (parsed.workOrderWorkspace && typeof parsed.workOrderWorkspace === "object") {
      state.workOrderWorkspace = {
        ...state.workOrderWorkspace,
        ...parsed.workOrderWorkspace,
        promoBuilder: {
          ...state.workOrderWorkspace.promoBuilder,
          ...(parsed.workOrderWorkspace.promoBuilder || {}),
        },
        bandProfile: {
          ...state.workOrderWorkspace.bandProfile,
          ...(parsed.workOrderWorkspace.bandProfile || {}),
        },
        businessProfile: {
          ...state.workOrderWorkspace.businessProfile,
          ...(parsed.workOrderWorkspace.businessProfile || {}),
        },
        pricingProfile: {
          ...state.workOrderWorkspace.pricingProfile,
          ...(parsed.workOrderWorkspace.pricingProfile || {}),
        },
        epk: {
          ...state.workOrderWorkspace.epk,
          ...(parsed.workOrderWorkspace.epk || {}),
        },
        promoTemplates: Array.isArray(parsed.workOrderWorkspace.promoTemplates)
          ? parsed.workOrderWorkspace.promoTemplates
          : state.workOrderWorkspace.promoTemplates,
        followUps: Array.isArray(parsed.workOrderWorkspace.followUps)
          ? parsed.workOrderWorkspace.followUps
          : state.workOrderWorkspace.followUps,
      };
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
    if (Array.isArray(parsed.hiddenSeededEventKeys)) {
      state.calendar.hiddenSeededEventKeys = parsed.hiddenSeededEventKeys;
    }
    if (Array.isArray(parsed.musicianShowBookings)) {
      state.musicianShowBookings = parsed.musicianShowBookings;
    }
  } catch (error) {
    // ignore invalid storage
  }
}

function loadContractDraftSnapshots() {
  try {
    const stored = safeStorageGet(CONTRACT_DRAFT_SNAPSHOTS_KEY);
    if (!stored) return {};
    const parsed = JSON.parse(stored);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    return {};
  }
}

function saveContractDraftSnapshots(snapshots) {
  try {
    safeStorageSet(CONTRACT_DRAFT_SNAPSHOTS_KEY, JSON.stringify(snapshots));
  } catch (error) {
    // ignore storage failures
  }
}

function hydrateBandProfileFromLegacyData() {
  const profile = state.workOrderWorkspace.bandProfile;
  const epk = state.workOrderWorkspace.epk;

  if (!profile.bandName && epk.bandName) profile.bandName = epk.bandName;
  if (!profile.signoffBand && epk.bandName) profile.signoffBand = epk.bandName;
  if (!profile.signoffEmail && epk.contactEmail) profile.signoffEmail = epk.contactEmail;
  if (!profile.genreLine && epk.genres) profile.genreLine = epk.genres;
  if (!profile.genreTags && epk.genres) profile.genreTags = epk.genres;
  if (!profile.lineupSummary && epk.lineupOptions) profile.lineupSummary = epk.lineupOptions;
  if (!profile.introLine && epk.lineupOptions) profile.introLine = epk.lineupOptions;
  if (!profile.eventFitLine && epk.bookingNotes) profile.eventFitLine = epk.bookingNotes;
  if (!profile.bioShortDraft && epk.shortBio) profile.bioShortDraft = epk.shortBio;
  if (!profile.bioFullDraft && epk.longBio) profile.bioFullDraft = epk.longBio;
}

function hydrateBookingProfilesFromLegacyData() {
  const business = state.workOrderWorkspace.businessProfile;
  const pricing = state.workOrderWorkspace.pricingProfile;
  const profile = state.workOrderWorkspace.bandProfile;
  const epk = state.workOrderWorkspace.epk;

  if (!business.businessName && profile.bandName) business.businessName = profile.bandName;
  if (!business.contactEmail && epk.contactEmail) business.contactEmail = epk.contactEmail;
  if (!business.contactPhone && epk.contactPhone) business.contactPhone = epk.contactPhone;
  if ((!business.defaultLineup || business.defaultLineup === "Duo") && profile.lineupSummary) {
    const lineupText = String(profile.lineupSummary).toLowerCase();
    if (lineupText.includes("full band")) {
      business.defaultLineup = "Full Band";
    } else if (lineupText.includes("duo")) {
      business.defaultLineup = "Duo";
    }
  }

  if (!pricing.defaultDepositAmount) {
    pricing.defaultDepositAmount = state.agreement.depositAmount || String(depositDefault);
  }
  if (!pricing.defaultEventType && state.agreement.eventType) {
    pricing.defaultEventType = state.agreement.eventType;
  }
  if (!pricing.defaultBandConfig) {
    pricing.defaultBandConfig = state.agreement.bandConfig || business.defaultLineup || "Duo";
  }
  if (state.agreement.depositEnabled) {
    pricing.defaultDepositEnabled = true;
  }
  if (!pricing.baseRate && state.agreement.feeTotal) {
    pricing.baseRate = state.agreement.feeTotal;
  }
  if (!pricing.defaultPerformanceHours && state.agreement.hours) {
    pricing.defaultPerformanceHours = state.agreement.hours;
  }
  if (!pricing.depositModel && state.bandDNA.depositModel) {
    pricing.depositModel = state.bandDNA.depositModel;
  }
}

function applyAgreementDefaultsFromProfiles(force = false) {
  const business = state.workOrderWorkspace.businessProfile;
  const pricing = state.workOrderWorkspace.pricingProfile;
  if (force) {
    state.agreement.bandConfig = state.agreement.bandConfig || "";
  } else if (state.agreement.bandConfig) {
    state.agreement.bandConfig =
      state.agreement.bandConfig
      || pricing.defaultBandConfig
      || business.defaultLineup
      || "";
  }
  if (force || !state.agreement.eventType) {
    state.agreement.eventType = pricing.defaultEventType || state.agreement.eventType || "";
  }
  if (force || !state.agreement.hours) {
    state.agreement.hours = pricing.defaultPerformanceHours || state.agreement.hours || "";
  }
  if (force || !state.agreement.feeTotal) {
    state.agreement.feeTotal = "";
    state.agreement.feeManualOverride = false;
  }
  if (force || !state.agreement.depositAmount) {
    state.agreement.depositAmount = pricing.defaultDepositAmount || String(depositDefault);
  }
  if (force || (!state.agreement.depositEnabled && !state.agreement.depositWaived)) {
    state.agreement.depositEnabled = pricing.defaultDepositEnabled !== false;
  }
}

function createLineupRateEntry(lineup = "", rate = "") {
  return {
    id: `lineup-rate-${Math.random().toString(36).slice(2, 10)}`,
    lineup,
    rate,
  };
}

function normalizeLineupName(value = "") {
  return String(value).trim().toLowerCase();
}

function repairLineupRates() {
  const musicianRate = parseFloat(
    state.bandDNA.musicianHourlyRate || 50);
  if (!Array.isArray(state.bandDNA.lineups)) return;
  let changed = false;
  state.bandDNA.lineups = state.bandDNA.lineups.map((lineup) => {
    const rate = parseFloat(lineup.rate || 0);
    if (rate > 0) return lineup;
    const count = parseFloat(lineup.count || 0) ||
      getLineupMusicianCount(lineup.name || "");
    if (musicianRate > 0 && count > 0) {
      changed = true;
      return { ...lineup, rate: String(musicianRate * count), count };
    }
    return lineup;
  });
  if (changed) saveDraft();
}

function getDefaultRateForLineup(lineup = "") {
  const musicianRate = parseFloat(
    state.bandDNA.musicianHourlyRate || 50
  );
  const count = getLineupMusicianCount(lineup);
  if (musicianRate > 0 && count > 0) {
    return String(musicianRate * count);
  }
  const normalized = normalizeLineupName(lineup);
  const pricing = state.workOrderWorkspace.pricingProfile;
  if (normalized) {
    const match = (pricing.lineupRates || []).find(
      (e) => normalizeLineupName(e.lineup) === normalized
    );
    if (match?.rate) return match.rate;
  }
  return pricing.baseRate || "";
}

function applyLineupRateToAgreement() {
  if (state.agreement.feeManualOverride) return;
  state.agreement.feeTotal = "";
  const feeInput = document.getElementById("feeTotal");
  if (feeInput) feeInput.value = "";
}

function setBandProfileStatus(message = "", isError = false) {
  const status = document.getElementById("bandProfileStatus");
  if (!status) return;
  status.textContent = message;
  status.classList.toggle("error", Boolean(isError && message));
  status.classList.toggle("success", Boolean(message && !isError));
}

function syncReusableBandProfileFromForm() {
  const business = state.workOrderWorkspace.businessProfile;
  const pricing = state.workOrderWorkspace.pricingProfile;

  business.businessName = document.getElementById("bandProfileBusinessName")?.value.trim() || business.businessName;
  business.contactEmail = document.getElementById("bandProfileContactEmail")?.value.trim() || "";
  business.contactPhone = document.getElementById("bandProfileContactPhone")?.value.trim() || "";
  business.defaultLineup = document.getElementById("bandProfileDefaultLineup")?.value || business.defaultLineup || "Duo";

  pricing.defaultBandConfig = business.defaultLineup || pricing.defaultBandConfig || "Duo";
  pricing.defaultPerformanceHours = document.getElementById("bandProfileDefaultHours")?.value.trim() || "";
  pricing.baseRate = document.getElementById("bandProfileBaseRate")?.value.trim() || "";
  pricing.lineupRates = Array.from(document.querySelectorAll("[data-lineup-rate-row]"))
    .map((row) => ({
      id: row.getAttribute("data-lineup-rate-row") || createLineupRateEntry().id,
      lineup: row.querySelector("[data-lineup-rate-name]")?.value.trim() || "",
      rate: row.querySelector("[data-lineup-rate-value]")?.value.trim() || "",
    }))
    .filter((entry) => entry.lineup || entry.rate);
  pricing.defaultDepositAmount =
    document.getElementById("bandProfileDefaultDepositAmount")?.value.trim() || String(depositDefault);
  pricing.defaultDepositEnabled = Boolean(document.getElementById("bandProfileDefaultDepositEnabled")?.checked);
}

function renderLineupRateEntries() {
  const wrap = document.getElementById("bandProfileLineupRates");
  if (!wrap) return;
  const pricing = state.workOrderWorkspace.pricingProfile;
  wrap.innerHTML = "";

  if (!(pricing.lineupRates || []).length) {
    wrap.innerHTML = "<p class=\"inline-help\">No lineup-specific rates yet. Add one only if you price different lineups differently.</p>";
    return;
  }

  pricing.lineupRates.forEach((entry) => {
    const row = document.createElement("div");
    row.className = "lineup-rate-row";
    row.setAttribute("data-lineup-rate-row", entry.id);
    row.innerHTML = `
      <label>
        Lineup name
        <input data-lineup-rate-name placeholder="Duo or Trio" value="${escapeHtml(entry.lineup || "")}" />
      </label>
      <label>
        Hourly rate
        <input data-lineup-rate-value placeholder="$150/hr" value="${escapeHtml(entry.rate || "")}" />
      </label>
      <button class="btn ghost lineup-rate-remove" type="button">Remove</button>
    `;
    wrap.appendChild(row);
  });

  wrap.querySelectorAll(".lineup-rate-remove").forEach((btn) => {
    btn.addEventListener("click", () => {
      const row = btn.closest("[data-lineup-rate-row]");
      if (!row) return;
      const id = row.getAttribute("data-lineup-rate-row");
      state.workOrderWorkspace.pricingProfile.lineupRates =
        state.workOrderWorkspace.pricingProfile.lineupRates.filter((entry) => entry.id !== id);
      renderLineupRateEntries();
      saveDraft();
      setBandProfileStatus("");
    });
  });
}

function renderReusableBandProfile() {
  const business = state.workOrderWorkspace.businessProfile;
  const pricing = state.workOrderWorkspace.pricingProfile;
  const setValue = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.value = value || "";
  };
  const setChecked = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.checked = Boolean(value);
  };

  setValue("bandProfileBusinessName", business.businessName);
  setValue("bandProfileContactEmail", business.contactEmail);
  setValue("bandProfileContactPhone", business.contactPhone);
  setValue("bandProfileDefaultLineup", business.defaultLineup || pricing.defaultBandConfig || "Duo");
  setValue("bandProfileDefaultHours", pricing.defaultPerformanceHours);
  setValue("bandProfileBaseRate", pricing.baseRate);
  setValue("bandProfileDefaultDepositAmount", pricing.defaultDepositAmount || String(depositDefault));
  setChecked("bandProfileDefaultDepositEnabled", pricing.defaultDepositEnabled !== false);
  renderLineupRateEntries();
}

function saveReusableBandProfile() {
  syncReusableBandProfileFromForm();
  saveDraft();
  applyAgreementDefaultsFromProfiles(false);
  renderReusableBandProfile();
  setBandProfileStatus("Saved ✓");
  const panel = document.getElementById("bandProfilePanel");
  if (panel) {
    panel.classList.add("saved-flash");
    window.setTimeout(() => panel.classList.remove("saved-flash"), 1400);
  }
}

function applyBandProfileToPromoBuilder(force = false) {
  const builder = state.workOrderWorkspace.promoBuilder;
  const profile = state.workOrderWorkspace.bandProfile;

  if (force || !builder.genre) builder.genre = profile.genreTags || profile.genreLine || "";
  if (force || !builder.lineup) builder.lineup = profile.lineupSummary || "";
  if (force || !builder.contactName) builder.contactName = builder.contactName || "";
}

function getContractDraftSnapshotKey(contract = {}) {
  if (contract?.event_id) return `event:${contract.event_id}`;
  if (contract?.id) return `contract:${contract.id}`;
  if (contract?.name) return `name:${String(contract.name).trim().toLowerCase()}`;
  return "";
}

function saveAgreementSnapshotForContract(contract = {}) {
  const snapshots = loadContractDraftSnapshots();
  const keys = [
    contract?.event_id ? `event:${contract.event_id}` : "",
    contract?.id ? `contract:${contract.id}` : "",
    contract?.name ? `name:${String(contract.name).trim().toLowerCase()}` : "",
  ].filter(Boolean);
  if (!keys.length) return;
  keys.forEach((key) => {
    snapshots[key] = {
      agreement: { ...state.agreement },
      savedAt: new Date().toISOString(),
    };
  });
  saveContractDraftSnapshots(snapshots);
}

function getAgreementSnapshotForContract(contract = {}) {
  const snapshots = loadContractDraftSnapshots();
  const keys = [
    contract?.event_id ? `event:${contract.event_id}` : "",
    contract?.id ? `contract:${contract.id}` : "",
    contract?.name ? `name:${String(contract.name).trim().toLowerCase()}` : "",
  ].filter(Boolean);
  for (const key of keys) {
    if (snapshots[key]?.agreement) return snapshots[key].agreement;
  }
  return null;
}

function setAgreementDraftContext(contract = {}) {
  state.agreementDraftContext = {
    contractId: contract?.id || "",
    eventId: contract?.event_id || "",
    name: contract?.name || "",
  };
}

function getActiveAgreementDraftContract() {
  const context = state.agreementDraftContext || {};
  return {
    id: context.contractId || "",
    event_id: context.eventId || "",
    name: context.name || "",
  };
}

function persistAgreementDraftSnapshot() {
  const activeContract = getActiveAgreementDraftContract();
  if (!activeContract.id && !activeContract.event_id && !activeContract.name) return;
  saveAgreementSnapshotForContract(activeContract);
}

function saveCalendarSettings() {
  try {
    const payload = {
      overridePin: state.calendar.overridePin,
    };
    safeStorageSet(CALENDAR_SETTINGS_KEY, JSON.stringify(payload));
  } catch (error) {
    // ignore storage failures
  }
}

function loadCalendarSettings() {
  try {
    const stored = safeStorageGet(CALENDAR_SETTINGS_KEY);
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

function normalizeDateValue(dateStr) {
  if (!dateStr) return "";
  const trimmed = String(dateStr).trim();
  if (!trimmed) return "";
  if (trimmed.includes("-")) {
    const [year, month, day] = trimmed.split("-").map(Number);
    if (!year || !month || !day) return "";
    return `${String(year).padStart(4, "0")}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  }
  if (trimmed.includes("/")) {
    const [month, day, year] = trimmed.split("/").map(Number);
    if (!year || !month || !day) return "";
    return `${String(year).padStart(4, "0")}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  }
  return "";
}

function normalizeTimeValue(timeStr) {
  if (!timeStr) return "";
  const parsed = parseTimeValue(String(timeStr).trim());
  if (!parsed) return "";
  return `${String(parsed.hours).padStart(2, "0")}:${String(parsed.minutes).padStart(2, "0")}`;
}

function parseLocalDate(dateStr) {
  const normalized = normalizeDateValue(dateStr);
  if (!normalized) return null;
  const [year, month, day] = normalized.split("-").map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day);
}

function combineDateTime(dateStr, timeStr) {
  const normalizedDate = normalizeDateValue(dateStr);
  const normalizedTime = normalizeTimeValue(timeStr);
  if (!normalizedDate || !normalizedTime) return null;
  const [year, month, day] = normalizedDate.split("-").map(Number);
  if (!year || !month || !day) return null;
  const parsedTime = parseTimeValue(normalizedTime);
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

function formatMessageDate(value) {
  if (!value) return "your event date";
  const formatted = formatDate(value);
  if (!formatted) return value;
  const match = formatted.match(/^([A-Za-z]+)(.*)$/);
  if (!match) return formatted;
  return `${match[1].toUpperCase()}${match[2]}`;
}

function buildMessage(type) {
  const clientName = state.agreement.clientName || "there";
  const eventDate = formatMessageDate(state.agreement.performanceDate);
  const invoiceDate = formatMessageDate(state.invoice.issueDate || state.agreement.performanceDate);
  const receiptDate = formatMessageDate(state.receipt.paymentDate || state.agreement.performanceDate);
  const venue = state.agreement.venueAddress || "your venue";
  const venueLabel = venue === "your venue" ? venue : venue.replace(/\s+/g, " ").trim();

  if (type === "invoice") {
    const subject = `Rust and Ruin Invoice – ${invoiceDate}`;
    const body = `Hello ${state.invoice.clientName || clientName},\n\nThank you so much again for the opportunity to work with you.\n\nAttached is your invoice for the performance on ${eventDate}${venueLabel !== "your venue" ? ` at ${venueLabel}` : ""}. Please let us know if you have any questions at all. We're happy to help and really look forward to performing for you.\n\nThanks,\nBeth and Josh\nRust and Ruin\nInstagram: @Rust and Ruin\nFacebook: @rustandruinvt`;
    return { title: "Invoice Message", subject, body };
  }

  if (type === "receipt") {
    const subject = `Rust and Ruin Receipt – ${receiptDate}`;
    const body = `Hello ${state.receipt.clientName || clientName},\n\nThank you so much.\n\nAttached is your receipt for the performance on ${eventDate}${venueLabel !== "your venue" ? ` at ${venueLabel}` : ""}. We truly enjoyed performing for you and really appreciate the opportunity to be part of your event. Please keep us in mind for future celebrations.\n\nThanks,\nBeth and Josh\nRust and Ruin\nInstagram: @Rust and Ruin\nFacebook: @rustandruinvt`;
    return { title: "Receipt Message", subject, body };
  }

  const subject = `Rust and Ruin Performance Agreement – ${eventDate}`;
  const contractLink = state.workspace.contractShareId
    ? `https://gigos.netlify.app/contract.html?id=${state.workspace.contractShareId}`
    : "";
  const signingInstructions = contractLink
    ? `To sign digitally, click this link:\n${contractLink}\n\nYou can type your full legal name and click 'I agree and sign this contract.' Your typed name serves as your legal signature and will be recorded with a timestamp.`
    : `You're welcome to sign in whichever way is easiest for you:\n- sign with your finger or stylus on your phone or tablet and send back a screenshot\n- print it, sign it, and send us a photo or scan\n- sign the hard copy and mail it back to us`;
  const body = `Hello ${clientName},\n\nThank you so much for the opportunity to work with you. We're truly excited and really look forward to performing for you.\n\nAttached is your contract for the performance on ${eventDate}${venueLabel !== "your venue" ? ` at ${venueLabel}` : ""}. To secure your date, please sign the contract and send the signed copy back to us.\n\n${signingInstructions}\n\nPlease let us know if you have any questions at all. We're happy to help and look forward to working with you.\n\nThanks,\nBeth and Josh\nRust and Ruin\nInstagram: @Rust and Ruin\nFacebook: @rustandruinvt`;
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

function getEasterDate(year) {
  // Gregorian computus
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

function getHolidayWeekendLabel(date) {
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
  const stPatricksDay = new Date(year, 2, 17);
  const easter = getEasterDate(year);

  const christmasWeekStart = new Date(year, 11, 21);
  const christmasWeekEnd = new Date(year, 11, 27);

  const newYearsStart = new Date(year, 11, 31);
  const newYearsEnd = new Date(year + 1, 0, 1);

  if (isBetween(date, memorialWeekendStart, memorialWeekendEnd)) return "Memorial Day Weekend";
  if (isBetween(date, laborWeekendStart, laborWeekendEnd)) return "Labor Day Weekend";
  if (isBetween(date, presidentsWeekendStart, presidentsWeekendEnd)) return "Presidents Day Weekend";
  if (isBetween(date, columbusWeekendStart, columbusWeekendEnd)) return "Columbus Day Weekend";
  if (isBetween(date, thanksgivingWeekendStart, thanksgivingWeekendEnd)) return "Thanksgiving Weekend";
  if (isBetween(date, julyFourthStart, julyFourthEnd)) return "Independence Day Weekend";
  if (isBetween(date, halloweenWeekend.start, halloweenWeekend.end)) return "Halloween Weekend";
  if (isBetween(date, valentinesWeekend.start, valentinesWeekend.end)) return "Valentine's Weekend";
  if (isBetween(date, stPatricksDay, stPatricksDay)) return "St. Patrick's Day";
  if (isBetween(date, easter, easter)) return "Easter";
  if (isBetween(date, christmasWeekStart, christmasWeekEnd)) return "Christmas Week";
  if (isBetween(date, newYearsStart, newYearsEnd)) return "New Year's";
  return "";
}

function isHolidayWeekend(date) {
  return Boolean(getHolidayWeekendLabel(date));
}

function updateHolidayFromDate() {
  const dateValue = document.getElementById("performanceDate").value;
  if (!dateValue) return;

  const [year, month, day] = dateValue.split("-").map(Number);
  const selectedDate = new Date(year, month - 1, day);
  const holidayLabel = getHolidayWeekendLabel(selectedDate);
  const isHoliday = Boolean(holidayLabel);

  state.agreement.holidayWeekend = isHoliday;
  const holidayCheckbox = document.getElementById("holidayWeekend");
  if (holidayCheckbox) holidayCheckbox.checked = isHoliday;

  const warning = document.getElementById("holidayWarning");
  if (warning) {
    warning.textContent = holidayLabel
      ? `THIS DATE FALLS ON ${holidayLabel.toUpperCase()}`
      : "THIS IS A HOLIDAY WEEKEND";
    warning.classList.toggle("hidden", !isHoliday);
  }
}

function setText(selector, value) {
  document.querySelectorAll(selector).forEach((el) => {
    el.textContent = value;
  });
}

function getAgreementTotals() {
  const depositEnabled = state.agreement.depositEnabled !== false;
  const depositWaived = state.agreement.depositWaived === true;
  const depositConfigured = depositEnabled || depositWaived;
  const rawDepositAmount = depositConfigured
    ? state.agreement.depositAmount
      ? toNumber(state.agreement.depositAmount)
      : depositDefault
    : 0;
  const depositCredits = depositEnabled && !depositWaived
    ? (state.agreement.promoCredit ? 5 : 0) +
      (state.agreement.liveVideoCredit ? 10 : 0)
    : 0;
  const adjustedDeposit = depositWaived
    ? 0
    : !depositEnabled
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
  const baseBandMembers =
    state.agreement.bandConfig === "Full Band"
      ? 4
      : state.agreement.bandConfig === "Duo"
      ? 2
      : 0;
  const extraMembers = toNumber(state.agreement.additionalMusicians);
  const bandMembers = baseBandMembers + (extraMembers > 0 ? extraMembers : 0);
  const manualPerformanceHours = toNumber(state.agreement.hours);
  const performanceHours =
    manualPerformanceHours > 0
      ? manualPerformanceHours
      : hoursBetweenTimes(
          state.agreement.performanceTime,
          state.agreement.performanceEndTime
        );
  const nonPerformanceHours = state.agreement.chargeNonPerformance
    ? toNumber(state.agreement.nonPerformanceHours)
    : 0;
  const totalContractedHours = performanceHours + nonPerformanceHours;
  let hourlyRate = toNumber(getDefaultRateForLineup(state.agreement.bandConfig));
  if (hourlyRate === 0 && state.bandDNA.musicianHourlyRate) {
    const count = state.agreement.bandConfig === "Full Band" ? 4
      : state.agreement.bandConfig === "Duo" ? 2 : 1;
    hourlyRate = toNumber(state.bandDNA.musicianHourlyRate) * count;
  }
  const performanceFee = performanceHours * hourlyRate;
  const onsiteFee = nonPerformanceHours * hourlyRate;
  const autoCalculatedTotal = totalContractedHours * hourlyRate;
  const rawFeeTotal = String(state.agreement.feeTotal || "").replace(/[^0-9.]/g, "");
  const manualOverrideTotal = state.agreement.feeManualOverride ? toNumber(rawFeeTotal) : 0;
  const backlineFee = state.agreement.backlineSound ? 50 : 0;
  const holidayMultiplier = state.agreement.holidayWeekend
    ? state.agreement.holidayRateType === "double"
      ? 2
      : state.agreement.holidayRateType === "timeAndHalf"
      ? 1.5
      : 1
    : 1;
  const holidayFee =
    !state.agreement.feeManualOverride && state.agreement.holidayWeekend
      ? autoCalculatedTotal * (holidayMultiplier - 1)
      : 0;
  const performanceFeeEffective =
    (state.agreement.feeManualOverride ? manualOverrideTotal : autoCalculatedTotal) +
    holidayFee +
    backlineFee;
  const discountInputEl = document.getElementById("friendsFamilyDiscountAmount");
  const discountRawValue =
    discountInputEl?.value || state.agreement.friendsFamilyDiscountAmount || "0";
  const friendsFamilyDiscountAmount = state.agreement.friendsFamilyDiscount
    ? Math.max(0, toNumber(discountRawValue))
    : 0;
  const cappedFriendsFamilyDiscount = Math.min(
    friendsFamilyDiscountAmount,
    performanceFeeEffective
  );
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
  const eventSubtotal = Math.max(0, performanceFeeEffective - cappedFriendsFamilyDiscount);
  const feeSubtotal = eventSubtotal + addOnTotal + adjustedDeposit;
  const totalWithDeposit = eventSubtotal + addOnTotal + adjustedDeposit + travelFee + lodgingFee;

  const depositModel =
    state.bandDNA.depositModel === "credited" ? "credited" : "addition";
  const depositFeeBase = Math.max(0, eventSubtotal);
  const depositDueNow = adjustedDeposit;
  let totalContractValue = depositFeeBase;
  let balanceDueAtShow = depositFeeBase;
  let totalClientPays = depositFeeBase;

  if (!depositEnabled || depositWaived || depositDueNow <= 0) {
    totalContractValue = depositFeeBase;
    balanceDueAtShow = depositFeeBase;
    totalClientPays = depositFeeBase;
  } else if (depositModel === "credited") {
    totalContractValue = depositFeeBase;
    balanceDueAtShow = Math.max(0, depositFeeBase - depositDueNow);
    totalClientPays = depositFeeBase;
  } else {
    totalContractValue = depositFeeBase + depositDueNow;
    balanceDueAtShow = depositFeeBase;
    totalClientPays = depositFeeBase + depositDueNow;
  }

  return {
    depositModel,
    depositFeeBase,
    totalContractValue,
    balanceDueAtShow,
    depositDueNow,
    totalClientPays,
    depositAmount: adjustedDeposit,
    rawDepositAmount,
    depositEnabled,
    depositWaived,
    depositCredits,
    addOnTotal,
    feeSubtotal,
    totalWithDeposit,
    performanceFee,
    performanceFeeAuto: autoCalculatedTotal,
    hourlyRate,
    travelFee,
    travelHours,
    bandMembers,
    lodgingFee,
    addonFees,
    onsiteFee,
    travelBandMembers,
    travelLodgingTotal,
    holidayFee,
    holidayMultiplier,
    friendsFamilyDiscountAmount: cappedFriendsFamilyDiscount,
    performanceHoursTotal: performanceHours,
    totalContractedHours,
    eventSubtotal,
    backlineFee,
    performanceFeeEffective,
    autoCalculatedTotal,
    manualOverrideActive: Boolean(state.agreement.feeManualOverride),
    manualOverrideTotal,
  };
}

function getSelectedAddonSummary(totals) {
  const labelMap = {
    addonTent: "Tent",
    addonLights: "Lights",
    addonGenerator: "Generator",
    addonAdditionalSong: "Additional song",
    addonRecordedSong: "Recorded song beyond first",
    addonMCing: "MC'ing",
    addonDJing: "DJ'ing",
  };

  return Object.entries(totals.addonFees)
    .filter(([key]) => state.agreement[key])
    .map(([key]) => labelMap[key]);
}

function updateFeesAndDepositsFields(totals) {
  if ((totals.depositEnabled || totals.depositWaived) && !state.agreement.depositAmount) {
    state.agreement.depositAmount = String(depositDefault);
    const depositInput = document.getElementById("depositAmount");
    if (depositInput) depositInput.value = state.agreement.depositAmount;
  }

  const feeValue = totals.manualOverrideActive
    ? toMoney(totals.manualOverrideTotal)
    : toMoney(totals.performanceFeeEffective);
  if (!state.agreement.feeManualOverride || !state.agreement.feeTotal) {
    state.agreement.feeTotal = feeValue;
  }
  const feeInput = document.getElementById("feeTotal");
  if (feeInput) {
    feeInput.dataset.programmatic = "1";
    feeInput.value = state.agreement.feeTotal || feeValue;
    feeInput.dataset.programmatic = "";
  }

  const breakdown = document.getElementById("feeRateBreakdown");
  if (breakdown) {
    const autoLine = `${totals.totalContractedHours.toFixed(2)} hours × ${toMoney(totals.hourlyRate)}/hr = ${toMoney(totals.autoCalculatedTotal)}`;
    breakdown.textContent = totals.manualOverrideActive
      ? `Manual total override active. Auto-calculated base would be ${autoLine}.`
      : autoLine;
  }

  const backlineInput = document.getElementById("feeBackline");
  if (backlineInput) {
    backlineInput.value = totals.backlineFee > 0
      ? `${toMoney(totals.backlineFee)} included`
      : "$0.00";
  }

  const discountInput = document.getElementById("feeDiscount");
  if (discountInput) {
    discountInput.value = totals.friendsFamilyDiscountAmount > 0
      ? `-${toMoney(totals.friendsFamilyDiscountAmount)}`
      : "$0.00";
  }

  const addonsInput = document.getElementById("feeAddons");
  if (addonsInput) {
    addonsInput.value = toMoney(totals.addOnTotal);
  }

  const depositDueInput = document.getElementById("feeDepositDue");
  if (depositDueInput) depositDueInput.value = toMoney(totals.depositAmount);

  const dayOfDue = Math.max(
    0,
    totals.balanceDueAtShow + totals.addOnTotal + totals.travelFee + totals.lodgingFee
  );
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
    "[data-fill='totalContractedHoursDisplay']",
    (
      totals.performanceHoursTotal +
      (state.agreement.chargeNonPerformance
        ? toNumber(state.agreement.nonPerformanceHours)
        : 0)
    ).toFixed(2)
  );
  setText(
    "[data-fill='holidayFee']",
    state.agreement.holidayWeekend ? toMoney(totals.holidayFee) : "$0.00"
  );
  setText(
    "[data-fill='holidayRateType']",
    state.agreement.holidayWeekend
      ? state.agreement.holidayRateType === "double"
        ? "Double"
        : state.agreement.holidayRateType === "timeAndHalf"
        ? "Time and a half"
        : "Regular"
      : "Standard"
  );
  setText("[data-fill='eventType']", state.agreement.eventType || "__");
  setText("[data-fill='bandConfig']", state.agreement.bandConfig || "__");
  setText("[data-fill='venueAddress']", state.agreement.venueAddress || "__");
  setText(
    "[data-fill='depositPaid']",
    totals.depositWaived
      ? `Waived ${toMoney(totals.rawDepositAmount)}`
      : state.agreement.depositPaid || "__"
  );
  setText("[data-fill='depositDue']", toMoney(totals.depositAmount));
  setText("[data-fill='amountDueDayOf']", state.agreement.amountDueDayOf || "__");
  setText("[data-fill='requestedSongs']", state.agreement.requestedSongs || "None");
  setText("[data-fill='signatureName']", state.agreement.signatureName || "__");
  setText("[data-fill='agreementCreatedDate']", state.agreement.agreementCreatedDate || todayString());

  const promoBlock = document.getElementById("promoCreditsBlock");
  if (promoBlock) {
    promoBlock.classList.toggle("hidden", totals.depositCredits <= 0);
  }

  setText("[data-fill='performanceFee']", toMoney(totals.performanceFee));
  setText("[data-fill='performanceFeeAuto']", toMoney(totals.performanceFeeAuto));
  setText("[data-fill='nonPerformanceFee']", toMoney(totals.onsiteFee));
  setText("[data-fill='hourlyRate']", toMoney(totals.hourlyRate));
  setText("[data-fill='hourlyRateBreakdown']", `${totals.totalContractedHours.toFixed(2)} hours × ${toMoney(totals.hourlyRate)}/hr = ${toMoney(totals.autoCalculatedTotal)}`);
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
    totals.depositWaived
      ? toMoney(totals.rawDepositAmount)
      : totals.depositCredits > 0
      ? `-${toMoney(totals.depositCredits)}`
      : "$0.00"
  );
  setText("[data-fill='addonTotal']", toMoney(totals.addOnTotal));
  setText("[data-fill='friendsFamilyDiscount']", toMoney(totals.friendsFamilyDiscountAmount));
  setText(
    "[data-fill='friendsFamilyDiscountDisplay']",
    totals.friendsFamilyDiscountAmount > 0
      ? `-${toMoney(totals.friendsFamilyDiscountAmount)}`
      : "$0.00"
  );
  setText("[data-fill='feesSubtotal']", toMoney(totals.feeSubtotal));
  setText("[data-fill='totalContractValue']", toMoney(totals.totalContractValue));
  setText("[data-fill='depositDueNow']", toMoney(totals.depositDueNow));
  setText("[data-fill='balanceDueAtShow']", toMoney(totals.balanceDueAtShow));
  setText(
    "[data-fill='totalWithDeposit']",
    toMoney(totals.totalClientPays + totals.addOnTotal + totals.travelFee + totals.lodgingFee)
  );

  const feeStr = toMoney(totals.depositFeeBase);
  const depStr = toMoney(totals.depositDueNow);
  const totStr = toMoney(totals.totalContractValue);
  const balStr = toMoney(totals.balanceDueAtShow);
  let contractDepositCopy = "";
  if (!totals.depositEnabled || totals.depositWaived || totals.depositDueNow <= 0) {
    contractDepositCopy = totals.depositWaived
      ? `No deposit is required to hold this date (waived preferred venue). The total contracted performance fee is ${feeStr}.`
      : `The total contracted performance fee is ${feeStr}.`;
  } else if (totals.depositModel === "credited") {
    contractDepositCopy =
      `The total fee for this event is ${feeStr}. A deposit of ${depStr} is due upon signing and ` +
      "will be credited toward the total fee. The remaining balance of " +
      `${balStr} is due on the day of the event.`;
  } else {
    contractDepositCopy =
      `The total performance fee is ${feeStr}. A deposit of ${depStr} is required in addition to hold this date, ` +
      `bringing the total amount due to ${totStr}. The deposit is due upon signing. The full performance fee of ` +
      `${feeStr} is due on the day of the event.`;
  }
  setText("[data-fill='contractDepositModelCopy']", contractDepositCopy);
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
  const selectedAddons = getSelectedAddonSummary(totals).join(", ");
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
    const performanceDate = document.getElementById("performanceDate")?.value || "";
    let holidayLabel = "";
    if (performanceDate) {
      const [year, month, day] = performanceDate.split("-").map(Number);
      if (year && month && day) {
        holidayLabel = getHolidayWeekendLabel(new Date(year, month - 1, day));
      }
    }
    warning.textContent = holidayLabel
      ? `THIS DATE FALLS ON ${holidayLabel.toUpperCase()}`
      : "THIS IS A HOLIDAY WEEKEND";
    warning.classList.toggle("hidden", !state.agreement.holidayWeekend);
  }

  const holidayDetails = document.getElementById("holidayDetails");
  if (holidayDetails) {
    holidayDetails.classList.toggle("hidden", !state.agreement.holidayWeekend);
  }

  const nonPerformanceField = document.getElementById("nonPerformanceHours");
  if (nonPerformanceField) {
    nonPerformanceField.disabled = !state.agreement.chargeNonPerformance;
  }

  const depositAmountInput = document.getElementById("depositAmount");
  if (depositAmountInput) {
    depositAmountInput.disabled = (!totals.depositEnabled && !totals.depositWaived) || totals.depositWaived;
  }

  const depositWaivedInput = document.getElementById("depositWaived");
  if (depositWaivedInput) {
    depositWaivedInput.disabled = false;
  }

  const promoCreditInput = document.getElementById("promoCredit");
  if (promoCreditInput) {
    promoCreditInput.disabled = !totals.depositEnabled || totals.depositWaived;
  }

  const liveVideoCreditInput = document.getElementById("liveVideoCredit");
  if (liveVideoCreditInput) {
    liveVideoCreditInput.disabled = !totals.depositEnabled || totals.depositWaived;
  }
  updateAgreementBookingWarning();
  updateAgreementStepSummary();
}

function updateAgreementStepSummary() {
  const clientLabel = document.querySelector("[data-booking-summary='client']");
  const dateLabel = document.querySelector("[data-booking-summary='date']");
  const typeLabel = document.querySelector("[data-booking-summary='type']");
  const pricingLabel = document.querySelector("[data-booking-summary='pricing']");
  if (clientLabel) clientLabel.textContent = state.agreement.clientName || "New booking";
  if (dateLabel) {
    dateLabel.textContent = state.agreement.performanceDate
      ? formatDate(state.agreement.performanceDate)
      : "Not set yet";
  }
  if (typeLabel) typeLabel.textContent = state.agreement.eventType || "Not set yet";
  if (pricingLabel) {
    if (!state.agreement.performanceDate || !state.agreement.bandConfig) {
      pricingLabel.textContent = "";
      return;
    }
    const totals = getAgreementTotals();
    const fee = totals.performanceFeeEffective || 0;
    const bandConfig = state.agreement.bandConfig || "";
    const hours = parseFloat(state.agreement.hours || 0);
    if (fee > 0) {
      pricingLabel.textContent = toMoney(fee);
    } else if (!bandConfig) {
      pricingLabel.textContent = "Select lineup";
    } else if (hours <= 0) {
      pricingLabel.textContent = "Set show times";
    } else {
      const rate = getDefaultRateForLineup(bandConfig);
      const rateNum = parseFloat(rate || 0);
      pricingLabel.textContent = rateNum > 0
        ? toMoney(rateNum * hours)
        : "Select lineup to calculate";
    }
  }
}

let quoteStatusPollTimer = null;
let quoteStatusChannel = null;

function getQuoteBuilderStatusEl() {
  return document.getElementById("quoteStatusArea");
}

function setQuoteBuilderStatus(message = "", isError = false) {
  const status = getQuoteBuilderStatusEl();
  if (!status) return;
  status.textContent = message;
  status.classList.toggle("warning", Boolean(message && isError));
  status.classList.toggle("success", Boolean(message && !isError));
}

function getQuoteMetadata(options = []) {
  return (Array.isArray(options) ? options : []).find((option) => option && typeof option === "object" && option.__meta)?.__meta || {};
}

function getRenderableQuoteOptions(options = []) {
  return (Array.isArray(options) ? options : []).filter((option) => {
    return option
      && typeof option === "object"
      && !option.__meta
      && (
        option.label
        || option.detail
        || option.sets
        || option.price !== undefined
        || option.deposit !== undefined
      );
  });
}

function getQuoteBuilderLink(quoteId = "") {
  if (!quoteId) return "";
  return `https://gigos.netlify.app/quote.html?id=${quoteId}`;
}

function formatQuoteStatusLabel(status = "") {
  const value = String(status || "").trim().toLowerCase();
  if (!value) return "No quote generated yet.";
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function buildDefaultQuoteOptionsFromBandDNA() {
  const lineups = Array.isArray(state.bandDNA.lineups) ? state.bandDNA.lineups : [];
  const minimumHours = parseFloat(state.bandDNA.minimumHours) || 2;
  const agreementHours = parseFloat(state.agreement.hours) || 0;
  const hours = agreementHours > 0 ? agreementHours : minimumHours;
  const discountAmount = state.agreement.friendsFamilyDiscount
    ? Math.max(0, toNumber(state.agreement.friendsFamilyDiscountAmount))
    : 0;
  const depositRequired = state.agreement.depositEnabled !== false && state.agreement.depositWaived !== true;
  const depositValue = depositRequired ? (state.bandDNA.defaultDeposit || 50) : 0;

  return lineups.slice(0, 2).map((lineup) => {
    const count = getLineupMusicianCount(lineup.name, lineup);
    const ratePerHour = parseFloat(lineup.rate)
      || (parseFloat(state.bandDNA.musicianHourlyRate || 50) * count);
    const basePrice = ratePerHour * hours;
    const price = Math.max(0, basePrice - discountAmount);
    const depositText = depositRequired
      ? `$${state.bandDNA.defaultDeposit || 50} deposit to hold your date`
      : "No deposit required";
    const discountText = discountAmount > 0 ? ` · $${formatNumberInput(discountAmount)} discount applied` : "";

    return {
      label: `${lineup.name} · ${hours} hrs`,
      sets: `${hours} hrs`,
      price: String(price),
      deposit: String(depositValue),
      detail: `${hours} hrs · Sound system included · ${depositText}${discountText}`,
      featured: false,
    };
  });
}

function getQuoteBuilderOptionsForRender() {
  const savedOptions = getRenderableQuoteOptions(state.quoteBuilder.options);
  if (savedOptions.length) return savedOptions.slice(0, 3);
  const defaults = buildDefaultQuoteOptionsFromBandDNA();
  return defaults.length ? defaults : [{
    label: "",
    sets: "",
    price: "",
    deposit: state.bandDNA.defaultDeposit || "",
    detail: "",
    featured: false,
  }];
}

function createQuoteOptionRowMarkup(option = {}, index = 0) {
  return `
    <div class="form-section booking-nested-section" data-quote-option-row="${index}">
      <div class="form-grid">
        <label>
          Label
          <input data-quote-field="label" placeholder="Duo · 3 hrs" value="${escapeHtml(option.label || "")}" />
        </label>
        <label>
          Price
          <input data-quote-field="price" type="number" min="0" step="1" placeholder="600" value="${escapeHtml(option.price || "")}" />
        </label>
        <label>
          Hours
          <input data-quote-field="sets" placeholder="2 hrs" value="${escapeHtml(option.sets || "")}" />
        </label>
        <label>
          Deposit
          <input data-quote-field="deposit" type="number" min="0" step="1" placeholder="50" value="${escapeHtml(option.deposit || "")}" />
        </label>
        <label>
          Detail
          <textarea data-quote-field="detail" placeholder="Sound included · $50 deposit">${escapeHtml(option.detail || "")}</textarea>
        </label>
        <label class="checkbox inline-note">
          <input data-quote-field="featured" type="checkbox" ${option.featured ? "checked" : ""} />
          Mark as Most popular
        </label>
      </div>
      <div class="inline-actions">
        <button class="btn ghost" type="button" data-remove-quote-option="${index}">Remove</button>
      </div>
    </div>
  `;
}

function renderQuoteOptionRows(options = []) {
  const wrap = document.getElementById("quoteOptionRows");
  if (!wrap) return;
  const rows = (Array.isArray(options) ? options : []).slice(0, 3);
  wrap.innerHTML = rows.map((option, index) => createQuoteOptionRowMarkup(option, index)).join("");
  const addBtn = document.getElementById("addQuoteOptionBtn");
  if (addBtn) addBtn.disabled = rows.length >= 3;
}

function collectQuoteOptionsFromDom() {
  return Array.from(document.querySelectorAll("[data-quote-option-row]"))
    .map((row) => ({
      label: row.querySelector("[data-quote-field='label']")?.value.trim() || "",
      sets: row.querySelector("[data-quote-field='sets']")?.value.trim() || "",
      price: row.querySelector("[data-quote-field='price']")?.value.trim() || "",
      deposit: row.querySelector("[data-quote-field='deposit']")?.value.trim() || "",
      detail: row.querySelector("[data-quote-field='detail']")?.value.trim() || "",
      featured: Boolean(row.querySelector("[data-quote-field='featured']")?.checked),
    }))
    .filter((option) => option.label || option.sets || option.price || option.deposit || option.detail);
}

function renderQuoteLinkDisplay(link = "") {
  const wrap = document.getElementById("quoteSendWrap");
  const display = document.getElementById("quoteLinkDisplay");
  const copyBtn = document.getElementById("copyQuoteLinkBtn");
  const openBtn = document.getElementById("openQuoteLinkBtn");
  if (display) display.value = link || "";
  if (wrap) wrap.classList.toggle("hidden", !link);
  if (copyBtn) copyBtn.disabled = !link;
  if (openBtn) openBtn.disabled = !link;
}

function renderQuoteAcceptedBanner(message = "", showConvert = false) {
  const banner = document.getElementById("quoteAcceptedBanner");
  if (!banner) return;
  if (!message) {
    banner.innerHTML = "";
    banner.classList.add("hidden");
    return;
  }
  banner.innerHTML = `
    <p><strong>${escapeHtml(message)}</strong></p>
    ${showConvert ? '<button class="btn" id="convertQuoteToContractBtn" type="button">Convert to contract</button>' : ""}
  `;
  banner.classList.remove("hidden");
}

function stopQuoteStatusPolling() {
  if (quoteStatusPollTimer) {
    clearInterval(quoteStatusPollTimer);
    quoteStatusPollTimer = null;
  }
  const client = state.calendar.client;
  if (client && quoteStatusChannel) {
    client.removeChannel(quoteStatusChannel);
  }
  quoteStatusChannel = null;
}

async function fetchExistingQuoteForEvent(eventId) {
  const client = state.calendar.client;
  if (!client || !state.calendar.session || !eventId) return null;
  const { data, error } = await client
    .from("quotes")
    .select("*")
    .eq("event_id", eventId)
    .order("created_at", { ascending: false })
    .limit(1);
  if (error) throw error;
  return Array.isArray(data) && data.length ? data[0] : null;
}

async function renderQuoteBuilder() {
  const title = document.getElementById("quoteBuilderHeading");
  const summary = document.getElementById("quoteEventSummary");
  const expiryInput = document.getElementById("quoteExpiryDays");
  const clientName = state.agreement.clientName || "this client";
  const eventDate = state.agreement.performanceDate
    ? formatDate(state.agreement.performanceDate)
    : "Date not set yet";
  const venue = state.agreement.venueAddress || "Venue not set yet";

  if (title) title.textContent = `Create a quote for ${clientName}`;
  if (summary) {
    summary.innerHTML = `
      <p><strong>Date:</strong> ${escapeHtml(eventDate)}</p>
      <p><strong>Venue:</strong> ${escapeHtml(venue)}</p>
      <p><strong>Client:</strong> ${escapeHtml(state.agreement.clientName || "Not set yet")}</p>
    `;
  }
  if (expiryInput && !expiryInput.value) expiryInput.value = "7";

  renderQuoteAcceptedBanner("");
  renderQuoteOptionRows(getQuoteBuilderOptionsForRender());
  renderQuoteLinkDisplay(state.quoteBuilder.link || "");
  setQuoteBuilderStatus(state.quoteBuilder.status || "No quote generated yet.");

  if (!state.workspace.bookingSaved || !state.workspace.bookingEventId) {
    state.quoteBuilder = {
      ...createInitialQuoteBuilderState(),
      options: getQuoteBuilderOptionsForRender(),
    };
    renderQuoteLinkDisplay("");
    setQuoteBuilderStatus("Save the booking first, then generate a quote link.", true);
    stopQuoteStatusPolling();
    return;
  }

  const client = state.calendar.client;
  if (!client || !state.calendar.session) {
    setQuoteBuilderStatus("Sign in to Supabase first so quotes can be loaded and saved.", true);
    stopQuoteStatusPolling();
    return;
  }

  try {
    const existingQuote = await fetchExistingQuoteForEvent(state.workspace.bookingEventId);
    if (!existingQuote) {
      state.quoteBuilder = {
        ...createInitialQuoteBuilderState(),
        options: getQuoteBuilderOptionsForRender(),
      };
      renderQuoteLinkDisplay("");
      setQuoteBuilderStatus("No quote generated yet.");
      stopQuoteStatusPolling();
      return;
    }

    const quoteOptions = getRenderableQuoteOptions(existingQuote.options);
    state.quoteBuilder = {
      ...state.quoteBuilder,
      activeQuoteId: existingQuote.id || "",
      link: getQuoteBuilderLink(existingQuote.id),
      status: existingQuote.status || "draft",
      options: quoteOptions,
      expiresAt: existingQuote.expires_at || "",
      acceptedBanner: "",
    };
    if (quoteOptions.length) {
      renderQuoteOptionRows(quoteOptions);
    }
    if (expiryInput && existingQuote.expires_at) {
      const diffMs = new Date(existingQuote.expires_at).getTime() - Date.now();
      const diffDays = Math.max(1, Math.ceil(diffMs / (24 * 60 * 60 * 1000)));
      expiryInput.value = String(diffDays);
    }
    renderQuoteLinkDisplay(state.quoteBuilder.link);
    await checkQuoteStatus(existingQuote.id);
    pollQuoteStatus();
  } catch (error) {
    setQuoteBuilderStatus(formatSupabaseError(error, "Could not load quote."), true);
    stopQuoteStatusPolling();
  }
}

async function saveQuoteToSupabase() {
  const client = state.calendar.client;
  if (!client || !state.calendar.session) {
    setQuoteBuilderStatus("Sign in to Supabase first so quotes can be saved.", true);
    return;
  }
  if (!state.workspace.bookingSaved || !state.workspace.bookingEventId) {
    setQuoteBuilderStatus("Save the booking first, then generate a quote link.", true);
    return;
  }

  const expiryDays = Math.max(1, Number(document.getElementById("quoteExpiryDays")?.value || 7));
  const options = collectQuoteOptionsFromDom().slice(0, 3);
  if (!options.length) {
    setQuoteBuilderStatus("Add at least one quote option before generating the link.", true);
    return;
  }

  const payload = {
    event_id: state.workspace.bookingEventId || null,
    client_name: state.agreement.clientName || "",
    client_email: state.agreement.clientEmail || "",
    venue_name: state.agreement.venueAddress || "",
    event_date: state.agreement.performanceDate || "",
    options: [
      ...options,
      {
        __meta: {
          band_name: state.bandDNA.bandName || "",
          contact_email: state.bandDNA.contactEmail || "",
        },
      },
    ],
    status: "draft",
    expires_at: new Date(Date.now() + expiryDays * 24 * 60 * 60 * 1000).toISOString(),
  };

  setQuoteBuilderStatus("Saving quote...");

  try {
    let savedQuote = null;
    if (state.quoteBuilder.activeQuoteId) {
      const { data, error } = await client
        .from("quotes")
        .update(payload)
        .eq("id", state.quoteBuilder.activeQuoteId)
        .select("*")
        .single();
      if (error) throw error;
      savedQuote = data;
    } else {
      const { data, error } = await client
        .from("quotes")
        .insert(payload)
        .select("*")
        .single();
      if (error) throw error;
      savedQuote = data;
    }

    const quoteId = savedQuote?.id || "";
    const link = getQuoteBuilderLink(quoteId);
    state.quoteBuilder = {
      ...state.quoteBuilder,
      activeQuoteId: quoteId,
      link,
      status: savedQuote?.status || "draft",
      options,
      expiresAt: savedQuote?.expires_at || payload.expires_at,
      acceptedBanner: "",
    };
    renderQuoteLinkDisplay(link);
    renderQuoteOptionRows(options);
    await copyTextToClipboard(link, {
      statusEl: getQuoteBuilderStatusEl(),
      successMessage: "Quote link generated and copied to clipboard.",
      failureMessage: "Quote saved, but the link could not be copied.",
    });
    saveDraft();
    await checkQuoteStatus(quoteId);
    setQuoteBuilderStatus("Quote ready to send. Waiting for client response.");
    pollQuoteStatus();
  } catch (error) {
    setQuoteBuilderStatus(formatSupabaseError(error, "Could not save quote."), true);
  }
}

async function checkQuoteStatus(quoteId) {
  const client = state.calendar.client;
  if (!client || !state.calendar.session || !quoteId) return;

  try {
    const { data: quote, error } = await client
      .from("quotes")
      .select("*")
      .eq("id", quoteId)
      .single();
    if (error) throw error;

    const options = getRenderableQuoteOptions(quote.options);
    const chosenOption = options[Number(quote.chosen_option_index)] || null;
    const chosenLabel = chosenOption?.label || "selected";
    const statusMessage = `Current status: ${formatQuoteStatusLabel(quote.status)}`;
    state.quoteBuilder = {
      ...state.quoteBuilder,
      activeQuoteId: quote.id || quoteId,
      link: getQuoteBuilderLink(quote.id || quoteId),
      status: quote.status || "",
      options,
      expiresAt: quote.expires_at || "",
      acceptedBanner: quote.status === "accepted" && quote.chosen_by_name
        ? `${quote.chosen_by_name} accepted the ${chosenLabel} option!`
        : "",
    };
    renderQuoteLinkDisplay(state.quoteBuilder.link);
    setQuoteBuilderStatus(statusMessage);

    if (quote.status === "accepted" && quote.chosen_by_name) {
      renderQuoteAcceptedBanner(state.quoteBuilder.acceptedBanner, true);
    } else {
      renderQuoteAcceptedBanner("");
    }
    saveDraft();
  } catch (error) {
    setQuoteBuilderStatus(formatSupabaseError(error, "Could not check quote status."), true);
  }
}

function pollQuoteStatus() {
  stopQuoteStatusPolling();
  const quoteId = state.quoteBuilder.activeQuoteId;
  const client = state.calendar.client;
  if (!quoteId || !client || !state.calendar.session) return;

  quoteStatusPollTimer = setInterval(() => {
    if (document.hidden || state.activeTab !== "quotebuilder") return;
    checkQuoteStatus(quoteId);
  }, 30000);

  quoteStatusChannel = client.channel(`quote-status-${quoteId}`);
  quoteStatusChannel.on(
    "postgres_changes",
    {
      event: "*",
      schema: "public",
      table: "quotes",
      filter: `id=eq.${quoteId}`,
    },
    () => {
      checkQuoteStatus(quoteId);
    }
  );
  quoteStatusChannel.subscribe();
}

function renderAgreementStepUI() {
  const currentStep = Math.max(1, Math.min(AGREEMENT_STEP_COUNT, Number(state.workspace.agreementStep || 1)));
  state.workspace.agreementStep = currentStep;

  document.querySelectorAll("[data-agreement-step]").forEach((section) => {
    const step = Number(section.getAttribute("data-agreement-step"));
    section.classList.toggle("hidden", step !== currentStep);
  });

  const progress = document.getElementById("agreementStepProgress");
  if (progress) {
    const labels = ["Client", "Event", "Performance", "Pricing", "Review"];
    progress.innerHTML = "";
    labels.forEach((label, index) => {
      const step = index + 1;
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "booking-step-chip";
      if (step === currentStep) chip.classList.add("active");
      if (step < currentStep) chip.classList.add("done");
      chip.textContent = `${step}. ${label}`;
      chip.addEventListener("click", () => {
        state.workspace.agreementStep = step;
        if (step !== AGREEMENT_STEP_COUNT) {
          state.workspace.contractWizardOpen = false;
        }
        renderAgreementStepUI();
        saveDraft();
      });
      progress.appendChild(chip);
    });
  }

  const backBtn = document.getElementById("agreementStepBack");
  const nextBtn = document.getElementById("agreementStepNext");
  if (backBtn) backBtn.classList.toggle("hidden", currentStep === 1);
  if (nextBtn) {
    nextBtn.classList.toggle("hidden", currentStep === AGREEMENT_STEP_COUNT);
    nextBtn.textContent = currentStep === AGREEMENT_STEP_COUNT - 1 ? "Review Booking" : "Next";
  }

  const saveBtn = document.getElementById("saveBookingOnly");
  const contractBtn = document.getElementById("submitAgreement");
  const quoteBtn = document.getElementById("createQuoteBtn");
  const contractNote = document.getElementById("contractWizardNote");
  if (saveBtn) {
    saveBtn.textContent = state.workspace.bookingSaved ? "Update Booking" : "Save Booking";
  }
  if (contractBtn) {
    contractBtn.classList.toggle("hidden", !state.workspace.bookingSaved);
    contractBtn.textContent = state.workspace.contractWizardOpen
      ? "Contract Wizard Open"
      : "Generate Contract";
  }
  if (quoteBtn) {
    quoteBtn.classList.remove("hidden");
  }
  if (contractNote) {
    if (state.workspace.bookingSaved) {
      contractNote.textContent = "Booking saved. Contract generation is optional and stays separate from the booking flow.";
    } else if (state.workspace.bookingEventId) {
      contractNote.textContent = "Changes made — please re-save before generating contract.";
    } else {
      contractNote.textContent = "Save the booking first. After that, you can open the contract wizard whenever you're ready.";
    }
  }

  const previewPanel = document.querySelector("#agreementTab .preview-panel");
  if (previewPanel) {
    previewPanel.classList.toggle("hidden", !state.workspace.contractWizardOpen);
  }
  const messagePreviewWrap = document.getElementById("messagePreviewWrap");
  const pdfActionsBar = document.getElementById("pdfActionsBar");
  if (state.activeTab === "agreement") {
    if (messagePreviewWrap) {
      messagePreviewWrap.classList.toggle("hidden", !state.workspace.contractWizardOpen);
    }
    if (pdfActionsBar) {
      pdfActionsBar.classList.toggle("hidden", !state.workspace.contractWizardOpen);
    }
  }

}

function refreshAgreementCreatedDate() {
  state.agreement.agreementCreatedDate = todayString();
  const agreementCreatedInput = document.getElementById("agreementCreatedDate");
  if (agreementCreatedInput) {
    agreementCreatedInput.value = state.agreement.agreementCreatedDate;
  }
}

async function updateAgreementBookingWarning() {
  const warning = document.getElementById("agreementBookingWarning");
  const actions = document.getElementById("agreementBookingActions");
  if (!warning) return;
  const dateStr = normalizeDateValue(state.agreement.performanceDate);
  if (!dateStr) {
    warning.textContent = "";
    warning.classList.add("hidden");
    if (actions) {
      actions.innerHTML = "";
      actions.classList.add("hidden");
    }
    return;
  }

  let matches = getConflictTrackedEventsForDate(dateStr, state.calendar.events);
  const client = state.calendar.client;
  if (client && state.calendar.session) {
    const dayStart = new Date(`${dateStr}T00:00:00`);
    const dayEnd = new Date(`${dateStr}T23:59:59`);
    const { data, error } = await client
      .from("events")
      .select("*")
      .lte("start_time", dayEnd.toISOString())
      .gte("end_time", dayStart.toISOString());
    if (!error && Array.isArray(data)) {
      matches = getConflictTrackedEventsForDate(
        dateStr,
        mergeSeededCalendarEvents(data, dayStart, dayEnd)
      );
    }
  }

  const uniqueMatches = matches.filter((event, index, arr) => {
    const key = eventIdentityKey(event);
    return index === arr.findIndex((item) => eventIdentityKey(item) === key);
  });
  const activeDraft = getActiveAgreementDraftContract();
  const activeClientName = normalizeText(state.agreement.clientName || "");
  const filteredMatches = uniqueMatches.filter((event) => {
    if (activeDraft.event_id && event.id === activeDraft.event_id) return false;
    const eventAgreementName = `${event.title || event.type || "Event"} Agreement`
      .trim()
      .toLowerCase();
    if (activeDraft.name && eventAgreementName === String(activeDraft.name).trim().toLowerCase()) {
      return false;
    }
    const eventTitle = normalizeText(event.title || event.type || "");
    if (
      activeClientName &&
      eventTitle &&
      (activeClientName === eventTitle ||
        activeClientName.includes(eventTitle) ||
        eventTitle.includes(activeClientName))
    ) {
      return false;
    }
    return true;
  });
  if (!filteredMatches.length) {
    warning.textContent = "";
    warning.classList.add("hidden");
    if (actions) {
      actions.innerHTML = "";
      actions.classList.add("hidden");
    }
    return;
  }

  warning.textContent = `Already booked on this date: ${filteredMatches
    .map((event) => event.title || event.type)
    .join(", ")}.`;
  warning.classList.remove("hidden");
  if (actions) {
    actions.innerHTML = "";
    filteredMatches.forEach((event) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "btn ghost";
      button.textContent = `Open ${event.title || event.type}`;
      button.addEventListener("click", async () => {
        await openAgreementForCalendarEvent(event);
      });
      actions.appendChild(button);
    });
    actions.classList.toggle("hidden", filteredMatches.length === 0);
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

function eventDayKeyFromValue(value) {
  const date = value instanceof Date ? value : new Date(value);
  if (!Number.isFinite(date.getTime())) return "";
  return formatDateInput(date);
}

function eventIdentityKey(event) {
  const dayKey = eventDayKeyFromValue(event?.start_time || event?.end_time || "");
  const titleKey = normalizeText(event?.title || event?.type || "event");
  return `${dayKey}|${titleKey}`;
}

function getSeededCalendarEvents(rangeStart = null, rangeEnd = null) {
  return SEEDED_BOOKED_EVENTS
    .map((event, index) => {
      const start = combineDateTime(event.date, event.start);
      let end = combineDateTime(event.date, event.end);
      if (start && end && end <= start) {
        end.setDate(end.getDate() + 1);
      }
      return {
        id: `seeded-booked-${index + 1}`,
        type: event.type || "Confirmed",
        title: event.title,
        start_time: start ? start.toISOString() : "",
        end_time: end ? end.toISOString() : "",
        notes: event.notes || "",
        override: false,
        seeded: true,
      };
    })
    .filter((event) => {
      const start = new Date(event.start_time);
      if (!Number.isFinite(start.getTime())) return false;
      if (rangeStart && start < rangeStart) return false;
      if (rangeEnd && start > rangeEnd) return false;
      return true;
    });
}

function mergeSeededCalendarEvents(events = [], rangeStart = null, rangeEnd = null) {
  const merged = [...events];
  const seen = new Set(events.map((event) => eventIdentityKey(event)));
  const hiddenSeededEventKeys = new Set(state.calendar.hiddenSeededEventKeys || []);
  getSeededCalendarEvents(rangeStart, rangeEnd).forEach((event) => {
    const key = eventIdentityKey(event);
    if (hiddenSeededEventKeys.has(key)) return;
    if (seen.has(key)) return;
    seen.add(key);
    merged.push(event);
  });
  return merged.sort((a, b) => new Date(a.start_time) - new Date(b.start_time));
}

function isFullBandShowEvent(event) {
  const dayKey = eventDayKeyFromValue(event?.start_time || event?.end_time || "");
  if (FULL_BAND_SHOW_DATE_KEYS.has(dayKey)) return true;
  const text = `${event?.title || ""} ${event?.notes || ""}`.toLowerCase();
  return text.includes("full band") || text.includes("full");
}

function getShowLineupLabel(event) {
  return isFullBandShowEvent(event) ? "Full Band" : "Duo";
}

function getSeededConfirmedMusicianNamesForEvent(event) {
  const dayKey = eventDayKeyFromValue(event?.start_time || event?.end_time || "");
  if (!SEEDED_CONFIRMED_SHOW_DATE_KEYS.has(dayKey)) return [];
  const neededCount = isFullBandShowEvent(event) ? 4 : 2;
  return DEFAULT_MUSICIAN_ROSTER.slice(0, neededCount).map((item) => item.name);
}

function getConfirmedMusicianNamesForEvent(event) {
  const confirmedNames = state.calendar.assignments
    .filter(
      (item) =>
        item.event_id === event.id && String(item.status || "").toLowerCase() === "confirmed"
    )
    .map((item) => musicianDisplayName(state.musicians.find((m) => m.id === item.musician_id)));
  if (confirmedNames.length) return confirmedNames;
  return getSeededConfirmedMusicianNamesForEvent(event);
}

function getConflictTrackedEventsForDate(dateStr, events = []) {
  const targetDate = normalizeDateValue(dateStr);
  if (!targetDate) return [];
  return events.filter((event) => {
    const dayKey = eventDayKeyFromValue(event?.start_time || event?.end_time || "");
    return dayKey === targetDate && isConflictTrackedShowType(event?.type);
  });
}

function dedupeShowEvents(events = []) {
  const seen = new Set();
  return events.filter((event) => {
    const titleKey = normalizeText(event?.title || event?.type || "event");
    const typeKey = normalizeText(event?.type || "");
    const startDate = new Date(event?.start_time || "");
    const endDate = new Date(event?.end_time || "");
    const startKey = Number.isFinite(startDate.getTime())
      ? startDate.toISOString()
      : String(event?.start_time || "");
    const endKey = Number.isFinite(endDate.getTime())
      ? endDate.toISOString()
      : String(event?.end_time || "");
    const key = `${titleKey}|${typeKey}|${startKey}|${endKey}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

async function getShowsRangeEvents(rangeStart, rangeEnd) {
  const hiddenSeededKeys = new Set(state.calendar.hiddenSeededEventKeys || []);
  const localEvents = state.calendar.events.filter((event) => {
    const start = new Date(event?.start_time || 0);
    return Number.isFinite(start.getTime()) && start >= rangeStart && start <= rangeEnd;
  });
  const seededEvents = getSeededCalendarEvents(rangeStart, rangeEnd).filter((event) => {
    const key = eventIdentityKey(event);
    return key && !hiddenSeededKeys.has(key);
  });
  return dedupeShowEvents([...localEvents, ...seededEvents]);
}

function eventStartDate(event) {
  const value = event?.start_time || event?.end_time || "";
  const parsed = new Date(value);
  return Number.isFinite(parsed.getTime()) ? parsed : null;
}

function getUpcomingEvents(limit = 3) {
  const today = new Date();
  const windowStart = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0);
  const upcoming = state.calendar.events
    .filter((event) => String(event.type || "").toLowerCase() !== "blackout")
    .map((event) => ({ event, start: eventStartDate(event) }))
    .filter(({ start }) => start && start >= windowStart)
    .sort((a, b) => a.start - b.start)
    .map(({ event, start }, index) => ({
      event,
      dedupeIndex: index,
      canonical: {
        ...event,
        type: "upcoming",
        start_time: formatDateInput(start),
        end_time: formatDateInput(start),
        dedupeIndex: index,
      },
    }));
  const dedupedIndexes = new Set(
    dedupeShowEvents(upcoming.map((item) => item.canonical)).map((item) => item.dedupeIndex)
  );

  return upcoming
    .filter((item) => dedupedIndexes.has(item.dedupeIndex))
    .slice(0, limit)
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

function getDashboardFirstName() {
  const metadata = state.calendar.session?.user?.user_metadata || {};
  const rawName =
    metadata.name ||
    metadata.full_name ||
    metadata.first_name ||
    state.bandDNA.signoffName ||
    "Beth";
  const first = String(rawName).trim().split(/\s+/)[0] || "Beth";
  return first.replace(/[^a-zA-Z'-]/g, "") || "Beth";
}

function renderDashboardGreeting() {
  const greetingEl = document.getElementById("dashboardGreeting");
  const dateEl = document.getElementById("dashboardDateLine");
  if (!greetingEl || !dateEl) return;

  const now = new Date();
  const hour = now.getHours();
  const dayPart = hour < 12 ? "morning" : hour < 17 ? "afternoon" : "evening";
  const bandName = state.bandDNA.bandName || "Rust and Ruin";
  const dateLabel = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  greetingEl.innerHTML = `<span style="background: linear-gradient(to right, #d4621a, #f47c20, #f5a623); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Good ${dayPart}, ${getDashboardFirstName()}</span>`;
  dateEl.textContent = `${dateLabel} · ${bandName}`;
}

function getBookHubMonthEvents() {
  const monthStart = getCalendarMonth();
  const rangeStart = new Date(monthStart.getFullYear(), monthStart.getMonth(), 1, 0, 0, 0, 0);
  const rangeEnd = new Date(monthStart.getFullYear(), monthStart.getMonth() + 1, 0, 23, 59, 59, 999);
  return mergeSeededCalendarEvents(state.calendar.events, rangeStart, rangeEnd).filter((event) => {
    const start = new Date(event.start_time || 0);
    return Number.isFinite(start.getTime()) && start >= rangeStart && start <= rangeEnd;
  });
}

function getBookHubBlackoutKeys() {
  const keys = new Set();

  state.calendar.events.forEach((event) => {
    if (String(event?.type || "").toLowerCase() !== "blackout") return;
    const start = new Date(event.start_time || 0);
    const end = new Date(event.end_time || event.start_time || 0);
    if (!Number.isFinite(start.getTime()) || !Number.isFinite(end.getTime())) return;
    const cursor = startOfDay(start);
    const endDay = startOfDay(end);
    while (cursor <= endDay) {
      keys.add(formatDateInput(cursor));
      cursor.setDate(cursor.getDate() + 1);
    }
  });

  state.calendar.blackouts.forEach((item) => {
    const start = new Date(item.start_time || 0);
    const end = new Date(item.end_time || item.start_time || 0);
    if (!Number.isFinite(start.getTime()) || !Number.isFinite(end.getTime())) return;
    const cursor = startOfDay(start);
    const endDay = startOfDay(end);
    while (cursor <= endDay) {
      keys.add(formatDateInput(cursor));
      cursor.setDate(cursor.getDate() + 1);
    }
  });

  return keys;
}

function renderBookHubCalendar() {
  const title = document.getElementById("bookHubCalendarTitle");
  const grid = document.getElementById("bookHubCalendarGrid");
  const summary = document.getElementById("bookHubCalendarSummary");
  if (!title || !grid || !summary) return;

  const monthStart = getCalendarMonth();
  const monthEvents = getBookHubMonthEvents();
  const blackoutKeys = getBookHubBlackoutKeys();
  const existingDetail = document.getElementById("bookHubCalendarDetail");
  const selectedDetailDate = grid.dataset.selectedDate || "";
  const monthName = monthStart.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const eventDateKeys = new Set();
  const eventsByDateKey = new Map();
  monthEvents.forEach((event) => {
    if (String(event.type || "").toLowerCase() === "blackout") return;
    const start = new Date(event.start_time || 0);
    const end = new Date(event.end_time || event.start_time || 0);
    if (!Number.isFinite(start.getTime()) || !Number.isFinite(end.getTime())) return;
    const dateKey = formatDateInput(start);
    const existing = eventsByDateKey.get(dateKey) || [];
    existing.push(event);
    eventsByDateKey.set(dateKey, existing);
    const cursor = startOfDay(start);
    const endDay = startOfDay(end);
    while (cursor <= endDay) {
      eventDateKeys.add(formatDateInput(cursor));
      cursor.setDate(cursor.getDate() + 1);
    }
  });

  title.textContent = monthName;
  summary.textContent = monthEvents.length
    ? `${eventDateKeys.size} show date${eventDateKeys.size === 1 ? "" : "s"} highlighted this month.`
    : "No show dates saved for this month yet.";
  grid.innerHTML = "";
  if (existingDetail) existingDetail.remove();
  if (selectedDetailDate && !eventsByDateKey.has(selectedDetailDate)) {
    grid.dataset.selectedDate = "";
  }

  const startWeekday = monthStart.getDay();
  const daysInMonth = new Date(monthStart.getFullYear(), monthStart.getMonth() + 1, 0).getDate();
  const prevMonthDays = new Date(monthStart.getFullYear(), monthStart.getMonth(), 0).getDate();

  for (let i = 0; i < 42; i += 1) {
    const cell = document.createElement("div");
    cell.className = "book-hub-day";

    let dayNumber = i - startWeekday + 1;
    let cellMonth = monthStart.getMonth();
    let cellYear = monthStart.getFullYear();

    if (dayNumber <= 0) {
      dayNumber = prevMonthDays + dayNumber;
      cellMonth -= 1;
      cell.classList.add("muted");
    } else if (dayNumber > daysInMonth) {
      dayNumber -= daysInMonth;
      cellMonth += 1;
      cell.classList.add("muted");
    }

    const cellDate = new Date(cellYear, cellMonth, dayNumber);
    const cellKey = formatDateInput(cellDate);
    cell.textContent = String(dayNumber);

    if (blackoutKeys.has(cellKey)) {
      cell.classList.add("is-blackout");
    } else if (eventDateKeys.has(cellKey)) {
      cell.classList.add("is-show");
    }

    if (cellKey === selectedDetailDate && eventsByDateKey.has(cellKey)) {
      cell.style.outline = "2px solid #f47c20";
      cell.style.outlineOffset = "-2px";
    }

    if (eventsByDateKey.has(cellKey)) {
      cell.style.cursor = "pointer";
      cell.addEventListener("click", () => {
        grid.dataset.selectedDate = grid.dataset.selectedDate === cellKey ? "" : cellKey;
        renderBookHubCalendar();
      });
    }

    grid.appendChild(cell);
  }

  if (grid.dataset.selectedDate && eventsByDateKey.has(grid.dataset.selectedDate)) {
    const detailPanel = document.createElement("div");
    detailPanel.id = "bookHubCalendarDetail";
    detailPanel.dataset.selectedDate = grid.dataset.selectedDate;
    detailPanel.style.cssText = "margin-top:14px;background:#fdf0e3;border:1px solid #e8a855;border-radius:14px;padding:14px;display:grid;gap:10px;";
    const dayEvents = (eventsByDateKey.get(grid.dataset.selectedDate) || []).sort(
      (a, b) => new Date(a.start_time || 0) - new Date(b.start_time || 0)
    );
    dayEvents.forEach((event) => {
      const card = document.createElement("div");
      card.style.cssText = "background:white;border:1px solid #f0c793;border-radius:12px;padding:12px;display:grid;gap:8px;";
      const showTitle = document.createElement("strong");
      showTitle.style.cssText = "font-size:16px;font-weight:700;color:#2c1a00;";
      showTitle.textContent = event.title || eventTypeLabel(event.type);
      const showTime = document.createElement("div");
      showTime.style.cssText = "color:#5a3a1a;font-size:13px;";
      showTime.textContent = formatShowDateTimeWithWeekday(event.start_time);
      const actions = document.createElement("div");
      actions.style.cssText = "display:flex;gap:8px;justify-content:flex-end;";
      const editButton = document.createElement("button");
      editButton.type = "button";
      editButton.className = "btn ghost";
      editButton.textContent = "Edit";
      editButton.addEventListener("click", () => {
        if (switchTopView) switchTopView("calendar");
        selectEventForEdit(event, grid.dataset.selectedDate || "");
      });
      const deleteButton = createConfirmDeleteButton(async () => {
        deleteButton.textContent = "Deleting...";
        deleteButton.style.cssText = "border-color:#e58a4a;color:#9a3f00;";
        await deleteCalendarEvent(event);
        renderBookHubCalendar();
        await renderBookedDatesList();
      });
      deleteButton.style.cssText = "border-color:#e58a4a;color:#9a3f00;";
      actions.appendChild(editButton);
      actions.appendChild(deleteButton);
      card.appendChild(showTitle);
      card.appendChild(showTime);
      card.appendChild(actions);
      detailPanel.appendChild(card);
    });
    grid.insertAdjacentElement("afterend", detailPanel);
  }
}

function renderBookHubWorkOrders() {
  const list = document.getElementById("bookHubWorkOrdersList");
  const summary = document.getElementById("bookHubWorkOrdersSummary");
  if (!list || !summary) return;

  const openOrders = state.workOrders.filter((item) => {
    const status = String(item?.status || "").toLowerCase();
    return !(status === "completed" || item?.completed === true);
  });

  summary.textContent = openOrders.length
    ? `${openOrders.length} open task${openOrders.length === 1 ? "" : "s"} right now.`
    : "Current open tasks.";
  list.innerHTML = "";

  if (!openOrders.length) {
    list.innerHTML = "<p class=\"muted\">No open work orders right now.</p>";
    return;
  }

  openOrders.slice(0, 4).forEach((order) => {
    const row = document.createElement("button");
    row.type = "button";
    row.className = "book-hub-task";
    row.innerHTML = `
      <span class="book-hub-task-dot" aria-hidden="true"></span>
      <span class="book-hub-task-copy">
        <strong>${escapeHtml(order.description || order.title || "Untitled task")}</strong>
        <span>${escapeHtml(order.category || "Other")}</span>
      </span>
      <span class="book-hub-task-badge">Open</span>
    `;
    row.addEventListener("click", () => {
      state.workOrderView.focusId = order.id || "";
      state.workOrderView.showCreate = false;
      if (switchTopView) switchTopView("workorders");
      renderWorkOrders();
    });
    list.appendChild(row);
  });
}

function prependGradientSectionHeader(container, headerId, firstLine, secondLine, subtitle) {
  if (!container) return;
  const existingHeader = document.getElementById(headerId);
  if (existingHeader) existingHeader.remove();
  const header = document.createElement("div");
  header.id = headerId;
  header.style.cssText = "padding: 24px 16px 8px; text-align: left;";
  header.innerHTML = `
    <h1 style="font-size: 32px; font-weight: 700; margin: 0 0 4px; font-family: Georgia, 'Times New Roman', serif; background: linear-gradient(to right, #d4621a, #f47c20, #f5a623); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${firstLine}</h1>
    <h1 style="font-size: 32px; font-weight: 700; margin: 0 0 8px; font-family: Georgia, 'Times New Roman', serif; background: linear-gradient(to right, #f47c20, #f5a623, #f5c48a); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${secondLine}</h1>
    <p style="font-size: 14px; color: #f0ede8; margin: 0 0 16px;">${subtitle}</p>
  `;
  container.insertBefore(header, container.firstChild);
}

function renderBookHub() {
  const container = document.querySelector("#bookHubTab .book-hub-panel");
  if (container) {
    const existingHeader = document.getElementById("bookHubGreetingHeader");
    if (existingHeader) existingHeader.remove();
    const header = document.createElement("div");
    header.id = "bookHubGreetingHeader";
    header.style.cssText = "padding: 24px 16px 8px; text-align: left;";
    header.innerHTML = `
      <h1 style="font-size: 32px; font-weight: 700; margin: 0 0 4px; font-family: Georgia, 'Times New Roman', serif; background: linear-gradient(to right, #d4621a, #f47c20, #f5a623); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Fill the calendar.</h1>
      <h1 style="font-size: 32px; font-weight: 700; margin: 0 0 8px; font-family: Georgia, 'Times New Roman', serif; background: linear-gradient(to right, #f47c20, #f5a623, #f5c48a); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Hit the stage.</h1>
      <p style="font-size: 15px; color: #f0ede8; margin: 0; font-family: Georgia, 'Times New Roman', serif;">Book your next show.</p>
    `;
    container.insertBefore(header, container.firstChild);
  }
  renderBookHubCalendar();
  renderBookHubWorkOrders();
}

function renderUpcomingShowsCard(events) {
  const summary = document.getElementById("upcomingShowsSummary");
  const list = document.getElementById("upcomingShowsList");
  if (!summary || !list) return;
  const dedupedEvents = dedupeShowEvents(
    events.map((event) => {
      const start = eventStartDate(event);
      const dayKey = start ? formatDateInput(start) : "";
      return {
        ...event,
        type: "upcoming",
        start_time: dayKey,
        end_time: dayKey,
      };
    })
  ).map((event) => {
    const match = events.find((candidate) => {
      const candidateStart = eventStartDate(candidate);
      const candidateDayKey = candidateStart ? formatDateInput(candidateStart) : "";
      return (candidate.title || "") === (event.title || "") && candidateDayKey === (event.start_time || "");
    });
    return match || event;
  });

  summary.textContent = dedupedEvents.length
    ? `Your next ${dedupedEvents.length} upcoming booking${dedupedEvents.length === 1 ? "" : "s"}.`
    : "No upcoming bookings yet.";

  list.classList.add("compact");
  list.innerHTML = "";
  if (!dedupedEvents.length) {
    list.innerHTML = "<li class=\"dashboard-empty\">No upcoming bookings yet.</li>";
    return;
  }

  dedupedEvents.forEach((event) => {
    const start = eventStartDate(event);
    const dayLabel = start
      ? start.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
      : "Date TBD";
    const status = String(event?.type || "").toLowerCase() === "confirmed" ? "Confirmed" : "Pending";
    const badgeClass = status === "Confirmed" ? "badge-confirmed" : "badge-pending";
    const item = document.createElement("li");
    item.className = "upcoming-show-item";
    item.innerHTML = `
      <span class="dashboard-row-dot" aria-hidden="true"></span>
      <div class="upcoming-show-body">
        <span class="upcoming-show-title">${escapeHtml(event.title || "Untitled show")}</span>
        <span class="upcoming-show-date">${dayLabel}</span>
      </div>
      <span class="dashboard-badge ${badgeClass}">${status}</span>
    `;
    list.appendChild(item);
  });
}

function eventTypeLabel(typeValue) {
  const text = String(typeValue || "").trim();
  if (text.toLowerCase() === "hold") return "Contract Needed";
  return text || "Event";
}

function isConflictTrackedShowType(typeValue) {
  const normalized = String(typeValue || "").trim().toLowerCase();
  return normalized === "contract needed" || normalized === "hold" || normalized === "confirmed";
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
    if (event?.seeded) return false;
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
      switchTopView("contracts");
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
        tag: "Now",
        done: false,
        target: { type: "workorder", id: item.id },
      });
    });
  } else {
    rows.push({
      text: "Open work orders",
      tag: "Done",
      done: true,
      target: "workorders",
    });
  }
  rows.push(
    {
      text: `Contracts to come back signed (this week): ${missingContracts.length}`,
      tag: missingContracts.length ? "This week" : "Done",
      done: missingContracts.length === 0,
      target: "contracts",
    },
    {
      text: `Band member confirmations needed (this week): ${pendingMusicianConfirmations.length}`,
      tag: pendingMusicianConfirmations.length ? "This week" : "Done",
      done: pendingMusicianConfirmations.length === 0,
      target: "calendar",
    },
    {
      text: `Invoices pending send (created this week): ${invoiceSendNeeded.length}`,
      tag: invoiceSendNeeded.length ? "This week" : "Done",
      done: invoiceSendNeeded.length === 0,
      target: "invoice",
    },
    {
      text: `Receipts pending send (created this week): ${receiptSendNeeded.length}`,
      tag: receiptSendNeeded.length ? "This week" : "Done",
      done: receiptSendNeeded.length === 0,
      target: "receipt",
    },
  );

  rows.forEach((row) => {
    const el = document.createElement("div");
    el.className = `checklist-row${row.done ? " done" : ""}`;
    const dot = document.createElement("span");
    dot.className = "dashboard-row-dot";
    dot.setAttribute("aria-hidden", "true");
    const left = document.createElement("span");
    left.className = "checklist-text";
    left.textContent = row.text;
    const right = document.createElement("button");
    right.type = "button";
    right.className = `checklist-link dashboard-badge ${
      row.tag === "Now" ? "badge-now" : row.tag === "This week" ? "badge-this-week" : "badge-done"
    }`;
    right.textContent = row.tag;
    right.addEventListener("click", () => openChecklistTarget(row.target));
    el.appendChild(dot);
    el.appendChild(left);
    el.appendChild(right);
    wrap.appendChild(el);
  });
}

async function updateShowRecordCounts() {
  const titleEl = document.getElementById("showRecordTitle");
  const duoEl = document.getElementById("showCountDuo");
  const totalEl = document.getElementById("showCountTotal");
  const totalSubtextEl = document.getElementById("showCountTotalSubtext");
  const duoSubtextEl = document.getElementById("showCountDuoSubtext");
  if (!duoEl || !totalEl || !totalSubtextEl || !duoSubtextEl) return;

  const currentYear = new Date().getFullYear();
  if (titleEl) titleEl.textContent = `${currentYear} Year Total Shows`;
  const yearStartDate = new Date(currentYear, 0, 1);
  const yearEndDate = new Date(currentYear, 11, 31, 23, 59, 59, 999);
  let bookedShows = mergeSeededCalendarEvents(
    state.calendar.events,
    yearStartDate,
    yearEndDate
  ).filter((event) => {
    const kind = String(event?.type || "").toLowerCase();
    if (kind !== "confirmed") return false;
    const start = new Date(event?.start_time || 0);
    return Number.isFinite(start.getTime()) && start.getFullYear() === currentYear;
  });

  const client = state.calendar.client;
  if (client && state.calendar.session) {
    const yearStart = yearStartDate.toISOString();
    const nextYearStart = new Date(currentYear + 1, 0, 1).toISOString();
    const { data, error } = await client
      .from("events")
      .select("id,title,notes,type,start_time")
      .gte("start_time", yearStart)
      .lt("start_time", nextYearStart);
    if (!error && Array.isArray(data)) {
      bookedShows = mergeSeededCalendarEvents(
        data,
        new Date(currentYear, 0, 1),
        new Date(currentYear, 11, 31, 23, 59, 59, 999)
      ).filter((event) => {
        const kind = String(event?.type || "").toLowerCase();
        return kind === "confirmed";
      });
    }
  }

  const counts = bookedShows.reduce(
    (acc, event) => {
      const lineup = getShowLineupLabel(event);
      const hasAssignments = state.calendar.assignments.some(
        (item) => item.event_id === event.id
      );
      if (lineup === "Full Band") {
        acc.full += 1;
      } else if (!hasAssignments) {
        acc.duo += 1;
      } else {
        acc.full += 1;
      }
      return acc;
    },
    { full: 0, duo: 0 }
  );

  duoEl.textContent = String(counts.duo);
  totalEl.textContent = String(bookedShows.length);
  totalSubtextEl.textContent = `Full Band ${counts.full} this year`;
  duoSubtextEl.textContent = `Full Band ${counts.full} · ${bookedShows.length} total`;
}

function updateManagerDesk() {
  renderDashboardGreeting();
  const upcoming = getUpcomingEvents(3);
  renderUpcomingShowsCard(upcoming);
  renderManagerChecklist(upcoming);
  updateShowRecordCounts();
}

async function updateOpsProgress() {
  const summary = document.getElementById("opsProgressSummary");
  const detail = document.getElementById("opsProgressDetail");
  const upcomingEl = document.getElementById("snapshotUpcomingShows");
  const contractsEl = document.getElementById("snapshotContractsPending");
  const confirmationsEl = document.getElementById("snapshotConfirmationsNeeded");

  const workOrdersTotal = state.workOrders.length;
  const workOrdersDone = state.workOrders.filter((item) => {
    const status = String(item.status || "").toLowerCase();
    return status === "completed" || item.completed === true;
  }).length;
  const workOrdersOpen = Math.max(0, workOrdersTotal - workOrdersDone);

  const pendingSignatureContracts = state.calendar.contracts.filter((item) => {
    if (item?.file_path) return false;
    const status = String(item.status || "").toLowerCase();
    return !status.includes("created") && !status.includes("no contract needed");
  });
  const signedContracts = state.calendar.contracts.filter((item) => {
    if (!item?.file_path) return false;
    const status = String(item.status || "").toLowerCase();
    const path = String(item.file_path || "");
    return !(status.includes("created") || path.startsWith("created-contracts/"));
  });
  const contractsTotal = pendingSignatureContracts.length + signedContracts.length;
  const contractsDone = signedContracts.length;
  const contractsPendingSignature = pendingSignatureContracts.length;

  const today = new Date();
  const currentYear = today.getFullYear();
  const yearStartDate = new Date(currentYear, 0, 1);
  const yearEndDate = new Date(currentYear, 11, 31, 23, 59, 59, 999);
  const yearShowEvents = (await getShowsRangeEvents(yearStartDate, yearEndDate)).filter((item) => {
    const kind = String(item.type || "").toLowerCase();
    if (kind === "blackout") return false;
    const start = new Date(item.start_time || item.end_time || 0);
    return Number.isFinite(start.getTime()) && start.getFullYear() === currentYear;
  });
  const activeEventIds = new Set(
    yearShowEvents
      .filter((item) => {
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

  const showEvents = yearShowEvents;
  const showsTotal = showEvents.length;
  const showsDone = showEvents.filter(
    (item) => String(item.type || "").toLowerCase() === "confirmed"
  ).length;
  const unlinkedPendingContracts = pendingSignatureContracts.filter((item) => !item.event_id).length;
  const adjustedShowsTotal = showsTotal + unlinkedPendingContracts;

  const useAssignmentMetric = assignmentsTotal > 0;
  const upcomingCount = getUpcomingEvents(20).length;
  const confirmationsNeeded = useAssignmentMetric
    ? Math.max(0, assignmentsTotal - assignmentsDone)
    : Math.max(0, adjustedShowsTotal - showsDone);

  if (upcomingEl) upcomingEl.textContent = String(upcomingCount);
  if (contractsEl) contractsEl.textContent = String(contractsPendingSignature);
  if (confirmationsEl) confirmationsEl.textContent = String(confirmationsNeeded);

  if (summary) summary.textContent = "What needs attention this week.";
  if (detail) {
    detail.textContent =
      workOrdersOpen || contractsPendingSignature || confirmationsNeeded
        ? `Work orders open ${workOrdersOpen} • Contracts pending ${contractsPendingSignature} • Confirmations needed ${confirmationsNeeded}`
        : "No urgent items right now.";
  }
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
  resetInvoiceForm();
  if (status && !silent) status.textContent = "Invoice saved and form reset.";
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
  resetReceiptForm();
  if (status && !silent) status.textContent = "Receipt saved and form reset.";
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

/** Fields for digital signing (contract.html); extend the Supabase contracts table to match. */
function buildAgreementContractDigitalPayload() {
  const totals = getAgreementTotals();
  const previewEl = document.getElementById("agreementPreview");
  return {
    band_name: state.bandDNA.bandName || "Rust and Ruin",
    client_name: state.agreement.clientName || "",
    contract_text: previewEl ? previewEl.innerHTML : "",
    venue_name: state.agreement.venueAddress || "",
    event_date: state.agreement.performanceDate || "",
    event_type: state.agreement.eventType || "",
    performance_time: state.agreement.performanceTime || "",
    performance_end_time: state.agreement.performanceEndTime || "",
    hours: state.agreement.hours || "",
    lineup: state.agreement.bandConfig || "",
    performance_fee: (() => {
      const base = totals.depositFeeBase;
      if (base > 0) return base;
      const hourlyRate = toNumber(getDefaultRateForLineup(state.agreement.bandConfig));
      const hours = toNumber(state.agreement.hours);
      if (hourlyRate > 0 && hours > 0) return hourlyRate * hours;
      const feeInput = document.getElementById("feeTotal");
      const feeRaw = feeInput ? feeInput.value.replace(/[^0-9.]/g, "") : "";
      return toNumber(feeRaw || state.agreement.feeTotal || "0");
    })(),
    deposit_amount: totals.depositDueNow,
    amount_due_day_of: Math.max(
      0,
      totals.balanceDueAtShow + totals.addOnTotal + totals.travelFee + totals.lodgingFee
    ),
    payment_methods:
      "cash, check to Rust and Ruin, Venmo @rustandruinvt, or PayPal @rustandruin",
  };
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
  const digitalPayload = buildAgreementContractDigitalPayload();
  const { data: existing } = await client
    .from("contracts")
    .select("id")
    .eq("name", contractName)
    .ilike("status", "created")
    .order("uploaded_at", { ascending: false })
    .limit(1);

  let savedContractId = "";

  if (existing && existing.length) {
    const { data: updatedRow, error: updateError } = await client
      .from("contracts")
      .update({
        file_path: path,
        status: "Created",
        event_id: null,
        ...digitalPayload,
      })
      .eq("id", existing[0].id)
      .select("id")
      .single();
    if (updateError) { console.error("Contract update 400 details:", JSON.stringify(updateError)); setCreatedContractStatus("Saved PDF, but could not update created contract row.", true); return; }
    savedContractId = updatedRow?.id || existing[0].id || "";
  } else {
    const { data: insertedRow, error: insertError } = await client
      .from("contracts")
      .insert({
        name: contractName,
        file_path: path,
        event_id: null,
        status: "Created",
        ...digitalPayload,
      })
      .select("id")
      .single();
    if (insertError) { console.error("Contract insert 400 details:", JSON.stringify(insertError)); setCreatedContractStatus("Saved PDF, but could not store created contract metadata.", true); return; }
    savedContractId = insertedRow?.id || "";
  }

  state.workspace.contractShareId = savedContractId || "";
  startContractSignaturePoll();
  const contractSendWrap = document.getElementById("contractSendWrap");
  const contractLinkDisplay = document.getElementById("contractLinkDisplay");
  if (contractSendWrap && contractLinkDisplay && state.workspace.contractShareId) {
    contractLinkDisplay.value = `https://gigos.netlify.app/contract.html?id=${state.workspace.contractShareId}`;
    contractSendWrap.classList.remove("hidden");
  }
  setCreatedContractStatus("Created contract saved.");
  await fetchContracts();
  renderAgreementStepUI();
}

let contractSignaturePollTimer = null;

function stopContractSignaturePoll() {
  if (contractSignaturePollTimer) {
    clearInterval(contractSignaturePollTimer);
    contractSignaturePollTimer = null;
  }
}

async function checkContractSignatureStatus() {
  const shareId = state.workspace.contractShareId;
  const client = state.calendar.client;
  if (!shareId || !client || !state.calendar.session) return;
  const { data, error } = await client
    .from("contracts")
    .select("signed_at, client_signature, name")
    .eq("id", shareId)
    .single();
  if (error || !data || !data.signed_at) return;
  stopContractSignaturePoll();
  const name = data.client_signature || "your client";
  const banner = document.getElementById("contractSignedBanner");
  if (banner) {
    banner.textContent = `✓ Contract signed by ${name}! Check Signed Contracts to view it.`;
    banner.classList.remove("hidden");
  }
  await fetchContracts();
  renderAgreementStepUI();
}

function startContractSignaturePoll() {
  stopContractSignaturePoll();
  if (!state.workspace.contractShareId) return;
  contractSignaturePollTimer = setInterval(() => {
    if (!document.hidden) checkContractSignatureStatus();
  }, 30000);
}

function initSupabaseClient() {
  if (!window.supabase || !window.supabase.createClient) {
    state.calendar.client = null;
    return;
  }
  state.calendar.client = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY,
    {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      },
    }
  );

  if (typeof state.calendar.authSubscription?.unsubscribe === "function") {
    state.calendar.authSubscription.unsubscribe();
  }

  const { data } = state.calendar.client.auth.onAuthStateChange((event, session) => {
    state.calendar.session = session || null;
    syncTopAuthTabLabel();
    updateLandingHeaderVisibility();
    updateCalendarAuthVisibility();

    const loginSignInBtn = document.getElementById("loginSignIn");
    if (loginSignInBtn) {
      loginSignInBtn.textContent = state.calendar.session ? "Sign out" : "Sign in";
    }

    if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
      safeStorageSet(CALENDAR_AUTH_SEEN_KEY, "1");
      updateSupabaseStatus("Signed in.");
      if (switchTopView) {
        const nextTop =
          state.workspace.top && state.workspace.top !== "login"
            ? state.workspace.top
            : "home";
        switchTopView(nextTop);
      }
      queueSupabaseSyncRefresh();
    } else if (event === "SIGNED_OUT") {
      updateSupabaseStatus("Signed out.");
      if (switchTopView) switchTopView("login");
    } else if (event === "PASSWORD_RECOVERY") {
      updateSupabaseStatus("Password recovery ready. Set your new password in the Supabase screen, then return here.");
    }
  });

  state.calendar.authSubscription = data?.subscription || null;
}

function getAuthRedirectUrl() {
  return window.location.origin + window.location.pathname;
}

function hasSupabaseAuthParams() {
  const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const queryParams = new URLSearchParams(window.location.search);
  return (
    hashParams.has("access_token") ||
    hashParams.has("refresh_token") ||
    hashParams.has("type") ||
    queryParams.has("code") ||
    queryParams.has("token") ||
    queryParams.has("type")
  );
}

function clearSupabaseAuthParams() {
  const cleanUrl = getAuthRedirectUrl();
  window.history.replaceState({}, document.title, cleanUrl);
}

function updateSupabaseStatus(message, isError = false) {
  ["supabaseStatus", "loginStatus"].forEach((id) => {
    const status = document.getElementById(id);
    if (!status) return;
    status.textContent = message;
    status.classList.toggle("warning", isError);
  });
}

function setCalendarStatus(message, isError = false) {
  const status = document.getElementById("calendarStatus");
  if (!status) return;
  status.textContent = message;
  status.classList.toggle("warning", isError);
}

async function openSupabaseStoragePath(path, statusHandler = updateSupabaseStatus) {
  const client = state.calendar.client;
  if (!client || !state.calendar.session || !path) {
    if (statusHandler) statusHandler("Could not open PDF.", true);
    return false;
  }

  const { data, error } = await client
    .storage
    .from("signed-contracts")
    .createSignedUrl(path, 300);

  if (error || !data?.signedUrl) {
    if (statusHandler) {
      statusHandler(`Could not open PDF: ${error?.message || "Unknown error"}`, true);
    }
    return false;
  }

  window.location.assign(data.signedUrl);
  return true;
}

async function loadSupabasePdfIntoMemory(path, fileName, statusHandler = updateSupabaseStatus) {
  const client = state.calendar.client;
  if (!client || !state.calendar.session || !path) {
    if (statusHandler) statusHandler("Could not load PDF.", true);
    return false;
  }

  const { data, error } = await client
    .storage
    .from("signed-contracts")
    .createSignedUrl(path, 300);

  if (error || !data?.signedUrl) {
    if (statusHandler) {
      statusHandler(`Could not load PDF: ${error?.message || "Unknown error"}`, true);
    }
    return false;
  }

  try {
    const response = await fetch(data.signedUrl);
    if (!response.ok) {
      if (statusHandler) statusHandler("Could not load PDF file.", true);
      return false;
    }
    const blob = await response.blob();
    setLastGeneratedPdf(blob, fileName || "RustAndRuin-Agreement.pdf");
    return true;
  } catch (error) {
    if (statusHandler) statusHandler("Could not load PDF file.", true);
    return false;
  }
}

function syncTopAuthTabLabel() {
  const moreSignOutBtn = document.getElementById("moreSignOut");
  if (!moreSignOutBtn) return;
  moreSignOutBtn.textContent = state.calendar.session ? "Sign out" : "Signed out";
  moreSignOutBtn.disabled = !state.calendar.session;
}

function updateLandingHeaderVisibility() {
  const landingHeader = document.getElementById("landingHeader");
  if (!landingHeader) return;
  landingHeader.classList.toggle("hidden", Boolean(state.calendar.session));
}

function updateCalendarAuthVisibility() {
  const authSection = document.getElementById("calendarAuthSection");
  if (!authSection) return;
  const signedInOnce = safeStorageGet(CALENDAR_AUTH_SEEN_KEY) === "1";
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
  safeStorageSet(CALENDAR_AUTH_SEEN_KEY, "1");
  updateSupabaseStatus("Signed in.");
  await refreshAuthState();
  await loadOverridePin();
  await fetchEventsForMonth();
  await fetchContracts();
  await fetchMusicians();
  await fetchMusicianAssignments();
  await fetchMusicianBlackouts();
  await fetchInvoices();
  await fetchReceipts();
  await loadBandDNAFromSupabase();
  repairLineupRates();
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
    redirectTo: getAuthRedirectUrl(),
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
      emailRedirectTo: getAuthRedirectUrl(),
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
    setCalendarStatus("Draft contract saved. Upload a signed PDF to open it.", true);
    return;
  }
  await openSupabaseStoragePath(contract.file_path, setCalendarStatus);
}

async function refreshAuthState() {
  const client = state.calendar.client;
  if (!client) return;
  const { data } = await client.auth.getSession();
  state.calendar.session = data?.session || null;
  if (state.calendar.session) {
    safeStorageSet(CALENDAR_AUTH_SEEN_KEY, "1");
  }
  syncTopAuthTabLabel();
  updateLandingHeaderVisibility();
  updateCalendarAuthVisibility();
  updateSupabaseStatus(state.calendar.session ? "Signed in." : "Signed out.");
  const loginSignInBtn = document.getElementById("loginSignIn");
  if (loginSignInBtn) {
    loginSignInBtn.textContent = state.calendar.session ? "Sign out" : "Sign in";
  }
  if (state.calendar.session) {
    startSupabaseSync();
    await loadOverridePin();
    await fetchEventsForMonth();
    await fetchContracts();
    await fetchMusicians();
    await fetchMusicianAssignments();
    await fetchMusicianBlackouts();
    await fetchWorkOrders();
    await fetchInvoices();
    await fetchReceipts();
    await loadBandDNAFromSupabase();
    repairLineupRates();
  } else {
    stopSupabaseSync();
    state.calendar.events = [];
    state.calendar.contracts = [];
    state.calendar.assignments = [];
    state.calendar.blackouts = [];
    state.billing.invoices = [];
    state.billing.receipts = [];
    state.workOrders = [];
    renderMusicianList();
    renderCalendar();
    updateEventList();
    updateContractList();
    updateCreatedContractList();
    renderContractsHub();
    renderMusicianAssignments();
    renderAssignmentSummaryLists();
    renderBlackoutList();
    updateInvoiceList();
    updateReceiptList();
    updateOpsProgress();
  }
  if (switchTopView) {
    switchTopView(state.calendar.session ? state.workspace.top || "home" : "login");
  }
}

async function restoreSupabaseSessionFromUrl() {
  const client = state.calendar.client;
  if (!client || !hasSupabaseAuthParams()) return false;

  updateSupabaseStatus("Finishing sign-in...");

  try {
    const queryParams = new URLSearchParams(window.location.search);
    const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ""));
    const existingSession = await client.auth.getSession();

    if (existingSession.data?.session) {
      state.calendar.session = existingSession.data.session;
      clearSupabaseAuthParams();
      return true;
    }

    if (queryParams.has("code") && typeof client.auth.exchangeCodeForSession === "function") {
      const { error } = await client.auth.exchangeCodeForSession(window.location.href);
      if (error) {
        updateSupabaseStatus(`Could not finish sign-in: ${error.message}`, true);
        return false;
      }
    }

    if (hashParams.has("error_description") || queryParams.has("error_description")) {
      const errorMessage =
        hashParams.get("error_description") || queryParams.get("error_description");
      updateSupabaseStatus(
        `Could not finish sign-in: ${decodeURIComponent(errorMessage || "Unknown error")}`,
        true
      );
      clearSupabaseAuthParams();
      return false;
    }

    await refreshAuthState();
    if (state.calendar.session) {
      updateSupabaseStatus("Signed in.");
    }
    clearSupabaseAuthParams();
    return Boolean(state.calendar.session);
  } catch (error) {
    updateSupabaseStatus(formatSupabaseError(error, "Could not finish sign-in."), true);
    clearSupabaseAuthParams();
    return false;
  }
}

function stopSupabaseSync() {
  const client = state.calendar.client;
  if (state.calendar.syncRefreshTimer) {
    clearTimeout(state.calendar.syncRefreshTimer);
    state.calendar.syncRefreshTimer = null;
  }
  if (state.calendar.syncTimer) {
    clearInterval(state.calendar.syncTimer);
    state.calendar.syncTimer = null;
  }
  if (client && state.calendar.syncChannel) {
    client.removeChannel(state.calendar.syncChannel);
  }
  state.calendar.syncChannel = null;
}

function queueSupabaseSyncRefresh() {
  if (state.calendar.syncRefreshTimer) return;
  state.calendar.syncRefreshTimer = setTimeout(async () => {
    state.calendar.syncRefreshTimer = null;
    if (!state.calendar.session) return;
    await Promise.all([
      fetchEventsForMonth(),
      fetchContracts(),
      fetchMusicianAssignments(),
      fetchMusicianBlackouts(),
      fetchMusicians(),
      fetchWorkOrders(),
      fetchInvoices(),
      fetchReceipts(),
    ]);
  }, 400);
}

function startSupabaseSync() {
  const client = state.calendar.client;
  if (!client || !state.calendar.session) return;
  stopSupabaseSync();

  const channel = client.channel(`rr-sync-${state.calendar.session.user?.id || "shared"}`);
  [
    "events",
    "contracts",
    "musician_assignments",
    "musician_blackouts",
    "musicians",
    "work_orders",
    "invoices",
    "receipts",
  ].forEach((table) => {
    channel.on(
      "postgres_changes",
      { event: "*", schema: "public", table },
      () => {
        queueSupabaseSyncRefresh();
      }
    );
  });
  channel.subscribe();
  state.calendar.syncChannel = channel;
  state.calendar.syncTimer = setInterval(() => {
    if (!document.hidden && state.calendar.session) {
      queueSupabaseSyncRefresh();
    }
  }, SYNC_POLL_INTERVAL_MS);
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

  state.calendar.events = mergeSeededCalendarEvents(data || [], rangeStart, rangeEnd);
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
  if (!grid || !title) {
    renderBookHubCalendar();
    return;
  }

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
    const holidayLabel = getHolidayWeekendLabel(cellDate);

    if (muted) cell.classList.add("muted");
    if (cellKey === selectedKey) cell.classList.add("selected");
    if (holidayLabel) {
      cell.classList.add("holiday");
      cell.title = holidayLabel;
    }

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

    if (holidayLabel) {
      const holidayMarker = document.createElement("span");
      holidayMarker.className = "calendar-holiday-marker";
      holidayMarker.textContent = holidayLabel.replace(" Weekend", "");
      holidayMarker.title = holidayLabel;
      dayTop.appendChild(holidayMarker);
    }

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

  renderBookHubCalendar();
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

async function uploadSignedContractForEvent(eventId, file, contractName = "") {
  const client = state.calendar.client;
  if (!client || !state.calendar.session) {
    return { ok: false, message: "Sign in to upload." };
  }
  if (!eventId || !file) {
    return { ok: false, message: "Choose an event and PDF first." };
  }

  const safeName = String(contractName || file.name || "signed-contract.pdf")
    .trim()
    .replace(/\s+/g, "-");
  const path = `contracts/${Date.now()}-${safeName}`.replace(/[^a-zA-Z0-9-_/.]/g, "");

  const { error: uploadError } = await client
    .storage
    .from("signed-contracts")
    .upload(path, file, { upsert: true });
  if (uploadError) {
    return { ok: false, message: "Upload failed." };
  }

  const { data: existing, error: existingError } = await client
    .from("contracts")
    .select("*")
    .eq("event_id", eventId)
    .limit(1);
  if (existingError) {
    return { ok: false, message: "Saved file but could not check existing contract." };
  }

  if (existing && existing.length) {
    const { error: updateError } = await client
      .from("contracts")
      .update({ file_path: path, name: safeName, status: "Signed" })
      .eq("id", existing[0].id);
    if (updateError) {
      return { ok: false, message: "Saved file but could not update contract." };
    }
  } else {
    const { error: insertError } = await client.from("contracts").insert({
      name: safeName,
      file_path: path,
      event_id: eventId,
      status: "Signed",
    });
    if (insertError) {
      return { ok: false, message: "Saved file but could not store metadata." };
    }
  }

  const { error: eventUpdateError } = await client
    .from("events")
    .update({ type: "Confirmed" })
    .eq("id", eventId);
  if (eventUpdateError) {
    return { ok: false, message: "Contract uploaded, but event could not be marked confirmed." };
  }

  await fetchContracts();
  await fetchEventsForMonth();
  return { ok: true, message: "Contract uploaded." };
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

async function openAgreementForCalendarEvent(event) {
  if (!event) return;

  const existingContract = state.calendar.contracts.find((item) => item.event_id === event.id);
  const draftContract = existingContract || {
    id: "",
    event_id: event.id,
    name: `${event.title || event.type || "Event"} Agreement`,
  };

  setAgreementDraftContext(draftContract);
  const snapshot = getAgreementSnapshotForContract(draftContract);
  state.agreement = snapshot
    ? { ...createInitialAgreementState(), ...snapshot }
    : createInitialAgreementState();

  const start = new Date(event.start_time);
  const end = new Date(event.end_time || event.start_time);
  state.agreement.clientName = state.agreement.clientName || event.title || "";
  state.agreement.performanceDate = formatDateInput(start);
  state.agreement.performanceTime = formatTimeInput(start);
  state.agreement.performanceEndTime = formatTimeInput(end);
  state.workspace.agreementStep = 1;
  state.workspace.bookingSaved = Boolean(event?.id);
  state.workspace.bookingEventId = event?.id || "";
  state.workspace.contractWizardOpen = false;

  syncAgreementForm();
  updatePerformanceHoursFromTimes();
  updateHolidayFromDate();
  updateAgreementPreview();
  renderAgreementStepUI();
  saveDraft();
  persistAgreementDraftSnapshot();

  if (!existingContract && state.calendar.client && state.calendar.session && !event.seeded) {
    await upsertPendingContractForEvent(event.id, event.title || event.type);
    await fetchContracts();
    setAgreementDraftContext({
      id: "",
      event_id: event.id,
      name: `${event.title || event.type || "Event"} Agreement`,
    });
  }

  if (switchTopView) {
    state.activeTab = "agreement";
    switchTopView("bookkeeping");
  }
  setAgreementCalendarStatus(
    "Agreement loaded from the selected calendar event. You can now create or edit the contract for this booking."
  );
}

function getCalendarEventsForDate(dateValue) {
  const selectedDate = parseLocalDate(dateValue);
  if (!selectedDate) return [];
  const dayStart = startOfDay(selectedDate);
  const dayEnd = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    selectedDate.getDate(),
    23,
    59,
    59,
    999
  );
  return mergeSeededCalendarEvents(state.calendar.events, dayStart, dayEnd).filter((event) => {
    const start = new Date(event.start_time);
    const end = new Date(event.end_time);
    return selectedDate >= startOfDay(start) && selectedDate <= startOfDay(end);
  });
}

function getVisibleMonthCalendarEvents() {
  const monthStart = getCalendarMonth();
  const rangeStart = new Date(monthStart.getFullYear(), monthStart.getMonth(), 1, 0, 0, 0, 0);
  const rangeEnd = new Date(monthStart.getFullYear(), monthStart.getMonth() + 1, 0, 23, 59, 59, 999);
  return mergeSeededCalendarEvents(state.calendar.events, rangeStart, rangeEnd)
    .filter((event) => {
      const start = new Date(event.start_time);
      return start >= rangeStart && start <= rangeEnd;
    })
    .sort((a, b) => new Date(a.start_time) - new Date(b.start_time));
}

function buildEventCard(event, selected, compact = false) {
  const card = document.createElement("div");
  card.className = "event-card";
  if (!compact && state.calendar.selectedEventId === event.id) {
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

  card.appendChild(header);
  card.appendChild(meta);

  if (event.notes) {
    const notes = document.createElement("div");
    notes.className = "event-meta";
    notes.textContent = event.notes || "";
    notes.addEventListener("click", () => {
      selectEventForEdit(event, selected);
    });
    card.appendChild(notes);
  }

  if (compact) return card;

  const actions = document.createElement("div");
  actions.className = "event-actions";
  const uploadInput = document.createElement("input");
  uploadInput.type = "file";
  uploadInput.accept = "application/pdf";
  uploadInput.className = "hidden";
  uploadInput.addEventListener("change", async () => {
    const file = uploadInput.files?.[0];
    if (!file) return;
    const result = await uploadSignedContractForEvent(event.id, file, `${event.title || event.type} Agreement`);
    updateSupabaseStatus(result.message, !result.ok);
    setCalendarStatus(
      result.ok ? "Signed contract uploaded and saved." : result.message,
      !result.ok
    );
    if (result.ok) {
      selectEventForEdit(
        state.calendar.events.find((item) => item.id === event.id) || event,
        selected
      );
    }
    uploadInput.value = "";
  });
  const selectBtn = document.createElement("button");
  selectBtn.className = "btn ghost";
  selectBtn.textContent = "Edit event";
  selectBtn.addEventListener("click", () => {
    selectEventForEdit(event, selected);
  });
  actions.appendChild(selectBtn);
  const contractBtn = document.createElement("button");
  contractBtn.className = "btn ghost";
  contractBtn.textContent = "Create/Edit Contract";
  contractBtn.addEventListener("click", async () => {
    await openAgreementForCalendarEvent(event);
  });
  actions.appendChild(contractBtn);
  if (String(event.type || "").toLowerCase() === "confirmed" && !event.seeded) {
    const uploadBtn = document.createElement("button");
    uploadBtn.className = "btn ghost";
    uploadBtn.textContent = "Upload contract";
    uploadBtn.addEventListener("click", () => uploadInput.click());
    actions.appendChild(uploadBtn);
  }
  const del = document.createElement("button");
  del.className = "btn ghost";
  del.textContent = "Delete";
  del.addEventListener("click", () => deleteCalendarEvent(event));
  actions.appendChild(del);

  const contract = state.calendar.contracts.find((item) => item.event_id === event.id);
  if (contract && !contract.file_path) {
    const badge = document.createElement("span");
    badge.className = "badge-inline draft";
    badge.textContent = "Pending contract";
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
  card.appendChild(uploadInput);
  card.appendChild(actions);
  return card;
}

function updateEventList() {
  const list = document.getElementById("eventList");
  const selectedLabel = document.getElementById("selectedEventLabel");
  if (!list) return;

  const selected = state.calendar.selectedDate;
  if (!selected) {
    const monthEvents = getVisibleMonthCalendarEvents();
    if (!monthEvents.length) {
      list.innerHTML = "<p class=\"muted\">Select a date on the calendar to view events.</p>";
      if (selectedLabel) selectedLabel.textContent = "Select a date to view events.";
      state.calendar.selectedEventId = "";
      renderMusicianAssignments();
      return;
    }
    list.innerHTML = "";
    monthEvents.forEach((event) => {
      const selectedDate = formatDateInput(new Date(event.start_time));
      list.appendChild(buildEventCard(event, selectedDate, true));
    });
    if (selectedLabel) {
      selectedLabel.textContent = `Showing all dates with events in ${getCalendarMonth().toLocaleString(undefined, {
        month: "long",
        year: "numeric",
      })}. Tap a day to focus it.`;
    }
    state.calendar.selectedEventId = "";
    renderMusicianAssignments();
    return;
  }
  const selectedDate = parseLocalDate(selected);
  if (!selectedDate) return;

  const events = getCalendarEventsForDate(selected);

  if (!events.length) {
    list.innerHTML = "<p class=\"muted\">No events for selected date.</p>";
    state.calendar.selectedEventId = "";
    if (selectedLabel) selectedLabel.textContent = `Selected date: ${formatDate(selected)} | Selected event: None`;
    renderMusicianAssignments();
    return;
  }

  list.innerHTML = "";
  events.forEach((event) => {
    list.appendChild(buildEventCard(event, selected, false));
  });

  if (selectedLabel) {
    const current = events.find((item) => item.id === state.calendar.selectedEventId);
    selectedLabel.textContent = current
      ? `Selected date: ${formatDate(selected)} | Selected event: ${current.title || current.type}`
      : `Selected date: ${formatDate(selected)} | Selected event: None`;
  }
  renderMusicianAssignments();
}

async function deleteCalendarEvent(eventOrId) {
  const event = typeof eventOrId === "object"
    ? eventOrId
    : state.calendar.events.find((item) => item.id === eventOrId) || null;
  const id = event?.id || (typeof eventOrId === "string" ? eventOrId : "");
  if (!event && !id) return;
  const seededKey = event?.seeded ? eventIdentityKey(event) : "";
  const previousEvents = [...state.calendar.events];
  const previousContracts = [...state.calendar.contracts];
  const previousAssignments = [...state.calendar.assignments];
  const previousShowBookings = [...state.musicianShowBookings];
  const previousHiddenSeededEventKeys = [...(state.calendar.hiddenSeededEventKeys || [])];
  const previousSelectedEventId = state.calendar.selectedEventId;
  const rerenderDeletedEventViews = () => {
    renderBookedDatesList();
    updateEventList();
    renderBookHubCalendar();
    updateManagerDesk();
  };
  const restoreDeletedEventViews = () => {
    state.calendar.events = previousEvents;
    state.calendar.contracts = previousContracts;
    state.calendar.assignments = previousAssignments;
    state.musicianShowBookings = previousShowBookings;
    state.calendar.hiddenSeededEventKeys = previousHiddenSeededEventKeys;
    state.calendar.selectedEventId = previousSelectedEventId;
    rerenderDeletedEventViews();
  };

  if (id) {
    state.calendar.events = state.calendar.events.filter((item) => item.id !== id);
    state.calendar.contracts = state.calendar.contracts.filter((item) => item.event_id !== id);
    state.calendar.assignments = state.calendar.assignments.filter((item) => item.event_id !== id);
    if (state.calendar.selectedEventId === id) {
      state.calendar.selectedEventId = "";
    }
  }
  if (seededKey) {
    state.calendar.hiddenSeededEventKeys = Array.from(
      new Set([...(state.calendar.hiddenSeededEventKeys || []), seededKey])
    );
  }
  state.musicianShowBookings = state.musicianShowBookings.filter(
    (booking) => !eventMatchesMusicianShowBooking(event || { id, seeded: Boolean(seededKey) }, booking)
  );
  rerenderDeletedEventViews();

  const client = state.calendar.client;
  if (event?.seeded) {
    removeEventFromEverywhere(event);
    updateSupabaseStatus("Show removed everywhere in the app.");
  } else if (client && state.calendar.session && id) {
    const { error: assignmentError } = await client
      .from("musician_assignments")
      .delete()
      .eq("event_id", id);
    if (assignmentError) {
      restoreDeletedEventViews();
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
      restoreDeletedEventViews();
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
      restoreDeletedEventViews();
      updateSupabaseStatus(
        `Could not unlink signed contracts from this event: ${unlinkSignedContractsError.message}`,
        true
      );
      return;
    }

    const { error: eventError } = await client.from("events").delete().eq("id", id);
    if (eventError) {
      restoreDeletedEventViews();
      updateSupabaseStatus(`Could not delete event: ${eventError.message}`, true);
      return;
    }
    const cleanup = removeEventFromEverywhere(event || { id });
    const showFileNote = cleanup.removedShowFiles
      ? ` Removed ${cleanup.removedShowFiles} linked musician show file${cleanup.removedShowFiles === 1 ? "" : "s"}.`
      : "";
    updateSupabaseStatus(`Event deleted everywhere.${showFileNote}`);
  } else {
    const cleanup = removeEventFromEverywhere(event || { id });
    const showFileNote = cleanup.removedShowFiles
      ? ` Removed ${cleanup.removedShowFiles} linked musician show file${cleanup.removedShowFiles === 1 ? "" : "s"}.`
      : "";
    updateSupabaseStatus(`Event deleted everywhere.${showFileNote}`);
  }
  updateManagerDesk();
  renderUpcomingShowsCard(getUpcomingEvents(3));
  void updateOpsProgress();
  await fetchMusicianAssignments();
  await fetchEventsForMonth();
  await fetchContracts();
  rerenderDeletedEventViews();
  updateManagerDesk();
  renderUpcomingShowsCard(getUpcomingEvents(3));
  void updateOpsProgress();
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

  const dayStart = new Date(start.getFullYear(), start.getMonth(), start.getDate(), 0, 0, 0, 0);
  const dayEnd = new Date(start.getFullYear(), start.getMonth(), start.getDate(), 23, 59, 59, 999);
  const { data: conflicts, error } = await client
    .from("events")
    .select("*")
    .lte("start_time", dayEnd.toISOString())
    .gte("end_time", dayStart.toISOString());

  if (error) {
    updateSupabaseStatus("Could not check conflicts.", true);
    return;
  }

  const conflictList = mergeSeededCalendarEvents(conflicts || [], dayStart, dayEnd).filter((event) => {
    if (event.id === state.calendar.selectedEventId) return false;
    return isConflictTrackedShowType(event.type);
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
  let saveMessage = "";

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
      saveMessage = `Selected event updated and monthly schedule saved (${sortedRecurring.length} events).`;
    } else {
      const { error: updateError } = await client
        .from("events")
        .update(payload)
        .eq("id", state.calendar.selectedEventId);
      if (updateError) {
        updateSupabaseStatus("Could not update selected event.", true);
        return;
      }
      saveMessage = "Selected event updated.";
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
      saveMessage = `Monthly schedule saved (${sortedInserted.length} events).`;
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
      saveMessage = "Event saved.";
    }
  }

  const postSaveErrors = [];
  try {
    await saveAssignmentsForEvent(savedEventId);
  } catch (error) {
    postSaveErrors.push("assignments");
  }
  try {
    const needsContract = ["contract needed", "hold"].includes(String(type || "").toLowerCase());
    if (needsContract) {
      await upsertPendingContractForEvent(savedEventId, title || type);
    } else if (savedEventId) {
      await clearPendingDraftContractForEvent(savedEventId);
    }
  } catch (error) {
    postSaveErrors.push("contracts");
  }

  state.calendar.selectedDate = startDate || state.calendar.selectedDate;
  clearCalendarForm();
  setCalendarEventFormExpanded(false);
  await fetchEventsForMonth();
  await fetchContracts();
  updateContractEventOptions();
  updateEventList();

  updateSupabaseStatus(
    postSaveErrors.length
      ? `${saveMessage} Follow-up sync incomplete: ${postSaveErrors.join(", ")}.`
      : saveMessage
  );
}

function clearCalendarForm() {
  const ids = [
    "calendarStartDate",
    "calendarEndDate",
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
  const typeSelect = document.getElementById("calendarType");
  if (typeSelect) typeSelect.value = "Contract Needed";
  const allDayInput = document.getElementById("calendarAllDay");
  if (allDayInput) allDayInput.checked = false;
  const startTime = document.getElementById("calendarStartTime");
  const endTime = document.getElementById("calendarEndTime");
  if (startTime) startTime.removeAttribute("disabled");
  if (endTime) endTime.removeAttribute("disabled");
  state.calendar.selectedEventId = "";
  const selectedLabel = document.getElementById("selectedEventLabel");
  if (selectedLabel) {
    selectedLabel.textContent = state.calendar.selectedDate
      ? `Selected date: ${formatDate(state.calendar.selectedDate)} | Selected event: None`
      : "Select a date to view events.";
  }
  const warning = document.getElementById("calendarConflict");
  if (warning) {
    warning.textContent = "";
    warning.classList.add("hidden");
  }
  const pinWrap = document.getElementById("overridePinWrap");
  if (pinWrap) pinWrap.classList.add("hidden");
  const pinInput = document.getElementById("overridePinInput");
  if (pinInput) pinInput.value = "";
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
  if (eventId) {
    const result = await uploadSignedContractForEvent(eventId, file, name || file.name);
    if (status) status.textContent = result.message;
    if (!result.ok) return;
  } else {
    const safeName = (name || file.name).replace(/\s+/g, "-");
    const path = `contracts/${Date.now()}-${safeName}`.replace(/[^a-zA-Z0-9-_/.]/g, "");
    const { error: uploadError } = await client
      .storage
      .from("signed-contracts")
      .upload(path, file, { upsert: true });
    if (uploadError) {
      if (status) status.textContent = "Upload failed.";
      return;
    }
    const { error: insertError } = await client.from("contracts").insert({
      name: safeName,
      file_path: path,
      event_id: null,
      status: "Signed",
    });
    if (insertError) {
      if (status) status.textContent = "Saved file but could not store metadata.";
      return;
    }
    if (status) status.textContent = "Contract uploaded.";
    await fetchContracts();
    await fetchEventsForMonth();
  }
  fileInput.value = "";
  document.getElementById("contractName").value = "";
  if (eventId) {
    await openContractForEvent(eventId);
  }
}

function resetRosterBlackoutForm() {
  const musician = document.getElementById("rosterBlackoutMusician");
  const startDate = document.getElementById("rosterBlackoutStartDate");
  const startTime = document.getElementById("rosterBlackoutStartTime");
  const endDate = document.getElementById("rosterBlackoutEndDate");
  const endTime = document.getElementById("rosterBlackoutEndTime");
  const notes = document.getElementById("rosterBlackoutNotes");
  const allDay = document.getElementById("rosterBlackoutAllDay");
  if (musician) musician.value = "";
  if (startDate) startDate.value = "";
  if (startTime) startTime.value = "";
  if (endDate) endDate.value = "";
  if (endTime) endTime.value = "";
  if (notes) notes.value = "";
  if (allDay) allDay.checked = false;
}

function updateContractList() {
  const list = document.getElementById("contractList");
  const draftList = document.getElementById("contractDraftList");
  if (!list) return;
  const signedContracts = state.calendar.contracts.filter((contract) => {
    const status = String(contract.status || "").toLowerCase();
    const path = String(contract.file_path || "");
    const isDigitallySigned = Boolean(contract.signed_at && contract.client_signature);
    if (isDigitallySigned) return true;
    if (!contract?.file_path) return false;
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
      const actions = document.createElement("div");
      actions.className = "event-actions";
      const link = document.createElement("button");
      link.className = "btn ghost";
      link.textContent = "Download";
      link.addEventListener("click", async (event) => {
        event.preventDefault();
        await openSupabaseStoragePath(contract.file_path, updateSupabaseStatus);
      });
      actions.appendChild(link);
      actions.appendChild(
        createConfirmDeleteButton(async () => {
          await deleteContractRecord(contract.id, updateSupabaseStatus);
        })
      );
      card.appendChild(header);
      card.appendChild(actions);
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
    const actions = document.createElement("div");
    actions.className = "event-actions";
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
        updateSupabaseStatus("Draft contract linked to event.");
      });
      actions.appendChild(linkBtn);
    }
    actions.appendChild(
      createConfirmDeleteButton(async () => {
        await deleteContractRecord(contract.id, updateSupabaseStatus);
      })
    );
    card.appendChild(actions);
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
    header.style.cssText = "display:flex;flex-direction:column;gap:6px;align-items:flex-start;";
    header.innerHTML = `<span style="color:#2c1a00;font-weight:600;font-size:15px;">${contract.name || "Created contract"} <span style="display:inline-flex;align-items:center;justify-content:center;background:#f47c20;color:#ffffff;font-size:11px;padding:2px 8px;border-radius:10px;">Draft</span></span><span style="color:#f47c20;font-size:13px;">${formatShortDateTime(
      contract.uploaded_at
    )}</span>`;
    const actions = document.createElement("div");
    actions.className = "event-actions";
    const openBtn = document.createElement("button");
    openBtn.className = "btn ghost";
    openBtn.textContent = "Open PDF";
    openBtn.addEventListener("click", async () => {
      await openSupabaseStoragePath(contract.file_path, setCreatedContractStatus);
    });
    actions.appendChild(openBtn);
    actions.appendChild(
      createConfirmDeleteButton(async () => {
        await deleteContractRecord(contract.id, setCreatedContractStatus);
      })
    );
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

function findCreatedAgreementForPendingContract(contract) {
  if (!contract) return null;
  const snapshot = getAgreementSnapshotForContract(contract) || {};
  const linkedEvent = state.calendar.events.find((event) => event.id === contract.event_id);
  const snapshotName = normalizeText(snapshot.clientName || "");
  const snapshotDate = normalizeDateValue(snapshot.performanceDate || "");
  const eventName = normalizeText(
    linkedEvent?.title || String(contract.name || "").replace(/\s+Agreement$/i, "")
  );
  const eventDate = linkedEvent ? formatDateInput(new Date(linkedEvent.start_time)) : "";

  const createdContracts = state.calendar.contracts
    .filter((item) => {
      if (!item?.file_path) return false;
      const status = String(item.status || "").toLowerCase();
      const path = String(item.file_path || "");
      return status.includes("created") || path.startsWith("created-contracts/");
    })
    .sort((a, b) => new Date(b.uploaded_at || b.created_at || 0) - new Date(a.uploaded_at || a.created_at || 0));

  const scored = createdContracts
    .map((item) => {
      const name = normalizeText(item.name || "");
      let score = 0;
      if (snapshotName && name.includes(snapshotName)) score += 4;
      if (eventName && name.includes(eventName)) score += 3;
      if (snapshotDate && String(item.name || "").includes(snapshotDate)) score += 4;
      if (eventDate && String(item.name || "").includes(eventDate)) score += 3;
      return { item, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored[0]?.item || null;
}

function contractTimestampLabel(contract) {
  return formatShortDateTime(contract.uploaded_at || contract.created_at || "");
}

async function openContractPdfPath(filePath) {
  await openSupabaseStoragePath(filePath, setContractsHubStatus);
}

async function deleteContractRecord(contractId, statusHandler = null) {
  const client = state.calendar.client;
  if (!client || !state.calendar.session) {
    if (statusHandler) statusHandler("Sign in to delete contracts.", true);
    return false;
  }
  const contract = state.calendar.contracts.find((item) => item.id === contractId);
  if (!contract) {
    if (statusHandler) statusHandler("Contract not found.", true);
    return false;
  }

  if (contract.file_path) {
    const { error: storageError } = await client
      .storage
      .from("signed-contracts")
      .remove([contract.file_path]);
    if (storageError) {
      if (statusHandler) statusHandler("Could not delete contract file.", true);
      return false;
    }
  }

  const { error: deleteError } = await client
    .from("contracts")
    .delete()
    .eq("id", contractId);
  if (deleteError) {
    if (statusHandler) statusHandler("Could not delete contract.", true);
    return false;
  }

  await fetchContracts();
  await fetchEventsForMonth();
  if (statusHandler) statusHandler("Contract deleted.");
  return true;
}

function createConfirmDeleteButton(onConfirm) {
  const button = document.createElement("button");
  button.className = "btn ghost";
  button.textContent = "Delete";
  let confirming = false;
  let resetTimer = null;

  const reset = () => {
    confirming = false;
    button.disabled = false;
    button.textContent = "Delete";
  };

  button.addEventListener("click", async () => {
    if (!confirming) {
      confirming = true;
      button.textContent = "Are you sure?";
      if (resetTimer) clearTimeout(resetTimer);
      resetTimer = setTimeout(reset, 5000);
      return;
    }
    if (resetTimer) clearTimeout(resetTimer);
    button.disabled = true;
    await onConfirm();
    reset();
  });

  return button;
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
  const { error: signedSaveError } = await client
    .from("contracts")
    .update({
      file_path: path,
      status: "Signed",
      uploaded_at: new Date().toISOString(),
      name: contract.name || "Contract",
    })
    .eq("id", contract.id);
  if (signedSaveError) {
    setContractsHubStatus("File uploaded, but the contract could not be marked signed.", true);
    return;
  }
  if (contract.event_id) {
    await client.from("events").update({ type: "Confirmed" }).eq("id", contract.event_id);
  }
  await fetchContracts();
  await fetchEventsForMonth();
  setContractsHubStatus("Signed contract uploaded and moved to Signed Contracts.");
}

function contractHasSignedVersion(contract) {
  if (!contract) return false;
  const contractName = normalizeText(contract.name || "");
  return state.calendar.contracts.some((item) => {
    if (!item || item.id === contract.id || !item.file_path) return false;
    const status = String(item.status || "").toLowerCase();
    const path = String(item.file_path || "");
    if (status.includes("created") || path.startsWith("created-contracts/")) return false;
    if (contract.event_id && item.event_id && item.event_id === contract.event_id) return true;
    const itemName = normalizeText(item.name || "");
    return Boolean(contractName && itemName && contractName === itemName);
  });
}

async function markContractNoLongerNeeded(contract, checked = false) {
  const client = state.calendar.client;
  if (!client || !state.calendar.session) {
    setContractsHubStatus("Sign in to update contracts.", true);
    return;
  }
  if (!contract?.id) {
    setContractsHubStatus("Contract not found.", true);
    return;
  }
  if (!checked) return;

  const { error } = await client
    .from("contracts")
    .update({
      status: "No contract needed",
      file_path: null,
      uploaded_at: new Date().toISOString(),
    })
    .eq("id", contract.id);
  if (error) {
    setContractsHubStatus("Could not mark contract as not needed.", true);
    return;
  }
  if (contract.event_id) {
    await client.from("events").update({ type: "Confirmed" }).eq("id", contract.event_id);
  }
  await fetchContracts();
  await fetchEventsForMonth();
  setContractsHubStatus("Marked as no contract needed.");
}

function loadAgreementDraftFromContract(contract, options = {}) {
  const { switchView = false } = options;
  setAgreementDraftContext(contract);
  const snapshot = getAgreementSnapshotForContract(contract);
  if (snapshot) {
    state.agreement = { ...createInitialAgreementState(), ...snapshot };
  } else {
    state.agreement = createInitialAgreementState();
  }
  const linkedEvent = state.calendar.events.find((event) => event.id === contract.event_id);
  if (linkedEvent) {
    const start = new Date(linkedEvent.start_time);
    const end = new Date(linkedEvent.end_time || linkedEvent.start_time);
    state.agreement.clientName = state.agreement.clientName || linkedEvent.title || "";
    state.agreement.performanceDate = formatDateInput(start);
    state.agreement.performanceTime = formatTimeInput(start);
    state.agreement.performanceEndTime = formatTimeInput(end);
  } else if (contract?.name) {
    state.agreement.clientName =
      state.agreement.clientName ||
      String(contract.name).replace(/\s+Agreement$/i, "").trim();
  }
  state.workspace.agreementStep = 1;
  state.workspace.bookingSaved = Boolean(contract?.event_id);
  state.workspace.bookingEventId = contract?.event_id || "";
  state.workspace.contractWizardOpen = false;
  syncAgreementForm();
  updateAgreementPreview();
  renderAgreementStepUI();
  saveDraft();
  if (switchView && switchTopView) {
    state.activeTab = "agreement";
    switchTopView("bookkeeping");
  }
}

function editDraftContract(contract) {
  loadAgreementDraftFromContract(contract, { switchView: true });
  setContractsHubStatus("Draft loaded in Agreement. Update details and generate a new contract.");
}

function renderContractsHub() {
  const container = document.querySelector("#contractsHubTab .panel.form-panel");
  const pendingList = document.getElementById("contractsHubPendingList");
  const signedList = document.getElementById("contractsHubSignedList");
  if (container) {
    const legacyDescription = container.querySelector("h2 + p.muted");
    if (legacyDescription) legacyDescription.style.display = "none";
    const existingHeader = document.getElementById("contractsHubGreetingHeader");
    if (existingHeader) existingHeader.remove();
    const header = document.createElement("div");
    header.id = "contractsHubGreetingHeader";
    header.style.cssText = "padding: 24px 16px 8px; text-align: left;";
    header.innerHTML = `
      <h1 style="font-size: 32px; font-weight: 700; margin: 0 0 4px; font-family: Georgia, 'Times New Roman', serif; background: linear-gradient(to right, #d4621a, #f47c20, #f5a623); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Lock it in.</h1>
      <h1 style="font-size: 32px; font-weight: 700; margin: 0 0 8px; font-family: Georgia, 'Times New Roman', serif; background: linear-gradient(to right, #f47c20, #f5a623, #f5c48a); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Hit the stage.</h1>
      <p style="font-size: 15px; color: #f0ede8; margin: 0 0 16px; font-family: Georgia, 'Times New Roman', serif;">Manage pending and signed contracts in one place.</p>
    `;
    container.insertBefore(header, container.firstChild);
  }
  if (!pendingList || !signedList) return;
  const pendingSection = pendingList.closest(".form-section");
  const signedSection = signedList.closest(".form-section");
  if (pendingSection) pendingSection.classList.add("contracts-hub-section");
  if (signedSection) signedSection.classList.add("contracts-hub-section");

  const pendingContracts = state.calendar.contracts
    .filter((contract) => {
      if (contract?.file_path) return false;
      const status = String(contract.status || "").toLowerCase();
      return !status.includes("created")
        && !status.includes("no contract needed")
        && !status.includes("signed")
        && !contractHasSignedVersion(contract);
    })
    .sort((a, b) => new Date(b.uploaded_at || b.created_at || 0) - new Date(a.uploaded_at || a.created_at || 0));

  const signedContracts = state.calendar.contracts
    .filter((contract) => {
      const status = String(contract.status || "").toLowerCase();
      const path = String(contract.file_path || "");
      const isDigitallySigned = Boolean(contract.signed_at && contract.client_signature);
      if (isDigitallySigned) return true;
      if (!contract?.file_path) return false;
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
      const noContractWrap = document.createElement("label");
      noContractWrap.className = "checkbox";
      const noContractCheck = document.createElement("input");
      noContractCheck.type = "checkbox";
      noContractCheck.checked = false;
      noContractWrap.appendChild(noContractCheck);
      noContractWrap.appendChild(document.createTextNode("No contract needed"));
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "application/pdf";
      fileInput.className = "hidden";
      const uploadBtn = document.createElement("button");
      uploadBtn.className = "btn ghost";
      uploadBtn.textContent = "Upload signed PDF";
      uploadBtn.addEventListener("click", () => fileInput.click());
      const openUnsignedBtn = document.createElement("button");
      openUnsignedBtn.className = "btn ghost";
      openUnsignedBtn.textContent = "Open unsigned PDF";
      openUnsignedBtn.addEventListener("click", async () => {
        loadAgreementDraftFromContract(contract);
        state.activeTab = "agreement";
        const copied = await copyCurrentMessageToClipboard({
          statusEl: document.getElementById("contractsHubStatus"),
          successMessage: "Draft message copied. Preparing PDF...",
          failureMessage: "Could not copy the message, but the PDF is still loading.",
        });
        const createdAgreement = findCreatedAgreementForPendingContract(contract);
        if (!createdAgreement?.file_path) {
          setContractsHubStatus("No saved unsigned agreement PDF found for this draft.", true);
          return;
        }
        const loaded = await loadSupabasePdfIntoMemory(
          createdAgreement.file_path,
          `${contract.name || "RustAndRuin-Agreement"}.pdf`,
          setContractsHubStatus
        );
        if (!loaded) return;
        const file = lastPdfBlob ? new File([lastPdfBlob], lastPdfName, { type: "application/pdf" }) : null;
        const shareMessage = getCurrentShareMessage();
        if (file && navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({
              files: [file],
              title: shareMessage.subject || contract.name || "Rust and Ruin Agreement",
              text: shareMessage.payload,
            });
            setContractsHubStatus(copied ? "Shared. Message copied as backup." : "Shared.");
            return;
          } catch (error) {
            setContractsHubStatus("Share canceled.");
            return;
          }
        }
        await openContractPdfPath(createdAgreement.file_path);
      });
      const editBtn = document.createElement("button");
      editBtn.className = "btn ghost";
      editBtn.textContent = "Edit Draft";
      editBtn.addEventListener("click", () => {
        editDraftContract(contract);
      });
      fileInput.addEventListener("change", async () => {
        const file = fileInput.files?.[0];
        if (!file) return;
        if (noContractCheck.checked) {
          setContractsHubStatus("Uncheck 'No contract needed' before uploading a signed contract.", true);
          fileInput.value = "";
          return;
        }
        await uploadSignedFromPendingContract(contract, file, signedCheck.checked === true);
      });
      noContractCheck.addEventListener("change", async () => {
        if (!noContractCheck.checked) return;
        signedCheck.checked = false;
        await markContractNoLongerNeeded(contract, true);
      });
      actions.appendChild(signedWrap);
      actions.appendChild(noContractWrap);
      actions.appendChild(openUnsignedBtn);
      actions.appendChild(uploadBtn);
      actions.appendChild(editBtn);
      actions.appendChild(
        createConfirmDeleteButton(async () => {
          await deleteContractRecord(contract.id, setContractsHubStatus);
        })
      );

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
      const signedLabel = contract.signed_at
        ? `Signed digitally · ${contractTimestampLabel(contract)}`
        : `Signed · ${contractTimestampLabel(contract)}`;
      header.innerHTML = `<span>${contract.name || "Contract"}</span><span>${signedLabel}</span>`;
      const actions = document.createElement("div");
      actions.className = "event-actions";
      const openBtn = document.createElement("button");
      openBtn.className = "btn ghost";
      openBtn.textContent = "Open PDF";
      openBtn.addEventListener("click", async () => {
        await openContractPdfPath(contract.file_path);
      });
      actions.appendChild(openBtn);
      actions.appendChild(
        createConfirmDeleteButton(async () => {
          await deleteContractRecord(contract.id, setContractsHubStatus);
        })
      );
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

async function ensureBookingEventForAgreement(options = {}) {
  const { createPendingContract = false } = options;
  const client = state.calendar.client;
  if (!client || !state.calendar.session) {
    return { ok: false, reason: "not_signed_in" };
  }

  const activeDraft = getActiveAgreementDraftContract();

  const date = state.agreement.performanceDate;
  const startTime = state.agreement.performanceTime;
  const endTime = state.agreement.performanceEndTime;
  const title = state.agreement.clientName || "Contract Needed";

  const start = combineDateTime(date, startTime);
  let end = combineDateTime(date, endTime);
  if (start && end && end <= start) {
    end.setDate(end.getDate() + 1);
  }
  if (!start || !end || end <= start) {
    return {
      ok: false,
      reason: "missing_fields",
      details: {
        date: date || "(blank)",
        startTime: startTime || "(blank)",
        endTime: endTime || "(blank)",
      },
    };
  }

  let linkedEvent = null;
  let eventId = activeDraft.event_id || state.workspace.bookingEventId || "";
  if (eventId) {
    const { data } = await client
      .from("events")
      .select("*")
      .eq("id", eventId)
      .maybeSingle();
    linkedEvent = data || null;
  }

  if (!linkedEvent && createPendingContract) {
    const dayStart = new Date(start.getFullYear(), start.getMonth(), start.getDate(), 0, 0, 0);
    const dayEnd = new Date(start.getFullYear(), start.getMonth(), start.getDate(), 23, 59, 59);

    const { data: existing } = await client
      .from("events")
      .select("*")
      .in("type", ["Hold", "Contract Needed"])
      .gte("start_time", dayStart.toISOString())
      .lte("start_time", dayEnd.toISOString())
      .limit(50);

    const exactHold = (existing || []).find((event) => event.title === title);
    // Only reuse an existing event when it is an exact title match.
    // Reusing any generic auto-created hold on the same date can hijack
    // an unrelated pending contract and make it appear to vanish.
    linkedEvent = exactHold || null;
    eventId = linkedEvent ? linkedEvent.id : "";
  }

  const normalizedEventType = createPendingContract ? "Contract Needed" : "Confirmed";
  const normalizedNotes = createPendingContract
    ? AUTO_HOLD_NOTE
    : `Saved from booking flow${state.agreement.eventType ? ` · ${state.agreement.eventType}` : ""}`;

  if (!eventId) {
    const { data, error } = await client
      .from("events")
      .insert({
        type: normalizedEventType,
        title,
        start_time: start.toISOString(),
        end_time: end.toISOString(),
        notes: normalizedNotes,
        override: false,
      })
      .select()
      .single();
    if (error) return { ok: false, reason: "event_insert_failed" };
    eventId = data.id;
    linkedEvent = data;
  } else {
    const updatePayload = {
      title,
      start_time: start.toISOString(),
      end_time: end.toISOString(),
      type: normalizedEventType,
      notes: normalizedNotes,
    };
    updatePayload.override = false;
    const { error } = await client
      .from("events")
      .update(updatePayload)
      .eq("id", eventId);
    if (error) return { ok: false, reason: "event_update_failed" };
  }

  let resolvedContractContext = null;
  if (createPendingContract) {
    const { data: existingContract } = await client
      .from("contracts")
      .select("*")
      .eq("event_id", eventId)
      .limit(1);

    if (!existingContract || !existingContract.length) {
      const { data: insertedContract, error } = await client
        .from("contracts")
        .insert({
          name: `${title} Agreement`,
          file_path: null,
          event_id: eventId,
          status: "Pending signature",
        })
        .select()
        .single();
      if (error) return { ok: false, reason: "contract_insert_failed" };
      resolvedContractContext = insertedContract || {
        id: "",
        event_id: eventId,
        name: `${title} Agreement`,
      };
      setAgreementDraftContext(resolvedContractContext);
    } else if (!existingContract[0].file_path) {
      const { data: updatedContract, error } = await client
        .from("contracts")
        .update({ name: `${title} Agreement`, status: "Pending signature" })
        .eq("id", existingContract[0].id)
        .select();
      if (error) return { ok: false, reason: "contract_update_failed" };
      resolvedContractContext = updatedContract?.[0] || {
        id: existingContract[0].id,
        event_id: eventId,
        name: `${title} Agreement`,
      };
      setAgreementDraftContext(resolvedContractContext);
    } else {
      resolvedContractContext = {
        id: existingContract[0].id,
        event_id: eventId,
        name: existingContract[0].name || `${title} Agreement`,
      };
      setAgreementDraftContext(resolvedContractContext);
    }

    saveAgreementSnapshotForContract(
      resolvedContractContext || {
        id: "",
        event_id: eventId,
        name: `${title} Agreement`,
      }
    );
  } else {
    await clearPendingDraftContractForEvent(eventId);
    state.agreementDraftContext = {
      contractId: "",
      eventId,
      name: `${title} Agreement`,
    };
    state.workspace.bookingSaved = true;
    state.workspace.bookingEventId = eventId;
  }

  await fetchEventsForMonth();
  await fetchContracts();
  return { ok: true, reason: "synced", eventId };
}

async function ensureHoldEventForAgreement() {
  return ensureBookingEventForAgreement({ createPendingContract: true });
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
  prepareAgreementForOutput();
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
    updateSupabaseStatus("Sign in on Calendar tab first, then try Save + Generate/Share or Sync Calendar Only.", true);
    setAgreementCalendarStatus("Sign in on Calendar tab first.", true);
    return false;
  }
  if (result?.reason === "missing_fields") {
    const details = result?.details
      ? ` Date: ${result.details.date} | Start: ${result.details.startTime} | End: ${result.details.endTime}`
      : "";
    updateSupabaseStatus(
      `Set performance date, start time, and end time in Agreement, then try Save + Generate/Share or Sync Calendar Only.${details}`,
      true
    );
    setAgreementCalendarStatus(`Missing/invalid date or time in Agreement.${details}`, true);
    return false;
  }
  const reasonLabel = result?.reason ? ` (${result.reason})` : "";
  updateSupabaseStatus(`Could not add contract-needed event right now${reasonLabel}.`, true);
  setAgreementCalendarStatus(`Could not add contract-needed event${reasonLabel}.`, true);
  return false;
}

function resetAgreementForm() {
  state.agreement = createInitialAgreementState();
  applyAgreementDefaultsFromProfiles(true);
  state.agreementDraftContext = {
    contractId: "",
    eventId: "",
    name: "",
  };
  state.workspace.agreementStep = 1;
  state.workspace.bookingSaved = false;
  state.workspace.bookingEventId = "";
  state.workspace.contractWizardOpen = false;
  syncAgreementForm();
  updateAgreementPreview();
  renderAgreementStepUI();
  saveDraft();
  setAgreementCalendarStatus("Agreement form reset.");
}

async function saveBookingOnly() {
  prepareAgreementForOutput();
  setAgreementCalendarStatus("Saving booking...");
  const result = await ensureBookingEventForAgreement({ createPendingContract: false });
  if (result?.ok) {
    const dateValue = state.agreement.performanceDate;
    if (dateValue) {
      focusCalendarOnDate(dateValue);
      await fetchEventsForMonth();
      renderCalendar();
      updateEventList();
    }
    state.workspace.bookingSaved = true;
    state.workspace.bookingEventId = result.eventId || "";
    state.workspace.contractWizardOpen = false;
    updateSupabaseStatus("Booking saved.");
    setAgreementCalendarStatus(
      "Booking saved. Generate Contract whenever you're ready."
    );
    renderAgreementStepUI();
    saveDraft();
    return;
  }
  if (result?.reason === "not_signed_in") {
    updateSupabaseStatus("Sign in on Calendar tab first, then save the booking.", true);
    setAgreementCalendarStatus("Sign in on Calendar tab first.", true);
    return;
  }
  if (result?.reason === "missing_fields") {
    const details = result?.details
      ? ` Date: ${result.details.date} | Start: ${result.details.startTime} | End: ${result.details.endTime}`
      : "";
    updateSupabaseStatus(
      `Set performance date, start time, and end time before saving the booking.${details}`,
      true
    );
    setAgreementCalendarStatus(`Missing/invalid date or time in Booking.${details}`, true);
    return;
  }
  const reasonLabel = result?.reason ? ` (${result.reason})` : "";
  updateSupabaseStatus(`Could not save booking right now${reasonLabel}.`, true);
  setAgreementCalendarStatus(`Could not save booking${reasonLabel}.`, true);
}

async function submitAgreement() {
  stopContractSignaturePoll();
  if (!state.workspace.bookingSaved) {
    setAgreementCalendarStatus("Save the booking first, then generate the contract.", true);
    return;
  }
  state.workspace.contractShareId = "";
  state.workspace.contractWizardOpen = true;
  prepareAgreementForOutput();
  renderAgreementStepUI();
  saveDraft();
  setAgreementCalendarStatus("Contract wizard ready. Review the message and use the PDF actions when you're ready.");
  const previewPanel = document.querySelector("#agreementTab .preview-panel");
  if (previewPanel && typeof previewPanel.scrollIntoView === "function") {
    previewPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function seedInvoiceFromAgreement() {
  const totals = getAgreementTotals();
  state.invoice.clientName = state.agreement.clientName || state.invoice.clientName;
  state.invoice.clientEmail = state.agreement.clientEmail || state.invoice.clientEmail;
  state.invoice.issueDate = todayString();
  state.invoice.dueDate = state.agreement.performanceDate || state.invoice.dueDate;
  state.invoice.description = state.agreement.performanceDate
    ? `Performance on ${formatDate(state.agreement.performanceDate)}`
    : "Live performance";
  state.invoice.performanceFee = String(Math.max(0, totals.eventSubtotal || 0));
  state.invoice.depositDue = String(Math.max(0, totals.depositAmount || 0));
  state.invoice.depositPaid = state.agreement.depositPaid || state.invoice.depositPaid;
  state.invoice.addons = String(Math.max(0, totals.addOnTotal || 0));
  syncInvoiceForm();
  updateInvoicePreview();
}

function seedReceiptFromAgreement() {
  state.receipt.clientName = state.agreement.clientName || state.receipt.clientName;
  state.receipt.paymentDate = todayString();
  state.receipt.amountPaid = state.agreement.amountDueDayOf || state.receipt.amountPaid;
  syncReceiptForm();
  updateReceiptPreview();
}

function openInvoiceFromAgreement() {
  seedInvoiceFromAgreement();
  state.activeTab = "invoice";
  if (switchTopView) switchTopView("bookkeeping");
}

function openReceiptFromAgreement() {
  seedReceiptFromAgreement();
  state.activeTab = "receipt";
  if (switchTopView) switchTopView("bookkeeping");
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

  const savedAmount = state.agreement.friendsFamilyDiscountAmount;
  const discountButtonsWrap = document.getElementById("friendsFamilyDiscountButtons");
  if (discountButtonsWrap) {
    discountButtonsWrap.querySelectorAll("button[data-discount]").forEach((button) => {
      button.classList.toggle(
        "active",
        Boolean(savedAmount && savedAmount !== "0" && button.getAttribute("data-discount") === savedAmount)
      );
    });
  }

  const feeTotalInput = document.getElementById("feeTotal");
  if (feeTotalInput) {
    const feeHandler = () => {
      if (feeTotalInput.dataset.programmatic === "1") return;
      const rawValue = feeTotalInput.value.trim();
      const previousValue = state.agreement.feeTotal;
      const previousOverride = state.agreement.feeManualOverride;
      if (!rawValue) {
        state.agreement.feeTotal = "";
        state.agreement.feeManualOverride = false;
      } else {
        state.agreement.feeTotal = rawValue;
        state.agreement.feeManualOverride = true;
      }
      if (
        (previousValue !== state.agreement.feeTotal || previousOverride !== state.agreement.feeManualOverride) &&
        state.workspace.bookingSaved
      ) {
        state.workspace.bookingSaved = false;
        state.workspace.contractWizardOpen = false;
        setAgreementCalendarStatus("Changes made — please re-save before generating contract.");
      }
      updateAgreementPreview();
      renderAgreementStepUI();
      saveDraft();
      persistAgreementDraftSnapshot();
    };
    feeTotalInput.addEventListener("input", feeHandler);
    feeTotalInput.addEventListener("change", feeHandler);
  }
}

function syncAgreementFeeOverrideFromForm() {
  const feeTotalInput = document.getElementById("feeTotal");
  if (!feeTotalInput) return;
  const rawValue = feeTotalInput.value.trim();
  state.agreement.feeTotal = rawValue;
  state.agreement.feeManualOverride = rawValue !== "";
}

function syncFriendsFamilyDiscountFromForm() {
  const discountToggle = document.getElementById("friendsFamilyDiscount");
  const discountField = document.getElementById("friendsFamilyDiscountAmount");
  const discountEnabled = discountToggle ? discountToggle.checked : Boolean(state.agreement.friendsFamilyDiscount);

  state.agreement.friendsFamilyDiscount = discountEnabled;
  if (discountField) {
    discountField.value = state.agreement.friendsFamilyDiscountAmount || "0";
  }
}

function syncAgreementStateFromForm() {
  agreementFields.forEach((field) => {
    const el = document.getElementById(field);
    if (!el) return;
    if (el.type === "checkbox") {
      state.agreement[field] = el.checked;
    } else {
      if (field === "performanceDate") {
        state.agreement[field] = normalizeDateValue(el.value);
      } else if (field === "performanceTime" || field === "performanceEndTime") {
        state.agreement[field] = normalizeTimeValue(el.value);
      } else {
        state.agreement[field] = el.value;
      }
    }
  });
  syncAgreementFeeOverrideFromForm();
  syncFriendsFamilyDiscountFromForm();
}

function prepareAgreementForOutput() {
  syncAgreementStateFromForm();
  updateAgreementPreview();
  saveDraft();
  persistAgreementDraftSnapshot();
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

function resetInvoiceForm() {
  state.invoice = createInitialInvoiceState();
  syncInvoiceForm();
  const invoiceBandFull = document.getElementById("invoiceBandFull");
  const invoiceBandDuo = document.getElementById("invoiceBandDuo");
  const invoiceFile = document.getElementById("invoiceFile");
  if (invoiceBandFull) invoiceBandFull.checked = false;
  if (invoiceBandDuo) invoiceBandDuo.checked = false;
  if (invoiceFile) invoiceFile.value = "";
  updateInvoicePreview();
  updateMessagePreview();
  saveDraft();
}

function resetReceiptForm() {
  state.receipt = createInitialReceiptState();
  syncReceiptForm();
  const receiptFile = document.getElementById("receiptFile");
  if (receiptFile) receiptFile.value = "";
  updateReceiptPreview();
  updateMessagePreview();
  saveDraft();
}

function setWorkOrderStatus(message, isError = false) {
  const el = document.getElementById("workOrderStatus");
  if (!el) return;
  el.textContent = message;
  el.classList.toggle("warning", isError);
}

function mapWorkOrderRow(row) {
  return {
    id: row.id,
    date: row.date || "",
    category: row.category || "Other",
    description: row.description || row.title || "",
    needed: row.needed || "",
    deadline: row.deadline || "",
    files: row.files || "",
    status: row.status || "Open",
    followUp: row.follow_up || "",
    completed:
      row.completed === true || String(row.status || "").toLowerCase() === "completed",
    createdAt: row.created_at || row.createdAt || new Date().toISOString(),
  };
}

function serializeWorkOrder(order) {
  return {
    id: order.id,
    date: order.date || null,
    category: order.category || "Other",
    description: order.description || "",
    needed: order.needed || "",
    deadline: order.deadline || null,
    files: order.files || "",
    status: order.status || (order.completed ? "Completed" : "Open"),
    follow_up: order.followUp || "",
    completed: order.completed === true || String(order.status || "").toLowerCase() === "completed",
  };
}

async function fetchWorkOrders() {
  const client = state.calendar.client;
  if (!client || !state.calendar.session) {
    renderWorkOrders();
    return;
  }

  const { data, error } = await client
    .from("work_orders")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(300);

  if (error) {
    setWorkOrderStatus(formatSupabaseError(error, "Could not load work orders."), true);
    renderWorkOrders();
    return;
  }

  state.workOrders = (data || []).map(mapWorkOrderRow);
  saveDraft();
  renderWorkOrders();
}

async function saveWorkOrder(order) {
  const client = state.calendar.client;
  if (!client || !state.calendar.session) {
    return { ok: false, localOnly: true };
  }

  const payload = serializeWorkOrder(order);
  const { data, error } = await client
    .from("work_orders")
    .upsert(payload, { onConflict: "id" })
    .select()
    .single();

  if (error) {
    return { ok: false, message: formatSupabaseError(error, "Could not save work order.") };
  }

  return { ok: true, row: data };
}

async function deleteWorkOrderRecord(id) {
  const client = state.calendar.client;
  if (!client || !state.calendar.session || !id) {
    return { ok: false, localOnly: true };
  }

  const { error } = await client
    .from("work_orders")
    .delete()
    .eq("id", id);

  if (error) {
    return { ok: false, message: formatSupabaseError(error, "Could not delete work order.") };
  }

  return { ok: true };
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

function setPromoStatus(message, isError = false) {
  const el = document.getElementById("promoStatus");
  if (!el) return;
  el.textContent = message;
  el.classList.toggle("warning", isError);
}

function setFollowUpStatus(message, isError = false) {
  const el = document.getElementById("followUpStatus");
  if (!el) return;
  el.textContent = message;
  el.classList.toggle("warning", isError);
}

function setEpkStatus(message, isError = false) {
  const el = document.getElementById("epkStatus");
  if (!el) return;
  el.textContent = message;
  el.classList.toggle("warning", isError);
}

function setProfileStatus(message, isError = false) {
  const el = document.getElementById("profileStatus");
  if (!el) return;
  el.textContent = message;
  el.classList.toggle("warning", isError);
}

function copyTextToClipboard(text, options = {}) {
  const {
    statusEl = null,
    successMessage = "Copied to clipboard.",
    failureMessage = "Could not copy.",
  } = options;

  const markSuccess = () => {
    if (statusEl) statusEl.textContent = successMessage;
    if (statusEl) statusEl.classList.remove("warning");
  };

  const markFailure = () => {
    if (statusEl) {
      statusEl.textContent = failureMessage;
      statusEl.classList.add("warning");
    }
  };

  return navigator.clipboard?.writeText
    ? navigator.clipboard.writeText(text).then(() => {
        markSuccess();
        return true;
      }).catch(() => {
        markFailure();
        return false;
      })
    : Promise.resolve().then(() => {
        try {
          const fallback = document.createElement("textarea");
          fallback.value = text;
          fallback.style.position = "fixed";
          fallback.style.top = "0";
          fallback.style.left = "-9999px";
          fallback.style.width = "1px";
          fallback.style.height = "1px";
          fallback.style.opacity = "0.01";
          document.body.appendChild(fallback);
          fallback.focus();
          fallback.select();
          fallback.setSelectionRange(0, fallback.value.length);
          const copied = document.execCommand("copy");
          document.body.removeChild(fallback);
          if (copied) {
            markSuccess();
            return true;
          }
        } catch (error) {
          // fall through
        }
        markFailure();
        return false;
      });
}

function getPromoDraftPayload() {
  syncPromoBuilderStateFromForm();
  const raw = (document.getElementById("promoGeneratedMessage")?.value || "").trim();
  if (!raw) {
    return { subject: "", body: "", raw: "" };
  }
  const lines = raw.split("\n");
  const firstLine = lines[0]?.trim() || "";
  if (/^subject:/i.test(firstLine)) {
    return {
      subject: firstLine.replace(/^subject:\s*/i, "").trim(),
      body: lines.slice(1).join("\n").trim(),
      raw,
    };
  }
  return {
    subject: "",
    body: raw,
    raw,
  };
}

async function sharePromoMessage() {
  const statusEl = document.getElementById("promoStatus");
  const payload = getPromoDraftPayload();
  if (!payload.raw) {
    setPromoStatus("Write or generate a message first.", true);
    return;
  }
  if (navigator.share) {
    try {
      await navigator.share({
        title: payload.subject || "GigOS promo draft",
        text: payload.subject ? `${payload.subject}\n\n${payload.body}` : payload.body,
      });
      setPromoStatus("Message shared.");
      return;
    } catch (error) {
      if (error?.name !== "AbortError") {
        setPromoStatus("Could not open the share sheet. Try Email Draft or Text Draft.", true);
      }
      return;
    }
  }
  await copyTextToClipboard(payload.subject ? `${payload.subject}\n\n${payload.body}` : payload.body, {
    statusEl,
    successMessage: "Sharing is not supported here, so the message was copied instead.",
    failureMessage: "Could not share or copy the message.",
  });
}

function openPromoEmailDraft() {
  const payload = getPromoDraftPayload();
  if (!payload.raw) {
    setPromoStatus("Write or generate a message first.", true);
    return;
  }
  const subject = encodeURIComponent(payload.subject || "GigOS promo draft");
  const body = encodeURIComponent(payload.body || payload.raw);
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
  setPromoStatus("Email draft opened.");
}

function openPromoTextDraft() {
  const payload = getPromoDraftPayload();
  if (!payload.raw) {
    setPromoStatus("Write or generate a message first.", true);
    return;
  }
  const text = encodeURIComponent(payload.subject ? `${payload.subject}\n\n${payload.body}` : payload.body);
  window.location.href = `sms:&body=${text}`;
  setPromoStatus("Text draft opened.");
}

function syncPromoBuilderStateFromForm() {
  const builder = state.workOrderWorkspace.promoBuilder;
  builder.venueType = document.getElementById("promoVenueType")?.value || builder.venueType;
  builder.bookingType = document.getElementById("promoBookingType")?.value || builder.bookingType;
  builder.relationship = document.getElementById("promoRelationship")?.value || builder.relationship;
  builder.genre = document.getElementById("promoGenre")?.value || "";
  builder.lineup = document.getElementById("promoLineup")?.value || builder.lineup;
  builder.tone = document.getElementById("promoTone")?.value || builder.tone;
  builder.goal = document.getElementById("promoGoal")?.value || builder.goal;
  builder.contactName = document.getElementById("promoContactName")?.value.trim() || "";
  builder.venueName = document.getElementById("promoVenueName")?.value.trim() || "";
  builder.city = document.getElementById("promoCity")?.value.trim() || "";
  builder.openDates = document.getElementById("promoOpenDates")?.value.trim() || "";
  builder.venueConnection = document.getElementById("promoVenueConnection")?.value.trim() || "";
  builder.customHook = document.getElementById("promoCustomHook")?.value.trim() || "";
  builder.templateTitle = document.getElementById("promoTemplateTitle")?.value.trim() || "";
  builder.message = document.getElementById("promoGeneratedMessage")?.value || builder.message;
}

function syncEpkStateFromForm() {
  const epk = state.workOrderWorkspace.epk;
  epk.bandName = document.getElementById("epkBandName")?.value.trim() || epk.bandName;
  epk.shortBio = document.getElementById("epkShortBio")?.value.trim() || "";
  epk.longBio = document.getElementById("epkLongBio")?.value.trim() || "";
  epk.genres = document.getElementById("epkGenres")?.value.trim() || "";
  epk.lineupOptions = document.getElementById("epkLineupOptions")?.value.trim() || "";
  epk.website = document.getElementById("epkWebsite")?.value.trim() || "";
  epk.instagram = document.getElementById("epkInstagram")?.value.trim() || "";
  epk.facebook = document.getElementById("epkFacebook")?.value.trim() || "";
  epk.musicLink = document.getElementById("epkMusicLink")?.value.trim() || "";
  epk.videoLink = document.getElementById("epkVideoLink")?.value.trim() || "";
  epk.photoLinks = document.getElementById("epkPhotoLinks")?.value.trim() || "";
  epk.contactEmail = document.getElementById("epkContactEmail")?.value.trim() || "";
  epk.contactPhone = document.getElementById("epkContactPhone")?.value.trim() || "";
  epk.bookingNotes = document.getElementById("epkBookingNotes")?.value.trim() || "";
}

function syncBandProfileStateFromForm() {
  const profile = state.workOrderWorkspace.bandProfile;
  profile.bandName = document.getElementById("profileBandName")?.value.trim() || profile.bandName;
  profile.hometown = document.getElementById("profileHometown")?.value.trim() || "";
  profile.introLine = document.getElementById("profileIntroLine")?.value.trim() || "";
  profile.genreTags = document.getElementById("profileGenreTags")?.value.trim() || "";
  profile.genreLine = document.getElementById("profileGenreLine")?.value.trim() || "";
  profile.artistReferences = document.getElementById("profileArtistReferences")?.value.trim() || "";
  profile.vibeLine = document.getElementById("profileVibeLine")?.value.trim() || "";
  profile.eventFitLine = document.getElementById("profileEventFitLine")?.value.trim() || "";
  profile.originalsCoversLine = document.getElementById("profileOriginalsCoversLine")?.value.trim() || "";
  profile.lineupSummary = document.getElementById("profileLineupSummary")?.value.trim() || "";
  profile.proofPointPrimary = document.getElementById("profileProofPrimary")?.value.trim() || "";
  profile.proofPointSecondary = document.getElementById("profileProofSecondary")?.value.trim() || "";
  profile.offerLineOne = document.getElementById("profileOfferOne")?.value.trim() || "";
  profile.offerLineTwo = document.getElementById("profileOfferTwo")?.value.trim() || "";
  profile.offerLineThree = document.getElementById("profileOfferThree")?.value.trim() || "";
  profile.residencyValueLine = document.getElementById("profileResidencyValue")?.value.trim() || "";
  profile.regularsLine = document.getElementById("profileRegularsLine")?.value.trim() || "";
  profile.signoffName = document.getElementById("profileSignoffName")?.value.trim() || "";
  profile.signoffBand = document.getElementById("profileSignoffBand")?.value.trim() || "";
  profile.signoffEmail = document.getElementById("profileSignoffEmail")?.value.trim() || "";
  profile.bioStoryLine = document.getElementById("profileBioStoryLine")?.value.trim() || "";
  profile.bioPerformanceSummary = document.getElementById("profileBioPerformanceSummary")?.value.trim() || "";
  profile.bioMemberOneName = document.getElementById("profileBioMemberOneName")?.value.trim() || "";
  profile.bioMemberOneRole = document.getElementById("profileBioMemberOneRole")?.value.trim() || "";
  profile.bioMemberOneDetail = document.getElementById("profileBioMemberOneDetail")?.value.trim() || "";
  profile.bioMemberTwoName = document.getElementById("profileBioMemberTwoName")?.value.trim() || "";
  profile.bioMemberTwoRole = document.getElementById("profileBioMemberTwoRole")?.value.trim() || "";
  profile.bioMemberTwoDetail = document.getElementById("profileBioMemberTwoDetail")?.value.trim() || "";
  profile.bioAdditionalMembers = document.getElementById("profileBioAdditionalMembers")?.value.trim() || "";
  profile.bioShortDraft = document.getElementById("profileBioShortDraft")?.value.trim() || "";
  profile.bioFullDraft = document.getElementById("profileBioFullDraft")?.value.trim() || "";
}

function buildPromoScript(channel = "email", option = 1) {
  const dna = state.bandDNA;
  const builder = state.workOrderWorkspace.promoBuilder;
  const epk = state.workOrderWorkspace.epk;
  const profile = state.workOrderWorkspace.bandProfile;
  const contactName = builder.contactName || "there";
  const venueName = builder.venueName || "your venue";
  const city = builder.city ? ` in ${builder.city}` : "";
  const bookingType = builder.bookingType || "Venue booking";
  const relationship = builder.relationship || "First Contact";
  const bandName = profile.bandName || dna.bandName || epk.bandName || "Rust and Ruin";
  const genreText = builder.genre || (Array.isArray(dna.genreTags) ? dna.genreTags.join(", ") : "") || profile.genreTags || profile.genreLine || "";
  const lineupText = builder.lineup || dna.lineups?.[0]?.name || profile.lineupSummary || "";
  const openDatesText = builder.openDates || "a few open dates coming up";
  const venueConnectionText = builder.venueConnection || "";
  const hook = builder.customHook ? `${builder.customHook}\n\n` : "";
  const hasGenre = Boolean(genreText.trim());
  const hasLineup = Boolean(lineupText.trim());
  const hasCity = Boolean(builder.city.trim());

  const lineupLower = lineupText.toLowerCase();
  const isPrivateEventBooking = bookingType !== "Venue booking";
  const targetLabel = isPrivateEventBooking ? "event" : "venue";
  const bookingPhrase = isPrivateEventBooking ? bookingType.toLowerCase() : `${builder.venueType.toLowerCase()} bookings`;
  const atPhrase = isPrivateEventBooking ? `for ${venueName}${city}` : `at ${venueName}${city}`;
  const relationshipLead = {
    "First Contact": "",
    "Played Here Before": option === 2
      ? `We've always enjoyed playing at ${venueName}, and I wanted to reach out about upcoming dates.`
      : option === 3
        ? `Since we've played with you before, I thought I'd send over a quick note about future openings.`
        : `We've loved playing at ${venueName} and wanted to reach out about upcoming dates.`,
    "Preferred Venue": option === 2
      ? `Because ${venueName} is one of our favorite rooms to work with, I wanted to send a quick note.`
      : option === 3
        ? `Since ${venueName} has been such a great fit for us over the years, I wanted to send a quick note.`
        : `${venueName} has been a great fit for us, so I wanted to send a quick note.`,
    "Warm Lead": option === 2
      ? `I wanted to send a quick note since this already feels like a strong fit.`
      : option === 3
        ? `I thought I'd send a more personal note because this already feels like a natural fit.`
        : `I wanted to send a quick note because this already feels like a good fit.`,
  }[relationship] || "";

  const detailSentence = (() => {
    if (hasGenre && hasLineup) {
      if (option === 2) return `We play ${genreText}, and our ${lineupLower} setup tends to fit rooms that want live music with a strong draw and an easy footprint.`;
      if (option === 3) return `Our sets lean ${genreText}, and we can come in as a ${lineupLower} setup depending on what fits the room best.`;
      return `We play ${genreText} and can offer a ${lineupLower} setup that works well for rooms that want live music with a strong draw and an easy footprint.`;
    }
    if (hasGenre) {
      if (option === 2) return `We play ${genreText} and would love to be considered if that feels like a fit for your room.`;
      if (option === 3) return `Our music leans ${genreText}, and we'd be glad to be considered when you're filling dates.`;
      return `We play ${genreText} and would love to be considered whenever you're filling dates.`;
    }
    if (hasLineup) {
      if (option === 2) return `We can offer a ${lineupLower} setup that works well for rooms like yours.`;
      if (option === 3) return `We can come in with a ${lineupLower} setup depending on what works best for the room.`;
      return `We can offer a ${lineupLower} setup that works well for rooms that want live music without a complicated footprint.`;
    }
    return "";
  })();

  const followUpSentence = hasGenre
    ? `${bandName} plays ${genreText} and we'd love to be considered whenever you're filling upcoming dates.`
    : `We'd love to be considered whenever you're filling upcoming dates.`;

  const residencySentence = hasLineup || hasGenre
    ? option === 3
      ? `We'd love to build something reliable and easy for your room${hasLineup ? ` with a ${lineupLower} setup` : ""}${hasGenre ? ` and a ${genreText} feel` : ""}.`
      : `Our${hasLineup ? ` ${lineupLower}` : ""} setup${hasGenre ? ` with ${genreText}` : ""} makes it easy to create a reliable live music night.`
    : "";

  const privateEventSentence = hasGenre || hasLineup
    ? `We${hasGenre ? ` perform ${genreText}` : ""}${hasGenre && hasLineup ? " and" : ""}${hasLineup ? ` can tailor the setup from a ${lineupLower} format upward` : ""} depending on what fits the event best.`
    : "";
  const connectionSentence = relationship === "First Contact" && venueConnectionText
    ? /[.!?]$/.test(venueConnectionText) ? venueConnectionText : `${venueConnectionText}.`
    : "";
  const introSentence = relationship === "First Contact"
    ? ""
    : relationshipLead;

  const goalMap = {
    "First outreach": [
      connectionSentence,
      introSentence,
      `We'd love to be considered for ${bookingPhrase} ${atPhrase}.`,
      detailSentence,
    ].filter(Boolean).join(" "),
    "Follow-up": [
      introSentence,
      `I wanted to follow up and see if you might be looking for live music ${isPrivateEventBooking ? `for ${venueName}${city}` : `at ${venueName}${city}`}.`,
      followUpSentence,
    ].filter(Boolean).join(" "),
    "Open dates": [
      introSentence,
      `We're reaching out because we have fresh open dates available and would love to ${isPrivateEventBooking ? `be part of ${venueName}${city}` : `get on the calendar at ${venueName}${city}`}. Right now we're looking at ${openDatesText}.`,
    ].filter(Boolean).join(" "),
    "Residency pitch": [
      connectionSentence,
      introSentence,
      `We'd love to explore a recurring booking or residency with ${venueName}${city}.`,
      residencySentence,
    ].filter(Boolean).join(" "),
    "Private event pitch": [
      connectionSentence,
      introSentence,
      isPrivateEventBooking
        ? `We'd love to be considered for ${bookingType.toLowerCase()} music for ${venueName}${city}.`
        : `We'd love to be considered for private events connected to ${venueName}${city}.`,
      privateEventSentence,
    ].filter(Boolean).join(" "),
    "Seasonal booking": [
      connectionSentence,
      introSentence,
      `As you're planning upcoming seasonal entertainment, we'd love to be considered for dates at ${venueName}${city}.`,
      hasGenre || hasLineup
        ? `We can support a range of rooms and event styles${hasGenre ? ` with ${genreText}` : ""}${hasLineup ? `${hasGenre ? " in" : " with"} a ${lineupLower} or larger format.` : "."}`
        : "",
    ].filter(Boolean).join(" "),
    "Thank you / keep us in mind": [
      introSentence,
      `Thank you again for having ${bandName}. We loved playing for you and wanted to stay on your radar for future dates at ${venueName}${city}. If you have more openings coming up, we'd be glad to be part of them.`,
    ].filter(Boolean).join(" "),
  };

  const proofLines = relationship === "First Contact"
    ? [
        epk.shortBio || `${bandName} is a Vermont-based live act offering flexible sets for venues, private events, and community gatherings.`,
        epk.website ? `Website: ${epk.website}` : "",
        epk.musicLink ? `Music: ${epk.musicLink}` : "",
        epk.videoLink ? `Video: ${epk.videoLink}` : "",
        epk.instagram ? `Instagram: ${epk.instagram}` : "",
        epk.facebook ? `Facebook: ${epk.facebook}` : "",
      ].filter(Boolean)
    : [
        epk.musicLink ? `Music: ${epk.musicLink}` : "",
        epk.website ? `Website: ${epk.website}` : "",
        epk.instagram ? `Instagram: ${epk.instagram}` : "",
      ].filter(Boolean);

  const returningVenuePhrase = relationship === "Preferred Venue"
    ? `${venueName} has become one of our favorite regular spots`
    : `we always love playing at ${venueName}`;
  const returningGreeting = builder.tone === "Professional"
    ? `Hi ${contactName},`
    : `Hi ${contactName}!`;
  const returningCheckIn = builder.tone === "Professional"
    ? `Hope you're doing well.`
    : `Hope you're doing well!`;
  const returningSignoff = builder.tone === "Professional" ? "Thanks so much," : "Talk soon!";
  const openDatesLabel = openDatesText && openDatesText !== "a few open dates coming up"
    ? openDatesText
    : "some upcoming dates";
  const returningBodyMap = {
    "Open dates": [
      `We're starting to lock in our schedule for ${bandName}, and since ${returningVenuePhrase}, we wanted to reach out before everything fills up.`,
      `We still have ${openDatesLabel} open and would love to get something back on the calendar with you if it lines up on your end.`,
      `Let us know what dates you're thinking, and we'll do our best to line things up on our side.`,
      profile.regularsLine || `Always a great time playing for your crowd, and we really appreciate you having us back.`,
    ],
    "Seasonal booking": [
      `We're starting to map out our upcoming season for ${bandName}, and since ${returningVenuePhrase}, we wanted to reach out early before everything fills up.`,
      `We'd love to get some dates on the schedule with you again while we're still locking things in on our end.`,
      openDatesText && openDatesText !== "a few open dates coming up"
        ? `Right now we still have ${openDatesText} open if any of those help as a starting point.`
        : `If you already have dates in mind, send them our way and we'll do our best to make them work.`,
      profile.regularsLine || `It's always such a fun room for us, and we'd love to be back again.`,
    ],
    "Residency pitch": [
      `We're starting to look ahead at the calendar for ${bandName}, and since ${returningVenuePhrase}, we wanted to see if you'd like to lock in some recurring dates.`,
      `We'd love to keep building on what already feels like such a good fit and get some regular nights on the books before the calendar gets too crowded.`,
      openDatesText && openDatesText !== "a few open dates coming up"
        ? `We still have ${openDatesText} available right now if any of those are helpful to start with.`
        : `We still have some room on the calendar if you want to start looking at dates.`,
      profile.regularsLine || `Let us know what you're thinking and we'll line things up on our end.`,
    ],
    "Private event pitch": [
      `Since ${returningVenuePhrase}, we wanted to mention that we'd also love to be considered for any private events or special bookings you may have coming up.`,
      `If anything comes up where live music would make sense, we'd be glad to talk it through with you.`,
      openDatesText && openDatesText !== "a few open dates coming up"
        ? `We do still have ${openDatesText} open right now as well.`
        : "",
    ],
    "Follow-up": [
      `Just wanted to follow up since ${returningVenuePhrase}. We'd love to get something back on the calendar with you.`,
      openDatesText && openDatesText !== "a few open dates coming up"
        ? `Right now we still have ${openDatesText} open if any of those could work.`
        : `We still have a few dates open if you happen to be booking right now.`,
      `Let us know what you're thinking and we'll do our best to make it work.`,
    ],
    "Thank you / keep us in mind": [
      `We always appreciate playing at ${venueName} and just wanted to stay on your radar for future dates.`,
      `If anything opens up down the road, we'd love to come back.`,
    ],
    "First outreach": [
      `We've had ${venueName} on our radar for a while and wanted to reach out.`,
      venueConnectionText ? venueConnectionText : "",
      `If it feels like a fit, we'd love to be considered for a date sometime.`,
    ],
  };

  const contactBlock = [
    `Thanks,`,
    profile.signoffBand || bandName,
    profile.signoffEmail || epk.contactEmail || dna.contactEmail || "rustandruinvt@gmail.com",
    epk.contactPhone || "",
  ].filter(Boolean).join("\n");
  const returningContactBlock = [
    profile.signoffName || dna.signoffName || `Beth (and Josh)`,
    profile.signoffBand || bandName,
    profile.signoffEmail || epk.contactEmail || dna.contactEmail || "rustandruinvt@gmail.com",
  ].filter(Boolean).join("\n");

  const toneLead = {
    Warm: `Hi ${contactName},`,
    Professional: `Hello ${contactName},`,
    Upbeat: `Hi ${contactName}!`,
  }[builder.tone] || `Hi ${contactName},`;
  const firstContactGreeting = builder.tone === "Professional"
    ? `Hi ${contactName},`
    : `Hi ${contactName}!`;
  const firstContactCheckIn = builder.tone === "Professional"
    ? `I hope you're doing well.`
    : `Hope you're doing well!`;
  const firstContactIntro = [
    `My name is Beth, and I'm one half of ${bandName}${profile.hometown ? `, based in ${profile.hometown}` : ""}.`,
    profile.introLine || profile.originalsCoversLine || profile.vibeLine
      ? `${bandName} is ${profile.introLine || profile.lineupSummary || (hasLineup ? `${lineupText.toLowerCase()}` : "a live act")}${profile.originalsCoversLine ? ` playing ${profile.originalsCoversLine}` : ""}${profile.vibeLine ? ` with ${profile.vibeLine}` : ""}.`
      : epk.shortBio || `${bandName} is a live act with a laid-back, feel-good vibe.`,
  ].filter(Boolean).join(" ");
  const firstContactConnection = (() => {
    if (venueConnectionText) {
      return /[.!?]$/.test(venueConnectionText) ? venueConnectionText : `${venueConnectionText}.`;
    }
    if (bookingType === "Wedding") {
      return `Thanks so much for considering ${bandName} for your wedding music. We’d be happy to be part of such a special day.`;
    }
    if (isPrivateEventBooking) {
      return `Thanks so much for considering ${bandName} for your event. We’d love the chance to be part of it.`;
    }
    return `We've had ${venueName} on our radar for a while, so I wanted to reach out and introduce ourselves.`;
  })();
  const firstContactFit = (() => {
    if (builder.goal === "Residency pitch") {
      return [
        `We'd love to talk with you about a recurring live music residency at ${venueName}.`,
        profile.residencyValueLine || `What we've found is that when venues move from one-off bookings to a set monthly or biweekly experience, it gives guests something to look forward to and helps create a recognizable vibe for the space.`,
        hasGenre || hasLineup
          ? `Our style${hasGenre ? ` leans ${genreText}` : ""}${hasLineup ? `${hasGenre ? ", and" : " and"} we can come in as ${/^[aeiou]/i.test(lineupLower) ? "an" : "a"} ${lineupLower} setup` : ""}${profile.eventFitLine ? ` and ${profile.eventFitLine}` : ""}.`
          : profile.eventFitLine || `Our sets tend to work really well in relaxed, social spaces where you want music that adds energy without overpowering the room.`,
      ].filter(Boolean).join("\n\n");
    }
    if (builder.goal === "Private event pitch") {
      return [
        bookingType === "Wedding"
          ? `We'd be so happy to be considered for live music for ${venueName}.`
          : isPrivateEventBooking
            ? `We'd love to be considered for live music for ${venueName}.`
            : `We'd love to be considered for private events connected to ${venueName}.`,
        hasGenre || hasLineup
          ? `We can tailor the music${hasGenre ? ` with a ${genreText} feel` : ""}${hasLineup ? ` and a ${lineupLower} format or larger depending on what the event needs` : ""}.`
          : `We can tailor the music and overall feel depending on what the event needs.`,
      ].filter(Boolean).join("\n\n");
    }
    if (builder.goal === "Seasonal booking") {
      return [
        isPrivateEventBooking
          ? `We're currently mapping out our upcoming season and would love the chance to be part of ${venueName}.`
          : `We're currently mapping out our upcoming season, and we'd love the chance to play at ${venueName}.`,
        `If you're open to live music this season, we'd be glad to see if we can find something that fits your calendar.`,
      ].join("\n\n");
    }
    if (bookingType === "Wedding") {
      return [
        `We'd love the chance to be part of ${venueName}.`,
        hasGenre || hasLineup
          ? `We can shape the music${hasGenre ? ` with a ${genreText} feel` : ""}${hasLineup ? ` and a ${lineupLower} setup or larger depending on what fits the day best` : ""}.`
          : `We can shape the music around the tone of the day, from something relaxed and intimate to a more celebratory feel later on.`,
      ].filter(Boolean).join("\n\n");
    }
    return [
      `We're currently booking out our schedule, and we'd love the chance to ${isPrivateEventBooking ? `play for ${venueName}` : `play at ${venueName}`}.`,
      hasGenre || hasLineup
        ? `Our style${hasGenre ? ` leans ${genreText}` : ""}${hasLineup ? `${hasGenre ? ", and" : " and"} we can come in as ${/^[aeiou]/i.test(lineupLower) ? "an" : "a"} ${lineupLower} setup` : ""}${profile.eventFitLine ? ` and ${profile.eventFitLine}` : ""}.`
        : profile.eventFitLine || `Our sets are built for relaxed, social spaces where you want music that feels warm and fun without taking over the room.`,
    ].filter(Boolean).join("\n\n");
  })();
  const firstContactAsk = builder.goal === "Residency pitch"
    ? `If this sounds like something you'd be open to exploring, I'd love to connect and talk through what would work best for your space.`
    : builder.goal === "Seasonal booking"
      ? `If you're open to live music this season, I'd love to see if we can find a date that works for you.`
      : builder.goal === "Private event pitch"
        ? bookingType === "Wedding"
          ? `If you'd like, we're happy to send over videos, song ideas, or anything else that would help as you decide on your wedding music.`
          : `If anything comes up that feels like a fit, we'd love to be part of it and are happy to send anything else you'd like to see.`
        : `If you're open to live music, I'd love to see if we can find a date that works for you.`;
  const firstContactExtras = [
    profile.proofPointPrimary || "",
    profile.proofPointSecondary || "",
    profile.artistReferences ? `Artists / references: ${profile.artistReferences}` : "",
    builder.goal === "Private event pitch" || isPrivateEventBooking
      ? [profile.offerLineOne, profile.offerLineTwo, profile.offerLineThree].filter(Boolean).map((line) => `• ${line}`).join("\n")
      : "",
    epk.musicLink ? `Music: ${epk.musicLink}` : "",
    epk.website ? `Website: ${epk.website}` : "",
    epk.instagram ? `Instagram: ${epk.instagram}` : "",
  ].filter(Boolean);

  const goalText = goalMap[builder.goal] || goalMap["First outreach"];

  if (channel === "coldcall") {
    return [
      `Cold Call Script`,
      "",
      `Hi, this is ${bandName}. I was hoping to speak with whoever handles entertainment for ${venueName || "the venue"}.`,
      "",
      `Quick pitch: ${goalText}`.trim(),
      "",
      `If this sounds like a fit, what's the best email or person to send our info and open dates to?`,
      hook ? `\nCustom note: ${builder.customHook}` : "",
    ].filter(Boolean).join("\n");
  }

  if (channel === "text") {
    return [
      `Hi ${contactName}, this is ${bandName}. ${goalText}`,
      hook.trim(),
      epk.website ? `Website: ${epk.website}` : "",
      epk.musicLink ? `Music: ${epk.musicLink}` : "",
      `Thanks, ${bandName}`,
    ].filter(Boolean).join("\n");
  }

  if (channel === "dm") {
    return [
      toneLead,
      "",
      hook + goalText,
      "",
      !hasGenre && !hasLineup
        ? `${bandName} would love to be considered whenever you're booking.`
        : `${bandName}${hasGenre ? ` performs ${genreText}` : ""}${hasLineup ? `${hasGenre ? " and" : ""} can offer a ${lineupLower} setup` : ""}.`,
      epk.musicLink ? `Music: ${epk.musicLink}` : "",
      epk.website ? `Website: ${epk.website}` : "",
      "",
      `Thanks so much,`,
      bandName,
    ].filter(Boolean).join("\n");
  }

  if (channel === "email" && relationship !== "First Contact") {
    const returningLines = returningBodyMap[builder.goal] || returningBodyMap["Open dates"];
    return [
      `Subject: ${builder.goal === "Seasonal booking" ? "Season dates" : "Open dates"} for ${venueName || "your venue"}`,
      "",
      returningGreeting,
      "",
      returningCheckIn,
      "",
      hook.trim(),
      ...returningLines,
      "",
      returningSignoff,
      returningContactBlock,
    ].filter(Boolean).join("\n");
  }

  if (channel === "email" && relationship === "First Contact") {
    return [
      `Subject: ${builder.goal === "Residency pitch"
        ? `Let's Build Something at ${venueName}`
        : bookingType === "Wedding"
          ? `Wedding Music for ${venueName}`
          : `${bandName} at ${venueName}`}`,
      "",
      firstContactGreeting,
      "",
      firstContactCheckIn,
      "",
      firstContactIntro,
      "",
      hook.trim(),
      firstContactConnection,
      "",
      firstContactFit,
      "",
      firstContactAsk,
      firstContactExtras.length ? "" : null,
      ...firstContactExtras,
      "",
      builder.tone === "Professional" ? "Warmly," : "Warmly,",
      profile.signoffName || dna.signoffName || "Beth (and Josh)",
      profile.signoffBand || bandName,
      profile.signoffEmail || epk.contactEmail || dna.contactEmail || "rustandruinvt@gmail.com",
    ].filter(Boolean).join("\n");
  }

  return [
    `Subject: ${bandName} booking inquiry for ${venueName || builder.venueType}`,
    "",
    toneLead,
    "",
    hook + goalText,
    "",
    ...proofLines,
    "",
    contactBlock,
  ].filter(Boolean).join("\n");
}

function buildPromoScriptOptions(channel = "email") {
  return [1, 2, 3].map((option) => buildPromoScript(channel, option));
}

function updatePromoGeneratedMessage(force = false) {
  syncPromoBuilderStateFromForm();
  const textarea = document.getElementById("promoGeneratedMessage");
  if (!textarea) return;
  const channel = state.workOrderWorkspace.promoChannel;
  const options = buildPromoScriptOptions(channel);
  const currentOption = Number(state.workOrderWorkspace.promoBuilder.selectedOption || 1);
  const generated = options[currentOption - 1] || options[0] || "";
  document.querySelectorAll("[data-promo-option]").forEach((btn) => {
    btn.classList.toggle("active", Number(btn.getAttribute("data-promo-option")) === currentOption);
  });
  if (force || !textarea.value.trim() || textarea.value === state.workOrderWorkspace.promoBuilder.message) {
    textarea.value = generated;
  }
  state.workOrderWorkspace.promoBuilder.message = textarea.value;
  saveDraft();
}

function switchWorkOrderSection(section = "tasks") {
  state.workOrderWorkspace.section = section;
  document.querySelectorAll("[data-work-section]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-work-section") === section);
  });
  document.querySelectorAll("[data-work-panel]").forEach((panel) => {
    panel.classList.toggle("hidden", panel.getAttribute("data-work-panel") !== section);
  });
  saveDraft();
}

function switchPromoChannel(channel = "email") {
  state.workOrderWorkspace.promoChannel = channel;
  document.querySelectorAll("[data-promo-channel]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-promo-channel") === channel);
  });
  const builderWrap = document.getElementById("promoBuilderWrap");
  const followUpWrap = document.getElementById("followUpsWrap");
  if (builderWrap) builderWrap.classList.toggle("hidden", channel === "followups");
  if (followUpWrap) followUpWrap.classList.toggle("hidden", channel !== "followups");
  if (channel !== "followups") {
    updatePromoGeneratedMessage(true);
  }
  saveDraft();
}

function switchEpkSection(section = "profile") {
  state.workOrderWorkspace.epkSection = section;
  document.querySelectorAll("[data-epk-section]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-epk-section") === section);
  });
  document.querySelectorAll("[data-epk-panel]").forEach((panel) => {
    panel.classList.toggle("hidden", panel.getAttribute("data-epk-panel") !== section);
  });
  saveDraft();
}

function renderPromoTemplates() {
  const list = document.getElementById("promoTemplateList");
  if (!list) return;
  const templates = state.workOrderWorkspace.promoTemplates || [];
  list.innerHTML = "";
  if (!templates.length) {
    list.innerHTML = "<p class=\"muted\">No saved promo templates yet.</p>";
    return;
  }

  templates.forEach((template) => {
    const card = document.createElement("article");
    card.className = "work-order-card";
    card.innerHTML = `
      <div class="work-order-head">
        <div>
          <h4>${template.title || "Untitled Template"}</h4>
          <p class="work-order-meta">${template.channelLabel || "Email"} • ${template.goal || "General outreach"} • ${template.lineup || "Lineup not set"}</p>
        </div>
        <span class="priority-tag normal">${template.venueType || "General"}</span>
      </div>
      <p class="work-order-note">${template.message || ""}</p>
      <div class="work-order-actions">
        <button class="btn ghost" type="button" data-promo-template-action="load" data-id="${template.id}">Open in Editor</button>
        <button class="btn ghost" type="button" data-promo-template-action="copy" data-id="${template.id}">Copy</button>
        <button class="btn ghost" type="button" data-promo-template-action="delete" data-id="${template.id}">Delete</button>
      </div>
    `;
    list.appendChild(card);
  });
}

function focusPromoMessageEditor() {
  const editor = document.getElementById("promoGeneratedMessage");
  if (!editor) return;
  editor.scrollIntoView({ behavior: "smooth", block: "center" });
  editor.focus();
  const end = editor.value.length;
  editor.setSelectionRange(end, end);
}

function renderFollowUps() {
  const list = document.getElementById("followUpList");
  if (!list) return;
  const container = document.getElementById("followUpsWrap");
  prependGradientSectionHeader(
    container,
    "followUpsGreetingHeader",
    "Don't let a",
    "good lead go cold.",
    "Track venues, festivals and applications you are following up on."
  );
  const todayKey = new Date().toISOString().slice(0, 10);
  const entries = [...(state.workOrderWorkspace.followUps || [])].sort((a, b) => {
    return String(a.nextFollowUp || "").localeCompare(String(b.nextFollowUp || ""));
  });
  list.innerHTML = "";
  if (!entries.length) {
    list.innerHTML = "<p class=\"muted\">No follow-up venues yet.</p>";
    return;
  }

  entries.forEach((entry) => {
    const dueLabel = entry.nextFollowUp ? formatDate(entry.nextFollowUp) : "No next follow-up";
    const card = document.createElement("article");
    card.className = "work-order-card";
    card.innerHTML = `
      <div class="work-order-head">
        <div>
          <h4>${entry.venueName || "Venue"}</h4>
          <p class="work-order-meta">${entry.contactName || "No contact"}${entry.city ? ` • ${entry.city}` : ""}</p>
        </div>
        <span class="priority-tag ${entry.nextFollowUp && entry.nextFollowUp <= todayKey ? "urgent" : "normal"}">${dueLabel}</span>
      </div>
      <p class="work-order-note"><strong>Best follow-up:</strong> ${entry.bestChannel || "Email"}${entry.lastPlayed ? ` • Last played ${formatDate(entry.lastPlayed)}` : ""}${entry.lastContacted ? ` • Last contacted ${formatDate(entry.lastContacted)}` : ""}</p>
      ${entry.notes ? `<p class="work-order-note"><strong>Notes:</strong> ${entry.notes}</p>` : ""}
      <div class="work-order-actions">
        <button class="btn ghost" type="button" data-followup-action="load" data-id="${entry.id}">Load Into Builder</button>
        <button class="btn ghost" type="button" data-followup-action="copy" data-id="${entry.id}">Copy Pitch</button>
        <button class="btn ghost" type="button" data-followup-action="delete" data-id="${entry.id}">Delete</button>
      </div>
    `;
    list.appendChild(card);
  });
}

function renderEpkSummary() {
  const summary = document.getElementById("epkSummary");
  if (!summary) return;
  const dna = state.bandDNA;
  const profile = state.workOrderWorkspace.bandProfile;
  const epk = state.workOrderWorkspace.epk;
  summary.innerHTML = `
    <p><strong>EPK Draft Preview</strong></p>
    <p><strong>${epk.bandName || dna.bandName || profile.bandName || "Band name"}</strong></p>
    <p><strong>Short bio:</strong> ${epk.shortBio || dna.oneLineBio || profile.bioShortDraft || "Use the Bio Generator to create a short bio for outreach and EPK use."}</p>
    <p><strong>Full bio:</strong> ${epk.longBio || profile.bioFullDraft || "Use the Bio Generator to create a fuller bio with more story and member detail."}</p>
    <p><strong>Genres:</strong> ${epk.genres || (Array.isArray(dna.genreTags) ? dna.genreTags.join(", ") : "") || profile.genreTags || "Not set yet"}</p>
    <p><strong>Artists / references:</strong> ${profile.artistReferences || "Not set yet"}</p>
    <p><strong>Lineup options:</strong> ${epk.lineupOptions || profile.lineupSummary || "Not set yet"}</p>
    <p><strong>Website:</strong> ${epk.website || "Not set yet"}</p>
    <p><strong>Music:</strong> ${epk.musicLink || "Not set yet"}</p>
    <p><strong>Video:</strong> ${epk.videoLink || "Not set yet"}</p>
    <p><strong>Photo assets:</strong> ${epk.photoLinks || "Add photo links or asset locations"}</p>
    <p><strong>Contact email:</strong> ${epk.contactEmail || dna.contactEmail || "Not set yet"}</p>
  `;
}

function renderBandProfile() {
  const profile = state.workOrderWorkspace.bandProfile;
  const setValue = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.value = value || "";
  };

  setValue("profileBandName", profile.bandName);
  setValue("profileHometown", profile.hometown);
  setValue("profileIntroLine", profile.introLine);
  setValue("profileGenreTags", profile.genreTags);
  setValue("profileGenreLine", profile.genreLine);
  setValue("profileArtistReferences", profile.artistReferences);
  setValue("profileVibeLine", profile.vibeLine);
  setValue("profileEventFitLine", profile.eventFitLine);
  setValue("profileOriginalsCoversLine", profile.originalsCoversLine);
  setValue("profileLineupSummary", profile.lineupSummary);
  setValue("profileProofPrimary", profile.proofPointPrimary);
  setValue("profileProofSecondary", profile.proofPointSecondary);
  setValue("profileOfferOne", profile.offerLineOne);
  setValue("profileOfferTwo", profile.offerLineTwo);
  setValue("profileOfferThree", profile.offerLineThree);
  setValue("profileResidencyValue", profile.residencyValueLine);
  setValue("profileRegularsLine", profile.regularsLine);
  setValue("profileSignoffName", profile.signoffName);
  setValue("profileSignoffBand", profile.signoffBand);
  setValue("profileSignoffEmail", profile.signoffEmail);
  setValue("profileBioStoryLine", profile.bioStoryLine);
  setValue("profileBioPerformanceSummary", profile.bioPerformanceSummary);
  setValue("profileBioMemberOneName", profile.bioMemberOneName);
  setValue("profileBioMemberOneRole", profile.bioMemberOneRole);
  setValue("profileBioMemberOneDetail", profile.bioMemberOneDetail);
  setValue("profileBioMemberTwoName", profile.bioMemberTwoName);
  setValue("profileBioMemberTwoRole", profile.bioMemberTwoRole);
  setValue("profileBioMemberTwoDetail", profile.bioMemberTwoDetail);
  setValue("profileBioAdditionalMembers", profile.bioAdditionalMembers);
  setValue("profileBioShortDraft", profile.bioShortDraft);
  setValue("profileBioFullDraft", profile.bioFullDraft);
}

function buildBioDrafts() {
  const profile = state.workOrderWorkspace.bandProfile;
  const bandName = profile.bandName || "Your Band";
  const intro = profile.introLine || "a live act";
  const sound = profile.genreLine || profile.genreTags || "";
  const originals = profile.originalsCoversLine || "";
  const vibe = profile.vibeLine || "";
  const fit = profile.eventFitLine || "";
  const story = profile.bioStoryLine || "";
  const performance = profile.bioPerformanceSummary || profile.proofPointPrimary || "";

  const memberLines = [
    profile.bioMemberOneName
      ? `${profile.bioMemberOneName}${profile.bioMemberOneRole ? ` handles ${profile.bioMemberOneRole}` : ""}${profile.bioMemberOneDetail ? ` and ${profile.bioMemberOneDetail}` : ""}.`
      : "",
    profile.bioMemberTwoName
      ? `${profile.bioMemberTwoName}${profile.bioMemberTwoRole ? ` handles ${profile.bioMemberTwoRole}` : ""}${profile.bioMemberTwoDetail ? ` and ${profile.bioMemberTwoDetail}` : ""}.`
      : "",
    profile.bioAdditionalMembers || "",
  ].filter(Boolean);

  const shortBio = [
    `${bandName} is ${intro}${sound ? ` playing ${sound}` : ""}${originals ? `, blending ${originals}` : ""}${vibe ? ` with ${vibe}` : ""}.`,
    fit || performance || story,
  ].filter(Boolean).join(" ");

  const fullBio = [
    `${bandName} is ${intro}${sound ? ` known for ${sound}` : ""}${originals ? ` and ${originals}` : ""}${vibe ? ` with ${vibe}` : ""}.`,
    story || fit,
    performance,
    memberLines.length ? memberLines.join(" ") : "",
  ].filter(Boolean).join("\n\n");

  return { shortBio, fullBio };
}

function generateBioDrafts() {
  syncBandProfileStateFromForm();
  const { shortBio, fullBio } = buildBioDrafts();
  state.workOrderWorkspace.bandProfile.bioShortDraft = shortBio;
  state.workOrderWorkspace.bandProfile.bioFullDraft = fullBio;
  saveDraft();
  renderBandProfile();
  setProfileStatus("Bio drafts generated.");
}

function useBioDraft(target = "short") {
  syncBandProfileStateFromForm();
  syncEpkStateFromForm();
  const profile = state.workOrderWorkspace.bandProfile;
  if (target === "short") {
    state.workOrderWorkspace.epk.shortBio = profile.bioShortDraft || state.workOrderWorkspace.epk.shortBio;
    setEpkStatus("Short bio updated from Bio Generator.");
  } else {
    state.workOrderWorkspace.epk.longBio = profile.bioFullDraft || state.workOrderWorkspace.epk.longBio;
    setEpkStatus("Full bio updated from Bio Generator.");
  }
  saveDraft();
  renderWorkOrderWorkspace();
}

function saveBandProfile() {
  syncBandProfileStateFromForm();
  saveDraft();
  renderBandProfile();
  updatePromoGeneratedMessage(true);
  setProfileStatus("Band profile saved.");
}

function useBandProfileInBuilder() {
  syncBandProfileStateFromForm();
  applyBandProfileToPromoBuilder(true);
  saveDraft();
  renderWorkOrderWorkspace();
  setProfileStatus("Band profile defaults loaded into the builder.");
  setPromoStatus("Band profile defaults loaded into the builder.");
}

function renderWorkOrderWorkspace() {
  switchWorkOrderSection(state.workOrderWorkspace.section || "tasks");
  switchPromoChannel(state.workOrderWorkspace.promoChannel || "email");
  switchEpkSection(state.workOrderWorkspace.epkSection || "profile");
  hydrateBandProfileFromLegacyData();

  const builder = state.workOrderWorkspace.promoBuilder;
  const setValue = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.value = value || "";
  };
  setValue("promoVenueType", builder.venueType);
  setValue("promoBookingType", builder.bookingType);
  setValue("promoRelationship", builder.relationship);
  setValue("promoGenre", builder.genre);
  setValue("promoLineup", builder.lineup);
  setValue("promoTone", builder.tone);
  setValue("promoGoal", builder.goal);
  setValue("promoContactName", builder.contactName);
  setValue("promoVenueName", builder.venueName);
  setValue("promoCity", builder.city);
  setValue("promoOpenDates", builder.openDates);
  setValue("promoVenueConnection", builder.venueConnection);
  setValue("promoCustomHook", builder.customHook);
  setValue("promoTemplateTitle", builder.templateTitle);
  updatePromoGeneratedMessage(!builder.message);
  if (builder.message && document.getElementById("promoGeneratedMessage")) {
    document.getElementById("promoGeneratedMessage").value = builder.message;
  }

  const epk = state.workOrderWorkspace.epk;
  setValue("epkBandName", epk.bandName);
  setValue("epkShortBio", epk.shortBio);
  setValue("epkLongBio", epk.longBio);
  setValue("epkGenres", epk.genres);
  setValue("epkLineupOptions", epk.lineupOptions);
  setValue("epkWebsite", epk.website);
  setValue("epkInstagram", epk.instagram);
  setValue("epkFacebook", epk.facebook);
  setValue("epkMusicLink", epk.musicLink);
  setValue("epkVideoLink", epk.videoLink);
  setValue("epkPhotoLinks", epk.photoLinks);
  setValue("epkContactEmail", epk.contactEmail);
  setValue("epkContactPhone", epk.contactPhone);
  setValue("epkBookingNotes", epk.bookingNotes);

  renderBandProfile();
  renderPromoTemplates();
  renderFollowUps();
  renderEpkSummary();
}

function renderWorkOrders() {
  const list = document.getElementById("workOrderList");
  const container = document.querySelector("#workOrdersTab .panel.form-panel");
  prependGradientSectionHeader(
    container,
    "workOrdersGreetingHeader",
    "Get it done.",
    "Hit the stage.",
    "Tasks, outreach and everything in between."
  );
  if (!list) {
    renderBookHubWorkOrders();
    return;
  }
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
    renderBookHubWorkOrders();
    return;
  }

  const rows = hasFocus
    ? state.workOrders.filter((item) => item.id === state.workOrderView.focusId)
    : state.workOrders;

  if (hasFocus && !rows.length) {
    list.innerHTML = "<p class=\"muted\">That task is no longer available.</p>";
    updateOpsProgress();
    renderBookHubWorkOrders();
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

    const open = document.createElement("button");
    open.className = "btn ghost";
    open.setAttribute("type", "button");
    open.setAttribute("data-action", hasFocus ? "close" : "open");
    open.setAttribute("data-id", order.id);
    open.textContent = hasFocus ? "Back to All Tasks" : "Open";

    const remove = document.createElement("button");
    remove.className = "btn ghost";
    remove.setAttribute("type", "button");
    remove.setAttribute("data-action", "delete");
    remove.setAttribute("data-id", order.id);
    remove.textContent = "Delete";

    actions.appendChild(open);
    actions.appendChild(toggle);
    actions.appendChild(remove);
    card.appendChild(actions);
    list.appendChild(card);
  });
  updateOpsProgress();
  renderBookHubWorkOrders();
}

async function submitWorkOrder() {
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

  const order = {
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
  };
  state.workOrders.unshift(order);
  state.workOrderView.focusId = "";
  state.workOrderView.showCreate = true;
  saveDraft();
  const saveResult = await saveWorkOrder(order);
  if (!saveResult.ok && !saveResult.localOnly) {
    state.workOrders = state.workOrders.filter((item) => item.id !== order.id);
    saveDraft();
    renderWorkOrders();
    setWorkOrderStatus(saveResult.message, true);
    return;
  }
  if (saveResult.row) {
    const idx = state.workOrders.findIndex((item) => item.id === order.id);
    if (idx !== -1) state.workOrders[idx] = mapWorkOrderRow(saveResult.row);
    saveDraft();
  }
  renderWorkOrders();
  resetWorkOrderForm();
  setWorkOrderStatus(
    saveResult.localOnly
      ? "Work order saved on this device only. Sign in and add the Supabase table to sync it everywhere."
      : "Work order submitted and synced."
  );
}

function resetPromoBuilder() {
  state.workOrderWorkspace.promoBuilder = createInitialPromoBuilderState();
  renderWorkOrderWorkspace();
  setPromoStatus("Promo builder reset.");
  saveDraft();
}

function savePromoTemplate() {
  syncPromoBuilderStateFromForm();
  const builder = state.workOrderWorkspace.promoBuilder;
  const message = document.getElementById("promoGeneratedMessage")?.value.trim() || "";
  const title = builder.templateTitle || `${builder.goal} - ${builder.venueType}`;
  if (!message) {
    setPromoStatus("Generate or write a message before saving a template.", true);
    return;
  }
  const template = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    title,
    channel: state.workOrderWorkspace.promoChannel,
    channelLabel: state.workOrderWorkspace.promoChannel === "dm"
      ? "DM"
      : state.workOrderWorkspace.promoChannel === "coldcall"
        ? "Cold Call"
        : state.workOrderWorkspace.promoChannel === "text"
          ? "Text"
          : "Email",
    venueType: builder.venueType,
    goal: builder.goal,
    lineup: builder.lineup,
    genre: builder.genre,
    message,
    builderSnapshot: { ...builder },
    createdAt: new Date().toISOString(),
  };
  state.workOrderWorkspace.promoTemplates.unshift(template);
  builder.templateTitle = "";
  saveDraft();
  renderWorkOrderWorkspace();
  setPromoStatus("Promo template saved.");
}

function saveFollowUpEntry() {
  const venueName = document.getElementById("followUpVenueName")?.value.trim() || "";
  if (!venueName) {
    setFollowUpStatus("Venue name is required.", true);
    return;
  }
  const entry = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    venueName,
    contactName: document.getElementById("followUpContactName")?.value.trim() || "",
    contactInfo: document.getElementById("followUpContactInfo")?.value.trim() || "",
    city: document.getElementById("followUpCity")?.value.trim() || "",
    bestChannel: document.getElementById("followUpBestChannel")?.value || "Email",
    lastPlayed: document.getElementById("followUpLastPlayed")?.value || "",
    lastContacted: document.getElementById("followUpLastContacted")?.value || "",
    nextFollowUp: document.getElementById("followUpNextDate")?.value || "",
    notes: document.getElementById("followUpNotes")?.value.trim() || "",
    createdAt: new Date().toISOString(),
  };
  state.workOrderWorkspace.followUps.unshift(entry);
  saveDraft();
  renderFollowUps();
  resetFollowUpForm();
  setFollowUpStatus("Follow-up venue saved.");
}

function resetFollowUpForm() {
  [
    "followUpVenueName",
    "followUpContactName",
    "followUpContactInfo",
    "followUpCity",
    "followUpLastPlayed",
    "followUpLastContacted",
    "followUpNextDate",
    "followUpNotes",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  const bestChannel = document.getElementById("followUpBestChannel");
  if (bestChannel) bestChannel.value = "Email";
}

function loadFollowUpIntoBuilder(entry) {
  if (!entry) return;
  state.workOrderWorkspace.section = "promo";
  state.workOrderWorkspace.promoChannel = String(entry.bestChannel || "").toLowerCase() === "phone" ? "coldcall" : String(entry.bestChannel || "").toLowerCase();
  if (!["email", "text", "dm", "coldcall"].includes(state.workOrderWorkspace.promoChannel)) {
    state.workOrderWorkspace.promoChannel = "email";
  }
  state.workOrderWorkspace.promoBuilder = {
    ...state.workOrderWorkspace.promoBuilder,
    goal: "Open dates",
    contactName: entry.contactName || "",
    venueName: entry.venueName || "",
    city: entry.city || "",
    customHook: entry.notes || "",
  };
  saveDraft();
  renderWorkOrderWorkspace();
  setFollowUpStatus("Loaded into outreach builder.");
}

function saveEpkProfile() {
  syncEpkStateFromForm();
  hydrateBandProfileFromLegacyData();
  saveDraft();
  renderBandProfile();
  renderEpkSummary();
  updatePromoGeneratedMessage(true);
  setEpkStatus("EPK saved.");
}

function buildEpkSummaryText() {
  syncEpkStateFromForm();
  syncBandProfileStateFromForm();
  const profile = state.workOrderWorkspace.bandProfile;
  const epk = state.workOrderWorkspace.epk;
  return [
    epk.bandName || profile.bandName || "Band",
    "",
    "SHORT BIO",
    epk.shortBio || profile.bioShortDraft || "",
    "",
    "FULL BIO",
    epk.longBio || profile.bioFullDraft || "",
    "",
    epk.genres || profile.genreTags ? `Genres: ${epk.genres || profile.genreTags}` : "",
    profile.artistReferences ? `Artists / references: ${profile.artistReferences}` : "",
    epk.lineupOptions || profile.lineupSummary ? `Lineup options: ${epk.lineupOptions || profile.lineupSummary}` : "",
    epk.website ? `Website: ${epk.website}` : "",
    epk.musicLink ? `Music: ${epk.musicLink}` : "",
    epk.videoLink ? `Video: ${epk.videoLink}` : "",
    epk.photoLinks ? `Photo assets: ${epk.photoLinks}` : "",
    epk.contactEmail ? `Email: ${epk.contactEmail}` : "",
    epk.contactPhone ? `Phone: ${epk.contactPhone}` : "",
    epk.bookingNotes ? `Booking notes: ${epk.bookingNotes}` : "",
  ].filter(Boolean).join("\n");
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

function updateTroubleshootingStatus(message, isError = false) {
  const el = document.getElementById("troubleshootingStatus");
  if (!el) return;
  el.textContent = message;
  el.classList.toggle("warning", isError);
}

function clearLocalAppDataPreservingLogin() {
  const okay = window.confirm(
    "Reset app data on this device and reload? This keeps the sign-in session when possible."
  );
  if (!okay) return;

  [
    STORAGE_KEY,
    CONTRACT_DRAFT_SNAPSHOTS_KEY,
    CALENDAR_SETTINGS_KEY,
    CALENDAR_AUTH_SEEN_KEY,
  ].forEach((key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      // ignore storage failures
    }
  });

  updateTroubleshootingStatus("Local app data cleared. Reloading...");
  window.setTimeout(() => {
    window.location.reload();
  }, 250);
}

async function refreshSignedInAppData() {
  updateTroubleshootingStatus("Refreshing app data...");
  try {
    await Promise.all([
      fetchEventsForMonth(),
      fetchContracts(),
      fetchMusicianAssignments(),
      fetchMusicianBlackouts(),
      fetchMusicians(),
      fetchWorkOrders(),
      fetchInvoices(),
      fetchReceipts(),
    ]);
    updateTroubleshootingStatus("Fresh data loaded.");
  } catch (error) {
    updateTroubleshootingStatus("Could not refresh app data.", true);
  }
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
  const container = document.querySelector("#musiciansTab .panel.form-panel");
  prependGradientSectionHeader(
    container,
    "musiciansGreetingHeader",
    "Your crew.",
    "Your sound.",
    "Manage your team roster, blackouts and show files."
  );
  populateMusicianSelects();
  renderMusicianShowCabinet();
}

function updateMusicianShowStatus(message, isError = false) {
  const el = document.getElementById("musicianShowStatus");
  if (!el) return;
  el.textContent = message;
  el.classList.toggle("warning", isError);
}

function getSortedMusicians() {
  return [...state.musicians].sort((a, b) =>
    String(a.name || "").localeCompare(String(b.name || ""))
  );
}

function ensureActiveMusicianShowCabinetId() {
  const sorted = getSortedMusicians();
  const current = state.musicianShowCabinet.musicianId;
  const exists = sorted.some((musician) => musician.id === current);
  if (!exists) {
    state.musicianShowCabinet.musicianId = sorted[0]?.id || "";
  }
}

function getEventDateKey(event) {
  return eventDayKeyFromValue(event?.start_time || event?.end_time || "");
}

function eventMatchesMusicianShowBooking(event, booking) {
  const eventDate = getEventDateKey(event);
  if (!eventDate || eventDate !== normalizeDateValue(booking?.show_date || "")) return false;

  const eventTitle = normalizeText(event?.title || event?.type || "");
  const bookingTitle = normalizeText(booking?.show_title || "");
  if (!eventTitle || !bookingTitle) return false;

  return eventTitle === bookingTitle
    || eventTitle.includes(bookingTitle)
    || bookingTitle.includes(eventTitle)
    || getSharedWordCount(eventTitle, bookingTitle) >= 2;
}

function getSharedWordCount(leftText, rightText) {
  const leftWords = new Set(String(leftText || "").split(" ").filter(Boolean));
  const rightWords = new Set(String(rightText || "").split(" ").filter(Boolean));
  let shared = 0;
  leftWords.forEach((word) => {
    if (rightWords.has(word)) shared += 1;
  });
  return shared;
}

function removeAgreementSnapshotForEventId(eventId) {
  if (!eventId) return;
  const snapshots = loadContractDraftSnapshots();
  const key = `event:${eventId}`;
  if (!snapshots[key]) return;
  delete snapshots[key];
  saveContractDraftSnapshots(snapshots);
}

function removeEventFromEverywhere(event) {
  if (!event) {
    return { removedAssignments: 0, removedContracts: 0, removedShowFiles: 0 };
  }

  const eventId = event.id || "";
  let removedAssignments = 0;
  let removedContracts = 0;
  let removedShowFiles = 0;

  if (event.seeded) {
    const hiddenKey = eventIdentityKey(event);
    if (hiddenKey && !(state.calendar.hiddenSeededEventKeys || []).includes(hiddenKey)) {
      state.calendar.hiddenSeededEventKeys = [...(state.calendar.hiddenSeededEventKeys || []), hiddenKey];
    }
  } else if (eventId) {
    const priorEventCount = state.calendar.events.length;
    state.calendar.events = state.calendar.events.filter((item) => item.id !== eventId);
    removedAssignments = state.calendar.assignments.filter((item) => item.event_id === eventId).length;
    state.calendar.assignments = state.calendar.assignments.filter((item) => item.event_id !== eventId);
    removedContracts = state.calendar.contracts.filter((item) => item.event_id === eventId).length;
    state.calendar.contracts = state.calendar.contracts.filter((item) => item.event_id !== eventId);
    if (state.calendar.selectedEventId === eventId || priorEventCount !== state.calendar.events.length) {
      state.calendar.selectedEventId = "";
    }
    removeAgreementSnapshotForEventId(eventId);
  }

  const showFileBefore = state.musicianShowBookings.length;
  state.musicianShowBookings = state.musicianShowBookings.filter(
    (booking) => !eventMatchesMusicianShowBooking(event, booking)
  );
  removedShowFiles = showFileBefore - state.musicianShowBookings.length;

  saveDraft();
  return { removedAssignments, removedContracts, removedShowFiles };
}

function getCanonicalSeededShowTitle(showDate) {
  return (
    SEEDED_TODD_SHOW_FILES.find((show) => show.show_date === showDate)?.show_title ||
    SEEDED_DAN_SHOW_FILES.find((show) => show.show_date === showDate)?.show_title ||
    SEEDED_BOOKED_EVENTS.find((event) => event.date === showDate)?.title ||
    ""
  );
}

function isInternalSeededNote(noteText) {
  const normalized = normalizeText(noteText || "");
  return normalized === "seeded blackout" || normalized === "seeded confirmed show";
}

function ensureSeededShowFilesForMusician(namePattern, showDates, idPrefix) {
  const musician = state.musicians.find((item) =>
    namePattern.test(String(item?.name || "").trim())
  );
  if (!musician?.id) return false;

  let added = false;
  let updated = false;

  showDates.forEach((showDate, index) => {
    const canonicalTitle = getCanonicalSeededShowTitle(showDate);
    if (!canonicalTitle) return;

    const existingForDate = state.musicianShowBookings.find((entry) =>
      entry.musician_id === musician.id &&
      entry.show_date === showDate
    );
    if (existingForDate) {
      if (
        normalizeText(existingForDate.show_title || "") !== normalizeText(canonicalTitle) ||
        existingForDate.status !== "Confirmed" ||
        isInternalSeededNote(existingForDate.notes)
      ) {
        existingForDate.show_title = canonicalTitle;
        existingForDate.status = "Confirmed";
        existingForDate.notes = "";
        updated = true;
      }
      return;
    }

    state.musicianShowBookings.push({
      id: `${idPrefix}-${index + 1}`,
      musician_id: musician.id,
      show_date: showDate,
      show_title: canonicalTitle,
      status: "Confirmed",
      notes: "",
    });
    added = true;
  });

  if (added || updated) {
    saveDraft();
  }
  return added || updated;
}

function ensureToddSeededShowFiles() {
  return ensureSeededShowFilesForMusician(
    /\btodd\b/i,
    SEEDED_TODD_SHOW_FILES.map((show) => show.show_date),
    "seeded-todd-show"
  );
}

function ensureDanSeededShowFiles() {
  return ensureSeededShowFilesForMusician(
    /\bdan\b/i,
    SEEDED_DAN_SHOW_FILES.map((show) => show.show_date),
    "seeded-dan-show"
  );
}

function ensureJennySeededShowFiles() {
  return ensureSeededShowFilesForMusician(
    /\bjenny\b/i,
    SEEDED_JENNY_GARY_SHOW_DATES,
    "seeded-jenny-show"
  );
}

function ensureGarySeededShowFiles() {
  return ensureSeededShowFilesForMusician(
    /\bgary\b/i,
    SEEDED_JENNY_GARY_SHOW_DATES,
    "seeded-gary-show"
  );
}

function ensureSeededMusicianBlackouts() {
  let added = false;

  SEEDED_MUSICIAN_BLACKOUTS.forEach((entry, index) => {
    const musician = state.musicians.find((item) =>
      new RegExp(`\\b${entry.musician_name}\\b`, "i").test(String(item?.name || "").trim())
    );
    if (!musician?.id) return;

    const start = combineDateTime(entry.start_date, "00:00");
    const end = combineDateTime(entry.end_date, "23:59");
    if (!start || !end) return;

    const exists = state.calendar.blackouts.some((blackout) =>
      blackout.musician_id === musician.id &&
      blackout.all_day === true &&
      String(blackout.start_time || "") === start.toISOString() &&
      String(blackout.end_time || "") === end.toISOString()
    );
    if (exists) return;

    state.calendar.blackouts.push({
      id: `seeded-blackout-${index + 1}`,
      musician_id: musician.id,
      start_time: start.toISOString(),
      end_time: end.toISOString(),
      all_day: true,
      notes: "",
    });
    added = true;
  });

  if (added) {
    saveDraft();
  }
  return added;
}

function renderMusicianShowCabinet() {
  const tabs = document.getElementById("musicianShowTabs");
  const list = document.getElementById("musicianShowList");
  const headerWrap = document.getElementById("musicianCabinetHeader");
  if (!tabs || !list || !headerWrap) return;
  tabs.innerHTML = "";
  list.innerHTML = "";
  headerWrap.innerHTML = "";

  const sorted = getSortedMusicians();
  if (!sorted.length) {
    tabs.innerHTML = "<p class=\"muted\">Add a team member to open a show file.</p>";
    headerWrap.innerHTML = "<p class=\"muted\">No team members loaded yet.</p>";
    list.innerHTML = "<p class=\"muted\">No musician show files yet.</p>";
    return;
  }

  ensureActiveMusicianShowCabinetId();
  const activeId = state.musicianShowCabinet.musicianId;

  sorted.forEach((musician) => {
    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = "cabinet-tab";
    if (musician.id === activeId) tab.classList.add("active");
    tab.textContent = musicianDisplayName(musician);
    tab.addEventListener("click", () => {
      state.musicianShowCabinet.musicianId = musician.id;
      renderMusicianShowCabinet();
    });
    tabs.appendChild(tab);
  });

  const activeMusician = sorted.find((musician) => musician.id === activeId);
  if (!activeMusician) {
    headerWrap.innerHTML = "<p class=\"muted\">Select a musician to manage their folder.</p>";
    list.innerHTML = "<p class=\"muted\">Select a musician to view show files.</p>";
    return;
  }

  const summary = document.createElement("div");
  summary.className = "cabinet-summary";
  const statusLabel = activeMusician.active === false ? "Inactive" : "Active";
  const contactParts = [activeMusician.email, activeMusician.phone].filter(Boolean);
  summary.innerHTML = `
    <div class="cabinet-summary-top">
      <strong style="font-size:22px;font-weight:700;color:#2c1a00;font-family:Georgia, 'Times New Roman', serif;margin:0 0 4px;">${activeMusician.name || musicianDisplayName(activeMusician)}</strong>
      <span class="musician-card-status">${statusLabel}</span>
    </div>
    <p style="color:#8a6840;font-size:14px;margin:0 0 8px;">${activeMusician.role || "No role set"}</p>
    <p>${contactParts.length ? contactParts.join(" · ") : "No contact info"}</p>
    ${activeMusician.notes ? `<p>${activeMusician.notes}</p>` : ""}
  `;
  headerWrap.appendChild(summary);

  const toolbar = document.createElement("div");
  toolbar.className = "cabinet-toolbar-actions";
  const edit = document.createElement("button");
  edit.type = "button";
  edit.className = "btn ghost";
  edit.textContent = "Edit roster info";
  edit.addEventListener("click", () => editMusicianFromList(activeMusician.id));
  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "btn ghost";
  toggle.textContent = activeMusician.active === false ? "Set active" : "Set inactive";
  toggle.addEventListener("click", async () => {
    await toggleMusicianActive(activeMusician.id);
  });
  const removeMusicianBtn = document.createElement("button");
  removeMusicianBtn.type = "button";
  removeMusicianBtn.className = "btn ghost";
  removeMusicianBtn.textContent = "Delete team member";
  removeMusicianBtn.addEventListener("click", async () => {
    await deleteMusician(activeMusician.id);
  });
  toolbar.appendChild(edit);
  toolbar.appendChild(toggle);
  toolbar.appendChild(removeMusicianBtn);
  headerWrap.appendChild(toolbar);

  const entries = [...state.musicianShowBookings]
    .filter((item) => item.musician_id === activeMusician.id)
    .sort((a, b) => String(a.show_date || "").localeCompare(String(b.show_date || "")));

  if (!entries.length) {
    list.innerHTML = `<p class="muted">No manual show files saved for ${musicianDisplayName(activeMusician)} yet.</p>`;
    return;
  }

  const listHeading = document.createElement("h3");
  const musicianName = musicianDisplayName(activeMusician);
  listHeading.textContent = `${musicianName}${/s$/i.test(musicianName) ? "'" : "'s"} Shows`;
  listHeading.style.cssText = "font-size:18px;font-weight:700;color:#2c1a00;font-family:Georgia, 'Times New Roman', serif;margin:12px 0 8px;padding:0 8px;";
  list.appendChild(listHeading);

  entries.forEach((entry) => {
    const card = document.createElement("div");
    card.className = "event-card";
    const title = document.createElement("div");
    title.className = "musician-show-title";
    title.style.cssText = "font-size:17px;font-weight:700;color:#2c1a00;";
    title.textContent = entry.show_title || "Untitled show";
    const dateMeta = document.createElement("div");
    dateMeta.className = "event-meta musician-show-date";
    dateMeta.style.cssText = "color:#f47c20;font-size:13px;opacity:1;";
    dateMeta.textContent = entry.show_date ? formatDate(entry.show_date) : "No date";
    const statusBadge = document.createElement("span");
    statusBadge.className = "musician-show-status";
    statusBadge.style.cssText = "display:inline-flex;align-items:center;justify-content:center;background:#f47c20;color:#ffffff;font-size:12px;padding:2px 8px;border-radius:10px;white-space:nowrap;";
    statusBadge.textContent = entry.status || "Booked";
    card.appendChild(title);
    card.appendChild(dateMeta);
    card.appendChild(statusBadge);
    const noteText = String(entry.notes || "");
    if (/full band/i.test(noteText) || /\bduo\b/i.test(noteText)) {
      const lineupLabel = document.createElement("div");
      lineupLabel.className = "event-meta";
      lineupLabel.style.cssText = "color:#8a6840;font-size:12px;opacity:1;";
      lineupLabel.textContent = /full band/i.test(noteText) ? "Full Band" : "Duo";
      card.appendChild(lineupLabel);
    }
    if (entry.notes && !isInternalSeededNote(entry.notes)) {
      const notes = document.createElement("div");
      notes.className = "event-meta";
      notes.textContent = entry.notes;
      card.appendChild(notes);
    }
    const actions = document.createElement("div");
    actions.className = "event-actions";
    const remove = document.createElement("button");
    remove.className = "btn ghost";
    remove.type = "button";
    remove.textContent = "Remove";
    remove.addEventListener("click", () => {
      state.musicianShowBookings = state.musicianShowBookings.filter((item) => item.id !== entry.id);
      saveDraft();
      renderMusicianShowCabinet();
      updateMusicianShowStatus("Show file removed.");
    });
    actions.appendChild(remove);
    card.appendChild(actions);
    list.appendChild(card);
  });
}

function clearMusicianShowForm() {
  const ids = [
    "musicianShowDate",
    "musicianShowTitle",
    "musicianShowNotes",
  ];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  const statusSelect = document.getElementById("musicianShowStatusSelect");
  if (statusSelect) statusSelect.value = "Booked";
}

function saveManualMusicianShow() {
  ensureActiveMusicianShowCabinetId();
  const musicianId = state.musicianShowCabinet.musicianId;
  const showDate = document.getElementById("musicianShowDate")?.value || "";
  const showTitle = document.getElementById("musicianShowTitle")?.value.trim() || "";
  const status = document.getElementById("musicianShowStatusSelect")?.value || "Booked";
  const notes = document.getElementById("musicianShowNotes")?.value.trim() || "";

  if (!musicianId) {
    updateMusicianShowStatus("Add a team member first.", true);
    return;
  }
  if (!showDate || !showTitle) {
    updateMusicianShowStatus("Show date and show title are required.", true);
    return;
  }

  state.musicianShowBookings.unshift({
    id: `manual-show-${Date.now()}-${Math.random().toString(16).slice(2, 7)}`,
    musician_id: musicianId,
    show_date: showDate,
    show_title: showTitle,
    status,
    notes,
  });
  saveDraft();
  clearMusicianShowForm();
  renderMusicianShowCabinet();
  updateMusicianShowStatus("Show file saved.");
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
  const isEditing = Boolean(state.musicianEditor.id);
  if (addBtn) addBtn.textContent = isEditing ? "Save changes" : "Add team member";
  if (cancelBtn) cancelBtn.classList.toggle("hidden", !isEditing);
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
  ensureToddSeededShowFiles();
  ensureDanSeededShowFiles();
  ensureJennySeededShowFiles();
  ensureGarySeededShowFiles();
  ensureSeededMusicianBlackouts();
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
  state.musicianShowBookings = state.musicianShowBookings.filter((item) => item.musician_id !== id);
  if (state.musicianEditor.id === id) {
    clearMusicianForm();
    setMusicianEditorState("");
  }
  if (state.musicianShowCabinet.musicianId === id) {
    state.musicianShowCabinet.musicianId = "";
  }
  saveDraft();
  renderMusicianList();
  renderMusicianAssignments();
  renderAssignmentSummaryLists();
  updateMusicianStatus("Musician removed.");
}

async function seedDefaultMusicians() {
  DEFAULT_MUSICIAN_ROSTER.forEach((item) => {
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

async function renderBookedDatesList() {
  const list = document.getElementById("bookedDatesList");
  if (!list) return;
  const today = startOfDay(new Date());
  const endDate = new Date(today.getFullYear(), today.getMonth() + 12, 0, 23, 59, 59, 999);
  const visibleLocalIds = new Set(state.calendar.events.map((event) => event.id).filter(Boolean));
  const hiddenSeededKeys = new Set(state.calendar.hiddenSeededEventKeys || []);
  const booked = (await getShowsRangeEvents(today, endDate))
    .filter((event) => {
      if (event?.seeded) {
        const key = eventIdentityKey(event);
        return Boolean(key) && !hiddenSeededKeys.has(key);
      }
      return Boolean(event?.id) && visibleLocalIds.has(event.id);
    })
    .filter((event) => String(event.type || "").toLowerCase() !== "blackout")
    .sort((a, b) => new Date(a.start_time) - new Date(b.start_time));
  if (!booked.length) {
    list.innerHTML = "<p class=\"muted\">No booked dates yet.</p>";
    return;
  }
  list.innerHTML = "";
  const monthBuckets = new Map();
  booked.forEach((event) => {
    const startTime = new Date(event.start_time);
    const monthLabel = formatMonthYearLabel(startTime);
    const existing = monthBuckets.get(monthLabel) || [];
    existing.push(event);
    monthBuckets.set(monthLabel, existing);
  });
  monthBuckets.forEach((events, monthLabel) => {
    const monthCard = document.createElement("div");
    monthCard.className = "event-card";
    const monthHeader = document.createElement("header");
    monthHeader.innerHTML = `<span>${monthLabel}</span><span>${events.length} booked</span>`;
    monthCard.appendChild(monthHeader);
    const monthList = document.createElement("div");
    monthList.className = "event-list";
    events.forEach((event) => {
      const lineup = isFullBandShowEvent(event) ? "Full Band" : "Duo";
      const card = document.createElement("div");
      card.className = "event-card shows-booked-card";
      card.style.position = "relative";
      const title = document.createElement("strong");
      title.className = "shows-booked-title";
      title.style.cssText = "font-size:17px;font-weight:700;color:#2c1a00;";
      title.textContent = event.title || eventTypeLabel(event.type);
      const meta = document.createElement("div");
      meta.className = "event-meta shows-booked-datetime";
      meta.style.cssText = "color:#f47c20;font-size:13px;opacity:1;";
      meta.textContent = formatShowDateTimeWithWeekday(event.start_time);
      const lineupMeta = document.createElement("div");
      lineupMeta.className = "event-meta shows-booked-lineup";
      lineupMeta.style.cssText = "color:#8a6840;font-size:12px;opacity:1;";
      lineupMeta.textContent = lineup;
      const actions = document.createElement("div");
      actions.style.cssText = "display:flex;justify-content:flex-end;margin-top:10px;";
      const deleteButton = createConfirmDeleteButton(async () => {
        deleteButton.textContent = "Deleting...";
        card.style.opacity = "0.65";
        deleteButton.style.cssText = "border-color:#e58a4a;color:#9a3f00;";
        await deleteCalendarEvent(event);
        await renderBookedDatesList();
        renderBookHubCalendar();
      });
      deleteButton.style.cssText = "border-color:#e58a4a;color:#9a3f00;";
      actions.appendChild(deleteButton);
      card.appendChild(title);
      card.appendChild(meta);
      card.appendChild(lineupMeta);
      card.appendChild(actions);
      monthList.appendChild(card);
    });
    monthCard.appendChild(monthList);
    list.appendChild(monthCard);
  });
}

function renderAboutTab() {
  const aboutTab = document.getElementById("allaboutTab");
  if (!aboutTab) return;
  const existingDynamicLogo = document.getElementById("aboutTabDynamicLogo");
  if (existingDynamicLogo) existingDynamicLogo.remove();
  const existingLogo = aboutTab.querySelector('img[src="logo.jpeg"]');
  if (existingLogo) existingLogo.remove();
  const logoImg = document.createElement("img");
  logoImg.id = "aboutTabDynamicLogo";
  logoImg.src = "logo.jpeg";
  logoImg.alt = "GigOS";
  logoImg.style.cssText = "width:120px;border-radius:16px;display:block;margin:24px auto 16px auto;";
  aboutTab.insertBefore(logoImg, aboutTab.firstChild);
}

function renderMarketingTab() {
  const container = document.querySelector("#marketingTab .panel.form-panel");
  const grid = document.getElementById("marketingSocialTemplatesGrid");
  if (container) {
    const existingHeader = document.getElementById("marketingGreetingHeader");
    if (existingHeader) existingHeader.remove();
    const header = document.createElement("div");
    header.id = "marketingGreetingHeader";
    header.style.cssText = "padding: 24px 16px 8px; text-align: left;";
    header.innerHTML = `
      <h1 style="font-size: 32px; font-weight: 700; margin: 0 0 4px; font-family: Georgia, 'Times New Roman', serif; background: linear-gradient(to right, #d4621a, #f47c20, #f5a623); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Reach out.</h1>
      <h1 style="font-size: 32px; font-weight: 700; margin: 0 0 8px; font-family: Georgia, 'Times New Roman', serif; background: linear-gradient(to right, #f47c20, #f5a623, #f5c48a); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Stand out.</h1>
      <p style="font-size: 15px; color: #f0ede8; margin: 0 0 16px; font-family: Georgia, 'Times New Roman', serif;">Tools to promote your band and fill your calendar.</p>
    `;
    container.insertBefore(header, container.firstChild);
  }
  if (!grid) return;
  const currentVoice = ["warm", "funny", "hype"].includes(state.workOrderWorkspace.socialPostsVoice)
    ? state.workOrderWorkspace.socialPostsVoice
    : "warm";
  const selectedIndex = Number.isInteger(state.workOrderWorkspace.marketingSocialTemplateIndex)
    ? state.workOrderWorkspace.marketingSocialTemplateIndex
    : null;
  grid.innerHTML = "";
  const voiceRow = document.createElement("div");
  voiceRow.style.cssText = "display:flex;flex-wrap:wrap;gap:0;margin:0 0 16px;";
  [
    { id: "warm", label: "Warm" },
    { id: "funny", label: "Funny" },
    { id: "hype", label: "Hype" },
  ].forEach((voice) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.marketingSocialVoice = voice.id;
    btn.textContent = voice.label;
    const isActive = currentVoice === voice.id;
    btn.style.cssText = isActive
      ? "background:#f47c20;color:white;border:none;border-radius:20px;padding:8px 20px;font-size:13px;font-weight:600;cursor:pointer;margin-right:8px;"
      : "background:transparent;border:1px solid #e8a855;color:#8a5010;border-radius:20px;padding:8px 20px;font-size:13px;cursor:pointer;margin-right:8px;";
    voiceRow.appendChild(btn);
  });
  grid.appendChild(voiceRow);
  if (selectedIndex === null || !WORK_ORDER_SOCIAL_POST_TEMPLATES[selectedIndex]) {
    const topicsWrap = document.createElement("div");
    topicsWrap.style.cssText = "display:grid;gap:10px;";
    WORK_ORDER_SOCIAL_POST_TEMPLATES.forEach((template, index) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "marketing-social-card";
      card.dataset.marketingTemplateIndex = String(index);
      card.innerHTML = `
        <span class="marketing-social-category">${escapeHtml(template.category)}</span>
        <strong class="marketing-social-title">${escapeHtml(template.title)}</strong>
        <span class="marketing-social-feedback" aria-live="polite"></span>
      `;
      topicsWrap.appendChild(card);
    });
    grid.appendChild(topicsWrap);
    return;
  }

  const template = WORK_ORDER_SOCIAL_POST_TEMPLATES[selectedIndex];
  const detailWrap = document.createElement("div");
  detailWrap.style.cssText = "display:grid;gap:10px;";
  const backButton = document.createElement("button");
  backButton.type = "button";
  backButton.dataset.marketingSocialBack = "true";
  backButton.style.cssText = "background:transparent;border:none;color:#f47c20;font:inherit;font-weight:700;cursor:pointer;padding:0;text-align:left;";
  backButton.textContent = "← Back";
  detailWrap.appendChild(backButton);

  const activeTopicCard = document.createElement("div");
  activeTopicCard.className = "marketing-social-card";
  activeTopicCard.style.cursor = "default";
  activeTopicCard.innerHTML = `
    <span class="marketing-social-category">${escapeHtml(template.category)}</span>
    <strong class="marketing-social-title">${escapeHtml(template.title)}</strong>
  `;
  detailWrap.appendChild(activeTopicCard);

  const selectedVoice = [
    { id: "warm", label: "Warm" },
    { id: "funny", label: "Funny" },
    { id: "hype", label: "Hype" },
  ].find((voice) => voice.id === currentVoice) || { id: "warm", label: "Warm" };
  const voiceCard = document.createElement("div");
  voiceCard.className = "marketing-social-card";
  const text = template[selectedVoice.id] || template.warm;
  const personalizedText = typeof personalizeSocialPost === "function"
    ? personalizeSocialPost(text)
    : text;
  voiceCard.innerHTML = `
    <span class="marketing-social-category">${escapeHtml(selectedVoice.label)}</span>
    <span class="marketing-social-text">${escapeHtml(personalizedText)}</span>
    <div style="display:flex;justify-content:flex-end;margin-top:10px;">
      <button type="button" data-marketing-social-copy="${escapeHtml(selectedVoice.id)}" style="background:#f47c20;color:white;border:none;border-radius:20px;padding:8px 18px;font-size:13px;font-weight:600;cursor:pointer;">Copy</button>
    </div>
    <span class="marketing-social-feedback" data-marketing-social-feedback="${escapeHtml(selectedVoice.id)}" aria-live="polite"></span>
  `;
  detailWrap.appendChild(voiceCard);

  grid.appendChild(detailWrap);
}

async function renderAvailableDatesList() {
  const list = document.getElementById("availableDatesList");
  if (!list) return;
  const today = startOfDay(new Date());
  const displayStart = new Date(today.getFullYear(), 4, 1);
  const endDate = new Date(today.getFullYear(), 11, 31);
  const rangeEnd = new Date(
    endDate.getFullYear(),
    endDate.getMonth(),
    endDate.getDate(),
    23,
    59,
    59,
    999
  );
  const eventsForAvailability = await getShowsRangeEvents(displayStart, rangeEnd);

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
    let date = new Date(displayStart.getFullYear(), displayStart.getMonth(), displayStart.getDate());
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    const day = date.getDay();
    const isFridayOrSaturday = day === 5 || day === 6;
    const holidayWindowDay = isHolidayWeekend(date) && (day === 0 || day === 1);
    if (!isFridayOrSaturday && !holidayWindowDay) continue;
    const key = formatDateInput(date);
    if (busyKeys.has(key)) continue;
    const monthLabel = formatMonthYearLabel(date);
    const existing = monthBuckets.get(monthLabel) || [];
    existing.push(formatAvailableDateLabel(key));
    monthBuckets.set(monthLabel, existing);
  }

  const availableCount = [...monthBuckets.values()].reduce((sum, dates) => sum + dates.length, 0);
  if (!availableCount) {
    list.innerHTML = `<p class="muted">No open weekend days from ${displayStart.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    })} through ${endDate.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    })}.</p>`;
    return;
  }
  list.innerHTML = `<p class="muted">${availableCount} open weekend day(s) from ${displayStart.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  })} through ${endDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  })}.</p>`;
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
  const container = document.querySelector("#showsTab .panel.form-panel");
  prependGradientSectionHeader(
    container,
    "showsGreetingHeader",
    "The gig log.",
    "Every show, every stage.",
    "Your full show history pulled from the calendar."
  );
  renderAssignmentList();
  void renderBookedDatesList();
  void renderAvailableDatesList();
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
    card.style.cssText = "background:#fdf0e3;border:1px solid #e8a855;color:#2c1a00;opacity:1;";
    const header = document.createElement("header");
    header.style.cssText = "display:flex;justify-content:space-between;align-items:center;gap:12px;opacity:1;";
    header.innerHTML = `<span style="color:#2c1a00;font-size:17px;font-weight:700;opacity:1;">${escapeHtml(musicianDisplayName(musician))}</span><span style="color:#f47c20;font-size:13px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;opacity:1;">Blackout</span>`;
    const meta = document.createElement("div");
    meta.className = "event-meta";
    meta.style.cssText = "color:#5a3a1a;font-size:14px;font-weight:500;opacity:1;";
    meta.textContent = `${formatShortDateTime(entry.start_time)} → ${formatShortDateTime(
      entry.end_time
    )}`;
    card.appendChild(header);
    card.appendChild(meta);
    if (entry.notes && !isInternalSeededNote(entry.notes)) {
      const notes = document.createElement("div");
      notes.className = "event-meta";
      notes.style.cssText = "color:#5a3a1a;font-size:14px;font-weight:500;opacity:1;";
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
  ensureSeededMusicianBlackouts();
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
  resetRosterBlackoutForm();
  updateRosterBlackoutStatus("Blackout saved and form reset.");
}

function setupListeners() {
  agreementFields.forEach((field) => {
    const el = document.getElementById(field);
    if (!el) return;
    const handler = () => {
      const previousValue = state.agreement[field];
      if (el.type === "checkbox") {
        state.agreement[field] = el.checked;
      } else {
        state.agreement[field] = el.value;
      }
      if (previousValue !== state.agreement[field] && state.workspace.bookingSaved) {
        state.workspace.bookingSaved = false;
        state.workspace.contractWizardOpen = false;
        setAgreementCalendarStatus("Changes made — please re-save before generating contract.");
      }
      if (field === "lodgingEnabled") {
        updateAgreementPreview();
      }
      if (field === "performanceDate") {
        updateHolidayFromDate();
        updateAgreementBookingWarning();
      }
      if (field === "bandConfig") {
        applyLineupRateToAgreement();
      }
      if (field === "bandConfig" ||
          field === "performanceTime" ||
          field === "performanceEndTime" ||
          field === "hours") {
        updateAgreementStepSummary();
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
          state.agreement.promoCredit = false;
          state.agreement.liveVideoCredit = false;
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
      if (field === "depositWaived" && state.agreement.depositWaived && !state.agreement.depositAmount) {
        state.agreement.depositAmount = String(depositDefault);
        const depositInput = document.getElementById("depositAmount");
        if (depositInput) depositInput.value = state.agreement.depositAmount;
      }
      updateAgreementPreview();
      renderAgreementStepUI();
      saveDraft();
      persistAgreementDraftSnapshot();
    };
    el.addEventListener("input", handler);
    el.addEventListener("change", handler);
  });

  const discountButtonsWrap = document.getElementById("friendsFamilyDiscountButtons");
  if (discountButtonsWrap) {
    discountButtonsWrap.addEventListener("click", (e) => {
      const button = e.target.closest("button[data-discount]");
      if (!button) return;
      const amount = button.getAttribute("data-discount");
      state.agreement.friendsFamilyDiscountAmount = amount;
      const hiddenInput = document.getElementById("friendsFamilyDiscountAmount");
      if (hiddenInput) hiddenInput.value = amount;
      discountButtonsWrap.querySelectorAll("button[data-discount]").forEach((btn) => {
        btn.classList.remove("active");
      });
      if (amount !== "0") button.classList.add("active");
      if (state.workspace.bookingSaved) {
        state.workspace.bookingSaved = false;
        state.workspace.contractWizardOpen = false;
        setAgreementCalendarStatus("Changes made — please re-save before generating contract.");
      }
      updateAgreementPreview();
      renderAgreementStepUI();
      saveDraft();
      persistAgreementDraftSnapshot();
    });
  }

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
  const bottomNav = document.getElementById("bottomNav");
  const homeTab = document.getElementById("homeTab");
  const onboardingTab = document.getElementById("onboardingTab");
  const messagePreviewWrap = document.getElementById("messagePreviewWrap");
  const pdfActionsBar = document.getElementById("pdfActionsBar");
  const topOpenPdfBtn = document.getElementById("openPdf");
  const topPrintPdfBtn = document.getElementById("printPdf");
  const sharePdfBtn = document.getElementById("sharePdf");
  let activeTop = "login";
  const navHistory = [];
  let suppressHistory = false;

  const normalizeTopTarget = (topTarget) => {
    if (topTarget === "login" || topTarget === "onboarding") return topTarget;
    if (topTarget === "home") return "home";
    if (topTarget === "bookkeeping") return "book";
    if (topTarget === "contracts") return "docs";
    if (topTarget === "marketing") return "marketing";
    if (
      topTarget === "calendar" ||
      topTarget === "workorders" ||
      topTarget === "shows" ||
      topTarget === "musicians" ||
      topTarget === "troubleshooting" ||
      topTarget === "about" ||
      topTarget === "more"
    ) {
      return "more";
    }
    return topTarget || "home";
  };

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
    const workspaceTitle = document.getElementById("workspaceTitle");
    const workspaceCrumb = document.getElementById("workspaceCrumb");
    if (!workspaceTitle || !workspaceCrumb) return;
    const panelNames = {
      login: "Sign In",
      bookhub: "Book",
      home: "Dashboard",
      onboarding: "Band Setup",
      bandprofile: "Band Profile",
      marketing: "Marketing Hub",
      more: "More",
      workorders: "Work Orders",
      contractshub: "Contracts",
      shows: "Shows",
      agreement: "Agreement",
      quotebuilder: "Quote Builder",
      invoice: "Invoice",
      receipt: "Receipt",
      calendar: "Event Calendar",
      contracts: "Signed Contracts",
      contractscreated: "Contracts Created",
      musicians: "Musicians + Tech Crew",
      troubleshooting: "Troubleshooting",
      allabout: "App Overview",
      howto: "How-To Playbook",
    };
    const folderNames = {
      login: "Front Desk",
      home: "Dashboard",
      onboarding: "Setup",
      book: "Booking",
      docs: "Docs",
      marketing: "Marketing",
      more: "More",
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
    document.getElementById("bookHubTab").classList.toggle("hidden", target !== "bookhub");
    if (homeTab) homeTab.classList.toggle("hidden", target !== "home");
    if (onboardingTab) onboardingTab.classList.toggle("hidden", target !== "onboarding");
    document.getElementById("bandProfileTab").classList.toggle("hidden", target !== "bandprofile");
    document.getElementById("agreementTab").classList.toggle("hidden", target !== "agreement");
    document.getElementById("quoteBuilderTab").classList.toggle("hidden", target !== "quotebuilder");
    document.getElementById("invoiceTab").classList.toggle("hidden", target !== "invoice");
    document.getElementById("receiptTab").classList.toggle("hidden", target !== "receipt");
    document.getElementById("calendarTab").classList.toggle("hidden", target !== "calendar");
    document.getElementById("contractsTab").classList.toggle("hidden", target !== "contracts");
    document.getElementById("contractsCreatedTab").classList.toggle("hidden", target !== "contractscreated");
    document.getElementById("contractsHubTab").classList.toggle("hidden", target !== "contractshub");
    document.getElementById("musiciansTab").classList.toggle("hidden", target !== "musicians");
    document.getElementById("troubleshootingTab").classList.toggle("hidden", target !== "troubleshooting");
    document.getElementById("showsTab").classList.toggle("hidden", target !== "shows");
    document.getElementById("workOrdersTab").classList.toggle("hidden", target !== "workorders");
    document.getElementById("allaboutTab").classList.toggle("hidden", target !== "allabout");
    document.getElementById("howtoTab").classList.toggle("hidden", target !== "howto");
    document.getElementById("marketingTab").classList.toggle("hidden", target !== "marketing");
    document.getElementById("moreTab").classList.toggle("hidden", target !== "more");
    if (target === "onboarding") {
      renderOnboardingWizard();
    }
    if (target === "workorders") {
      renderWorkOrders();
      renderWorkOrderWorkspace();
    }
    if (target === "bandprofile") {
      renderReusableBandProfile();
    }
    if (target === "bookhub") {
      renderBookHub();
    }
    if (target === "allabout") {
      renderAboutTab();
    }
    if (target === "marketing") {
      renderMarketingTab();
    }
    if (target === "agreement") {
      renderAgreementStepUI();
      updateAgreementStepSummary();
    }
    if (target === "quotebuilder") {
      renderQuoteBuilder();
    } else {
      stopQuoteStatusPolling();
    }
    const inBookkeeping =
      target === "agreement" || target === "invoice" || target === "receipt";
    const showAgreementDocumentTools = target === "agreement" && state.workspace.contractWizardOpen;
    if (messagePreviewWrap) {
      messagePreviewWrap.classList.toggle(
        "hidden",
        target === "agreement" ? !showAgreementDocumentTools : !inBookkeeping
      );
    }
    if (pdfActionsBar) {
      pdfActionsBar.classList.toggle(
        "hidden",
        target === "agreement" ? !showAgreementDocumentTools : !inBookkeeping
      );
    }
    if (topOpenPdfBtn) topOpenPdfBtn.classList.toggle("hidden", !inBookkeeping);
    if (topPrintPdfBtn) topPrintPdfBtn.classList.toggle("hidden", !inBookkeeping);
    if (sharePdfBtn) sharePdfBtn.classList.toggle("hidden", !inBookkeeping);
    document.querySelectorAll(".section-tab[data-panel]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-panel") === target);
    });
    updateWorkspaceHead(activeTop, target);
    rememberRoute(activeTop, target);
    updateMessagePreview();
    saveDraft();
  };

  const switchTop = (topTarget) => {
    const signedIn = Boolean(state.calendar.session);
    if (!signedIn && topTarget !== "login" && topTarget !== "onboarding") {
      updateSupabaseStatus("Sign in first to open the rest of Booking Suite.", true);
      topTarget = "login";
    }
    const navTarget = normalizeTopTarget(topTarget);
    activeTop = navTarget;
    state.workspace.top = navTarget;
    document.querySelectorAll(".bottom-nav-tab[data-bottom]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-bottom") === navTarget);
    });
    if (bottomNav) {
      bottomNav.classList.toggle("hidden", topTarget === "login" || topTarget === "onboarding");
    }
    if (bookkeepingTabs) bookkeepingTabs.classList.add("hidden");
    if (scheduleTabs) scheduleTabs.classList.toggle("hidden", topTarget !== "calendar");
    if (aboutTabs) aboutTabs.classList.toggle("hidden", topTarget !== "about");

    if (topTarget === "login") {
      switchPanel("login");
      return;
    }

    if (topTarget === "onboarding") {
      switchPanel("onboarding");
      return;
    }

    if (topTarget === "home") {
      switchPanel("home");
      return;
    }
    if (topTarget === "marketing") {
      switchPanel("marketing");
      return;
    }
    if (topTarget === "more") {
      switchPanel("more");
      return;
    }
    if (topTarget === "workorders") {
      switchPanel("workorders");
      return;
    }
    if (topTarget === "contracts") {
      const valid =
        state.activeTab === "contractshub" ||
        state.activeTab === "contracts" ||
        state.activeTab === "contractscreated";
      switchPanel(valid ? state.activeTab : "contractshub");
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
    if (topTarget === "troubleshooting") {
      switchPanel("troubleshooting");
      return;
    }

    if (topTarget === "bookkeeping") {
      const valid =
        state.activeTab === "bookhub" ||
        state.activeTab === "agreement" ||
        state.activeTab === "quotebuilder" ||
        state.activeTab === "invoice" ||
        state.activeTab === "receipt";
      switchPanel(valid ? state.activeTab : "bookhub");
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

  document.querySelectorAll(".bottom-nav-tab[data-bottom]").forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-bottom");
      if (target === "book") {
        state.activeTab = "bookhub";
        switchTop("bookkeeping");
        switchPanel("bookhub");
        return;
      }
      if (target === "docs") {
        switchTop("contracts");
        return;
      }
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
  const homeNewBookingBtn = document.getElementById("homeNewBooking");
  if (homeNewBookingBtn) {
    homeNewBookingBtn.addEventListener("click", () => {
      resetAgreementForm();
      state.activeTab = "agreement";
      switchTop("bookkeeping");
    });
  }
  const bookHubNewBookingBtn = document.getElementById("bookHubNewBooking");
  if (bookHubNewBookingBtn) {
    bookHubNewBookingBtn.addEventListener("click", () => {
      resetAgreementForm();
      state.activeTab = "agreement";
      switchTop("bookkeeping");
    });
  }
  const bookHubCreateQuoteBtn = document.getElementById("bookHubCreateQuote");
  if (bookHubCreateQuoteBtn) {
    bookHubCreateQuoteBtn.addEventListener("click", () => {
      state.activeTab = "quotebuilder";
      switchTop("bookkeeping");
      switchPanel("quotebuilder");
    });
  }
  const bookHubNewTaskBtn = document.getElementById("bookHubNewTask");
  if (bookHubNewTaskBtn) {
    bookHubNewTaskBtn.addEventListener("click", () => {
      state.workOrderView.focusId = "";
      state.workOrderView.showCreate = true;
      switchTop("workorders");
      renderWorkOrders();
    });
  }
  const homeOpenContractsBtn = document.getElementById("homeOpenContracts");
  if (homeOpenContractsBtn) {
    homeOpenContractsBtn.addEventListener("click", () => {
      state.activeTab = "contractshub";
      switchTop("contracts");
    });
  }
  const homeOpenCalendarBtn = document.getElementById("homeOpenCalendar");
  if (homeOpenCalendarBtn) {
    homeOpenCalendarBtn.addEventListener("click", () => {
      state.activeTab = "calendar";
      switchTop("calendar");
    });
  }
  const homeBandProfileBtn = document.getElementById("homeBandProfile");
  if (homeBandProfileBtn) {
    homeBandProfileBtn.addEventListener("click", () => {
      switchTop("home");
      switchPanel("bandprofile");
    });
  }
  const homeEditBandDNABtn = document.getElementById("homeEditBandDNA");
  if (homeEditBandDNABtn) {
    homeEditBandDNABtn.addEventListener("click", () => {
      state.onboardingStep = 1;
      switchTop("onboarding");
    });
  }
  const docsOpenSignedContractsBtn = document.getElementById("docsOpenSignedContracts");
  if (docsOpenSignedContractsBtn) {
    docsOpenSignedContractsBtn.addEventListener("click", () => {
      state.activeTab = "contracts";
      switchTop("contracts");
      switchPanel("contracts");
    });
  }
  const docsOpenCreatedContractsBtn = document.getElementById("docsOpenCreatedContracts");
  if (docsOpenCreatedContractsBtn) {
    docsOpenCreatedContractsBtn.addEventListener("click", () => {
      state.activeTab = "contractscreated";
      switchTop("contracts");
      switchPanel("contractscreated");
    });
  }

  document.querySelectorAll("[data-more-panel]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-more-panel");
      if (!target) return;
      if (target === "invoice") {
        state.activeTab = "invoice";
        switchTop("bookkeeping");
        switchPanel("invoice");
        return;
      }
      if (target === "receipt") {
        state.activeTab = "receipt";
        switchTop("bookkeeping");
        switchPanel("receipt");
        return;
      }
      if (target === "allabout" || target === "howto") {
        switchTop("about");
        switchPanel(target);
        return;
      }
      if (target === "troubleshooting") {
        switchTop("troubleshooting");
        return;
      }
      if (target === "calendar") {
        state.activeTab = "calendar";
        switchTop("calendar");
        return;
      }
      if (target === "workorders") {
        state.workOrderView.focusId = "";
        state.workOrderView.showCreate = true;
        switchTop("workorders");
        renderWorkOrders();
        return;
      }
      if (target === "shows") {
        switchTop("shows");
        return;
      }
      if (target === "musicians") {
        switchTop("musicians");
      }
    });
  });

  const onboardingNextBtn = document.getElementById("onboardingNext");
  if (onboardingNextBtn) {
    onboardingNextBtn.addEventListener("click", advanceOnboardingStep);
  }
  const onboardingBackBtn = document.getElementById("onboardingBack");
  if (onboardingBackBtn) {
    onboardingBackBtn.addEventListener("click", () => {
      state.onboardingStep = Math.max(1, Number(state.onboardingStep || 1) - 1);
      renderOnboardingWizard();
    });
  }
  const onboardingWizard = document.getElementById("onboardingWizard");
  if (onboardingWizard) {
    onboardingWizard.addEventListener("click", (event) => {
      const gotoBtn = event.target.closest("[data-onboarding-goto]");
      if (gotoBtn) {
        state.onboardingStep = Number(gotoBtn.getAttribute("data-onboarding-goto")) || 1;
        renderOnboardingWizard();
        return;
      }

      const depositModelBtn = event.target.closest("[data-deposit-model]");
      if (depositModelBtn) {
        const model = depositModelBtn.getAttribute("data-deposit-model") || "addition";
        updateBandDNA({ depositModel: model });
        document.querySelectorAll("[data-deposit-model]").forEach((btn) => {
          btn.classList.toggle(
            "active",
            btn.getAttribute("data-deposit-model") === model
          );
        });
        const hiddenInput = document.getElementById("onboardingDepositModel");
        if (hiddenInput) hiddenInput.value = model;
        return;
      }

      const removeLineupBtn = event.target.closest("[data-remove-lineup]");
      if (removeLineupBtn) {
        saveOnboardingStep(2);
        const removeIndex = Number(removeLineupBtn.getAttribute("data-remove-lineup"));
        state.bandDNA.lineups = (state.bandDNA.lineups || []).filter((_, index) => index !== removeIndex);
        if (!state.bandDNA.lineups.length) {
          state.bandDNA.lineups = [{ name: "Duo", rate: "", count: 2, rateType: "hourly" }];
        }
        saveDraft();
        renderOnboardingWizard();
        return;
      }

      if (event.target.closest("#onboardingAddLineup")) {
        saveOnboardingStep(2);
        state.bandDNA.lineups = [
          ...(Array.isArray(state.bandDNA.lineups) ? state.bandDNA.lineups : []),
          { name: "", rate: "", count: 1, rateType: "hourly" },
        ];
        saveDraft();
        renderOnboardingWizard();
        updateOnboardingLineupRatePreviews();
        return;
      }

      const travelTypeBtn = event.target.closest("[data-travel-type]");
      if (travelTypeBtn) {
        const travelType = travelTypeBtn.getAttribute("data-travel-type")
          || "hourly_per_performer";
        state.bandDNA.travelChargeType = travelType;
        updateBandDNA({ travelChargeType: travelType });
        document.querySelectorAll("[data-travel-type]").forEach((btn) => {
          btn.classList.toggle("active",
            btn.getAttribute("data-travel-type") === travelType);
        });
        const hourlyWrap = document.getElementById("onboardingTravelHourlyWrap");
        const flatWrap = document.getElementById("onboardingTravelFlatWrap");
        if (hourlyWrap) hourlyWrap.classList.toggle("hidden",
          travelType !== "hourly_per_performer");
        if (flatWrap) flatWrap.classList.toggle("hidden",
          travelType !== "flat_fee");
        return;
      }

      const toneBtn = event.target.closest("[data-onboarding-tone]");
      if (toneBtn) {
        const tone = toneBtn.getAttribute("data-onboarding-tone") || "Warm";
        state.bandDNA.tone = tone;
        updateBandDNA({ tone });
        const hiddenInput = document.getElementById("onboardingTone");
        if (hiddenInput) hiddenInput.value = tone;
        document.querySelectorAll("[data-onboarding-tone]").forEach((btn) => {
          btn.classList.toggle("active", btn.getAttribute("data-onboarding-tone") === tone);
        });
        return;
      }

      if (event.target.closest("#onboardingAddGenre")) {
        const input = document.getElementById("onboardingGenreInput");
        const nextTag = input?.value.trim() || "";
        if (!nextTag) return;
        const currentTags = Array.isArray(state.bandDNA.genreTags) ? state.bandDNA.genreTags : [];
        if (!currentTags.includes(nextTag)) {
          updateBandDNA({ genreTags: [...currentTags, nextTag] });
        }
        renderOnboardingWizard();
        return;
      }

      const removeGenreBtn = event.target.closest("[data-remove-genre]");
      if (removeGenreBtn) {
        const tagToRemove = removeGenreBtn.getAttribute("data-remove-genre") || "";
        updateBandDNA({
          genreTags: (Array.isArray(state.bandDNA.genreTags) ? state.bandDNA.genreTags : [])
            .filter((tag) => tag !== tagToRemove),
        });
        renderOnboardingWizard();
      }
    });
  }

  const saveReusableBandProfileBtn = document.getElementById("saveReusableBandProfile");
  if (saveReusableBandProfileBtn) {
    saveReusableBandProfileBtn.addEventListener("click", saveReusableBandProfile);
  }
  const addLineupRateBtn = document.getElementById("addLineupRate");
  if (addLineupRateBtn) {
    addLineupRateBtn.addEventListener("click", () => {
      syncReusableBandProfileFromForm();
      state.workOrderWorkspace.pricingProfile.lineupRates.push(createLineupRateEntry());
      renderLineupRateEntries();
      saveDraft();
      setBandProfileStatus("");
    });
  }

  const submitAgreementBtn = document.getElementById("submitAgreement");
  if (submitAgreementBtn) {
    submitAgreementBtn.addEventListener("click", submitAgreement);
  }
  const createQuoteBtn = document.getElementById("createQuoteBtn");
  if (createQuoteBtn) {
    createQuoteBtn.addEventListener("click", () => {
      state.activeTab = "quotebuilder";
      switchTop("bookkeeping");
      switchPanel("quotebuilder");
    });
  }
  const saveBookingOnlyBtn = document.getElementById("saveBookingOnly");
  if (saveBookingOnlyBtn) {
    saveBookingOnlyBtn.addEventListener("click", saveBookingOnly);
  }
  const generateQuoteBtn = document.getElementById("generateQuoteBtn");
  if (generateQuoteBtn) {
    generateQuoteBtn.addEventListener("click", saveQuoteToSupabase);
  }
  const copyQuoteLinkBtn = document.getElementById("copyQuoteLinkBtn");
  if (copyQuoteLinkBtn) {
    copyQuoteLinkBtn.addEventListener("click", () => {
      const link = document.getElementById("quoteLinkDisplay")?.value.trim() || "";
      if (!link) {
        setQuoteBuilderStatus("Generate a quote link first.", true);
        return;
      }
      copyTextToClipboard(link, {
        statusEl: getQuoteBuilderStatusEl(),
        successMessage: "Quote link copied to clipboard.",
        failureMessage: "Could not copy quote link.",
      });
    });
  }
  const openQuoteLinkBtn = document.getElementById("openQuoteLinkBtn");
  if (openQuoteLinkBtn) {
    openQuoteLinkBtn.addEventListener("click", () => {
      const link = document.getElementById("quoteLinkDisplay")?.value.trim() || "";
      if (!link) {
        setQuoteBuilderStatus("Generate a quote link first.", true);
        return;
      }
      window.open(link, "_blank");
    });
  }
  const agreementStepBackBtn = document.getElementById("agreementStepBack");
  if (agreementStepBackBtn) {
    agreementStepBackBtn.addEventListener("click", () => {
      state.workspace.agreementStep = Math.max(1, Number(state.workspace.agreementStep || 1) - 1);
      if (state.workspace.agreementStep !== AGREEMENT_STEP_COUNT) {
        state.workspace.contractWizardOpen = false;
      }
      renderAgreementStepUI();
      saveDraft();
    });
  }
  const agreementStepNextBtn = document.getElementById("agreementStepNext");
  if (agreementStepNextBtn) {
    agreementStepNextBtn.addEventListener("click", () => {
      state.workspace.agreementStep = Math.min(
        AGREEMENT_STEP_COUNT,
        Number(state.workspace.agreementStep || 1) + 1
      );
      if (state.workspace.agreementStep !== AGREEMENT_STEP_COUNT) {
        state.workspace.contractWizardOpen = false;
      }
      renderAgreementStepUI();
      saveDraft();
    });
  }
  const resetAgreementBtn = document.getElementById("resetAgreement");
  if (resetAgreementBtn) {
    resetAgreementBtn.addEventListener("click", resetAgreementForm);
  }
  const quoteBuilderTab = document.getElementById("quoteBuilderTab");
  if (quoteBuilderTab) {
    quoteBuilderTab.addEventListener("click", (event) => {
      const removeBtn = event.target.closest("[data-remove-quote-option]");
      if (removeBtn) {
        const removeIndex = Number(removeBtn.getAttribute("data-remove-quote-option"));
        const nextOptions = collectQuoteOptionsFromDom().filter((_, index) => index !== removeIndex);
        state.quoteBuilder.options = nextOptions;
        renderQuoteOptionRows(nextOptions.length ? nextOptions : [{
          label: "",
          sets: "",
          price: "",
          deposit: state.bandDNA.defaultDeposit || "",
          detail: "",
          featured: false,
        }]);
        saveDraft();
        return;
      }

      if (event.target.closest("#addQuoteOptionBtn")) {
        const existingOptions = collectQuoteOptionsFromDom();
        if (existingOptions.length >= 3) return;
        existingOptions.push({
          label: "",
          sets: "",
          price: "",
          deposit: state.bandDNA.defaultDeposit || "",
          detail: "",
          featured: false,
        });
        state.quoteBuilder.options = existingOptions;
        renderQuoteOptionRows(existingOptions);
        saveDraft();
        return;
      }

      if (event.target.closest("#convertQuoteToContractBtn")) {
        state.activeTab = "agreement";
        switchTop("bookkeeping");
        switchPanel("agreement");
        submitAgreement();
      }
    });

    quoteBuilderTab.addEventListener("input", () => {
      state.quoteBuilder.options = collectQuoteOptionsFromDom();
      saveDraft();
    });

    quoteBuilderTab.addEventListener("change", () => {
      state.quoteBuilder.options = collectQuoteOptionsFromDom();
      saveDraft();
    });
  }
  onboardingWizard?.addEventListener("input", (event) => {
    if (
      event.target.matches("#onboardingMusicianHourlyRate")
      || event.target.matches("[data-lineup-name]")
      || event.target.matches("[data-lineup-count]")
    ) {
      updateOnboardingLineupRatePreviews();
    }
  });
  document.getElementById("invoicePdf").addEventListener("click", () => generatePdf("invoice"));
  const invoiceCopyMessageBtn = document.getElementById("invoiceCopyMessage");
  if (invoiceCopyMessageBtn) {
    invoiceCopyMessageBtn.addEventListener("click", async () => {
      state.activeTab = "invoice";
      await copyMessage("pdfStatus", invoiceCopyMessageBtn);
    });
  }
  document.getElementById("receiptPdf").addEventListener("click", () => generatePdf("receipt"));
  const receiptCopyMessageBtn = document.getElementById("receiptCopyMessage");
  if (receiptCopyMessageBtn) {
    receiptCopyMessageBtn.addEventListener("click", async () => {
      state.activeTab = "receipt";
      await copyMessage("pdfStatus", receiptCopyMessageBtn);
    });
  }
  const sharePdfActionBtn = document.getElementById("sharePdf");
  if (sharePdfActionBtn) {
    sharePdfActionBtn.addEventListener("click", shareLastPdf);
  }
  const copyContractLinkBtn = document.getElementById("copyContractLinkBtn");
  if (copyContractLinkBtn) {
    copyContractLinkBtn.addEventListener("click", () => {
      const link = document.getElementById("contractLinkDisplay")?.value.trim() || "";
      if (!link) return;
      const clientName = state.agreement.clientName?.trim() || "your client";
      copyTextToClipboard(link, {
        statusEl: document.getElementById("contractSendStatus"),
        successMessage: `Link copied! Send this to ${clientName} to sign digitally.`,
        failureMessage: "Could not copy the link.",
      });
    });
  }
  const openContractLinkBtn = document.getElementById("openContractLinkBtn");
  if (openContractLinkBtn) {
    openContractLinkBtn.addEventListener("click", () => {
      const link = document.getElementById("contractLinkDisplay")?.value.trim() || "";
      if (link) window.open(link, "_blank");
    });
  }
  const shareContractLinkBtn2 = document.getElementById("shareContractLinkBtn2");
  if (shareContractLinkBtn2) {
    shareContractLinkBtn2.addEventListener("click", async () => {
      const link = document.getElementById("contractLinkDisplay")?.value.trim() || "";
      if (!link) return;
      const statusEl = document.getElementById("contractSendStatus");
      if (navigator.share) {
        try {
          await navigator.share({
            title: "Performance contract — Rust & Ruin",
            text: "Here is your performance contract to review and sign:",
            url: link,
          });
          if (statusEl) statusEl.textContent = "Contract shared.";
          return;
        } catch (error) {
          if (error?.name === "AbortError") return;
        }
      }
      copyTextToClipboard(link, {
        statusEl,
        successMessage: "Share not available here, link copied instead.",
        failureMessage: "Could not share or copy the link.",
      });
    });
  }

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
  const moreSignOutBtn = document.getElementById("moreSignOut");
  const signOutCurrentUser = async () => {
    const client = state.calendar.client;
    if (!client) return;
    await client.auth.signOut();
    stopSupabaseSync();
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
  if (moreSignOutBtn) {
    moreSignOutBtn.addEventListener("click", signOutCurrentUser);
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
    workOrderList.addEventListener("click", async (event) => {
      const button = event.target.closest("button[data-action][data-id]");
      if (!button) return;
      const { action, id } = button.dataset;
      const idx = state.workOrders.findIndex((item) => item.id === id);
      if (idx === -1) return;
      if (action === "open") {
        state.workOrderView.focusId = id;
        state.workOrderView.showCreate = false;
        saveDraft();
        renderWorkOrders();
        setWorkOrderStatus("Opened task details.");
        return;
      }
      if (action === "close") {
        state.workOrderView.focusId = "";
        state.workOrderView.showCreate = true;
        saveDraft();
        renderWorkOrders();
        setWorkOrderStatus("");
        return;
      }
      if (action === "toggle") {
        const current = state.workOrders[idx];
        const nowDone =
          current.status === "Completed" || current.completed === true;
        current.status = nowDone ? "Open" : "Completed";
        current.completed = !nowDone;
        const saveResult = await saveWorkOrder(current);
        if (!saveResult.ok && !saveResult.localOnly) {
          current.status = nowDone ? "Completed" : "Open";
          current.completed = nowDone;
          setWorkOrderStatus(saveResult.message, true);
          renderWorkOrders();
          return;
        }
        if (saveResult.row) {
          state.workOrders[idx] = mapWorkOrderRow(saveResult.row);
        }
        setWorkOrderStatus(
          saveResult.localOnly
            ? "Status changed on this device only."
            : "Work order updated."
        );
      } else if (action === "delete") {
        const [removed] = state.workOrders.splice(idx, 1);
        const deleteResult = await deleteWorkOrderRecord(id);
        if (!deleteResult.ok && !deleteResult.localOnly) {
          state.workOrders.splice(idx, 0, removed);
          setWorkOrderStatus(deleteResult.message, true);
          renderWorkOrders();
          return;
        }
        if (state.workOrderView.focusId === id) {
          state.workOrderView.focusId = "";
          state.workOrderView.showCreate = true;
        }
        setWorkOrderStatus(
          deleteResult.localOnly
            ? "Work order removed on this device only."
            : "Work order deleted."
        );
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

  document.querySelectorAll("[data-work-section]").forEach((tab) => {
    tab.addEventListener("click", () => {
      switchWorkOrderSection(tab.getAttribute("data-work-section"));
    });
  });

  document.querySelectorAll("[data-promo-channel]").forEach((tab) => {
    tab.addEventListener("click", () => {
      switchPromoChannel(tab.getAttribute("data-promo-channel"));
    });
  });

  document.querySelectorAll("[data-epk-section]").forEach((tab) => {
    tab.addEventListener("click", () => {
      switchEpkSection(tab.getAttribute("data-epk-section"));
    });
  });

  [
    "promoVenueType",
    "promoBookingType",
    "promoRelationship",
    "promoGenre",
    "promoLineup",
    "promoTone",
    "promoGoal",
    "promoContactName",
    "promoVenueName",
    "promoCity",
    "promoOpenDates",
    "promoVenueConnection",
    "promoCustomHook",
    "promoTemplateTitle",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("input", () => updatePromoGeneratedMessage(true));
    el.addEventListener("change", () => updatePromoGeneratedMessage(true));
  });

  document.querySelectorAll("[data-promo-option]").forEach((button) => {
    button.addEventListener("click", () => {
      state.workOrderWorkspace.promoBuilder.selectedOption = Number(button.getAttribute("data-promo-option")) || 1;
      updatePromoGeneratedMessage(true);
      setPromoStatus(`Loaded ${button.textContent}.`);
    });
  });

  const promoGeneratedMessage = document.getElementById("promoGeneratedMessage");
  if (promoGeneratedMessage) {
    promoGeneratedMessage.addEventListener("input", () => {
      state.workOrderWorkspace.promoBuilder.message = promoGeneratedMessage.value;
      saveDraft();
    });
  }

  const promoCopyBtn = document.getElementById("promoCopy");
  if (promoCopyBtn) {
    promoCopyBtn.addEventListener("click", async () => {
      syncPromoBuilderStateFromForm();
      await copyTextToClipboard(document.getElementById("promoGeneratedMessage")?.value || "", {
        statusEl: document.getElementById("promoStatus"),
        successMessage: "Promo message copied.",
        failureMessage: "Could not copy promo message.",
      });
    });
  }
  const promoShareBtn = document.getElementById("promoShareMessage");
  if (promoShareBtn) {
    promoShareBtn.addEventListener("click", sharePromoMessage);
  }
  const promoEmailBtn = document.getElementById("promoEmailDraft");
  if (promoEmailBtn) {
    promoEmailBtn.addEventListener("click", openPromoEmailDraft);
  }
  const promoTextBtn = document.getElementById("promoTextDraft");
  if (promoTextBtn) {
    promoTextBtn.addEventListener("click", openPromoTextDraft);
  }

  const promoSaveTemplateBtn = document.getElementById("promoSaveTemplate");
  if (promoSaveTemplateBtn) {
    promoSaveTemplateBtn.addEventListener("click", savePromoTemplate);
  }
  const promoEditMessageBtn = document.getElementById("promoEditMessage");
  if (promoEditMessageBtn) {
    promoEditMessageBtn.addEventListener("click", () => {
      focusPromoMessageEditor();
      setPromoStatus("Draft ready to edit.");
    });
  }

  const promoResetBuilderBtn = document.getElementById("promoResetBuilder");
  if (promoResetBuilderBtn) {
    promoResetBuilderBtn.addEventListener("click", resetPromoBuilder);
  }

  const promoTemplateList = document.getElementById("promoTemplateList");
  if (promoTemplateList) {
    promoTemplateList.addEventListener("click", async (event) => {
      const button = event.target.closest("button[data-promo-template-action][data-id]");
      if (!button) return;
      const template = state.workOrderWorkspace.promoTemplates.find((item) => item.id === button.dataset.id);
      if (!template) return;
      if (button.dataset.promoTemplateAction === "load") {
        state.workOrderWorkspace.promoChannel = template.channel || "email";
        state.workOrderWorkspace.promoBuilder = {
          ...createInitialPromoBuilderState(),
          ...(template.builderSnapshot || {}),
          message: template.message || "",
          templateTitle: template.title || "",
        };
        renderWorkOrderWorkspace();
        setPromoStatus("Template loaded.");
        setTimeout(() => focusPromoMessageEditor(), 80);
        return;
      }
      if (button.dataset.promoTemplateAction === "copy") {
        await copyTextToClipboard(template.message || "", {
          statusEl: document.getElementById("promoStatus"),
          successMessage: "Saved template copied.",
          failureMessage: "Could not copy saved template.",
        });
        return;
      }
      state.workOrderWorkspace.promoTemplates = state.workOrderWorkspace.promoTemplates.filter((item) => item.id !== template.id);
      saveDraft();
      renderPromoTemplates();
      setPromoStatus("Template deleted.");
    });
  }

  const marketingOpenPromoBuilder = document.getElementById("marketingOpenPromoBuilder");
  if (marketingOpenPromoBuilder) {
    marketingOpenPromoBuilder.addEventListener("click", () => {
      switchTop("workorders");
      switchWorkOrderSection("promo");
      renderWorkOrderWorkspace();
    });
  }
  const marketingSocialTemplatesGrid = document.getElementById("marketingSocialTemplatesGrid");
  if (marketingSocialTemplatesGrid) {
    marketingSocialTemplatesGrid.addEventListener("click", async (event) => {
      const voiceButton = event.target.closest("button[data-marketing-social-voice]");
      if (voiceButton) {
        const voice = voiceButton.dataset.marketingSocialVoice || "warm";
        state.workOrderWorkspace.socialPostsVoice = voice;
        renderMarketingTab();
        saveDraft();
        return;
      }
      const backButton = event.target.closest("button[data-marketing-social-back]");
      if (backButton) {
        state.workOrderWorkspace.marketingSocialTemplateIndex = null;
        renderMarketingTab();
        saveDraft();
        return;
      }
      const copyButton = event.target.closest("button[data-marketing-social-copy]");
      if (copyButton) {
        const selectedIndex = Number.isInteger(state.workOrderWorkspace.marketingSocialTemplateIndex)
          ? state.workOrderWorkspace.marketingSocialTemplateIndex
          : null;
        const template = selectedIndex === null ? null : WORK_ORDER_SOCIAL_POST_TEMPLATES[selectedIndex];
        if (!template) return;
        const voice = copyButton.dataset.marketingSocialCopy || "warm";
        const text = template[voice] || template.warm;
        await copyTextToClipboard(typeof personalizeSocialPost === "function" ? personalizeSocialPost(text) : text);
        const feedback = marketingSocialTemplatesGrid.querySelector(`[data-marketing-social-feedback="${voice}"]`);
        if (feedback) {
          feedback.textContent = "Copied!";
          window.setTimeout(() => {
            if (feedback.textContent === "Copied!") feedback.textContent = "";
          }, 2000);
        }
        const statusEl = document.getElementById("marketingSocialStatus");
        if (statusEl) {
          statusEl.textContent = `${template.title} copied.`;
          window.setTimeout(() => {
            if (statusEl.textContent === `${template.title} copied.`) statusEl.textContent = "";
          }, 2000);
        }
        return;
      }
      const card = event.target.closest("button.marketing-social-card[data-marketing-template-index]");
      if (!card) return;
      const index = Number(card.dataset.marketingTemplateIndex);
      if (!WORK_ORDER_SOCIAL_POST_TEMPLATES[index]) return;
      state.workOrderWorkspace.marketingSocialTemplateIndex = index;
      renderMarketingTab();
      saveDraft();
    });
  }

  const followUpSaveBtn = document.getElementById("followUpSave");
  if (followUpSaveBtn) {
    followUpSaveBtn.addEventListener("click", saveFollowUpEntry);
  }
  const followUpResetBtn = document.getElementById("followUpReset");
  if (followUpResetBtn) {
    followUpResetBtn.addEventListener("click", () => {
      resetFollowUpForm();
      setFollowUpStatus("");
    });
  }
  const followUpList = document.getElementById("followUpList");
  if (followUpList) {
    followUpList.addEventListener("click", async (event) => {
      const button = event.target.closest("button[data-followup-action][data-id]");
      if (!button) return;
      const entry = state.workOrderWorkspace.followUps.find((item) => item.id === button.dataset.id);
      if (!entry) return;
      if (button.dataset.followupAction === "load") {
        loadFollowUpIntoBuilder(entry);
        return;
      }
      if (button.dataset.followupAction === "copy") {
        loadFollowUpIntoBuilder(entry);
        await copyTextToClipboard(buildPromoScript(state.workOrderWorkspace.promoChannel), {
          statusEl: document.getElementById("followUpStatus"),
          successMessage: "Follow-up pitch copied.",
          failureMessage: "Could not copy follow-up pitch.",
        });
        return;
      }
      state.workOrderWorkspace.followUps = state.workOrderWorkspace.followUps.filter((item) => item.id !== entry.id);
      saveDraft();
      renderFollowUps();
      setFollowUpStatus("Follow-up venue deleted.");
    });
  }

  [
    "profileBandName",
    "profileHometown",
    "profileIntroLine",
    "profileGenreTags",
    "profileGenreLine",
    "profileArtistReferences",
    "profileVibeLine",
    "profileEventFitLine",
    "profileOriginalsCoversLine",
    "profileLineupSummary",
    "profileProofPrimary",
    "profileProofSecondary",
    "profileOfferOne",
    "profileOfferTwo",
    "profileOfferThree",
    "profileResidencyValue",
    "profileRegularsLine",
    "profileBioStoryLine",
    "profileBioPerformanceSummary",
    "profileBioMemberOneName",
    "profileBioMemberOneRole",
    "profileBioMemberOneDetail",
    "profileBioMemberTwoName",
    "profileBioMemberTwoRole",
    "profileBioMemberTwoDetail",
    "profileBioAdditionalMembers",
    "profileBioShortDraft",
    "profileBioFullDraft",
    "profileSignoffName",
    "profileSignoffBand",
    "profileSignoffEmail",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("input", () => {
      syncBandProfileStateFromForm();
      saveDraft();
    });
  });

  const profileSaveBtn = document.getElementById("profileSave");
  if (profileSaveBtn) {
    profileSaveBtn.addEventListener("click", saveBandProfile);
  }
  const profileApplyBtn = document.getElementById("profileApplyToBuilder");
  if (profileApplyBtn) {
    profileApplyBtn.addEventListener("click", useBandProfileInBuilder);
  }
  const bioGenerateBtn = document.getElementById("bioGenerate");
  if (bioGenerateBtn) {
    bioGenerateBtn.addEventListener("click", generateBioDrafts);
  }
  const bioUseShortBtn = document.getElementById("bioUseShort");
  if (bioUseShortBtn) {
    bioUseShortBtn.addEventListener("click", () => useBioDraft("short"));
  }
  const bioUseFullBtn = document.getElementById("bioUseFull");
  if (bioUseFullBtn) {
    bioUseFullBtn.addEventListener("click", () => useBioDraft("full"));
  }

  [
    "epkBandName",
    "epkShortBio",
    "epkLongBio",
    "epkGenres",
    "epkLineupOptions",
    "epkWebsite",
    "epkInstagram",
    "epkFacebook",
    "epkMusicLink",
    "epkVideoLink",
    "epkPhotoLinks",
    "epkContactEmail",
    "epkContactPhone",
    "epkBookingNotes",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("input", () => {
      syncEpkStateFromForm();
      renderEpkSummary();
      saveDraft();
    });
  });

  const epkSaveBtn = document.getElementById("epkSave");
  if (epkSaveBtn) {
    epkSaveBtn.addEventListener("click", saveEpkProfile);
  }
  const epkCopyShortBioBtn = document.getElementById("epkCopyShortBio");
  if (epkCopyShortBioBtn) {
    epkCopyShortBioBtn.addEventListener("click", async () => {
      syncEpkStateFromForm();
      await copyTextToClipboard(state.workOrderWorkspace.epk.shortBio || "", {
        statusEl: document.getElementById("epkStatus"),
        successMessage: "Short bio copied.",
        failureMessage: "Could not copy short bio.",
      });
    });
  }
  const epkCopyFullBtn = document.getElementById("epkCopyFull");
  if (epkCopyFullBtn) {
    epkCopyFullBtn.addEventListener("click", async () => {
      await copyTextToClipboard(buildEpkSummaryText(), {
        statusEl: document.getElementById("epkStatus"),
        successMessage: "EPK summary copied.",
        failureMessage: "Could not copy EPK summary.",
      });
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
  const saveMusicianShowBtn = document.getElementById("saveMusicianShow");
  if (saveMusicianShowBtn) {
    saveMusicianShowBtn.addEventListener("click", saveManualMusicianShow);
  }
  const refreshAppDataBtn = document.getElementById("refreshAppData");
  if (refreshAppDataBtn) {
    refreshAppDataBtn.addEventListener("click", refreshSignedInAppData);
  }
  const resetLocalAppDataBtn = document.getElementById("resetLocalAppData");
  if (resetLocalAppDataBtn) {
    resetLocalAppDataBtn.addEventListener("click", clearLocalAppDataPreservingLogin);
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

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      persistVisibleFormState();
      return;
    }
    if (state.calendar.session) {
      queueSupabaseSyncRefresh();
    }
  });
  window.addEventListener("pagehide", persistVisibleFormState);
  window.addEventListener("beforeunload", persistVisibleFormState);

  const uploadContract = document.getElementById("uploadContract");
  if (uploadContract) uploadContract.addEventListener("click", handleContractUpload);
  const openPdfBtn = document.getElementById("openPdf");
  if (openPdfBtn) {
    openPdfBtn.addEventListener("click", async () => {
      await generatePdf(state.activeTab, { openAfterGenerate: true });
    });
  }
  const printPdfBtn = document.getElementById("printPdf");
  if (printPdfBtn) printPdfBtn.addEventListener("click", printLastPdf);

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
  const copyMessageWithLink = document.getElementById("copyMessageWithLink");
  if (copyMessageWithLink) {
    copyMessageWithLink.addEventListener("click", async () => {
      const body = document.getElementById("messageBody");
      const text = body?.textContent?.trim() || "";
      if (!text) return;
      const originalText = copyMessageWithLink.textContent;
      const copied = await copyTextToClipboard(text);
      if (!copied) return;
      copyMessageWithLink.textContent = "Copied!";
      window.setTimeout(() => {
        copyMessageWithLink.textContent = originalText || "Copy Message + Link";
      }, 2000);
    });
  }
  const preferredTop = state.calendar.session
    ? state.workspace.top || "home"
    : "login";
  switchTop(preferredTop);
  setMusicianEditorState("");
  renderWorkOrders();
  updateCreatedContractList();
  renderContractsHub();
}

async function generatePdf(type, options = {}) {
  const statusEl = document.getElementById("pdfStatus");
  const openButton = document.getElementById("openPdf");
  const printButton = document.getElementById("printPdf");
  const shareButton = document.getElementById("sharePdf");
  const { openAfterGenerate = false } = options;
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

  if (type === "agreement") {
    state.workspace.contractShareId = "";
    prepareAgreementForOutput();
    refreshAgreementCreatedDate();
    updateAgreementPreview();
    saveDraft();
  }

  document.body.classList.add("pdf-export");
  await new Promise((resolve) => requestAnimationFrame(resolve));

  let canvas = null;
  try {
    const renderScale = type === "agreement" ? 0.95 : 1.05;
    canvas = await window.html2canvas(target, {
      scale: renderScale,
      backgroundColor: "#ffffff",
      useCORS: true,
    });
  } catch (error) {
    statusEl.textContent = "PDF generation failed. Try refreshing the page.";
    document.body.classList.remove("pdf-export");
    return;
  }
  document.body.classList.remove("pdf-export");

  const imgData = canvas.toDataURL("image/jpeg", 0.58);
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

  pdf.addImage(imgData, "JPEG", xOffset, yOffset, renderWidth, renderHeight, undefined, "FAST");

  const fileNameMap = {
    agreement: `RustAndRuin-Agreement-${state.agreement.clientName || "Client"}.pdf`,
    invoice: `RustAndRuin-Invoice-${state.invoice.invoiceNumber}.pdf`,
    receipt: `RustAndRuin-Receipt-${state.receipt.receiptNumber}.pdf`,
  };

  const fileName = fileNameMap[type];
  setLastGeneratedPdf(pdf.output("blob"), fileName);
  if (openButton) openButton.disabled = !lastPdfUrl;
  if (printButton) printButton.disabled = !lastPdfUrl;
  if (shareButton) {
    shareButton.disabled = !lastPdfBlob;
  }
  const copiedMessage = await copyCurrentMessageToClipboard({
    statusEl,
    successMessage: "PDF ready. Message copied to clipboard. Use Share PDF or Print PDF above.",
    failureMessage: "PDF ready, but the message could not be copied. Use Share PDF or Print PDF above.",
  });
  if (!copiedMessage && statusEl) {
    statusEl.textContent = "PDF ready, but the message could not be copied. Use Share PDF or Print PDF above.";
  }
  const actionsBar = document.getElementById("pdfActionsBar");
  if (actionsBar && typeof actionsBar.scrollIntoView === "function") {
    actionsBar.scrollIntoView({ behavior: "smooth", block: "nearest" });
  } else if (typeof window.scrollTo === "function") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  if (openAfterGenerate) {
    openLastPdfPreview();
  }
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
let lastPdfUrl = "";

function setLastGeneratedPdf(blob, fileName) {
  if (lastPdfUrl) {
    URL.revokeObjectURL(lastPdfUrl);
    lastPdfUrl = "";
  }
  lastPdfBlob = blob || null;
  lastPdfName = fileName || "RustAndRuin-Agreement.pdf";
  if (lastPdfBlob) {
    lastPdfUrl = URL.createObjectURL(lastPdfBlob);
  }
}

function openLastPdfPreview() {
  const statusEl = document.getElementById("pdfStatus");
  if (!lastPdfUrl) {
    if (statusEl) statusEl.textContent = "Generate a PDF first.";
    return false;
  }
  const previewWindow = window.open(lastPdfUrl, "_blank", "noopener,noreferrer");
  if (!previewWindow && statusEl) {
    statusEl.textContent = "Popup blocked. Allow popups to open the PDF preview.";
    return false;
  }
  if (statusEl) {
    statusEl.textContent = "PDF preview opened in a new tab.";
  }
  return true;
}

function printLastPdf() {
  const statusEl = document.getElementById("pdfStatus");
  if (!lastPdfUrl) {
    if (statusEl) statusEl.textContent = "Generate a PDF first.";
    return;
  }
  const iframe = document.createElement("iframe");
  iframe.style.position = "fixed";
  iframe.style.right = "0";
  iframe.style.bottom = "0";
  iframe.style.width = "0";
  iframe.style.height = "0";
  iframe.style.border = "0";
  iframe.src = lastPdfUrl;
  iframe.onload = () => {
    try {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
      if (statusEl) statusEl.textContent = "Print dialog opened.";
    } catch (error) {
      openLastPdfPreview();
    } finally {
      setTimeout(() => {
        iframe.remove();
      }, 1000);
    }
  };
  document.body.appendChild(iframe);
}

async function shareLastPdf() {
  const statusEl = document.getElementById("pdfStatus");
  if (!lastPdfBlob) {
    statusEl.textContent = "Generate a PDF first.";
    return;
  }

  const file = new File([lastPdfBlob], lastPdfName, { type: "application/pdf" });
  const shareMessage = getCurrentShareMessage();
  if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        files: [file],
        title: shareMessage.subject,
        text: shareMessage.payload,
      });
      statusEl.textContent = "Shared. Message copied as backup.";
    } catch (error) {
      statusEl.textContent = "Share canceled.";
    }
  } else {
    const opened = openLastPdfPreview();
    if (!opened && statusEl) {
      statusEl.textContent = "Sharing not supported on this device. Use Open PDF or Print instead.";
    }
  }
}

function getCurrentShareMessage() {
  if (state.activeTab === "agreement") {
    prepareAgreementForOutput();
  }
  const message = buildMessage(state.activeTab);
  return {
    subject: message.subject,
    body: message.body,
    payload: `${message.subject}\n\n${message.body}`,
  };
}

async function copyCurrentMessageToClipboard(options = {}) {
  const {
    statusEl = document.getElementById("pdfStatus"),
    triggerButton = null,
    successMessage = "Message copied to clipboard.",
    failureMessage = "Could not copy message.",
  } = options;

  const { payload } = getCurrentShareMessage();

  const setCopiedState = () => {
    if (statusEl) statusEl.textContent = successMessage;
    if (triggerButton) {
      const originalText = triggerButton.textContent;
      triggerButton.textContent = "Copied";
      setTimeout(() => {
        triggerButton.textContent = originalText;
      }, 1500);
    }
  };

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(payload);
      setCopiedState();
      return true;
    }
    throw new Error("Clipboard API unavailable");
  } catch (error) {
    try {
      const fallback = document.createElement("textarea");
      fallback.value = payload;
      fallback.style.position = "fixed";
      fallback.style.top = "0";
      fallback.style.left = "-9999px";
      fallback.style.width = "1px";
      fallback.style.height = "1px";
      fallback.style.fontSize = "16px";
      fallback.style.opacity = "0.01";
      fallback.style.pointerEvents = "none";
      fallback.style.webkitUserSelect = "text";
      document.body.appendChild(fallback);
      fallback.focus();
      fallback.removeAttribute("readonly");
      fallback.select();
      fallback.setSelectionRange(0, fallback.value.length);
      const copied = document.execCommand("copy");
      document.body.removeChild(fallback);
      if (copied) {
        setCopiedState();
        return true;
      }
    } catch (fallbackError) {
      // fall through to shared failure handling below
    }
  }

  if (statusEl) statusEl.textContent = failureMessage;
  return false;
}

async function copyMessage(statusTargetId = "pdfStatus", triggerButton = null) {
  const statusEl = document.getElementById(statusTargetId) || document.getElementById("pdfStatus");
  await copyCurrentMessageToClipboard({
    statusEl,
    triggerButton,
    successMessage: "Message copied to clipboard.",
    failureMessage: "Could not copy message.",
  });
}

async function init() {
  loadDraft();
  repairLineupRates();
  if (!state.bandDNA.migratedFromLegacy) {
    migrateLegacyToBandDNA();
    saveDraft();
  }
  if (state.bandDNA.migratedFromLegacy &&
      Array.isArray(state.bandDNA.lineups)) {
    const musicianRate = parseFloat(
      state.bandDNA.musicianHourlyRate || 50);
    let repaired = false;
    state.bandDNA.lineups = state.bandDNA.lineups.map((lineup) => {
      if (!lineup.rate || parseFloat(lineup.rate) === 0) {
        const count = lineup.count ||
          getLineupMusicianCount(lineup.name);
        repaired = true;
        return { ...lineup, rate: String(musicianRate * count) };
      }
      return lineup;
    });
    if (repaired) saveDraft();
  }
  if (!state.bandDNA.onboardingComplete) {
    if (switchTopView) switchTopView("onboarding");
  }
  hydrateBandProfileFromLegacyData();
  hydrateBookingProfilesFromLegacyData();
  applyAgreementDefaultsFromProfiles(false);
  applyBandProfileToPromoBuilder(false);
  loadCalendarSettings();
  ensureToddSeededShowFiles();
  ensureDanSeededShowFiles();
  ensureJennySeededShowFiles();
  ensureGarySeededShowFiles();
  ensureSeededMusicianBlackouts();
  refreshAgreementCreatedDate();
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
  setupListeners();
  if (!state.bandDNA.onboardingComplete) {
    if (switchTopView) switchTopView("onboarding");
  }
  initSupabaseClient();
  updateCalendarAuthVisibility();

  try {
    await restoreSupabaseSessionFromUrl();
    await refreshAuthState();
  } catch (error) {
    console.error("Supabase auth initialization failed:", error);
    updateSupabaseStatus("Sign-in is available, but the saved session could not be restored.", true);
  }

  updateHolidayFromDate();
  updatePerformanceHoursFromTimes();
  updateAgreementPreview();
  renderAgreementStepUI();
  updateInvoicePreview();
  updateReceiptPreview();
  updateMessagePreview();
  renderCalendar();
  renderWorkOrderWorkspace();
  fetchEventsForMonth();
  fetchContracts();
  fetchMusicianAssignments();
  fetchMusicianBlackouts();
  fetchMusicians();
  fetchWorkOrders();
  fetchInvoices();
  fetchReceipts();
  renderMusicianList();
  renderMusicianAssignments();
  renderAssignmentSummaryLists();
  renderBlackoutList();
  updateOpsProgress();
}

init().catch((error) => {
  console.error("App initialization failed:", error);
  updateSupabaseStatus("The app could not finish loading.", true);
});
