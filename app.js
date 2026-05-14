const stems = [
  { name: "甲", element: "木", yinYang: "阳", image: "参天之木" },
  { name: "乙", element: "木", yinYang: "阴", image: "花草藤蔓" },
  { name: "丙", element: "火", yinYang: "阳", image: "太阳之火" },
  { name: "丁", element: "火", yinYang: "阴", image: "灯烛之火" },
  { name: "戊", element: "土", yinYang: "阳", image: "高山厚土" },
  { name: "己", element: "土", yinYang: "阴", image: "田园湿土" },
  { name: "庚", element: "金", yinYang: "阳", image: "刀剑之金" },
  { name: "辛", element: "金", yinYang: "阴", image: "珠玉之金" },
  { name: "壬", element: "水", yinYang: "阳", image: "江河之水" },
  { name: "癸", element: "水", yinYang: "阴", image: "雨露之水" }
];

const branches = [
  { name: "子", element: "水", yinYang: "阳", zodiac: "鼠", hidden: ["癸"] },
  { name: "丑", element: "土", yinYang: "阴", zodiac: "牛", hidden: ["己", "癸", "辛"] },
  { name: "寅", element: "木", yinYang: "阳", zodiac: "虎", hidden: ["甲", "丙", "戊"] },
  { name: "卯", element: "木", yinYang: "阴", zodiac: "兔", hidden: ["乙"] },
  { name: "辰", element: "土", yinYang: "阳", zodiac: "龙", hidden: ["戊", "乙", "癸"] },
  { name: "巳", element: "火", yinYang: "阴", zodiac: "蛇", hidden: ["丙", "戊", "庚"] },
  { name: "午", element: "火", yinYang: "阳", zodiac: "马", hidden: ["丁", "己"] },
  { name: "未", element: "土", yinYang: "阴", zodiac: "羊", hidden: ["己", "丁", "乙"] },
  { name: "申", element: "金", yinYang: "阳", zodiac: "猴", hidden: ["庚", "壬", "戊"] },
  { name: "酉", element: "金", yinYang: "阴", zodiac: "鸡", hidden: ["辛"] },
  { name: "戌", element: "土", yinYang: "阳", zodiac: "狗", hidden: ["戊", "辛", "丁"] },
  { name: "亥", element: "水", yinYang: "阴", zodiac: "猪", hidden: ["壬", "甲"] }
];

const elementOrder = ["木", "火", "土", "金", "水"];
const elementColors = {
  "木": "#236758",
  "火": "#a7372d",
  "土": "#c79a49",
  "金": "#76766f",
  "水": "#244f6a"
};

const elementProfiles = {
  "木": {
    trait: "木主生发，重规划、成长与连接，适合在长期积累中打开局面。",
    career: "事业上宜做教育策划、内容增长、产品规划、咨询协调等需要生发力的事务。",
    relation: "关系中重理解和空间，被信任时更愿意主动承担。",
    balance: "木气过旺时想法过密，宜用边界和执行清单收束。"
  },
  "火": {
    trait: "火主光明，重表达、热情与传播，行动力来自被点燃和被看见。",
    career: "事业上宜做传播营销、设计表达、培训演讲、活动运营和需要快速响应的工作。",
    relation: "关系中需要热度和回应，真诚表达比反复试探更顺。",
    balance: "火气过旺时容易急躁，宜留冷静期，先判断再推进。"
  },
  "土": {
    trait: "土主承载，重稳定、秩序与兑现，擅长把复杂事情落地。",
    career: "事业上宜做项目管理、财务风控、组织运营、供应链和长期建设型工作。",
    relation: "关系中看重可靠与责任，越稳定越能释放柔软面。",
    balance: "土气过旺时容易顾虑多，宜用小步试错推动变化。"
  },
  "金": {
    trait: "金主肃杀，重规则、标准和决断，适合处理需要边界感的问题。",
    career: "事业上宜做法务合规、数据分析、工程质量、金融审计和流程治理。",
    relation: "关系中看重尊重与清晰承诺，直接沟通比含混暗示有效。",
    balance: "金气过旺时容易苛刻，宜保留弹性，给人和事一点余地。"
  },
  "水": {
    trait: "水主流动，重学习、洞察和适应，擅长在信息变化中找路径。",
    career: "事业上宜做研究分析、技术学习、跨域沟通、信息交易和策略型工作。",
    relation: "关系中需要安全感和精神交流，稳定节奏会提升信任。",
    balance: "水气过旺时容易犹豫分散，宜设截止点，把判断变成行动。"
  }
};

const generates = { "木": "火", "火": "土", "土": "金", "金": "水", "水": "木" };
const controls = { "木": "土", "火": "金", "土": "水", "金": "木", "水": "火" };

const cityPresets = [
  { name: "北京", longitude: 116.4074, timezone: 8 },
  { name: "上海", longitude: 121.4737, timezone: 8 },
  { name: "广州", longitude: 113.2644, timezone: 8 },
  { name: "深圳", longitude: 114.0579, timezone: 8 },
  { name: "成都", longitude: 104.0665, timezone: 8 },
  { name: "西安", longitude: 108.9398, timezone: 8 },
  { name: "杭州", longitude: 120.1551, timezone: 8 },
  { name: "武汉", longitude: 114.3054, timezone: 8 },
  { name: "重庆", longitude: 106.5516, timezone: 8 },
  { name: "乌鲁木齐", longitude: 87.6168, timezone: 8 },
  { name: "香港", longitude: 114.1694, timezone: 8 },
  { name: "台北", longitude: 121.5654, timezone: 8 },
  { name: "东京", longitude: 139.6917, timezone: 9 },
  { name: "伦敦", longitude: -0.1276, timezone: 0 },
  { name: "纽约", longitude: -74.006, timezone: -5 },
  { name: "洛杉矶", longitude: -118.2437, timezone: -8 }
];

const periodPresets = [
  { value: "unknown", label: "不确定，只按年月日先看", hour: 12, minute: 0, confidence: "low", text: "未提供时辰，年柱、月柱、日柱较稳定，时柱仅作参考。" },
  { value: "zi", label: "子时 23:00-00:59", hour: 0, minute: 0, confidence: "medium", text: "选择了传统时辰区间，按区间中点估算时柱。" },
  { value: "chou", label: "丑时 01:00-02:59", hour: 2, minute: 0, confidence: "medium", text: "选择了传统时辰区间，按区间中点估算时柱。" },
  { value: "yin", label: "寅时 03:00-04:59", hour: 4, minute: 0, confidence: "medium", text: "选择了传统时辰区间，按区间中点估算时柱。" },
  { value: "mao", label: "卯时 05:00-06:59", hour: 6, minute: 0, confidence: "medium", text: "选择了传统时辰区间，按区间中点估算时柱。" },
  { value: "chen", label: "辰时 07:00-08:59", hour: 8, minute: 0, confidence: "medium", text: "选择了传统时辰区间，按区间中点估算时柱。" },
  { value: "si", label: "巳时 09:00-10:59", hour: 10, minute: 0, confidence: "medium", text: "选择了传统时辰区间，按区间中点估算时柱。" },
  { value: "wu", label: "午时 11:00-12:59", hour: 12, minute: 0, confidence: "medium", text: "选择了传统时辰区间，按区间中点估算时柱。" },
  { value: "wei", label: "未时 13:00-14:59", hour: 14, minute: 0, confidence: "medium", text: "选择了传统时辰区间，按区间中点估算时柱。" },
  { value: "shen", label: "申时 15:00-16:59", hour: 16, minute: 0, confidence: "medium", text: "选择了传统时辰区间，按区间中点估算时柱。" },
  { value: "you", label: "酉时 17:00-18:59", hour: 18, minute: 0, confidence: "medium", text: "选择了传统时辰区间，按区间中点估算时柱。" },
  { value: "xu", label: "戌时 19:00-20:59", hour: 20, minute: 0, confidence: "medium", text: "选择了传统时辰区间，按区间中点估算时柱。" },
  { value: "hai", label: "亥时 21:00-22:59", hour: 22, minute: 0, confidence: "medium", text: "选择了传统时辰区间，按区间中点估算时柱。" },
  { value: "morning", label: "只记得上午", hour: 9, minute: 0, confidence: "low", text: "只提供宽泛时段，时柱可能有变化，核心解读以前三柱为主。" },
  { value: "afternoon", label: "只记得下午", hour: 15, minute: 0, confidence: "low", text: "只提供宽泛时段，时柱可能有变化，核心解读以前三柱为主。" },
  { value: "evening", label: "只记得晚上", hour: 20, minute: 0, confidence: "low", text: "只提供宽泛时段，时柱可能有变化，核心解读以前三柱为主。" }
];

const concernProfiles = {
  overview: {
    label: "整体命盘",
    theme: "overview",
    line: "先从整体命盘看起，再慢慢进入财富、关系和改运。"
  },
  future: {
    label: "未来运势",
    theme: "future",
    line: "先看未来三个月和年度主线，把趋势落成可行动的节奏。"
  },
  wealth: {
    label: "财富事业",
    theme: "wealth",
    line: "先看适合的来财方式、事业发力点和守财提醒。"
  },
  relationship: {
    label: "姻缘关系",
    theme: "relationship",
    line: "先看吸引力来源、相处节奏和关系里的盲区。"
  },
  remedy: {
    label: "改运行动",
    theme: "remedy",
    line: "先看可以改变日常状态的补运方向，而不是等结果。"
  },
  oracle: {
    label: "签文建议",
    theme: "oracle",
    line: "先收一段签文，把前面的判断压成今天能记住的一句话。"
  }
};

const solarTerms = [
  { name: "小寒", degree: 285, month: 1, day: 6, jieBranch: 1 },
  { name: "大寒", degree: 300, month: 1, day: 20 },
  { name: "立春", degree: 315, month: 2, day: 4, jieBranch: 2 },
  { name: "雨水", degree: 330, month: 2, day: 19 },
  { name: "惊蛰", degree: 345, month: 3, day: 6, jieBranch: 3 },
  { name: "春分", degree: 0, month: 3, day: 21 },
  { name: "清明", degree: 15, month: 4, day: 5, jieBranch: 4 },
  { name: "谷雨", degree: 30, month: 4, day: 20 },
  { name: "立夏", degree: 45, month: 5, day: 6, jieBranch: 5 },
  { name: "小满", degree: 60, month: 5, day: 21 },
  { name: "芒种", degree: 75, month: 6, day: 6, jieBranch: 6 },
  { name: "夏至", degree: 90, month: 6, day: 21 },
  { name: "小暑", degree: 105, month: 7, day: 7, jieBranch: 7 },
  { name: "大暑", degree: 120, month: 7, day: 23 },
  { name: "立秋", degree: 135, month: 8, day: 8, jieBranch: 8 },
  { name: "处暑", degree: 150, month: 8, day: 23 },
  { name: "白露", degree: 165, month: 9, day: 8, jieBranch: 9 },
  { name: "秋分", degree: 180, month: 9, day: 23 },
  { name: "寒露", degree: 195, month: 10, day: 8, jieBranch: 10 },
  { name: "霜降", degree: 210, month: 10, day: 24 },
  { name: "立冬", degree: 225, month: 11, day: 8, jieBranch: 11 },
  { name: "小雪", degree: 240, month: 11, day: 22 },
  { name: "大雪", degree: 255, month: 12, day: 7, jieBranch: 0 },
  { name: "冬至", degree: 270, month: 12, day: 22 }
];

