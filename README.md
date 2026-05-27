# FIFA World Cup 2026 台灣球迷行程規劃 Skill

這個 repository 包含一個 Codex Skill 與一個可互動操作的 HTML 展示作品，主題是「2026 世界盃台灣球迷赴美觀賽行程規劃」。新版 `index.html` 採用美國觀賽風格，以深藍、紅、白與票卡式資訊區呈現。

## 內容

- `SKILL.md`：Skill 主檔。
- `assets/worldcup-trip-prompt.md`：可直接貼給 Codex 的使用指令。
- `references/worldcup-trip-report-template.md`：Markdown 報告範本。
- `references/worldcup-trip-html-template.html`：HTML 報告範本。
- `index.html`：美國風互動式行程規劃器首頁。

## 互動作品

`index.html` 可以直接用瀏覽器開啟，也可以用 GitHub Pages 分享。使用者可以填寫：

- 主要觀賽基地
- 旅程天數
- 同行人數
- 目標場次
- 總預算
- 球票策略
- 旅行節奏
- 特殊需求

系統會產生：

- Ready Score
- 路線判讀
- 預算快照
- 觀賽行程板
- 住宿與交通策略
- ESTA、官方球票與行前提醒

## GitHub Pages 分享

上傳後到 repository 的 `Settings` → `Pages`，選擇 `Deploy from a branch`，分支選 `main`，資料夾選 `/ (root)`。啟用後即可分享：

```text
https://你的帳號.github.io/你的repository名稱/
```

## 中文風格

內容以台灣使用者為主要對象，避免「賦能」、「一站式」、「閉環」等不自然詞彙。
