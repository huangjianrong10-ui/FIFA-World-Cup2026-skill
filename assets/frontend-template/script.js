const cityData = {
  west: {
    route: "桃園出發，先進洛杉磯調整時差，再接舊金山灣區或西雅圖。適合想降低移動壓力、把觀賽和城市走訪放在同一條線上的球迷。",
    base: 92000,
    risks: ["西岸熱門城市住宿波動大，建議球票確認後立刻鎖房。", "比賽日請避開尖峰開車進場，優先查大眾運輸與接駁。"]
  },
  central: {
    route: "以達拉斯或休士頓作為主基地，再用國內線銜接堪薩斯城或亞特蘭大。適合想追多場比賽、願意把移動效率放在舒適度前面的球迷。",
    base: 98000,
    risks: ["中南部夏季高溫明顯，白天活動要留補水與休息時間。", "城市距離較遠，國內線延誤會影響隔天行程。"]
  },
  east: {
    route: "以紐約紐澤西為核心，搭配費城或波士頓；若加入邁阿密，建議獨立安排一段航班。適合重視城市體驗與淘汰賽氣氛的球迷。",
    base: 108000,
    risks: ["東岸住宿與交通費較高，預算要留 15% 緩衝。", "深夜散場請先確認返程車班或共乘上車點。"]
  }
};

const tasks = [
  "確認護照效期與 ESTA 資格，申請狀態不要拖到出發前。",
  "球票與住宿先處理，城市移動等賽程更明朗後再微調。",
  "每段跨城市移動至少保留半天緩衝，避免比賽日當天長途轉乘。"
];

const els = {
  city: document.querySelector("#city"),
  days: document.querySelector("#days"),
  matches: document.querySelector("#matches"),
  budget: document.querySelector("#budget"),
  daysOut: document.querySelector("#daysOut"),
  matchesOut: document.querySelector("#matchesOut"),
  score: document.querySelector("#score"),
  status: document.querySelector("#status"),
  route: document.querySelector("#route"),
  cost: document.querySelector("#cost"),
  tasks: document.querySelector("#tasks"),
  risks: document.querySelector("#risks"),
  run: document.querySelector("#run")
};

function twd(amount) {
  return new Intl.NumberFormat("zh-TW", {
    style: "currency",
    currency: "TWD",
    maximumFractionDigits: 0
  }).format(amount);
}

function render() {
  const data = cityData[els.city.value];
  const days = Number(els.days.value);
  const matches = Number(els.matches.value);
  const budget = Number(els.budget.value);
  const estimate = data.base + days * 5200 + matches * 18500;
  const gap = budget - estimate;
  const score = Math.max(42, Math.min(96, 78 + Math.floor(gap / 9000) - Math.max(0, matches - 3) * 5));

  els.daysOut.textContent = `${days} 天`;
  els.matchesOut.textContent = `${matches} 場`;
  els.score.textContent = score;
  els.score.style.color = score >= 75 ? "var(--green)" : score >= 60 ? "var(--gold)" : "var(--red)";
  els.status.textContent = score >= 75
    ? "節奏穩定，適合第一次赴美看球。"
    : score >= 60
      ? "可以成行，但預算與移動緩衝要再拉開。"
      : "行程偏硬，建議減少城市或提高預算。";
  els.route.textContent = data.route;
  els.cost.textContent = `以 ${days} 天、${matches} 場估算，每人約 ${twd(estimate)}。目前預算 ${twd(budget)}，${gap >= 0 ? `尚有 ${twd(gap)} 緩衝。` : `約超出 ${twd(Math.abs(gap))}。`}`;
  els.tasks.innerHTML = tasks.map((item) => `<li>${item}</li>`).join("");
  els.risks.innerHTML = data.risks.map((item) => `<li>${item}</li>`).join("");
}

["input", "change"].forEach((eventName) => {
  [els.city, els.days, els.matches, els.budget].forEach((el) => el.addEventListener(eventName, render));
});
els.run.addEventListener("click", render);
render();