const termCache = new Map();
const msPerDay = 86400000;
const hourMs = 3600000;

const controlsMap = {
  year: document.querySelector("#birthYear"),
  month: document.querySelector("#birthMonth"),
  day: document.querySelector("#birthDay"),
  hour: document.querySelector("#birthHour"),
  minute: document.querySelector("#birthMinute"),
  period: document.querySelector("#birthPeriod"),
  city: document.querySelector("#cityPreset"),
  longitude: document.querySelector("#longitude"),
  timezone: document.querySelector("#timeZone"),
  name: document.querySelector("#displayName"),
  concern: document.querySelector("#mainConcern"),
  useTrueSolarTime: document.querySelector("#useTrueSolarTime"),
  showTermDetails: document.querySelector("#showTermDetails"),
  yearBoundary: document.querySelector("#yearBoundary"),
  dayBoundary: document.querySelector("#dayBoundary"),
  exactTime: document.querySelector("#useExactTime"),
  advancedBox: document.querySelector("#advancedBox"),
  modeToggle: document.querySelector("#modeToggle")
};

const form = document.querySelector("#birthForm");
const errorBox = document.querySelector("#formError");
const resultPanel = document.querySelector("#resultPanel");
const sampleButton = document.querySelector("#sampleButton");
const prevCardButton = document.querySelector("#prevCard");
const primaryButton = form.querySelector(".btn.primary");
const castSteps = [...document.querySelectorAll(".cast-step")];
const cardFaces = [...document.querySelectorAll(".card-face")];
const questionCards = [...document.querySelectorAll(".question-card")];
const cardProgressText = document.querySelector("#cardProgressText");
const cardProgressBar = document.querySelector("#cardProgressBar");
const modeEyebrow = document.querySelector("#modeEyebrow");
const questionTitle = document.querySelector("#questionTitle");
const idleCardFaces = ["生", "辰", "命"];
const basicCardFields = ["year", "month", "day", "period", "name", "concern"];
const proCardFields = [
  "year",
  "month",
  "day",
  "period",
  "name",
  "concern",
  "hour",
  "minute",
  "city",
  "longitude",
  "timezone",
  "useTrueSolarTime",
  "yearBoundary",
  "dayBoundary"
];
const wizardState = {
  mode: "basic",
  index: 0,
  isFlipping: false
};
let readingTimers = [];
let resultRevealTimers = [];

initControls();
drawStarField();
setStage("input");
syncCardFlow();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  goNextCard();
});

sampleButton.addEventListener("click", () => {
  setMode("basic");
  controlsMap.year.value = "1996";
  controlsMap.month.value = "8";
  controlsMap.day.value = "18";
  controlsMap.period.value = "si";
  controlsMap.hour.value = "9";
  controlsMap.minute.value = "15";
  controlsMap.city.value = "成都";
  applyCityPreset("成都");
  controlsMap.name.value = "来客";
  controlsMap.concern.value = "future";
  controlsMap.exactTime.checked = false;
  controlsMap.useTrueSolarTime.value = "false";
  controlsMap.showTermDetails.checked = false;
  controlsMap.yearBoundary.value = "lichun";
  controlsMap.dayBoundary.value = "zi";
  syncCardFlow();
  const data = readForm();
  if (data) beginReading(data);
});

controlsMap.city.addEventListener("change", () => applyCityPreset(controlsMap.city.value));
prevCardButton.addEventListener("click", goPrevCard);
controlsMap.modeToggle.addEventListener("click", () => setMode(controlsMap.advancedBox.open ? "basic" : "pro"));
questionCards.forEach((card) => {
  card.addEventListener("pointermove", tiltActiveCard);
  card.addEventListener("pointerleave", resetCardTilt);
});
window.addEventListener("resize", drawStarField);

function initControls() {
  for (let month = 1; month <= 12; month += 1) {
    controlsMap.month.append(new Option(`${month}月`, String(month)));
  }

  periodPresets.forEach((period) => {
    controlsMap.period.append(new Option(period.label, period.value));
  });

  for (let hour = 0; hour <= 23; hour += 1) {
    const branch = branches[getHourBranchIndex(hour)].name;
    controlsMap.hour.append(new Option(`${String(hour).padStart(2, "0")}:00（${branch}时）`, String(hour)));
  }

  cityPresets.forEach((city) => controlsMap.city.append(new Option(city.name, city.name)));
  controlsMap.city.value = "北京";
  applyCityPreset("北京");
  setMode("basic");
}

function setMode(mode) {
  const isPro = mode === "pro";
  setStage("input");
  wizardState.mode = isPro ? "pro" : "basic";
  wizardState.index = 0;
  controlsMap.advancedBox.open = isPro;
  controlsMap.exactTime.checked = isPro;
  controlsMap.showTermDetails.checked = isPro;
  controlsMap.useTrueSolarTime.value = isPro ? "true" : "false";
  controlsMap.modeToggle.textContent = isPro ? "回到普通版" : "切到专业版";
  controlsMap.modeToggle.setAttribute("aria-pressed", String(isPro));
  modeEyebrow.textContent = isPro ? "专业校准模式" : "普通用户模式";
  questionTitle.textContent = isPro ? "逐张校准命盘" : "先填你记得的";
  syncCardFlow();
}

function beginReading(data) {
  const chart = buildChart(data);
  clearReadingTimers();
  setStage("casting");
  setReadingState(true, "命脉图成形中...");
  setCardFaces(idleCardFaces);
  resetCastSteps();
  setupCalculationFlow(data, chart);
  document.body.classList.remove("is-reading", "has-reading", "is-zoomed");
  document.body.classList.add("is-shuffling");
  resultPanel.classList.remove("reveal");
  document.querySelector("#plateTitle").textContent = "命数正在入盘";
  document.querySelector("#plateSubtitle").textContent = "出生信息会化成数据签飞入命盘，依次校时、排柱、归五行，再生成结果。";

  queueReadingStep(() => {
    setCastStep(1);
    updateCalculationFlow(1, "出生数据正在入盘", 22);
  }, 420);
  queueReadingStep(() => {
    setCastStep(2);
    updateCalculationFlow(2, "校正时辰与节令边界", 42);
    document.body.classList.add("is-zoomed");
  }, 980);
  queueReadingStep(() => {
    updateCalculationFlow(3, "四柱正在落位", 64);
    revealCastingPillars(chart);
    setCardFaces(chart.pillars.slice(0, 3).map((pillar) => pillar.name));
    document.body.classList.remove("is-shuffling");
    document.body.classList.add("is-reading");
    setCastStep(3);
  }, 1680);
  queueReadingStep(() => {
    updateCalculationFlow(4, "五行权重正在归集", 82);
    revealCastingElements(chart);
    setCastStep(4);
  }, 2500);
  queueReadingStep(() => {
    updateCalculationFlow(5, "结果签文正在生成", 96);
    document.querySelector("#centerStem").textContent = chart.dayMaster.name;
    document.querySelector(".plate-center")?.classList.add("is-computing");
  }, 3220);

  queueReadingStep(() => {
    renderChart(data, chart);
    document.body.classList.remove("is-reading");
    document.body.classList.add("has-reading");
    updateCalculationFlow(5, "命盘已成，停留观盘", 100);
    document.querySelector("#plateSubtitle").textContent = "四柱与五行已经入盘，先停留片刻，再展开结果签。";
    setCastStep(4);
  }, 4180);

  queueReadingStep(() => {
    resultPanel.classList.add("reveal");
    setStage("result");
    setReadingState(false);
  }, 7600);
}

function setStage(stage) {
  document.body.classList.toggle("stage-input", stage === "input");
  document.body.classList.toggle("stage-casting", stage === "casting");
  document.body.classList.toggle("stage-result", stage === "result");
}

function queueReadingStep(callback, delay) {
  readingTimers.push(window.setTimeout(callback, delay));
}

function clearReadingTimers() {
  readingTimers.forEach((timer) => window.clearTimeout(timer));
  readingTimers = [];
}

function clearResultRevealTimers() {
  resultRevealTimers.forEach((timer) => window.clearTimeout(timer));
  resultRevealTimers = [];
}

function resetCastSteps() {
  castSteps.forEach((step, index) => {
    step.classList.toggle("active", index === 0);
    step.classList.remove("done");
  });
}

function setCastStep(activeIndex) {
  castSteps.forEach((step, index) => {
    step.classList.toggle("active", index === activeIndex);
    step.classList.toggle("done", index < activeIndex);
  });
}

function setReadingState(isReading, loadingText = "起盘中...") {
  primaryButton.disabled = isReading;
  sampleButton.disabled = isReading;
  prevCardButton.disabled = isReading || wizardState.index === 0;
  if (isReading) {
    primaryButton.textContent = loadingText;
  } else {
    syncCardFlow();
  }
}

function setupCalculationFlow(data, chart) {
  const astrolabe = document.querySelector(".astrolabe");
  const quickFacts = document.querySelector("#quickFacts");
  const concern = getConcernProfile(data.concern);
  astrolabe.querySelector(".data-flight-layer")?.remove();
  astrolabe.querySelectorAll(".is-computing").forEach((item) => item.classList.remove("is-computing"));
  document.querySelector("#centerStem").textContent = "--";
  document.querySelector("#yearRing").textContent = "--";
  document.querySelector("#monthRing").textContent = "--";
  document.querySelector("#dayRing").textContent = "--";
  document.querySelector("#hourRing").textContent = "--";

  const tokens = [
    { label: "年", value: `${data.year}`, x: "-118px", y: "-112px" },
    { label: "月", value: `${data.month}月`, x: "124px", y: "-104px" },
    { label: "日", value: `${data.day}日`, x: "130px", y: "104px" },
    { label: "时", value: data.hasExactTime ? `${pad2(data.hour)}:${pad2(data.minute)}` : data.period.label, x: "-126px", y: "112px" },
    { label: "名", value: data.displayName || "来客", x: "0px", y: "-150px" },
    { label: "问", value: concern.label, x: "0px", y: "150px" }
  ];
  const flight = document.createElement("div");
  flight.className = "data-flight-layer";
  flight.setAttribute("aria-hidden", "true");
  flight.innerHTML = tokens.map((token, index) => `
    <span class="data-token" style="--start-x:${token.x};--start-y:${token.y};--flight-delay:${index * 130}ms">
      <b>${token.label}</b><em>${token.value}</em>
    </span>
  `).join("");
  astrolabe.append(flight);

  quickFacts.innerHTML = `
    <div class="calc-live-panel">
      <div class="calc-live-head">
        <span>实时推演</span>
        <strong id="calcFlowStatus">等待数据入盘</strong>
      </div>
      <div class="calc-progress" aria-hidden="true"><span id="calcProgressBar" style="width:8%"></span></div>
      <div class="calc-log">
        <p data-flow-step="1"><b>01</b><span>出生年月日时化为命数签</span></p>
        <p data-flow-step="2"><b>02</b><span>校正时辰、节令与换日口径</span></p>
        <p data-flow-step="3"><b>03</b><span>年柱、月柱、日柱、时柱依次落位</span></p>
        <p data-flow-step="4"><b>04</b><span>五行权重归集，判断日主强弱</span></p>
        <p data-flow-step="5"><b>05</b><span>生成财富、姻缘、运势与改运签</span></p>
      </div>
      <div class="element-scan" aria-label="五行权重预览">
        ${elementOrder.map((element) => `
          <span style="--scan-width:${chart.normalized[element]}%;--scan-color:${elementColors[element]}">
            <b>${element}</b><i></i><em>${chart.normalized[element]}%</em>
          </span>
        `).join("")}
      </div>
    </div>
  `;
}

