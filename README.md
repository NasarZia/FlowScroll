
---

### **FlowScroll - Auto-Scrolling Chrome Extension**

```markdown
# FlowScroll - Auto-Scrolling Chrome Extension

**FlowScroll** is a simple Chrome extension that allows you to auto-scroll through web pages at a custom speed, making reading long pages more convenient and hands-free.

## Features

- Customizable auto-scrolling speed with a user-friendly slider
- Start and stop scrolling at any time
- Clean and modern popup interface

## Installation

This Chrome extension is **not published** on the Chrome Web Store and is currently designed to be used in **Developer Mode** locally.

### Steps to Install:

1. **Download or Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/flowscroll-extension.git

2. **Load the Extension in Chrome:**

 - Open Chrome and go to chrome://extensions/
 - Enable Developer Mode (toggle on the upper right corner)
 - Click Load unpacked and select the folder where this repository is located

## How to Use

 - Click on the extension icon in your Chrome toolbar.
 - Use the slider to select your desired scroll speed (1-100).
 - Click Start to begin auto-scrolling.
 - Click Stop to stop the scrolling at any time.

## Files

 - manifest.json: Defines the extension's properties, permissions, and icons.
 - popup.html: The HTML structure of the extension's popup interface.
 - popup.css: Styles for the popup interface to make it visually appealing.
 - popup.js: JavaScript logic that controls the scrolling behavior.

## Custom Icons

The extension includes custom icons in sizes 16x16, 48x48, and 128x128, representing a downward arrow to symbolize scrolling.

## Permissions

The extension requires the following permissions:

 - activeTab: To interact with the current active tab in the browser.
 - scripting: To inject JavaScript code that controls the scrolling on the active webpage.

## License

This project is licensed under the MIT License.
