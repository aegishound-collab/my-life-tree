# My Life Tree🌲

這是我第一個從零手刻的網站，也是我自學前端的起點。

**線上瀏覽：** https://aegishound-collab.github.io/my-life-tree/

## 這是什麼

一個用「動物」隱喻生命中重要之人的個人網站。每隻動物代表一位對我影響深遠的人，點進去會有一段用打字機動畫逐字浮現的獨白。整個站是我從完全不會 HTML/CSS/JavaScript，一路自學摸索、親手切版做出來的（因為是練習所以沒有使用AI。應該也不難看出因為整個頁面都很簡單）。

## 用到的技術

- **HTML / CSS**：手寫語意化結構、Flexbox 排版、`@media` 響應式設計（手機／桌機自適應）。
- **JavaScript（原生，無框架）**
  - `IntersectionObserver` 實作滾動進場動畫（文字、卡片左右滑入、開場遮罩淡出）。
  - 依 `data-*` 屬性判斷點到哪隻動物，觸發逐字打字機效果。
  - CSS `@keyframes` 做彈跳進場（bounce）與淡入。

## 我從這個專案學到的

這是我技術旅程的第一步，刻意保持簡單。它記錄的不是「我現在的實力」，而是「我起跑的地方」——之後的專案（例如 AegisHound 資安引擎）可以拿來對照，看出這段時間我走了多遠。

## 檔案結構

```
index.html        首頁（生命樹）
about-me.html     關於我
contact.html      聯絡
my-trauma.html    「Just a Joke」
lion / dog / cat / capybara.html   四位重要之人（動物頁）
style.css         全站樣式
lifetree.js       滾動進場動畫（首頁與靜態頁）
15_17script.js    動物頁的打字機互動
image2/           圖片素材
```

---

*produced by Allen*