function updateCalculationFlow(step, status, progress) {
  const statusEl = document.querySelector("#calcFlowStatus");
  const progressEl = document.querySelector("#calcProgressBar");
  if (statusEl) statusEl.textContent = status;
  if (progressEl) progressEl.style.width = `${progress}%`;
  document.querySelectorAll("[data-flow-step]").forEach((item) => {
    const itemStep = Number(item.dataset.flowStep);
    item.classList.toggle("done", itemStep < step);
    item.classList.toggle("active", itemStep === step);
  });
  document.querySelector(".calc-live-panel")?.classList.toggle("show-elements", step >= 4);
}

function revealCastingPillars(chart) {
  [
    ["#yearRing", chart.pillars[0].name],
    ["#monthRing", chart.pillars[1].name],
    ["#dayRing", chart.pillars[2].name],
    ["#hourRing", chart.pillars[3].name]
  ].forEach(([selector, value], index) => {
    const ring = document.querySelector(selector);
    ring.textContent = value;
    ring.closest(".ring-item")?.style.setProperty("--compute-delay", `${index * 130}ms`);
    ring.closest(".ring-item")?.classList.add("is-computing");
  });
}

function revealCastingElements(chart) {
  document.querySelector("#centerStem").textContent = chart.dayMaster.name;
  document.querySelector(".plate-center")?.classList.add("is-computing");
  document.querySelectorAll(".element-scan span").forEach((item, index) => {
    item.style.setProperty("--scan-delay", `${index * 90}ms`);
    item.classList.add("is-active");
  });
}

function setCardFaces(values) {
  cardFaces.forEach((face, index) => {
    face.textContent = values[index] || idleCardFaces[index];
  });
}

function getActiveCardFields() {
  return wizardState.mode === "pro" ? proCardFields : basicCardFields;
}

function syncCardFlow() {
  const fields = getActiveCardFields();
  wizardState.index = Math.min(wizardState.index, fields.length - 1);
  questionCards.forEach((card) => {
    const cardIndex = fields.indexOf(card.dataset.field);
    const isInMode = cardIndex !== -1;
    card.hidden = !isInMode;
    card.classList.toggle("is-active", cardIndex === wizardState.index);
    card.classList.toggle("is-before", isInMode && cardIndex < wizardState.index);
    card.classList.toggle("is-after", isInMode && cardIndex > wizardState.index);
  });
  const current = wizardState.index + 1;
  cardProgressText.textContent = `第 ${current} 张 / 共 ${fields.length} 张`;
  cardProgressBar.style.width = `${Math.round((current / fields.length) * 100)}%`;
  prevCardButton.disabled = wizardState.index === 0 || primaryButton.disabled;
  primaryButton.textContent = wizardState.index === fields.length - 1 ? "进入命盘图" : "下一张";
}

function goNextCard() {
  if (wizardState.isFlipping || primaryButton.disabled) return;
  const fields = getActiveCardFields();
  const currentField = fields[wizardState.index];
  const currentCard = getActiveCard();
  if (!validateCardField(currentField)) return;
  errorBox.textContent = "";

  if (wizardState.index === fields.length - 1) {
    const data = readForm();
    if (data) {
      wizardState.isFlipping = true;
      currentCard?.classList.add("is-flipping-out");
      window.setTimeout(() => {
        currentCard?.classList.remove("is-flipping-out");
        wizardState.isFlipping = false;
        beginReading(data);
      }, 560);
    }
    return;
  }

  wizardState.isFlipping = true;
  currentCard?.classList.add("is-flipping-out");
  window.setTimeout(() => {
    currentCard?.classList.remove("is-flipping-out");
    wizardState.index += 1;
    syncCardFlow();
    getActiveCard()?.classList.add("is-dealing");
    window.setTimeout(() => getActiveCard()?.classList.remove("is-dealing"), 520);
    focusActiveControl();
    wizardState.isFlipping = false;
  }, 560);
}

function goPrevCard() {
  if (wizardState.isFlipping || primaryButton.disabled || wizardState.index === 0) return;
  wizardState.index -= 1;
  syncCardFlow();
  focusActiveControl();
}

function getActiveCard() {
  const field = getActiveCardFields()[wizardState.index];
  return questionCards.find((card) => card.dataset.field === field);
}

function focusActiveControl() {
  const control = getCardControl(getActiveCardFields()[wizardState.index]);
  window.setTimeout(() => control?.focus({ preventScroll: true }), 80);
}

function tiltActiveCard(event) {
  const card = event.currentTarget;
  if (!card.classList.contains("is-active") || wizardState.isFlipping) return;
  const rect = card.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  card.style.setProperty("--tilt-x", `${(-y * 7).toFixed(2)}deg`);
  card.style.setProperty("--tilt-y", `${(x * 9).toFixed(2)}deg`);
}

function resetCardTilt(event) {
  event.currentTarget.style.setProperty("--tilt-x", "0deg");
  event.currentTarget.style.setProperty("--tilt-y", "0deg");
}

function getCardControl(field) {
  return {
    year: controlsMap.year,
    month: controlsMap.month,
    day: controlsMap.day,
    period: controlsMap.period,
    name: controlsMap.name,
    concern: controlsMap.concern,
    hour: controlsMap.hour,
    minute: controlsMap.minute,
    city: controlsMap.city,
    longitude: controlsMap.longitude,
    timezone: controlsMap.timezone,
    useTrueSolarTime: controlsMap.useTrueSolarTime,
    yearBoundary: controlsMap.yearBoundary,
    dayBoundary: controlsMap.dayBoundary
  }[field];
}

function validateCardField(field) {
  const control = getCardControl(field);
  if (!control) return true;

  if (field === "year") {
    const year = Number(control.value);
    if (!Number.isInteger(year) || year < 1900 || year > 2100) {
      return failCard("请填写 1900 到 2100 之间的出生年份。");
    }
  } else if (field === "month") {
    const month = Number(control.value);
    if (!Number.isInteger(month) || month < 1 || month > 12) {
      return failCard("请选择出生月份。");
    }
  } else if (field === "day") {
    const year = Number(controlsMap.year.value);
    const month = Number(controlsMap.month.value);
    const day = Number(control.value);
    const maxDay = new Date(year, month, 0).getDate();
    if (!Number.isInteger(day) || day < 1 || day > maxDay) {
      return failCard(`该月份最多 ${maxDay} 天，请检查出生日期。`);
    }
  } else if (field === "name" && !control.value.trim()) {
    return failCard("请填一个称呼，用来生成结果标题。");
  } else if (field === "hour") {
    const hour = Number(control.value);
    if (!Number.isInteger(hour) || hour < 0 || hour > 23) {
      return failCard("请选择具体出生小时。");
    }
  } else if (field === "minute") {
    const minute = Number(control.value);
    if (!Number.isInteger(minute) || minute < 0 || minute > 59) {
      return failCard("出生分钟请填写 0 到 59。");
    }
  } else if (field === "longitude") {
    const longitude = Number(control.value);
    if (!Number.isFinite(longitude) || longitude < -180 || longitude > 180) {
      return failCard("经度必须在 -180 到 180 之间。");
    }
  } else if (field === "timezone") {
    const timezone = Number(control.value);
    if (!Number.isFinite(timezone) || timezone < -12 || timezone > 14) {
      return failCard("时区必须在 UTC-12 到 UTC+14 之间。");
    }
  } else if (control.required && !control.value) {
    return failCard("这一张卡还没有填完。");
  }

  control.closest(".field")?.classList.add("is-fed");
  return true;
}

function failCard(message) {
  const card = getActiveCard();
  showError(message);
  card?.classList.add("shake");
  window.setTimeout(() => card?.classList.remove("shake"), 320);
  return false;
}

function applyCityPreset(name) {
  const city = cityPresets.find((item) => item.name === name);
  if (!city) return;
  controlsMap.longitude.value = city.longitude;
  controlsMap.timezone.value = city.timezone;
}

function readForm() {
  const period = periodPresets.find((item) => item.value === controlsMap.period.value) || periodPresets[0];
  const hasExactTime = controlsMap.exactTime.checked;
  const data = {
    year: Number(controlsMap.year.value),
    month: Number(controlsMap.month.value),
    day: Number(controlsMap.day.value),
    hour: hasExactTime ? Number(controlsMap.hour.value) : period.hour,
    minute: hasExactTime ? Number(controlsMap.minute.value || 0) : period.minute,
    longitude: Number(controlsMap.longitude.value || 116.4074),
    timezone: Number(controlsMap.timezone.value || 8),
    displayName: controlsMap.name.value.trim(),
    concern: controlsMap.concern.value || "overview",
    useTrueSolarTime: controlsMap.useTrueSolarTime.value === "true",
    showTermDetails: controlsMap.showTermDetails.checked,
    yearBoundary: controlsMap.yearBoundary.value,
    dayBoundary: controlsMap.dayBoundary.value,
    period,
    hasExactTime
  };

  if (!Number.isInteger(data.year) || data.year < 1900 || data.year > 2100) {
    return showError("请填写 1900 到 2100 之间的出生年份。");
  }
  if (!Number.isInteger(data.month) || data.month < 1 || data.month > 12) {
    return showError("请选择出生月份。");
  }
  const maxDay = new Date(data.year, data.month, 0).getDate();
  if (!Number.isInteger(data.day) || data.day < 1 || data.day > maxDay) {
    return showError(`该月份最多 ${maxDay} 天，请检查出生日期。`);
  }
  if (hasExactTime && (!Number.isInteger(data.hour) || data.hour < 0 || data.hour > 23)) {
    return showError("请选择具体出生小时，或关闭“我知道具体小时分钟”。");
  }
  if (hasExactTime && (!Number.isInteger(data.minute) || data.minute < 0 || data.minute > 59)) {
    return showError("出生分钟请填写 0 到 59。");
  }
  if (!Number.isFinite(data.longitude) || data.longitude < -180 || data.longitude > 180) {
    return showError("经度必须在 -180 到 180 之间。");
  }
  if (!Number.isFinite(data.timezone) || data.timezone < -12 || data.timezone > 14) {
    return showError("时区必须在 UTC-12 到 UTC+14 之间。");
  }

  errorBox.textContent = "";
  return data;
}

function showError(message) {
  errorBox.textContent = message;
  return null;
}

