---
name: taiwan-worldcup-trip-planner
description: Plan 2026 FIFA World Cup travel for Taiwan fans visiting the United States. Use when Codex needs to turn traveler inputs such as budget, days, host cities, and match count into Taiwan Mandarin itineraries, budget tables, transport reminders, lodging suggestions, ticket notes, ESTA/passport reminders, and risk controls for Taiwanese fans attending World Cup 2026 in the U.S.
---

# 2026 世界盃台灣球迷行程規劃 Skill

## 用途

將使用者輸入的「預算、天數、城市、想看幾場比賽」轉成具體的赴美觀賽規劃。輸出內容要能直接協助台灣球迷做決策，而不是只提供一般旅遊介紹。

## 輸入欄位

| 欄位 | 說明 |
| --- | --- |
| 預算 | 每人或全團可接受的總預算，建議以 TWD 顯示 |
| 天數 | 從台灣出發到返台的總天數 |
| 城市 | 想去的美國主辦城市或偏好的區域 |
| 場次 | 想看幾場比賽 |
| 旅客型態 | 第一次赴美、家庭旅遊、朋友團、重度球迷 |
| 移動偏好 | 少換城市、追多場、住宿固定、可接受國內線 |

## 輸出格式

1. 行程摘要
2. 建議路線
3. 每日行程表
4. 預算估算表
5. 交通與住宿提醒
6. ESTA、護照、FIFA 官方球票與轉售風險提醒
7. 風險控管
8. 下一步

## 規劃原則

- 第一次到美國看球的台灣旅客，優先建議 2 到 3 個城市。
- 抵達美國後保留調整時差時間，再安排重要比賽。
- 跨城市移動不要壓在比賽日當天。
- 球票優先提醒使用 FIFA 官方管道或官方 hospitality。
- 預算要說明估算假設與匯率可能變動。
- 中文使用自然台灣用語，避免制式 AI 口吻。

## Assets

- `assets/worldcup-trip-prompt.md`：可直接貼給 Codex 使用的一行 Skill 指令。

## References

- `references/worldcup-trip-report-template.md`：Markdown 版行程規劃報告範本。
- `references/worldcup-trip-html-template.html`：HTML 版報告範本。
