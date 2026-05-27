---
name: taiwan-worldcup-trip-planner
description: Plan 2026 FIFA World Cup travel for Taiwan fans visiting the United States. Use when Codex needs to turn traveler inputs such as budget, days, host cities, and match count into Taiwan Mandarin itineraries, budget tables, transport reminders, lodging suggestions, ticket notes, ESTA/passport reminders, and risk controls for Taiwanese fans attending World Cup 2026 in the U.S.
---

# 2026 世界盃台灣球迷行程規劃 Skill

## 用途

將使用者輸入的「預算、天數、城市、想看幾場比賽」轉成具體的赴美觀賽規劃。輸出內容要能直接協助台灣球迷做決策，而不是只提供一般旅遊介紹。

適合處理：

- 2026 世界盃赴美觀賽行程
- 台灣球迷的預算估算
- 美國主辦城市之間的交通安排
- 住宿區域與比賽日動線建議
- ESTA、護照、球票與保險提醒
- 可放進網頁工具、簡報或報告的自然中文內容

## 基本資料

規劃前先確認最新官方資訊。已知基準如下：

- 2026 世界盃時間：2026/6/11 至 2026/7/19。
- 賽事規模：48 隊、104 場比賽。
- 主辦國：美國、加拿大、墨西哥。
- 美國主辦城市包含：Atlanta、Boston、Dallas、Houston、Kansas City、Los Angeles、Miami、New York New Jersey、Philadelphia、San Francisco Bay Area、Seattle。

若日期、賽程、城市、票務或入境規定會影響使用者決策，必須查詢 `references/official-sources.md` 中的官方來源後再輸出。

## 輸入欄位

規劃時優先取得這些資訊：

| 欄位 | 說明 |
| --- | --- |
| 預算 | 每人可接受的總預算，建議以 TWD 顯示，必要時補 USD |
| 天數 | 從台灣出發到返台的總天數 |
| 城市 | 想去的美國主辦城市或偏好的區域 |
| 場次 | 想看幾場比賽 |
| 旅客型態 | 第一次赴美、家庭旅遊、朋友團、重度球迷、自由行新手 |
| 移動偏好 | 想少搭飛機、願意追多場、希望住宿固定、可接受跨城市移動 |

## 輸出格式

回覆時依照以下結構：

1. `行程摘要`：日期區間、城市、場次、總預算區間。
2. `建議路線`：用簡短文字說明為什麼這樣排。
3. `行程表`：用表格列出每天城市、交通、比賽或活動、住宿區域、注意事項。
4. `預算表`：機票、住宿、交通、球票、餐飲、保險、手機網路、備用金。
5. `交通與住宿提醒`：跨城市移動、比賽日交通、住宿區域選擇。
6. `簽證與購票注意事項`：ESTA、護照、FIFA 官方票務、轉售風險。
7. `風險控管`：天氣、延誤、深夜散場、匯率、票務與保險。
8. `下一步`：列出 3 到 5 個使用者接下來該做的決定。

## 規劃原則

- 第一次到美國看球的台灣旅客，優先建議 2 到 3 個城市，不要把行程排得太滿。
- 抵達美國後至少保留半天到一天調整時差，再安排重要比賽。
- 跨城市移動不要壓在比賽日當天，除非使用者明確接受風險。
- 球票優先提醒使用 FIFA 官方管道或官方 hospitality；非官方轉售只列為風險選項。
- 預算不要只給單一數字，要說明估算假設與匯率可能變動。
- 文字使用自然台灣中文，避免「賦能」、「一站式」、「閉環」、「性價比拉滿」等不自然用語。

## 網頁作品應用

若要做成像「標準公式計算器」的作品，使用 `assets/frontend-template/` 作為起點。作品邏輯如下：

`預算 + 天數 + 城市 + 場次 + 移動強度 = 行程建議 + 預算估算 + 風險提醒`

第一畫面要直接是可操作的行程規劃器，不要做成只有介紹文字的首頁。

## References

- `references/official-sources.md`：官方資料來源與查證規則。
- `references/itinerary-framework.md`：行程路線、預算模型與檢查清單。
- `references/worldcup-trip-report-template.md`：Markdown 版行程規劃報告範本。
- `references/worldcup-trip-html-template.html`：HTML 版深色報告範本。

## Assets

- `assets/frontend-template/`：可改成展示作品的靜態網頁模板。
- `assets/content-snippets.md`：台灣中文 UI 文案與風險提醒文字。
- `assets/worldcup-trip-prompt.md`：可直接貼給 Codex 使用的一行 Skill 指令。