function buildChart(data) {
  const localClockMs = Date.UTC(data.year, data.month - 1, data.day, data.hour, data.minute);
  const civilUtcMs = localClockMs - data.timezone * hourMs;
  const eotMinutes = equationOfTimeMinutes(data.year, data.month, data.day, data.hour, data.minute);
  const longitudeMinutes = 4 * (data.longitude - data.timezone * 15);
  const correctionMinutes = data.useTrueSolarTime ? eotMinutes + longitudeMinutes : 0;
  const chartClockMs = localClockMs + correctionMinutes * 60000;
  const calculationUtcMs = civilUtcMs + correctionMinutes * 60000;
  const chartParts = getUtcParts(chartClockMs);
  const dayParts = getDayBoundaryParts(chartClockMs, data.dayBoundary);
  const yearPillar = getYearPillarByBoundary(data.yearBoundary, calculationUtcMs, chartParts.year);
  const monthPillar = getMonthPillar(calculationUtcMs, chartParts.year);
  const dayPillar = getDayPillar(dayParts.year, dayParts.month, dayParts.day);
  const hourPillar = getHourPillar(chartParts.hour, dayPillar.stemIndex);
  const pillars = [
    { label: "年柱", key: "year", ...yearPillar },
    { label: "月柱", key: "month", ...monthPillar },
    { label: "日柱", key: "day", ...dayPillar },
    { label: "时柱", key: "hour", ...hourPillar }
  ];
  const terms = getJieContext(calculationUtcMs, chartParts.year);
  const variants = getSchoolVariants(calculationUtcMs, chartClockMs, chartParts.year);
  const elementScores = scoreElements(pillars);
  const totalScore = Object.values(elementScores).reduce((sum, value) => sum + value, 0);
  const normalized = Object.fromEntries(
    elementOrder.map((element) => [element, Math.round((elementScores[element] / totalScore) * 100)])
  );
  const dominantElement = elementOrder.reduce((best, element) => (
    elementScores[element] > elementScores[best] ? element : best
  ), elementOrder[0]);
  const dayMaster = stems[dayPillar.stemIndex];
  const supportElement = getMotherElement(dayMaster.element);
  const selfSupport = normalized[dayMaster.element] + normalized[supportElement];
  const strength = getStrength(selfSupport);
  const usefulElements = getUsefulElements(dayMaster.element, strength.level);

  return {
    pillars,
    chartParts,
    dayParts,
    calculationUtcMs,
    civilUtcMs,
    localClockMs,
    correction: {
      eotMinutes,
      longitudeMinutes,
      totalMinutes: correctionMinutes
    },
    terms,
    variants,
    elementScores,
    normalized,
    dominantElement,
    dayMaster,
    selfSupport,
    strength,
    usefulElements
  };
}

function getYearPillarByBoundary(boundary, referenceUtcMs, localYear) {
  let pillarYear = localYear;
  if (boundary === "lichun") {
    const liChun = getTermByName(localYear, "立春").utcMs;
    pillarYear = referenceUtcMs < liChun ? localYear - 1 : localYear;
  } else if (boundary === "dongzhi") {
    const winterSolstice = getTermByName(localYear, "冬至").utcMs;
    pillarYear = referenceUtcMs >= winterSolstice ? localYear + 1 : localYear;
  }
  const index = mod(pillarYear - 4, 60);
  return { ...makePillar(index % 10, index % 12), pillarYear };
}

function getMonthPillar(referenceUtcMs, localYear) {
  const monthSolarYear = getSolarYearByLiChun(referenceUtcMs, localYear);
  const yearStemIndex = mod(monthSolarYear - 4, 60) % 10;
  const currentJie = getJieContext(referenceUtcMs, localYear).previous;
  const branchIndex = currentJie.jieBranch;
  const yinStartStem = getMonthStartStem(yearStemIndex);
  const stemIndex = mod(yinStartStem + mod(branchIndex - 2, 12), 10);
  return { ...makePillar(stemIndex, branchIndex), monthSolarYear, term: currentJie };
}

function getSolarYearByLiChun(referenceUtcMs, localYear) {
  const liChun = getTermByName(localYear, "立春").utcMs;
  return referenceUtcMs < liChun ? localYear - 1 : localYear;
}

function getDayBoundaryParts(chartClockMs, boundary) {
  const parts = getUtcParts(chartClockMs);
  if (boundary === "zi" && parts.hour >= 23) {
    return getUtcParts(chartClockMs + msPerDay);
  }
  return parts;
}

function getDayPillar(year, month, day) {
  const jdn = getJulianDayNumber(year, month, day);
  const index = mod(jdn + 49, 60);
  return makePillar(index % 10, index % 12);
}

function getHourPillar(hour, dayStemIndex) {
  const branchIndex = getHourBranchIndex(hour);
  const startStem = getHourStartStem(dayStemIndex);
  return makePillar(mod(startStem + branchIndex, 10), branchIndex);
}

function getHourBranchIndex(hour) {
  return Math.floor((hour + 1) / 2) % 12;
}

function getMonthStartStem(yearStemIndex) {
  if (yearStemIndex === 0 || yearStemIndex === 5) return 2;
  if (yearStemIndex === 1 || yearStemIndex === 6) return 4;
  if (yearStemIndex === 2 || yearStemIndex === 7) return 6;
  if (yearStemIndex === 3 || yearStemIndex === 8) return 8;
  return 0;
}

function getHourStartStem(dayStemIndex) {
  if (dayStemIndex === 0 || dayStemIndex === 5) return 0;
  if (dayStemIndex === 1 || dayStemIndex === 6) return 2;
  if (dayStemIndex === 2 || dayStemIndex === 7) return 4;
  if (dayStemIndex === 3 || dayStemIndex === 8) return 6;
  return 8;
}

function makePillar(stemIndex, branchIndex) {
  return {
    name: `${stems[stemIndex].name}${branches[branchIndex].name}`,
    stemIndex,
    branchIndex,
    stem: stems[stemIndex],
    branch: branches[branchIndex]
  };
}

function getSchoolVariants(referenceUtcMs, chartClockMs, localYear) {
  const ziParts = getDayBoundaryParts(chartClockMs, "zi");
  const midnightParts = getDayBoundaryParts(chartClockMs, "midnight");
  return {
    years: [
      { label: "立春起年", value: getYearPillarByBoundary("lichun", referenceUtcMs, localYear).name },
      { label: "冬至换年", value: getYearPillarByBoundary("dongzhi", referenceUtcMs, localYear).name },
      { label: "公历年对照", value: getYearPillarByBoundary("calendar", referenceUtcMs, localYear).name }
    ],
    days: [
      { label: "子初换日", value: getDayPillar(ziParts.year, ziParts.month, ziParts.day).name },
      { label: "正子换日", value: getDayPillar(midnightParts.year, midnightParts.month, midnightParts.day).name }
    ]
  };
}

function getJieContext(referenceUtcMs, localYear) {
  const terms = [
    ...getSolarTermsForYear(localYear - 1),
    ...getSolarTermsForYear(localYear),
    ...getSolarTermsForYear(localYear + 1)
  ].filter((term) => Number.isInteger(term.jieBranch))
    .sort((a, b) => a.utcMs - b.utcMs);
  let previous = terms[0];
  let next = terms[terms.length - 1];
  for (let index = 0; index < terms.length; index += 1) {
    if (terms[index].utcMs <= referenceUtcMs) previous = terms[index];
    if (terms[index].utcMs > referenceUtcMs) {
      next = terms[index];
      break;
    }
  }
  return { previous, next };
}

function getTermByName(year, name) {
  return getSolarTermsForYear(year).find((term) => term.name === name);
}

function getSolarTermsForYear(year) {
  if (termCache.has(year)) return termCache.get(year);
  const terms = solarTerms.map((term) => ({
    ...term,
    year,
    utcMs: findSolarTermUtcMs(year, term)
  }));
  termCache.set(year, terms);
  return terms;
}

function findSolarTermUtcMs(year, term) {
  let low = Date.UTC(year, term.month - 1, term.day - 4, 0, 0);
  let high = Date.UTC(year, term.month - 1, term.day + 4, 0, 0);
  for (let index = 0; index < 64; index += 1) {
    const mid = (low + high) / 2;
    const diff = angleDiff(sunApparentLongitude(toJulianDay(mid)), term.degree);
    if (diff < 0) low = mid;
    else high = mid;
  }
  return Math.round((low + high) / 2);
}

function sunApparentLongitude(jd) {
  const t = (jd - 2451545.0) / 36525;
  const l0 = normalizeDegrees(280.46646 + 36000.76983 * t + 0.0003032 * t * t);
  const m = normalizeDegrees(357.52911 + 35999.05029 * t - 0.0001537 * t * t);
  const c = (1.914602 - 0.004817 * t - 0.000014 * t * t) * sinDeg(m)
    + (0.019993 - 0.000101 * t) * sinDeg(2 * m)
    + 0.000289 * sinDeg(3 * m);
  const omega = 125.04 - 1934.136 * t;
  return normalizeDegrees(l0 + c - 0.00569 - 0.00478 * sinDeg(omega));
}

function equationOfTimeMinutes(year, month, day, hour, minute) {
  const dayStart = Date.UTC(year, month - 1, day);
  const yearStart = Date.UTC(year, 0, 1);
  const dayOfYear = Math.floor((dayStart - yearStart) / msPerDay) + 1;
  const gamma = (2 * Math.PI / 365) * (dayOfYear - 1 + ((hour + minute / 60) - 12) / 24);
  return 229.18 * (
    0.000075
    + 0.001868 * Math.cos(gamma)
    - 0.032077 * Math.sin(gamma)
    - 0.014615 * Math.cos(2 * gamma)
    - 0.040849 * Math.sin(2 * gamma)
  );
}

function scoreElements(pillars) {
  const scores = Object.fromEntries(elementOrder.map((element) => [element, 0]));
  pillars.forEach((pillar) => {
    scores[pillar.stem.element] += 2;
    scores[pillar.branch.element] += 1.5;
    pillar.branch.hidden.forEach((hiddenStem) => {
      const stem = stems.find((item) => item.name === hiddenStem);
      scores[stem.element] += 0.45;
    });
  });
  return scores;
}

function getMotherElement(element) {
  return Object.keys(generates).find((key) => generates[key] === element);
}

function getChildElement(element) {
  return generates[element];
}

function getControllingElement(element) {
  return Object.keys(controls).find((key) => controls[key] === element);
}

function getStrength(selfSupport) {
  if (selfSupport >= 48) {
    return { label: "偏旺", level: "strong", text: "日主根气较足，宜把能量导向输出、协作和成果兑现。" };
  }
  if (selfSupport <= 30) {
    return { label: "偏弱", level: "weak", text: "日主更需要资源和节奏支持，先蓄力再发力会更稳。" };
  }
  return { label: "中和", level: "balanced", text: "五行结构较均衡，关键在阶段取舍，不宜多线平均用力。" };
}

function getUsefulElements(dayElement, level) {
  if (level === "weak") return [dayElement, getMotherElement(dayElement)];
  if (level === "strong") return [getChildElement(dayElement), controls[dayElement], getControllingElement(dayElement)];
  return [getChildElement(dayElement), getMotherElement(dayElement)];
}

