const trigramMap = {
  "111": { name: "乾", image: "天", element: "金", meaning: "主动、规则、决断" },
  "110": { name: "兑", image: "泽", element: "金", meaning: "沟通、交换、悦纳" },
  "101": { name: "离", image: "火", element: "火", meaning: "看见、表达、曝光" },
  "100": { name: "震", image: "雷", element: "木", meaning: "启动、震动、突发" },
  "011": { name: "巽", image: "风", element: "木", meaning: "渗透、协商、慢入" },
  "010": { name: "坎", image: "水", element: "水", meaning: "风险、反复、信息差" },
  "001": { name: "艮", image: "山", element: "土", meaning: "停止、边界、观察" },
  "000": { name: "坤", image: "地", element: "土", meaning: "承接、等待、配合" }
};

const hexagramNames = {
  "乾乾": "乾为天", "乾兑": "天泽履", "乾离": "天火同人", "乾震": "天雷无妄", "乾巽": "天风姤", "乾坎": "天水讼", "乾艮": "天山遁", "乾坤": "天地否",
  "兑乾": "泽天夬", "兑兑": "兑为泽", "兑离": "泽火革", "兑震": "泽雷随", "兑巽": "泽风大过", "兑坎": "泽水困", "兑艮": "泽山咸", "兑坤": "泽地萃",
  "离乾": "火天大有", "离兑": "火泽睽", "离离": "离为火", "离震": "火雷噬嗑", "离巽": "火风鼎", "离坎": "火水未济", "离艮": "火山旅", "离坤": "火地晋",
  "震乾": "雷天大壮", "震兑": "雷泽归妹", "震离": "雷火丰", "震震": "震为雷", "震巽": "雷风恒", "震坎": "雷水解", "震艮": "雷山小过", "震坤": "雷地豫",
  "巽乾": "风天小畜", "巽兑": "风泽中孚", "巽离": "风火家人", "巽震": "风雷益", "巽巽": "巽为风", "巽坎": "风水涣", "巽艮": "风山渐", "巽坤": "风地观",
  "坎乾": "水天需", "坎兑": "水泽节", "坎离": "水火既济", "坎震": "水雷屯", "坎巽": "水风井", "坎坎": "坎为水", "坎艮": "水山蹇", "坎坤": "水地比",
  "艮乾": "山天大畜", "艮兑": "山泽损", "艮离": "山火贲", "艮震": "山雷颐", "艮巽": "山风蛊", "艮坎": "山水蒙", "艮艮": "艮为山", "艮坤": "山地剥",
  "坤乾": "地天泰", "坤兑": "地泽临", "坤离": "地火明夷", "坤震": "地雷复", "坤巽": "地风升", "坤坎": "地水师", "坤艮": "地山谦", "坤坤": "坤为地"
};

const topicNames = {
  general: "综合问事",
  choice: "选择问事",
  relationship: "感情问事",
  career: "工作问事",
  wealth: "财富问事",
  study: "学业考试",
  document: "文书手续",
  message: "消息等待",
  travel: "出行迁动",
  lost: "失物寻找",
  cooperation: "合作交易",
  family: "家宅人事",
  wellbeing: "身心状态",
  timing: "近期问事",
  other: "日常问事"
};

const topicProfiles = {
  general: { focus: "这件事有没有入口、哪里能先动。" },
  choice: { focus: "现在该推进、等待，还是换个做法。" },
  relationship: { focus: "对方有没有真实回应，关系会不会继续靠近。" },
  career: { focus: "机会是否靠谱，职责、资源、回报清不清楚。" },
  wealth: { focus: "钱从哪里来、什么时候到、风险谁承担。" },
  study: { focus: "准备是否够稳，短板在哪里。" },
  document: { focus: "材料、流程、审核人和截止时间会不会卡住。" },
  message: { focus: "对方会不会回，消息有没有落地的迹象。" },
  travel: { focus: "时间、路线、同行人和备用方案是否稳妥。" },
  lost: { focus: "线索是否连续，能不能顺着路径找回。" },
  cooperation: { focus: "对方是否靠谱，分工和钱是否说清楚。" },
  family: { focus: "谁能协调，谁能拍板，情绪会不会放大问题。" },
  wellbeing: { focus: "压力从哪里来，近期该收还是该放。" },
  timing: { focus: "短期会不会有新消息、新动作。" },
  other: { focus: "眼前最该处理的是哪一个点。" }
};

