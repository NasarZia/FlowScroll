# FlowScroll - Auto Scroll Chrome Extension

**FlowScroll** is a Chrome extension that allows you to automatically scroll through web pages at a custom speed, making it easier to read long articles or scroll through social media feeds hands-free. With an attractive and simple interface, FlowScroll helps you experience smooth, continuous scrolling on any website.

### Features:
- Auto-scroll through web pages.
- Adjust the scrolling speed (1 to 100).
- Simple, clean, and user-friendly interface.
- Bright color palette and intuitive design.
- Works on most websites (e.g., blogs, news articles, social media).
  
## Getting Started

FlowScroll is a Chrome extension that is not yet published to the Chrome Web Store. However, you can still use it in **developer mode** by following the steps below.

### Step 1: Clone or Download FlowScroll

First, clone the repository or download the files as a zip.

```bash
git clone https://github.com/NasarZia/FlowScroll.git
```

Alternatively, download the zip file and extract it into a folder.

### Step 2: Load the Extension into Chrome

1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable **Developer mode** by toggling the switch in the top-right corner.
3. Click the **Load unpacked** button and select the `FlowScroll` folder.
4. Once loaded, you’ll see the FlowScroll icon in your browser’s toolbar.

### Step 3: Use FlowScroll

1. Click on the FlowScroll icon in your Chrome toolbar.
2. Use the slider to adjust the scrolling speed (1-100).
3. Press the **Start** button to begin auto-scrolling.
4. Press the **Stop** button to halt scrolling.

### Images

Here are some visuals that showcase FlowScroll:

![Screenshot 2024-09-21 214205](https://github.com/user-attachments/assets/8b1ce7a7-a1d9-4aa8-9f8d-228006d43787)

![Screenshot 2024-09-21 214219](https://github.com/user-attachments/assets/99282218-c2b0-4ca9-bc8a-130cf393ef5e)

### File Structure

Here’s an overview of the files included in the FlowScroll extension:

- `manifest.json`: Defines the settings and permissions for the extension.
- `popup.html`: The user interface (UI) displayed when clicking the extension.
- `popup.css`: The CSS file that makes the popup look attractive.
- `popup.js`: Contains the JavaScript for handling scrolling actions.
- `icons/`: Contains the icons for the extension in 16x16, 48x48, and 128x128 sizes.

### Step 4: Customize FlowScroll

If you'd like to modify FlowScroll, you can easily adjust any of the files:
- **popup.js**: Change the scrolling behavior.
- **popup.css**: Customize the UI styling.
- **manifest.json**: Adjust extension settings and permissions.

### Icon Design

The extension uses simple, colorful icons to represent its functionality. The icons feature a downward arrow symbolizing scrolling, with a modern and bright design to make it visually appealing.

You can find the icons inside the `icons/` folder in three sizes:
- `icon16.png` (16x16)
- `icon48.png` (48x48)
- `icon128.png` (128x128)

These icons are used throughout the extension to represent FlowScroll in various contexts (e.g., toolbar, extension page).

### Notes:

- FlowScroll is not currently available in the Chrome Web Store and can only be used in **developer mode**.
- The extension has been tested on most websites, but if you encounter issues on specific sites like Instagram or ChatGPT, feel free to contribute by refining the scrolling logic.
  
### How It Works

1. **manifest.json**: Sets up the extension, specifying that it will use a popup for user interaction and requires permission to interact with the active tab and inject scripts.
   
2. **popup.html**: Displays a simple UI with a slider to control the scrolling speed and start/stop buttons.
   
3. **popup.css**: Adds styles to make the popup look visually appealing with bright colors and modern design.
   
4. **popup.js**: Contains the logic to start and stop scrolling on the active tab, based on the speed set by the user.

### How to Contribute

Contributions are welcome! If you find bugs or want to add new features:
- Fork the repository.
- Make your changes.
- Submit a pull request.

### Future Plans

- Add more customization options (e.g., scroll direction, pause/resume functionality).
- Improve compatibility with websites that use complex DOM structures.
- Publish the extension on the Chrome Web Store.

### License

FlowScroll is open-source and distributed under the MIT License.

---