function buildFutureInsights(chart, usefulText) {
  const base = {
    weak: {
      near: `近期不要硬撑。先把睡眠、预算、资料、人手补齐，再去接新机会；${usefulText}稳了，做事会明显没那么费劲。`,
      year: "今年适合先打底，再放大。先补能力和资源，再把一个项目、一个客户或一个方向做扎实。",
      risk: "容易因为不好意思拒绝而把自己排满。凡是会连续消耗你两周以上的事，先别立刻答应。",
      action: "这周先做一件事：把最重要的目标写成三步，只推进第一步；其他临时请求先延后一天再回复。"
    },
    strong: {
      near: `近期行动力够，适合把卡住的事往前推。但重点不是更用力，而是把力气放到交付、协作和成果上。`,
      year: "今年适合把已经开始的事收成作品、业绩或可展示的结果。越能复盘和交付，越容易有回报。",
      risk: "容易太急、太强势，替别人决定。事情推进前，多问一句“你需要我怎么配合”。",
      action: "这周先收尾一件拖着的事，不再新开太多任务；把结果发出去，让别人看见你的交付。"
    },
    balanced: {
      near: `近期不是没机会，而是容易什么都想试。先选一到两个主线，把${usefulText}相关动作排进日程。`,
      year: "今年适合少换方向，多深耕。已经有基础的事，比完全从零开始的事更容易见效。",
      risk: "容易一直比较，迟迟不定。拖延越久，状态越散。",
      action: "这周做一个取舍：保留一个主线目标，删掉一个不重要的安排，让精力重新集中。"
    }
  };
  return base[chart.strength.level];
}

function buildWealthInsights(chart, dayProfile, dominantProfile, usefulText) {
  const dayElement = chart.dayMaster.element;
  const wealthElement = controls[dayElement];
  const hasWealthTone = chart.normalized[wealthElement] >= 18;
  return {
    money: hasWealthTone
      ? "你的赚钱方式更适合靠稳定交付、清晰报价、长期客户和可复购服务，不适合把希望押在一次运气上。"
      : `现在不适合只追短期赚钱机会。先把${usefulText}补起来，用作品、能力、专业度和稳定输出间接生财。`,
    career: `${dayProfile.career}当前${chart.dominantElement}气突出，${dominantProfile.balance}做事业时别只凭感觉，把目标拆成能检查的节点。`,
    risk: chart.strength.level === "strong"
      ? "守财关键是控制冲动决策，尤其避免为了证明自己而加码投入。"
      : chart.strength.level === "weak"
        ? "守财关键是先留安全垫，重大支出前先确认现金流和支持系统。"
        : "守财关键是少做分散小投入，把钱和精力集中在能长期复利的方向。",
    action: hasWealthTone
      ? "这周先整理价格、服务内容或作品案例，让别人知道你能稳定提供什么价值。"
      : "这周先别急着加大投入，先做一份账：固定收入、固定支出、可动用现金和未来三个月压力。"
  };
}

function buildRelationshipInsights(chart, dayProfile, usefulText) {
  const textByLevel = {
    weak: {
      attraction: "你的吸引力来自细腻、可靠和愿意理解对方，但不要用过度付出来换安全感。",
      rhythm: `关系里先要稳定节奏，再谈深度承诺。补${usefulText}后再表达需求，会更容易被认真接住。`,
      blindSpot: "盲区是容易委屈自己或把沉默当成体贴；重要感受要说清楚，不要等对方猜。",
      action: "这周练习一句话：“我希望这件事可以这样处理”，不要只说“都可以”。"
    },
    strong: {
      attraction: "你的吸引力来自直接、能扛事和有行动力，适合被坦诚、成熟、有边界的人看见。",
      rhythm: `关系里要多留倾听空间，用${usefulText}把强表达转成温和互动，亲密感会更稳。`,
      blindSpot: "盲区是节奏太快或替对方安排太多；越在乎，越要给对方选择余地。",
      action: "这周少替对方下结论，多问一句：“你真实想法是什么？”"
    },
    balanced: {
      attraction: "你的吸引力来自稳定、好沟通和能照顾整体局面，关系适合慢慢加深。",
      rhythm: `关系里保持共同目标和固定沟通，补${usefulText}能让关系从舒服走向确定。`,
      blindSpot: "盲区是太讲道理而少表达偏爱；适当直接示好，会比保持体面更有温度。",
      action: "这周主动表达一次具体喜欢或感谢，让对方知道你不是只在理性分析。"
    }
  };
  return {
    ...textByLevel[chart.strength.level],
    rhythm: `${textByLevel[chart.strength.level].rhythm}${dayProfile.relation}`
  };
}

function buildRemedyInsights(chart, usefulText) {
  const elementActions = {
    木: "多接触成长型环境：学习、阅读、早起散步、绿植、长期计划。",
    火: "多做表达与点亮：晒太阳、运动、发布作品、主动沟通、参与热闹场域。",
    土: "多做落地与整理：收纳、记账、规律饮食、项目复盘、固定作息。",
    金: "多做边界与规则：断舍离、流程化、清单管理、训练专业标准。",
    水: "多做流动与更新：旅行、复盘、冥想、信息整理、学习新工具。"
  };
  const actions = chart.usefulElements.map((element) => elementActions[element]).join("");
  return {
    direction: `你的改运重点先看${usefulText}。说白了，就是把生活环境、习惯、人际和选择调到更支持你的状态。`,
    action: actions,
    boundary: chart.strength.level === "strong"
      ? "少逞强、少硬控、少同时开局；把强势能量收进作品、结果和长期信用。"
      : chart.strength.level === "weak"
        ? "少熬夜、少借力不足时硬撑、少被他人节奏牵着走；先养气，再出手。"
        : "少摇摆、少平均用力、少为了所有人满意而模糊目标；越清楚，越有运。",
    today: "今天就能开始：清理一个让你分心的东西，固定一个小习惯，坚持七天，比临时求好运更有用。"
  };
}

function renderChart(data, chart) {
  const titleName = data.displayName || "来客";
  const usefulText = chart.usefulElements.map((element) => `${element}气`).join("、");
  const dateText = `${data.year}年${data.month}月${data.day}日 ${pad2(data.hour)}:${pad2(data.minute)}`;
  const solarTimeText = formatParts(chart.chartParts);
  const dayProfile = elementProfiles[chart.dayMaster.element];
  const dominantProfile = elementProfiles[chart.dominantElement];
  const timeCorrection = formatSignedMinutes(chart.correction.totalMinutes);
  const confidenceLabel = data.hasExactTime ? "高" : data.period.confidence === "medium" ? "中" : "低";
  const hourNote = data.hasExactTime ? "具体时刻已提供，时柱可信度较高。" : data.period.text;
  const futureTexts = buildFutureInsights(chart, usefulText);
  const wealthTexts = buildWealthInsights(chart, dayProfile, dominantProfile, usefulText);
  const relationshipTexts = buildRelationshipInsights(chart, dayProfile, usefulText);
  const remedyTexts = buildRemedyInsights(chart, usefulText);
  const concern = getConcernProfile(data.concern);

  document.querySelector("#plateTitle").textContent = `${titleName}的 MingLi 命盘`;
  document.querySelector("#plateSubtitle").textContent = `${dateText}，校正后为 ${solarTimeText}。`;
  document.querySelector("#zodiacBadge").textContent = `${chart.pillars[0].branch.zodiac}年`;
  document.querySelector("#centerStem").textContent = chart.dayMaster.name;
  document.querySelector("#yearRing").textContent = chart.pillars[0].name;
  document.querySelector("#monthRing").textContent = chart.pillars[1].name;
  document.querySelector("#dayRing").textContent = chart.pillars[2].name;
  document.querySelector("#hourRing").textContent = chart.pillars[3].name;

  document.querySelector("#quickFacts").innerHTML = `
    <div class="fact">
      <span class="fact-key">校时</span>
      <span class="fact-value">${data.hasExactTime ? "具体时间" : data.period.label} · ${data.useTrueSolarTime ? `真太阳时 ${solarTimeText}` : `默认时间 ${solarTimeText}`}</span>
    </div>
    <div class="fact">
      <span class="fact-key">节令</span>
      <span class="fact-value">${chart.terms.previous.name}后，${chart.terms.next.name}前，月令属${branches[chart.pillars[1].branchIndex].name}</span>
    </div>
    <div class="fact">
      <span class="fact-key">日主</span>
      <span class="fact-value">${chart.dayMaster.name}${chart.dayMaster.element}，${chart.dayMaster.image}，时柱可信度${confidenceLabel}</span>
    </div>
  `;

  resultPanel.innerHTML = `
    <div class="section">
      <h3>结果大纲</h3>
      <div class="insight-grid">
        <article class="insight">
          <h4>命盘主调</h4>
          <p>${chart.dayMaster.name}${chart.dayMaster.element}日主，当前五行以${chart.dominantElement}气最显，整体呈${chart.strength.label}格局。</p>
        </article>
        <article class="insight">
          <h4>行动方向</h4>
          <p>先看${usefulText}的补益方向，把精力放到一到两个明确目标上，少做分散消耗。</p>
        </article>
        <article class="insight">
          <h4>时间可信度</h4>
          <p>${data.hasExactTime ? "已使用具体出生时刻，四柱结果更完整。" : "按你提供的大概时段起盘，前三柱稳定，时柱作为趋势参考。"}</p>
        </article>
        <article class="insight">
          <h4>本次重点</h4>
          <p>你选择先看${concern.label}。${concern.line}</p>
        </article>
      </div>
    </div>

    <div class="section">
      <h3>四柱八字</h3>
      <div class="pillars">
        ${chart.pillars.map((pillar) => {
          const meaning = pillarMeaning(pillar.key, data);
          return `
          <article class="pillar">
            <span class="pillar-label">${pillar.label} · ${meaning.short}</span>
            <strong class="pillar-name">${pillar.name}</strong>
            <p class="pillar-meta">${meaning.symbol}<br>${meaning.detail}</p>
          </article>
        `;
        }).join("")}
      </div>
    </div>

    <div class="section">
      <h3>起盘可信度</h3>
      <div class="calc-grid">
        <article class="calc-card">
          <span class="meta-label">用户输入</span>
          <strong>${data.hasExactTime ? `${pad2(data.hour)}:${pad2(data.minute)}` : data.period.label}</strong>
          <p>${hourNote}</p>
        </article>
        <article class="calc-card">
          <span class="meta-label">默认口径</span>
          <strong>${data.useTrueSolarTime ? "专业校正" : "基础起盘"}</strong>
          <p>${data.useTrueSolarTime ? `经度和时差方程合计 ${timeCorrection}。` : "基础版隐藏城市与流派参数，采用常用规则快速起盘。"}</p>
        </article>
      </div>
    </div>

    ${data.showTermDetails ? `
      <div class="section">
        <h3>专业校验</h3>
        <div class="calc-grid">
          <article class="calc-card">
            <span class="meta-label">真太阳时</span>
            <strong>${data.useTrueSolarTime ? solarTimeText : "未启用校正"}</strong>
            <p>经度修正 ${formatSignedMinutes(chart.correction.longitudeMinutes)}，时差方程 ${formatSignedMinutes(chart.correction.eotMinutes)}，合计 ${timeCorrection}。</p>
          </article>
          <article class="calc-card">
            <span class="meta-label">节令边界</span>
            <strong>${chart.terms.previous.name} → ${chart.terms.next.name}</strong>
            <p>${chart.terms.previous.name}：${formatTermTime(chart.terms.previous.utcMs, data.timezone)}；${chart.terms.next.name}：${formatTermTime(chart.terms.next.utcMs, data.timezone)}。</p>
          </article>
        </div>
      </div>
    ` : ""}

    ${data.showTermDetails ? `
      <div class="section">
        <h3>流派差异</h3>
        <div class="calc-grid">
          <article class="calc-card">
            <span class="meta-label">年柱分界</span>
            <strong>${chart.variants.years.map((item) => `${item.label}：${item.value}`).join(" · ")}</strong>
            <p>当前采用：${getYearBoundaryLabel(data.yearBoundary)}。</p>
          </article>
          <article class="calc-card">
            <span class="meta-label">日柱换日</span>
            <strong>${chart.variants.days.map((item) => `${item.label}：${item.value}`).join(" · ")}</strong>
            <p>当前采用：${getDayBoundaryLabel(data.dayBoundary)}。</p>
          </article>
        </div>
      </div>
    ` : ""}

    <div class="section">
      <h3>五行分布</h3>
      <div class="element-grid">
        ${elementOrder.map((element) => `
          <div class="element-row">
            <span class="element-name">${element}</span>
            <div class="bar" aria-label="${element} ${chart.normalized[element]}%">
              <span style="width: ${chart.normalized[element]}%; background: ${elementColors[element]}"></span>
            </div>
            <span class="element-score">${chart.normalized[element]}%</span>
          </div>
        `).join("")}
      </div>
      <div class="tags">
        <span class="tag">日主：${chart.dayMaster.name}${chart.dayMaster.element}</span>
        <span class="tag">旺衰：${chart.strength.label}</span>
        <span class="tag">主导五行：${chart.dominantElement}</span>
        <span class="tag">补益方向：${usefulText}</span>
      </div>
    </div>

    <div class="section">
      <h3>命盘解读</h3>
      <div class="insight-grid">
        <article class="insight">
          <h4>性格底色</h4>
          <p>${dayProfile.trait}${chart.strength.text}</p>
        </article>
        <article class="insight">
          <h4>事业财运</h4>
          <p>${dayProfile.career}此盘${chart.dominantElement}气最显，${dominantProfile.balance}</p>
        </article>
        <article class="insight">
          <h4>关系节奏</h4>
          <p>${dayProfile.relation}补${usefulText}，少用消耗感换取安全感。</p>
        </article>
      </div>
    </div>

    <div class="section">
      <h3>未来运势</h3>
      <div class="insight-grid">
        <article class="insight">
          <h4>近期三个月</h4>
          <p>${futureTexts.near}</p>
        </article>
        <article class="insight">
          <h4>年度主线</h4>
          <p>${futureTexts.year}</p>
        </article>
        <article class="insight">
          <h4>需要避开的坑</h4>
          <p>${futureTexts.risk}</p>
        </article>
        <article class="insight">
          <h4>这周怎么做</h4>
          <p>${futureTexts.action}</p>
        </article>
      </div>
    </div>

    <div class="section">
      <h3>财富事业</h3>
      <div class="insight-grid">
        <article class="insight">
          <h4>来财方式</h4>
          <p>${wealthTexts.money}</p>
        </article>
        <article class="insight">
          <h4>事业发力点</h4>
          <p>${wealthTexts.career}</p>
        </article>
        <article class="insight">
          <h4>守财提醒</h4>
          <p>${wealthTexts.risk}</p>
        </article>
        <article class="insight">
          <h4>这周怎么做</h4>
          <p>${wealthTexts.action}</p>
        </article>
      </div>
    </div>

    <div class="section">
      <h3>姻缘关系</h3>
      <div class="insight-grid">
        <article class="insight">
          <h4>吸引力来源</h4>
          <p>${relationshipTexts.attraction}</p>
        </article>
        <article class="insight">
          <h4>适合的相处</h4>
          <p>${relationshipTexts.rhythm}</p>
        </article>
        <article class="insight">
          <h4>关系盲区</h4>
          <p>${relationshipTexts.blindSpot}</p>
        </article>
        <article class="insight">
          <h4>这周怎么说</h4>
          <p>${relationshipTexts.action}</p>
        </article>
      </div>
    </div>

    <div class="section">
      <h3>改运指南</h3>
      <div class="insight-grid">
        <article class="insight">
          <h4>补运方向</h4>
          <p>${remedyTexts.direction}</p>
        </article>
        <article class="insight">
          <h4>行动仪式</h4>
          <p>${remedyTexts.action}</p>
        </article>
        <article class="insight">
          <h4>日常取舍</h4>
          <p>${remedyTexts.boundary}</p>
        </article>
        <article class="insight">
          <h4>今天就做</h4>
          <p>${remedyTexts.today}</p>
        </article>
      </div>
    </div>

    <div class="section">
      <h3>签文建议</h3>
      <article class="oracle-card">
        <h4>${buildOracleTitle(chart)}</h4>
        <p>${buildOracleText(chart)}</p>
      </article>
    </div>
  `;
  enhanceReadableResultSections({
    data,
    chart,
    usefulText,
    dayProfile,
    dominantProfile,
    futureTexts,
    wealthTexts,
    relationshipTexts,
    remedyTexts,
    solarTimeText,
    confidenceLabel,
    hourNote
  });
  setupResultDeck(data.concern);
}

