# FIFA World Cup 2026 台灣球迷行程規劃 Skill

這個 repository 是一個 Codex Skill，主題是「2026 世界盃台灣球迷赴美觀賽行程規劃」。它的核心用途是把使用者輸入的預算、天數、觀賽城市與想看幾場比賽，轉成可以直接執行的行程表、預算表、交通提醒、住宿建議、簽證與購票注意事項。

適合用在前往美國觀看 2026 FIFA World Cup 的台灣球迷服務情境，例如自由行規劃、觀賽團初步評估、旅遊服務提案、網頁工具內容產生，或將行程規劃結果輸出成 Markdown / HTML 報告。

## Skill 用途

使用者可以提供：

- 每人預算
- 行程天數
- 想去的美國主辦城市
- 想看幾場比賽
- 旅客型態，例如第一次赴美、朋友團、家庭旅遊、重度球迷
- 移動偏好，例如想少搭飛機、願意追多場、希望住宿固定

Skill 會協助產生：

- 行程摘要
- 建議路線
- 每日行程表
- 預算估算表
- 城市交通與住宿建議
- ESTA、護照、FIFA 官方球票與轉售風險提醒
- 天氣、航班延誤、深夜散場、匯率變動等風險控管
- 下一步待辦事項

## 使用方式

在 Codex 中使用這個 Skill 時，可以直接貼上：

```text
請使用 taiwan-worldcup-trip-planner skill，為前往美國參加 2026 世界盃的台灣球迷產出行程規劃。請查詢最新官方資料，並依使用者輸入的預算、天數、城市、想看幾場比賽，輸出行程表、預算表、交通提醒、住宿建議、簽證與購票注意事項，並提供 Markdown 與 HTML 版本。
```

這段指令也放在：

```text
assets/worldcup-trip-prompt.md
```

## Repository 結構

```text
.
├── assets/
│   ├── worldcup-trip-prompt.md
│   ├── content-snippets.md
│   └── frontend-template/
│       ├── index.html
│       ├── script.js
│       └── styles.css
├── references/
│   ├── official-sources.md
│   ├── itinerary-framework.md
│   ├── worldcup-trip-report-template.md
│   └── worldcup-trip-html-template.html
└── SKILL.md
```

## 檔案說明

### `SKILL.md`

Skill 的主要說明檔，定義這個 Skill 何時使用、要收集哪些輸入、輸出格式、規劃原則，以及如何套用在網頁作品。

### `assets/worldcup-trip-prompt.md`

一行可直接貼給 Codex 的使用指令，方便快速啟動這個 Skill。

### `assets/content-snippets.md`

可重用的台灣中文 UI 文案與風險提醒文字，避免產出過度制式或不自然的中文。

### `assets/frontend-template/`

靜態網頁模板，可改成展示作品「2026 世界盃台灣球迷行程規劃器」。作品邏輯類似標準公式計算器：

```text
預算 + 天數 + 城市 + 場次 + 移動強度 = 行程建議 + 預算估算 + 風險提醒
```

### `references/official-sources.md`

官方資料來源與查證規則，包含 FIFA 賽程、主辦城市、票務資訊，以及美國 ESTA / Visa Waiver Program 相關官方頁面。

### `references/itinerary-framework.md`

行程規劃框架，包含旅客輸入欄位、路線模式、預算模型與最後檢查清單。

### `references/worldcup-trip-report-template.md`

Markdown 版行程規劃報告範本，可輸出行程重點摘要、旅客條件、建議行程表、預算估算、交通住宿建議、簽證購票提醒、風險與資料來源。

### `references/worldcup-trip-html-template.html`

HTML 版深色報告範本，適合把規劃結果輸出成可展示的網頁格式。

## 基準資料

截至 2026-05-27，本 Skill 採用的基準資訊如下：

- 2026 世界盃時間：2026/6/11 至 2026/7/19。
- 賽事規模：48 隊、104 場比賽。
- 主辦國：美國、加拿大、墨西哥。
- 美國主辦城市包含 Atlanta、Boston、Dallas、Houston、Kansas City、Los Angeles、Miami、New York New Jersey、Philadelphia、San Francisco Bay Area、Seattle。

實際規劃時，若涉及賽程、票務、城市、入境規定或費用估算，應以 FIFA 與政府官方最新資訊為準。

## 輸出範例格式

Skill 產出的完整報告建議包含：

1. 行程重點摘要
2. 旅客需求與規劃條件
3. 建議行程表
4. 預算估算
5. 交通與住宿建議
6. 簽證與購票注意事項
7. 風險與機會
8. 下一步
9. 資料來源

## 中文風格

本 Skill 以台灣使用者為主要對象，中文內容應自然、清楚、可執行。避免使用「賦能」、「一站式」、「閉環」、「性價比拉滿」等不自然或過度行銷化的詞彙。