const topicAdvice = {
  general: {
    good: "这件事有可操作的入口，先抓一个最明确的点推进。",
    mixed: "局面还没完全定型，先把事实和猜测分开。",
    blocked: "现在不宜急着求结果，先把信息补齐再动。"
  },
  choice: {
    good: "可以推进，但要先定一个小试点，不要一次把筹码全压上。",
    mixed: "这件事还在摇摆，先收集一个关键事实，再做决定。",
    blocked: "现在不适合硬推，先停一下，等条件更清楚再动。"
  },
  relationship: {
    good: "关系里有回应空间，适合用具体行动确认，而不是靠猜。",
    mixed: "关系没有完全关上，但节奏不稳，先看对方是否持续行动。",
    blocked: "现在情绪和现实阻力偏多，不适合逼问结果。"
  },
  career: {
    good: "工作机会可以看，但要把职责、资源、回报写清楚。",
    mixed: "机会里有亮点，也有信息不完整的地方，先问清关键条件。",
    blocked: "这件事推进阻力偏大，先不要急着承诺。"
  },
  wealth: {
    good: "偏向靠技能和交付得财，不像突然横财。",
    mixed: "有收入机会，但现金流节奏不稳，先控支出。",
    blocked: "不宜冲动投入，先把账算清。"
  },
  study: {
    good: "学业或考试有可准备的抓手，按重点复盘比临时焦虑更有效。",
    mixed: "结果还受准备程度影响，先补最薄弱的一块。",
    blocked: "目前基础不够稳，不适合只靠临场发挥。"
  },
  document: {
    good: "文书手续有推进空间，关键是材料齐、流程清。",
    mixed: "流程里可能有补件或反复，先确认要求再提交。",
    blocked: "容易卡在材料、规则或审批上，先别急着定结果。"
  },
  message: {
    good: "消息有机会落地，但要看对方是否给出明确动作。",
    mixed: "消息会有波动，别只盯一句话，先看后续是否连续。",
    blocked: "短期回应偏慢，先不要用频繁催促换确定感。"
  },
  travel: {
    good: "出行或迁动可以考虑，但要提前确认时间、路线和人。",
    mixed: "行程有变数，适合留备用方案。",
    blocked: "现在不宜仓促行动，容易被时间、交通或沟通卡住。"
  },
  lost: {
    good: "还有寻找空间，先回到最后一次确认的位置。",
    mixed: "能不能找回取决于线索是否清楚，先按路径倒查。",
    blocked: "线索偏散，先降低期待，重点止损。"
  },
  cooperation: {
    good: "合作可以谈，但要把分工、钱和责任写清。",
    mixed: "对方有可取处，也有模糊处，先小范围试合作。",
    blocked: "合作条件不够清楚，容易后面扯皮。"
  },
  family: {
    good: "家里这件事可以用温和协商推进，不必硬碰硬。",
    mixed: "人情和现实条件交在一起，先分清谁能拍板。",
    blocked: "现在情绪容易放大问题，先把节奏放慢。"
  },
  wellbeing: {
    good: "状态有回稳空间，适合做减负和规律安排。",
    mixed: "近期状态有起伏，先把睡眠、节奏和压力源理清。",
    blocked: "不适合硬扛，先减少消耗，必要时找现实支持。"
  },
  timing: {
    good: "近期可以动，动作要小而连续。",
    mixed: "近期有变化，但不宜急着下结论。",
    blocked: "近期宜守，先观察三天到一周。"
  },
  other: {
    good: "整体可动，先从最小的一步开始。",
    mixed: "局面有变数，先确认信息，再行动。",
    blocked: "先收住，不要在信息不完整时做大决定。"
  }
};

const stageEls = {
  entry: document.querySelector("#entryStage"),
  cast: document.querySelector("#castStage"),
  result: document.querySelector("#resultStage")
};