function enhanceReadableResultSections(context) {
  const sections = [...resultPanel.querySelectorAll(".section")];
  const {
    data,
    chart,
    usefulText,
    dayProfile,
    dominantProfile,
    futureTexts,
    wealthTexts,
    relationshipTexts,
    remedyTexts,
    solarTimeText,
    confidenceLabel,
    hourNote
  } = context;
  const strongestElement = chart.dominantElement;
  const weakestElement = elementOrder.reduce((lowest, element) => (
    chart.normalized[element] < chart.normalized[lowest] ? element : lowest
  ), elementOrder[0]);
  const wealthElement = controls[chart.dayMaster.element];
  const userTimeText = data.hasExactTime ? `${pad2(data.hour)}:${pad2(data.minute)}` : data.period.label;
  const readable = [
    {
      summary: "先看三句话",
      points: [
        `你的命盘核心是${chart.dayMaster.name}${chart.dayMaster.element}日主，整体属于${chart.strength.label}。简单说，这代表你做事的底层能量和当前需要的节奏。`,
        `${strongestElement}气最明显，容易成为你的惯性优势；${weakestElement}气较弱，往往是需要刻意补上的能力或环境。`,
        `这份报告只看趋势和象意，不替你做决定；后面会拆成财富、关系、未来运势和改运行动，按建议落到日常就能用。`
      ]
    },
    {
      summary: "四柱代表什么",
      points: [
        "年柱像你的外缘底色：早年环境、家族气质，以及别人初接触你时感受到的风格。",
        "月柱像你的成长土壤：做事节奏、事业习惯、资源从哪里来；日柱代表你自己，是性格和选择的核心。",
        "时柱看后劲和愿望：未来想经营什么、长期潜力在哪里。时间不准时，它只作为趋势参考。"
      ]
    },
    {
      summary: "起盘可信度",
      points: [
        `你提供的时间为${userTimeText}，当前时柱可信度为${confidenceLabel}。${hourNote}`,
        `本次显示的校时结果为${solarTimeText}。如果出生时间只是大概，财富、姻缘、性格大方向仍可参考，但细到某一年某一月的判断要保守。`,
        "如果后续能拿到更准确的小时分钟，专业版可以再用真太阳时、经度、换日流派把盘校得更细。"
      ]
    },
    {
      summary: "五行白话",
      points: [
        `${strongestElement}气高，说明你容易先用${elementMeaning(strongestElement)}的方式处理事情，这通常是优势，也可能成为惯性。`,
        `${weakestElement}气低，代表${elementMeaning(weakestElement)}这类能力需要后天补足；不是缺点，而是提醒你要借环境、习惯或伙伴来补。`,
        `对你来说，当前更值得补的是${usefulText}。把它理解成“让自己更顺的方向”，不是固定幸运色或玄学口号。`
      ]
    },
    {
      summary: "命盘解读",
      points: [
        `${dayProfile.trait}这说明你的优势不是单一性格，而是一套做选择的方式。`,
        `${chart.strength.text}所以遇到机会时，先判断自己是需要“先蓄力”还是“先输出”，不要照搬别人的节奏。`,
        `${dominantProfile.balance}这句话落到现实里，就是你越能把优势放进具体作品、计划和关系里，越容易得到正反馈。`
      ]
    },
    {
      summary: "未来运势怎么用",
      points: [
        futureTexts.near,
        futureTexts.year,
        futureTexts.action
      ]
    },
    {
      summary: "财富运重点",
      points: [
        `你的财星对应${wealthElement}，当前财星权重约${chart.normalized[wealthElement]}%。这不是“有没有钱”的判决，而是看你更适合怎么把能力变成收入。`,
        wealthTexts.money,
        wealthTexts.career,
        `守财提醒：${wealthTexts.risk}`,
        wealthTexts.action
      ]
    },
    {
      summary: "姻缘关系重点",
      points: [
        relationshipTexts.attraction,
        relationshipTexts.rhythm,
        relationshipTexts.blindSpot,
        relationshipTexts.action
      ]
    },
    {
      summary: "改运行动表",
      points: [
        remedyTexts.direction,
        remedyTexts.action,
        remedyTexts.boundary,
        remedyTexts.today
      ]
    },
    {
      summary: "最后怎么落地",
      points: [
        "签文不是让你等结果，而是把前面所有判断收成一句行动提醒。",
        buildOracleText(chart),
        "最适合你的用法是：今天选一个建议执行，三天后看状态，一周后看结果。能被执行的建议，才真的会改变运势。"
      ]
    }
  ];

  sections.forEach((section, index) => {
    const detail = readable[index];
    if (!detail) return;
    const detailHtml = `
      <div class="plain-guide">
        <h4>${detail.summary}</h4>
        <ul>
          ${detail.points.map((point) => `<li>${point}</li>`).join("")}
        </ul>
      </div>
    `;
    const heading = section.querySelector("h3");
    if (heading) {
      heading.insertAdjacentHTML("afterend", detailHtml);
    } else {
      section.insertAdjacentHTML("afterbegin", detailHtml);
    }
  });
}

function elementMeaning(element) {
  return {
    木: "成长、规划、学习和向外扩展",
    火: "表达、行动、热情和被看见",
    土: "稳定、承接、资源整合和落地",
    金: "规则、边界、判断和专业标准",
    水: "流动、信息、复盘和灵活变化"
  }[element] || "调整节奏";
}

function pillarMeaning(key, data) {
  const meanings = {
    year: {
      short: "外缘底色",
      symbol: "象征你的早年环境、家族气质和外界第一眼感受到的风格。",
      detail: "它不是决定命运的标签，更像人生开场时带来的背景音。"
    },
    month: {
      short: "成长土壤",
      symbol: "象征你形成习惯的环境、事业土壤和做事节奏。",
      detail: "看它是为了知道你在哪类环境里更容易被滋养、被看见。"
    },
    day: {
      short: "自我核心",
      symbol: "象征你自己：性格底层、选择方式，以及亲密关系里的真实状态。",
      detail: "这一柱是整张盘的中心，后面的财富、关系和改运都围绕它展开。"
    },
    hour: {
      short: "后劲愿望",
      symbol: "象征长期潜力、未来愿望、子女缘分和晚一点才显出来的能力。",
      detail: data.hasExactTime ? "出生时刻越准确，这一柱越适合看长期规划。" : "你提供的是大概时段，所以这一柱先当作趋势参考。"
    }
  };
  return meanings[key] || meanings.day;
}