const form = document.querySelector("#oracleForm");
const questionInput = document.querySelector("#questionInput");
const lineBox = document.querySelector("#hexagramLines");
const coinTray = document.querySelector("#coinTray");
const castButton = document.querySelector("#castButton");
const autoCastButton = document.querySelector("#autoCastButton");
const castTitle = document.querySelector("#castTitle");
const castHint = document.querySelector("#castHint");
const resultTopic = document.querySelector("#resultTopic");
const resultTitle = document.querySelector("#resultTitle");
const resultCount = document.querySelector("#resultCount");
const miniHexagram = document.querySelector("#miniHexagram");
const signStage = document.querySelector("#signStage");
const prevSign = document.querySelector("#prevSign");
const nextSign = document.querySelector("#nextSign");
const signName = document.querySelector("#signName");
const signHint = document.querySelector("#signHint");
const restartButton = document.querySelector("#restartButton");

const state = {
  question: "",
  topic: "general",
  lines: [],
  pages: [],
  page: 0,
  turningTimer: 0,
  autoTimer: 0,
  autoCasting: false,
  startX: 0,
  startY: 0,
  swiping: false
};

initLines();

document.querySelectorAll("[data-template]").forEach((button) => {
  button.addEventListener("click", () => {
    questionInput.value = button.dataset.template;
    const topicInput = button.dataset.topic ? form.querySelector(`[name="topic"][value="${button.dataset.topic}"]`) : null;
    if (topicInput) topicInput.checked = true;
    questionInput.focus();
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  state.question = questionInput.value.trim() || "心中默念之事";
  state.topic = new FormData(form).get("topic") || "general";
  resetCast();
  setStage("cast");
  window.setTimeout(autoCast, 360);
});

castButton.addEventListener("click", () => throwOneLine());
autoCastButton.addEventListener("click", autoCast);
prevSign.addEventListener("click", () => setResultPage(state.page - 1, "prev"));
nextSign.addEventListener("click", () => setResultPage(state.page + 1, "next"));
restartButton.addEventListener("click", () => {
  window.clearInterval(state.autoTimer);
  resetCast();
  setStage("entry");
});

signStage.addEventListener("touchstart", (event) => {
  const touch = event.touches[0];
  if (!touch) return;
  state.startX = touch.clientX;
  state.startY = touch.clientY;
  state.swiping = true;
}, { passive: true });

signStage.addEventListener("touchmove", (event) => {
  if (!state.swiping) return;
  const touch = event.touches[0];
  if (!touch) return;
  const dx = touch.clientX - state.startX;
  const dy = touch.clientY - state.startY;
  if (Math.abs(dx) > 18 && Math.abs(dx) > Math.abs(dy) * 1.15) event.preventDefault();
}, { passive: false });

signStage.addEventListener("touchend", (event) => {
  if (!state.swiping) return;
  state.swiping = false;
  const touch = event.changedTouches[0];
  if (!touch) return;
  finishSwipe(touch.clientX - state.startX, touch.clientY - state.startY);
}, { passive: true });

function setStage(stage) {
  document.body.dataset.stage = stage;
  Object.entries(stageEls).forEach(([key, element]) => {
    element.classList.toggle("is-active", key === stage);
  });
  window.scrollTo(0, 0);
}

function initLines() {
  lineBox.replaceChildren();
  for (let index = 0; index < 6; index += 1) {
    const row = document.createElement("div");
    row.className = "yao-line";
    row.dataset.index = String(index);
    row.innerHTML = `
      <span class="yao-index">${String(index + 1).padStart(2, "0")}</span>
      <span class="yao-stroke"><i></i><i></i></span>
      <span class="yao-mark">待摇</span>
    `;
    lineBox.append(row);
  }
  updateLineState();
}

function resetCast() {
  window.clearInterval(state.autoTimer);
  state.lines = [];
  state.pages = [];
  state.page = 0;
  state.autoCasting = false;
  castButton.disabled = false;
  autoCastButton.disabled = false;
  castHint.textContent = "轻点铜钱，连续摇 6 次生成结果。";
  initLines();
}

function throwOneLine() {
  if (state.lines.length >= 6) return;
  castButton.disabled = true;
  autoCastButton.disabled = true;
  coinTray.classList.remove("is-throwing");
  void coinTray.offsetWidth;
  coinTray.classList.add("is-throwing");

  window.setTimeout(() => {
    const line = createLine();
    state.lines.push(line);
    updateCoins(line);
    updateLineState();
    castButton.disabled = state.autoCasting || state.lines.length >= 6;
    autoCastButton.disabled = state.autoCasting || state.lines.length >= 6;
    if (state.lines.length >= 6) {
      state.autoCasting = false;
      castHint.textContent = "结果已成，正在整理判断。";
      window.setTimeout(showResult, 900);
    }
  }, 520);
}

function autoCast() {
  if (state.lines.length >= 6) return;
  state.autoCasting = true;
  castButton.disabled = true;
  autoCastButton.disabled = true;
  throwOneLine();
  state.autoTimer = window.setInterval(() => {
    if (state.lines.length >= 6) {
      window.clearInterval(state.autoTimer);
      return;
    }
    throwOneLine();
  }, 780);
}

function createLine() {
  const coins = Array.from({ length: 3 }, () => Math.random() > 0.5 ? "阳" : "阴");
  const yangCount = coins.filter((coin) => coin === "阳").length;
  if (yangCount === 3) return { coins, yang: true, moving: true, label: "动静很大" };
  if (yangCount === 2) return { coins, yang: false, moving: false, label: "先稳住" };
  if (yangCount === 1) return { coins, yang: true, moving: false, label: "可推进" };
  return { coins, yang: false, moving: true, label: "会有变化" };
}

function updateCoins(line) {
  [...coinTray.querySelectorAll(".coin")].forEach((coin, index) => {
    coin.textContent = line.coins[index] === "阳" ? "正" : "反";
  });
}

function updateLineState() {
  const rows = [...lineBox.querySelectorAll(".yao-line")];
  rows.forEach((row, index) => {
    const line = state.lines[index];
    row.classList.toggle("is-active", index === state.lines.length && state.lines.length < 6);
    row.classList.toggle("is-filled", Boolean(line));
    row.classList.toggle("is-yin", line ? !line.yang : false);
    row.classList.toggle("is-moving", line?.moving || false);
    row.querySelector(".yao-mark").textContent = line ? line.label : "待摇";
  });
  castTitle.textContent = state.lines.length >= 6 ? "结果成形" : `第 ${state.lines.length + 1} 次`;
}

function showResult() {
  const reading = buildReading();
  state.pages = reading.pages;
  resultTopic.textContent = topicNames[state.topic] || "问事";
  resultTitle.textContent = reading.title;
  renderPages();
  setResultPage(0);
  setStage("result");
}

function buildReading() {
  const lower = getTrigram(state.lines.slice(0, 3));
  const upper = getTrigram(state.lines.slice(3, 6));
  const moving = state.lines.filter((line) => line.moving).length;
  const yang = state.lines.filter((line) => line.yang).length;
  const tone = getTone(yang, moving);
  const advice = topicAdvice[state.topic]?.[tone] || topicAdvice.other[tone];
  const doDont = getDoDont(state.topic, tone);
  const profile = topicProfiles[state.topic] || topicProfiles.other;
  const question = state.question;
  const hexagram = getHexagram(upper, lower);
  const title = hexagram.name;
  const imageReading = getImageReading(upper, lower, hexagram, tone);
  const directSummary = getDirectSummary(upper, lower, tone);
  const changeText = moving
    ? `这次有 ${moving} 个变化点，意思是事情还会动，不是现在看到的样子就定死了。`
    : "这次变化点少，说明短期不会突然反转，更适合稳住节奏。";

  return {
    title,
    pages: [
      {
        label: "01",
        kind: "field",
        motif: "卦",
        title: "这卦像什么",
        lead: `这次是「${hexagram.name}」。翻译成人话：${directSummary}`,
        points: [
          imageReading,
          `外部重点：${getOuterText(upper)}。你这边先做：${getInnerText(lower)}。`,
          "先别急着问吉凶。你先看它像不像你现在遇到的处境，再往下看建议。"
        ],
        ...doDont
      },
      {
        label: "02",
        kind: "verdict",
        motif: "断",
        title: "先说结论",
        lead: advice,
        points: [
          question === "心中默念之事" ? "你没有写出问题也没关系，就按你刚才心里默念的那件事看。" : `你问的是：${question}`,
          `这次重点看：${profile.focus}`
        ],
        ...doDont
      },
      {
        label: "03",
        kind: "field",
        motif: "势",
        title: "这事有没有机会",
        lead: getSceneLead(hexagram, upper, lower, tone),
        points: [
          getSuccessSignal(tone, moving),
          getBlockSignal(upper, lower, tone),
          getQuestionMirror(state.topic, tone),
          "如果你心里问的是“能不能成”，就看三件事：有没有入口、哪里卡住、接下来有没有新反馈。"
        ],
        ...doDont
      },
      {
        label: "04",
        kind: "change",
        motif: "变",
        title: "后面会不会变",
        lead: changeText,
        points: [
          moving >= 3 ? "变数偏多，别把话说太满，也别一次投入太多。" : "变化不算失控，可以先做一个小动作试探。",
          "如果接下来几天没有新反馈，就先按保守方案处理。"
        ],
        ...doDont
      },
      {
        label: "05",
        kind: "outside",
        motif: "外",
        title: "容易卡在哪里",
        lead: getExternalText(upper, state.topic),
        points: [
          "别只看别人说了什么，更要看对方有没有连续动作。",
          "最怕的是信息不完整，你自己先脑补一大堆。先确认事实，再判断。"
        ],
        ...doDont
      },
      {
        label: "06",
        kind: "trend",
        motif: "趋",
        title: "接下来怎么走",
        lead: getTrendText(tone, moving),
        points: [
          getPaceText(moving),
          "真要推进，先做低成本验证。不要一下子压上太多钱、情绪或承诺。"
        ],
        ...doDont
      },
      {
        label: "07",
        kind: "action",
        motif: "行",
        title: "今天先做什么",
        lead: getActionLead(state.topic),
        points: [
          getActionPoint(state.topic),
          "别把这次结果当成命令。它更像提醒你：现在先抓哪一步，别被情绪带着跑。"
        ],
        ...doDont
      }
    ]
  };
}

function getTrigram(lines) {
  const key = lines.map((line) => line.yang ? "1" : "0").join("");
  return trigramMap[key] || trigramMap["000"];
}

function getHexagram(upper, lower) {
  return {
    name: hexagramNames[`${upper.name}${lower.name}`] || `${upper.image}${lower.image}之象`
  };
}

function getDirectSummary(upper, lower, tone) {
  const toneText = {
    good: "这件事不是死局，有推进空间，但要按步骤来。",
    mixed: "这件事还没定，别急着押结论，先看下一步反馈。",
    blocked: "这件事现在卡得比较明显，先处理阻力，再谈结果。"
  }[tone];
  return `${toneText}外面主要是${getOuterText(upper)}，你这边先做的是${getInnerText(lower)}。`;
}

function getOuterText(trigram) {
  const map = {
    乾: "规则、压力或必须拍板的决定",
    兑: "沟通、承诺和别人给不给反馈",
    离: "事情被看见、说清楚、摊到明面上",
    震: "突然变化、新消息或有人开始行动",
    巽: "慢慢协商、绕开硬碰硬的推进",
    坎: "风险、反复和信息不清",
    艮: "边界、规则或某个人的态度卡住",
    坤: "等待、配合和现实条件能不能承接"
  };
  return map[trigram.name] || getPlainImage(trigram);
}

function getInnerText(trigram) {
  const map = {
    乾: "先定规则、做决定，不要拖着不表态",
    兑: "先开口沟通，拿到真实反馈",
    离: "先把话说清，把事实摆到明面上",
    震: "先做一个小动作，让事情有反馈",
    巽: "先慢慢谈，不要硬推",
    坎: "先查清风险和信息缺口",
    艮: "先停一下，守住边界再判断",
    坤: "先配合现实条件，等局面接得住"
  };
  return map[trigram.name] || getPlainImage(trigram);
}

function getPlainImage(trigram) {
  const map = {
    乾: "规则、压力、必须做决定的力量",
    兑: "沟通、交换、有人开口或给反馈",
    离: "事情被看见、说清楚、摊到明面上",
    震: "突然启动、变化、消息或动作来了",
    巽: "慢慢渗透、需要商量、不能硬推",
    坎: "风险、反复、信息不清楚",
    艮: "停住、边界、暂时过不去",
    坤: "等待、承接、先配合局面"
  };
  return map[trigram.name] || trigram.meaning;
}

function getImageReading(upper, lower, hexagram, tone) {
  const toneText = {
    good: "整体看，不是没机会。更像是已经有路，但要顺着路走，不能乱冲。",
    mixed: "整体看，不是一句好或坏能说完。像是有希望，但中间还有没弄清的地方。",
    blocked: "整体看，卡点比较明显。不是说一定不成，而是现在人、条件或时机还没对上。"
  }[tone];

  return `放到现实里看，就是别只凭感觉下判断；看条件有没有讲清、对方有没有行动、你自己有没有下一步。${toneText}`;
}

function getSceneLead(hexagram, upper, lower, tone) {
  if (tone === "good") return "有机会，但要靠稳扎稳打，不是靠赌一把。";
  if (tone === "blocked") return "现在有明显阻力，先别硬推，先看哪里卡住。";
  return "现在还不能直接定成败，要看下一步有没有反馈。";
}

function getSuccessSignal(tone, moving) {
  if (tone === "good") return moving ? "能成的信号：已经有动静了，只要反馈继续出现，就可以小步推进。" : "能成的信号：局面比较稳，适合按计划慢慢做。";
  if (tone === "blocked") return "能成的信号：先别看大结果，先看卡住的地方能不能被打通。";
  return "能成的信号：不是没有机会，但要先看下一次回复、下一步动作、下一条线索。";
}

function getBlockSignal(upper, lower, tone) {
  if (tone === "blocked") return `会卡的地方：${getPlainImage(upper)}压在${getPlainImage(lower)}上，容易出现“想动但动不了”的感觉。`;
  if (upper.name === "坎" || lower.name === "坎") return "会卡的地方：信息不清、风险没算明白，容易反复。";
  if (upper.name === "艮" || lower.name === "艮") return "会卡的地方：边界、规则或某个人的态度让事情停住。";
  return "会卡的地方：不是大阻碍，而是细节、沟通和节奏没对齐。";
}

function getQuestionMirror(topic, tone) {
  if (topic === "general") {
    if (tone === "good") return "如果你心里问“能不能成”，答案偏向：有机会，但要靠你接下来怎么做。";
    if (tone === "blocked") return "如果你心里问“能不能成”，答案偏向：现在还卡着，先别急着下定论。";
    return "如果你心里问“能不能成”，答案偏向：还在中间状态，先看下一步反馈。";
  }
  if (topic === "relationship") return "放到感情里看，重点不是一句承诺，而是对方是否持续靠近、持续回应。";
  if (topic === "career") return "放到事业里看，重点不是机会听起来多好，而是职责、资源、回报是否真的清楚。";
  if (topic === "wealth") return "放到财物里看，重点不是想象收益，而是钱从哪里来、什么时候到、风险谁承担。";
  if (topic === "message") return "放到消息等待里看，重点是对方有没有动作链条，不只看你自己有多想等到。";
  if (topic === "lost") return "放到失物寻找里看，重点是线索是否连续：最后看见、最后使用、谁接触过。";
  return "把它放回你所求的事情里，看它对应的是顺、阻、变，还是需要先停下观察。";
}

function getTone(yang, moving) {
  if (yang >= 4 && moving <= 2) return "good";
  if (yang <= 2 && moving >= 2) return "blocked";
  return "mixed";
}

function getExternalText(upper, topic) {
  if (topic === "relationship") return "关系里的关键不是对方说了什么，而是有没有稳定靠近。";
  if (topic === "wealth") return "钱的关键不是想象收益，而是规则、时间和风险是否清楚。";
  if (topic === "career") return "工作的关键是职责、资源、回报、对接人是否明确。";
  if (topic === "study") return "学业考试的关键是准备节奏，不是临时焦虑。";
  if (topic === "document") return "文书手续的关键是材料、流程、审核人和截止时间。";
  if (topic === "message") return "消息能不能来，关键看对方有没有已经在行动。";
  if (topic === "travel") return "出行迁动的关键是时间、路线、同行人和备用方案。";
  if (topic === "lost") return "找东西的关键是线索连续：最后看见、最后使用、谁碰过。";
  if (topic === "cooperation") return "合作的关键是分工、钱、责任，不能只靠口头感觉。";
  if (topic === "family") return "家里事情的关键是谁能协调，谁能真正拍板。";
  if (topic === "wellbeing") return "身心状态的关键是先减少消耗，不要硬撑。";
  if (topic === "timing") return "短期走势的关键是最先出现的新消息和新动作。";
  return "外部影响不小，先别只凭自己的想法判断。";
}

function getTrendText(tone, moving) {
  if (tone === "good") return moving ? "接下来可以动，但要一步一步来。" : "接下来偏稳，可以按原计划慢慢推进。";
  if (tone === "blocked") return "接下来会比较卡，短期更适合先停一下、看清楚。";
  return "接下来有机会，也有变数，适合先试一小步。";
}

function getPaceText(moving) {
  if (moving === 0) return "短期不会变得很快，重点是稳住节奏。";
  if (moving <= 2) return "会有一两个关键变化，重点看最先出现的新消息。";
  return "变化点比较多，先别急着做最终决定。";
}

function getActionLead(topic) {
  if (topic === "general") return "先把问题收成一件具体事。";
  if (topic === "relationship") return "先用具体沟通换真实反馈。";
  if (topic === "wealth") return "先看现金流，再看机会大小。";
  if (topic === "career") return "先确认职责边界，再决定投入程度。";
  if (topic === "choice") return "先做小验证，再做大决定。";
  if (topic === "study") return "先补最薄弱的一块，再看结果。";
  if (topic === "document") return "先核材料和流程，再推进。";
  if (topic === "message") return "先看真实回应，不靠反复猜。";
  if (topic === "travel") return "先确认时间、路线和备用方案。";
  if (topic === "lost") return "先按时间线倒查，不要乱翻。";
  if (topic === "cooperation") return "先小合作试规则，再谈大投入。";
  if (topic === "family") return "先找能协调的人，不急着争对错。";
  if (topic === "wellbeing") return "先减负，再恢复节奏。";
  if (topic === "timing") return "先观察窗口，再决定动作大小。";
  return "先把事情拆小，今天只做最关键一步。";
}

function getActionPoint(topic) {
  if (topic === "general") return "把问题改写成一句话：我现在要不要做某个具体动作。";
  if (topic === "relationship") return "这周别逼问结论，约一次具体沟通，看对方是否愿意给清晰回应。";
  if (topic === "wealth") return "先列一张账：固定收入、固定支出、可动现金和未来三个月压力。";
  if (topic === "career") return "把机会写成三项：能学到什么、要付出什么、谁来承担结果。";
  if (topic === "choice") return "给自己设一个截止点：再确认一个关键事实后就做决定。";
  if (topic === "study") return "今天先复盘一套题或一章重点，把错因写出来再决定下一步。";
  if (topic === "document") return "先列材料清单：缺什么、谁审核、什么时候能给回复。";
  if (topic === "message") return "先等一个明确时间点，到点仍无回复，再换一种沟通方式。";
  if (topic === "travel") return "把路线、天气、同行人和备用方案确认一遍，再决定出发。";
  if (topic === "lost") return "按最后看见、最后使用、谁接触过三个线索依次排查。";
  if (topic === "cooperation") return "先用一个小任务测试对方是否守时、透明、愿意承担。";
  if (topic === "family") return "先找一个能冷静说话的人，把事情从情绪里分出来。";
  if (topic === "wellbeing") return "今天先减少一个消耗源，固定睡眠或饮食节奏，不做硬撑式决定。";
  if (topic === "timing") return "设一个三天到一周的观察期，记录新消息和实际变化。";
  return "今天先发出一个低成本动作，观察真实反馈，不靠想象推进。";
}

function getDoDont(topic, tone) {
  const shared = {
    general: ["先把问题说具体", "不要同时问很多件事"],
    choice: ["先确认一个关键事实", "不要为了快点结束焦虑而乱决定"],
    relationship: ["看持续行动，不只听表态", "不要用逼问换安全感"],
    career: ["问清职责、资源和回报", "不要在条件模糊时先承诺"],
    wealth: ["先算现金流和风险边界", "不要冲动加码投入"],
    study: ["补最薄弱的考点", "不要用焦虑代替复习"],
    document: ["核对材料和时限", "不要在规则不清时反复提交"],
    message: ["等一个明确节点", "不要连续催促消耗关系"],
    travel: ["准备备用路线", "不要临时冒进"],
    lost: ["按时间线倒查", "不要没有线索地乱翻"],
    cooperation: ["先小范围试合作", "不要口头承诺大投入"],
    family: ["先找能协调的人", "不要把情绪当结论"],
    wellbeing: ["先减负和恢复节奏", "不要硬扛消耗"],
    timing: ["用三天到一周观察变化", "不要把短期波动当最终结果"],
    other: ["先做最小一步验证", "不要把猜测当事实"]
  };
  const [good, avoid] = shared[topic] || shared.other;
  if (tone === "blocked") return { good: `${good}，并把节奏放慢`, avoid };
  if (tone === "good") return { good: `${good}，可以小步推进`, avoid };
  return { good: `${good}，边走边看反馈`, avoid };
}

function renderPages() {
  signStage.replaceChildren();
  miniHexagram.replaceChildren();
  state.lines.forEach((line) => {
    const row = document.createElement("span");
    row.className = `${line.yang ? "is-yang" : "is-yin"}${line.moving ? " is-moving" : ""}`;
    row.innerHTML = line.yang ? "<i></i>" : "<i></i><i></i>";
    miniHexagram.append(row);
  });
  state.pages.forEach((page, index) => {
    const card = document.createElement("article");
    card.className = `sign-card sign-${page.kind}`;
    card.dataset.index = String(index);
    card.innerHTML = `
      <span class="sign-motif" aria-hidden="true">${page.motif}</span>
      <span class="sign-label">${page.label}</span>
      <h3>${page.title}</h3>
      <p>${page.lead}</p>
      <ul class="plain-list">
        ${page.points.map((point) => `<li>${point}</li>`).join("")}
      </ul>
      <div class="advice-strip">
        <div><span>宜</span><strong>${page.good}</strong></div>
        <div><span>忌</span><strong>${page.avoid}</strong></div>
      </div>
    `;
    signStage.append(card);
  });
}

function setResultPage(nextIndex, direction = "next") {
  const cards = [...signStage.querySelectorAll(".sign-card")];
  if (!cards.length) return;
  const page = Math.max(0, Math.min(nextIndex, cards.length - 1));
  const previous = state.page;
  if (state.turningTimer) window.clearTimeout(state.turningTimer);
  cards.forEach((card) => card.classList.remove("is-exiting", "exit-next", "exit-prev", "enter-next", "enter-prev"));
  if (page !== previous) {
    const exitDirection = page > previous ? "next" : "prev";
    cards[previous]?.classList.add("is-exiting", `exit-${exitDirection}`);
    cards[page]?.classList.add(`enter-${exitDirection}`);
    state.turningTimer = window.setTimeout(() => {
      cards.forEach((card) => card.classList.remove("is-exiting", "exit-next", "exit-prev", "enter-next", "enter-prev"));
    }, 460);
  }
  state.page = page;
  cards.forEach((card, index) => card.classList.toggle("is-current", index === page));
  resultCount.textContent = `${page + 1} / ${cards.length}`;
  signName.textContent = state.pages[page].title;
  signHint.textContent = page >= cards.length - 1 ? "右滑回上一签" : "左滑看下一签";
  prevSign.disabled = page === 0;
  nextSign.disabled = page === cards.length - 1;
}

function finishSwipe(dx, dy) {
  if (Math.abs(dx) < 52 || Math.abs(dx) < Math.abs(dy) * 1.08) return;
  setResultPage(state.page + (dx < 0 ? 1 : -1), dx < 0 ? "next" : "prev");
}