function getConcernProfile(concern) {
  return concernProfiles[concern] || concernProfiles.overview;
}

function setupResultDeck(preferredConcern = "overview") {
  const sections = [...resultPanel.querySelectorAll(".section")];
  if (!sections.length) return;
  clearResultRevealTimers();

  const deck = document.createElement("div");
  deck.className = "result-deck";
  const starPoints = getConstellationPoints(7);
  deck.innerHTML = `
    <div class="result-ambient" aria-hidden="true">
      <span class="ambient-wash"></span>
      <span class="ambient-ring"></span>
      <span class="ambient-thread thread-a"></span>
      <span class="ambient-thread thread-b"></span>
      <span class="ambient-stars"></span>
    </div>
    <div class="result-deck-head">
      <div>
        <p class="eyebrow">本地命签 · 仅作参考</p>
        <h3 id="resultPageTitle">${sections[0].querySelector("h3")?.textContent || "结果"}</h3>
      </div>
      <span class="badge" id="resultPageCount">1 / ${sections.length}</span>
    </div>
    <div class="constellation-stage" aria-label="北斗星轨">
      <div class="constellation-copy">
        <span>MingLi 命理报告</span>
        <strong id="resultCurrentTitle">点亮一枚星签，再看对应信息</strong>
        <em>四柱 · 五行 · 运势 · 财富 · 姻缘 · 改运</em>
      </div>
      <svg class="constellation-lines" viewBox="0 0 100 58" aria-hidden="true">
        ${starPoints.slice(1).map((point, index) => {
          const previous = starPoints[index];
          return `<line x1="${previous.x}" y1="${previous.y}" x2="${point.x}" y2="${point.y}" style="--delay:${index * 120}ms"></line>`;
        }).join("")}
      </svg>
      <div class="star-field" aria-label="北斗星点"></div>
      <span class="star-sweep" aria-hidden="true"></span>
    </div>
    <div class="result-stage result-ritual-stage" aria-label="命理分析场景">
      <span class="ritual-aura" aria-hidden="true"></span>
      <span class="ritual-rail rail-top" aria-hidden="true"></span>
      <span class="ritual-rail rail-bottom" aria-hidden="true"></span>
      <span class="ritual-corner corner-a" aria-hidden="true"></span>
      <span class="ritual-corner corner-b" aria-hidden="true"></span>
    </div>
    <div class="result-gate-nav" aria-label="切换结果签">
      <button class="result-gate gate-prev" type="button" data-report-nav="prev" aria-label="上一签">
        <span>上一签</span>
      </button>
      <div class="result-gate-center">
        <strong id="resultNavTitle">${sections[0].querySelector("h3")?.textContent || "结果"}</strong>
        <em id="resultNavHint">左滑看下一签</em>
      </div>
      <button class="result-gate gate-next" type="button" data-report-nav="next" aria-label="下一签">
        <span>下一签</span>
      </button>
    </div>
  `;

  const pageFrameEl = deck.querySelector(".result-stage");
  const starFieldEl = deck.querySelector(".star-field");
  starPoints.forEach((point, index) => {
    const star = document.createElement("button");
    star.className = "result-star";
    star.type = "button";
    star.style.left = `${point.x}%`;
    star.style.top = `${point.y}%`;
    star.style.setProperty("--delay", `${index * 160}ms`);
    star.setAttribute("aria-label", `点亮第 ${index + 1} 颗星`);
    star.innerHTML = "<span></span>";
    star.addEventListener("click", () => {
      clearResultRevealTimers();
      deck.classList.remove("is-revealing");
      const targetIndex = getSectionIndexForStar(index, starPoints.length, sections.length);
      setReportPage(deck, targetIndex, true);
    });
    starFieldEl.append(star);
  });

  sections.forEach((section, index) => {
    const title = section.querySelector("h3")?.textContent || "";
    const theme = getReportTheme(title, index);
    section.classList.add("report-section");
    section.classList.remove("result-card-page", "is-active", "is-revealed");
    section.style.setProperty("--reveal-order", index);
    section.dataset.theme = theme;
    section.dataset.reportIndex = String(index + 1).padStart(2, "0");
    section.insertAdjacentHTML("afterbegin", `${buildReportScene(theme)}${buildReportMotif(theme)}`);
    section.insertAdjacentHTML("beforeend", buildReportFooter(theme));
    wrapReportContent(section);
    pageFrameEl.append(section);
  });

  deck.querySelector('[data-report-nav="prev"]').addEventListener("click", () => {
    setReportPage(deck, getReportPage(deck) - 1, true);
  });
  deck.querySelector('[data-report-nav="next"]').addEventListener("click", () => {
    setReportPage(deck, getReportPage(deck) + 1, true);
  });
  bindReportSwipe(deck, deck);
  resultPanel.replaceChildren(deck);
  startReportPager(deck, getConcernProfile(preferredConcern).theme);
}

function getConstellationPoints(count) {
  const points = [
    { x: 15, y: 58 },
    { x: 30, y: 49 },
    { x: 43, y: 54 },
    { x: 53, y: 40 },
    { x: 65, y: 46 },
    { x: 75, y: 33 },
    { x: 86, y: 24 }
  ];
  return points.slice(0, Math.min(count, points.length));
}

function getReportTheme(title, index) {
  if (title.includes("四柱")) return "pillars";
  if (title.includes("可信") || title.includes("校验") || title.includes("流派")) return "calibration";
  if (title.includes("五行")) return "elements";
  if (title.includes("命盘")) return "reading";
  if (title.includes("未来") || title.includes("运势")) return "future";
  if (title.includes("财富") || title.includes("事业")) return "wealth";
  if (title.includes("姻缘") || title.includes("关系")) return "relationship";
  if (title.includes("改运")) return "remedy";
  if (title.includes("签文")) return "oracle";
  return index === 0 ? "overview" : "reading";
}

function buildReportMotif(theme) {
  const motifs = {
    overview: `
      <span class="report-motif motif-overview" aria-hidden="true">
        <i></i><i></i><i></i>
      </span>
    `,
    pillars: `
      <span class="report-motif motif-pillars" aria-hidden="true">
        <i></i><i></i><i></i><i></i>
      </span>
    `,
    calibration: `
      <span class="report-motif motif-calibration" aria-hidden="true">
        <i></i><i></i><i></i>
      </span>
    `,
    elements: `
      <span class="report-motif motif-elements" aria-hidden="true">
        <i></i><i></i><i></i><i></i><i></i>
      </span>
    `,
    reading: `
      <span class="report-motif motif-reading" aria-hidden="true">
        <i></i><i></i>
      </span>
    `,
    future: `
      <span class="report-motif motif-future" aria-hidden="true">
        <i></i><i></i><i></i><i></i>
      </span>
    `,
    wealth: `
      <span class="report-motif motif-wealth" aria-hidden="true">
        <i class="wealth-stream"></i>
        <i class="wealth-coin coin-a">贝</i>
        <i class="wealth-coin coin-b">财</i>
        <i class="wealth-coin coin-c">金</i>
        <i class="wealth-ingot"></i>
      </span>
    `,
    relationship: `
      <span class="report-motif motif-relationship" aria-hidden="true">
        <i></i><i></i><i></i>
      </span>
    `,
    remedy: `
      <span class="report-motif motif-remedy" aria-hidden="true">
        <i></i><i></i><i></i>
      </span>
    `,
    oracle: `
      <span class="report-motif motif-oracle" aria-hidden="true">
        <i>签</i><i></i>
      </span>
    `
  };
  return motifs[theme] || motifs.reading;
}

function buildReportScene(theme) {
  return `
    <div class="report-scene scene-${theme}" aria-hidden="true">
      <span class="scene-disc"></span>
      <span class="scene-line line-a"></span>
      <span class="scene-line line-b"></span>
      <span class="scene-piece piece-a"></span>
      <span class="scene-piece piece-b"></span>
      <span class="scene-piece piece-c"></span>
      <span class="scene-piece piece-d"></span>
      <span class="scene-piece piece-e"></span>
    </div>
  `;
}

function buildReportFooter(theme) {
  const footers = {
    overview: ["总览", "先看全局，再入细章"],
    pillars: ["四柱", "看象意，不背术语"],
    calibration: ["校准", "时间越清，判断越稳；不确定就保守看"],
    elements: ["五行", "气有偏重，取用有序"],
    reading: ["命盘", "性情与选择互相成局"],
    future: ["运势", "看趋势，也看可行动的节奏"],
    wealth: ["财帛", "先看现金流与信用，再谈偏财"],
    relationship: ["姻缘", "关系贵在节奏相合，不做吓人的断语"],
    remedy: ["改运", "改运先改日常取舍"],
    oracle: ["签文", "收束一念，落到今天能做的一步"]
  };
  const [label, text] = footers[theme] || footers.reading;
  return `
    <div class="report-page-signature" aria-hidden="true">
      <span>${label}</span>
      <strong>${text}</strong>
    </div>
  `;
}

function getSectionIndexForStar(starIndex, starCount, sectionCount) {
  if (sectionCount <= 1 || starCount <= 1) return 0;
  return Math.min(sectionCount - 1, Math.round((starIndex / (starCount - 1)) * (sectionCount - 1)));
}

function getStarIndexForSection(sectionIndex, sectionCount, starCount) {
  if (sectionCount <= 1 || starCount <= 1) return 0;
  return Math.min(starCount - 1, Math.round((sectionIndex / (sectionCount - 1)) * (starCount - 1)));
}

function startReportPager(deck, preferredTheme = "overview") {
  clearResultRevealTimers();
  const sections = getReportSections(deck);
  const stars = [...deck.querySelectorAll(".result-star")];
  const preferredIndex = Math.max(0, sections.findIndex((section) => section.dataset.theme === preferredTheme));
  sections.forEach((section) => section.classList.remove("is-revealed", "is-current"));
  stars.forEach((star) => star.classList.remove("is-lit", "is-active"));
  deck.classList.add("is-revealing");
  setReportPage(deck, preferredIndex);
  resultRevealTimers.push(window.setTimeout(() => {
    deck.classList.remove("is-revealing");
  }, 1200));
}

function getReportPage(deck) {
  return Number(deck.dataset.page || 0);
}

function getReportSections(deck) {
  return [...deck.querySelectorAll(".result-stage > .report-section")];
}

function wrapReportContent(section) {
  const content = document.createElement("div");
  content.className = "report-content";
  [...section.children].forEach((child) => {
    if (child.classList.contains("report-scene") || child.classList.contains("report-motif")) return;
    content.append(child);
  });
  buildReportInfoPicker(section, content);
  section.append(content);
}

function buildReportInfoPicker(section, content) {
  const title = content.querySelector("h3");
  const signature = content.querySelector(".report-page-signature");
  const sources = [...content.children].filter((child) => child !== title && child !== signature);
  const panels = [];

  sources.forEach((source) => {
    if (source.classList.contains("insight-grid") || source.classList.contains("calc-grid") || source.classList.contains("pillars")) {
      [...source.children].forEach((child) => panels.push(child));
      source.remove();
      return;
    }
    panels.push(source);
  });

  if (!panels.length && signature) panels.push(signature);

  const board = document.createElement("div");
  board.className = "report-token-board";
  board.setAttribute("aria-label", "选择要查看的信息");
  const detail = document.createElement("div");
  detail.className = "report-detail";

  panels.forEach((panel, index) => {
    const active = index === 0;
    panel.classList.add("report-info-panel");
    panel.classList.toggle("is-active", active);
    panel.hidden = !active;
    panel.dataset.infoIndex = String(index);
    const button = document.createElement("button");
    button.className = "report-token";
    button.type = "button";
    button.dataset.infoIndex = String(index);
    button.innerHTML = `<span>${String(index + 1).padStart(2, "0")}</span><strong>${getReportInfoLabel(panel, index)}</strong>`;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
    button.addEventListener("click", () => setActiveReportInfo(section, index));
    board.append(button);
    detail.append(panel);
  });

  if (title) title.after(board, detail);
  else content.prepend(board, detail);
  if (signature && signature.parentElement !== content) content.append(signature);
}

function getReportInfoLabel(panel, index) {
  const selectors = ["h4", ".meta-label", ".pillar-label", ".pillar-name", ".tag", ".element-name"];
  for (const selector of selectors) {
    const text = panel.querySelector(selector)?.textContent?.trim();
    if (text) return text.slice(0, 8);
  }
  if (panel.classList.contains("element-grid")) return "五行分布";
  if (panel.classList.contains("tags")) return "关键标签";
  return `信息${index + 1}`;
}

function setActiveReportInfo(section, infoIndex, focus = true) {
  const safeIndex = Math.max(0, infoIndex);
  section.dataset.activeInfo = String(safeIndex);
  const tokens = [...section.querySelectorAll(".report-token")];
  const panels = [...section.querySelectorAll(".report-info-panel")];
  tokens.forEach((token, index) => {
    const active = index === safeIndex;
    token.classList.toggle("is-active", active);
    token.setAttribute("aria-pressed", String(active));
  });
  panels.forEach((panel, index) => {
    const active = index === safeIndex;
    panel.classList.toggle("is-active", active);
    panel.hidden = !active;
  });
  if (focus) panels[safeIndex]?.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

function bindReportSwipe(deck, frame) {
  let startX = 0;
  let startY = 0;
  let startTime = 0;
  let tracking = false;
  let activeSection = null;

  function startSwipe(x, y) {
    startX = x;
    startY = y;
    startTime = Date.now();
    tracking = true;
    activeSection = getReportSections(deck)[getReportPage(deck)];
    activeSection?.classList.add("is-swiping");
  }

  function moveSwipe(x, y, event) {
    if (!tracking) return;
    const dx = x - startX;
    const dy = y - startY;
    if (Math.abs(dx) > 18 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      event?.preventDefault?.();
      const limited = Math.max(-64, Math.min(64, dx * 0.32));
      if (activeSection) {
        activeSection.style.transition = "none";
        activeSection.style.transform = `translateX(${limited}px) scale(0.997)`;
      }
    }
  }

  function clearSwipe() {
    if (!activeSection) return;
    activeSection.classList.remove("is-swiping");
    activeSection.style.transition = "transform 180ms ease-out";
    activeSection.style.transform = "";
    window.setTimeout(() => {
      if (activeSection) activeSection.style.transition = "";
      activeSection = null;
    }, 190);
  }

  function finishSwipe(x, y) {
    if (!tracking) return;
    tracking = false;
    const dx = x - startX;
    const dy = y - startY;
    const elapsed = Date.now() - startTime;
    const shouldTurn = Math.abs(dx) >= 46 && Math.abs(dx) >= Math.abs(dy) * 1.08 && elapsed <= 1000;
    clearSwipe();
    if (!shouldTurn) return;
    deck.classList.add("has-swiped");
    setReportPage(deck, getReportPage(deck) + (dx < 0 ? 1 : -1), true);
  }

  frame.addEventListener("touchstart", (event) => {
    const touch = event.touches[0];
    if (!touch) return;
    startSwipe(touch.clientX, touch.clientY);
  }, { passive: true });

  frame.addEventListener("touchmove", (event) => {
    const touch = event.touches[0];
    if (!touch) return;
    moveSwipe(touch.clientX, touch.clientY, event);
  }, { passive: false });

  frame.addEventListener("touchend", (event) => {
    const touch = event.changedTouches[0];
    if (!touch) {
      tracking = false;
      return clearSwipe();
    }
    finishSwipe(touch.clientX, touch.clientY);
  }, { passive: true });

  frame.addEventListener("touchcancel", () => {
    tracking = false;
    clearSwipe();
  }, { passive: true });

  frame.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch" || event.button !== 0) return;
    frame.setPointerCapture?.(event.pointerId);
    startSwipe(event.clientX, event.clientY);
  });

  frame.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") return;
    moveSwipe(event.clientX, event.clientY, event);
  });

  frame.addEventListener("pointerup", (event) => {
    if (event.pointerType === "touch") return;
    finishSwipe(event.clientX, event.clientY);
  });

  frame.addEventListener("pointercancel", () => {
    tracking = false;
    clearSwipe();
  });
}

function setReportPage(deck, nextIndex, userDriven = false) {
  if (userDriven) {
    clearResultRevealTimers();
    deck.classList.remove("is-revealing");
  }
  const sections = getReportSections(deck);
  const stars = [...deck.querySelectorAll(".result-star")];
  const previous = getReportPage(deck);
  const page = Math.max(0, Math.min(nextIndex, sections.length - 1));
  const activeStar = getStarIndexForSection(page, sections.length, stars.length);
  const direction = page > previous ? "next" : page < previous ? "prev" : "still";
  deck.classList.remove("turn-next", "turn-prev");
  if (direction !== "still") {
    deck.classList.add(`turn-${direction}`);
    window.setTimeout(() => deck.classList.remove("turn-next", "turn-prev"), 700);
  }
  deck.dataset.page = String(page);
  sections.forEach((section, index) => {
    const active = index === page;
    section.classList.toggle("is-current", active);
    section.classList.toggle("is-revealed", active);
  });
  stars.forEach((star, index) => {
    star.classList.toggle("is-active", index === activeStar);
    star.classList.toggle("is-lit", index <= activeStar);
    star.setAttribute("aria-current", index === activeStar ? "step" : "false");
  });
  const title = sections[page]?.querySelector("h3")?.textContent || "结果";
  deck.dataset.theme = sections[page]?.dataset.theme || "reading";
  deck.querySelector("#resultPageTitle").textContent = title;
  deck.querySelector("#resultCurrentTitle").textContent = title;
  deck.querySelector("#resultPageCount").textContent = `${page + 1} / ${sections.length}`;
  deck.querySelector("#resultNavTitle").textContent = title;
  deck.querySelector("#resultNavHint").textContent = page >= sections.length - 1 ? "右滑回上一签" : "左滑看下一签";
  const prevButton = deck.querySelector('[data-report-nav="prev"]');
  const nextButton = deck.querySelector('[data-report-nav="next"]');
  prevButton.disabled = page === 0;
  nextButton.disabled = page === sections.length - 1;
}

function buildOracleTitle(chart) {
  if (chart.strength.level === "weak") return "先藏锋，后发令";
  if (chart.strength.level === "strong") return "收其势，成其器";
  return "守中宫，择一门";
}

function buildOracleText(chart) {
  const usefulText = chart.usefulElements.join("、");
  const profile = elementProfiles[chart.dominantElement];
  if (chart.strength.level === "weak") {
    return `此盘宜先补${usefulText}，重要事务先找资源、搭框架、定节奏，再进入竞争。${profile.balance}`;
  }
  if (chart.strength.level === "strong") {
    return `此盘宜泄秀制衡，补${usefulText}可把强执行力转成成果。越是关键时刻，越要复盘与倾听。`;
  }
  return `此盘贵在中和，补${usefulText}可以让节奏更清楚。保持一到两个核心目标，少平均用力。`;
}

function formatTermTime(utcMs, timezone) {
  return `${formatParts(getUtcParts(utcMs + timezone * hourMs))} UTC${timezone >= 0 ? "+" : ""}${timezone}`;
}

function formatParts(parts) {
  return `${parts.year}-${pad2(parts.month)}-${pad2(parts.day)} ${pad2(parts.hour)}:${pad2(parts.minute)}`;
}

function formatSignedMinutes(value) {
  const sign = value >= 0 ? "+" : "-";
  const absolute = Math.abs(value);
  const minutes = Math.floor(absolute);
  const seconds = Math.round((absolute - minutes) * 60);
  return `${sign}${minutes}分${pad2(seconds)}秒`;
}

function getYearBoundaryLabel(value) {
  return { lichun: "立春起年", dongzhi: "冬至换年", calendar: "公历年对照" }[value];
}

function getDayBoundaryLabel(value) {
  return { zi: "子初 23:00 换日", midnight: "正子 00:00 换日" }[value];
}

function getUtcParts(ms) {
  const date = new Date(ms);
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
    hour: date.getUTCHours(),
    minute: date.getUTCMinutes()
  };
}

function getJulianDayNumber(year, month, day) {
  const a = Math.floor((14 - month) / 12);
  const y = year + 4800 - a;
  const m = month + 12 * a - 3;
  return day
    + Math.floor((153 * m + 2) / 5)
    + 365 * y
    + Math.floor(y / 4)
    - Math.floor(y / 100)
    + Math.floor(y / 400)
    - 32045;
}

function toJulianDay(ms) {
  return ms / msPerDay + 2440587.5;
}

function normalizeDegrees(value) {
  return mod(value, 360);
}

function angleDiff(value, target) {
  return mod(value - target + 540, 360) - 180;
}

function sinDeg(value) {
  return Math.sin(value * Math.PI / 180);
}

function mod(value, divisor) {
  return ((value % divisor) + divisor) % divisor;
}

function pad2(value) {
  return String(value).padStart(2, "0");
}

function drawStarField() {
  const canvas = document.querySelector("#starCanvas");
  const context = canvas.getContext("2d");
  const ratio = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  context.clearRect(0, 0, width, height);

  const centerX = width * 0.68;
  const centerY = height * 0.22;
  const radius = Math.min(width, height) * 0.38;
  context.strokeStyle = "rgba(255, 222, 159, 0.16)";
  context.lineWidth = 1;
  for (let index = 0; index < 7; index += 1) {
    context.beginPath();
    context.arc(centerX, centerY, radius * (0.2 + index * 0.13), 0, Math.PI * 2);
    context.stroke();
  }

  context.strokeStyle = "rgba(255, 222, 159, 0.11)";
  for (let index = 0; index < 24; index += 1) {
    const angle = Math.PI * 2 * index / 24 - Math.PI / 2;
    context.beginPath();
    context.moveTo(centerX, centerY);
    context.lineTo(centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius);
    context.stroke();
  }

  context.fillStyle = "rgba(255, 226, 170, 0.48)";
  for (let index = 0; index < 120; index += 1) {
    const x = (index * 137.5) % width;
    const y = (index * 89.3) % height;
    const size = 0.7 + ((index * 19) % 18) / 15;
    context.beginPath();
    context.arc(x, y, size, 0, Math.PI * 2);
    context.fill();
  }
}
