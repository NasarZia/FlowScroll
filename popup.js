
let scrollInterval;

document.getElementById('start').addEventListener('click', () => {
  const speed = document.getElementById('speed').value;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: startScrolling,
      args: [speed]
    });
  });
});

document.getElementById('stop').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: stopScrolling
    });
  });
});

function startScrolling(speed) {
  scrollInterval = setInterval(() => {
    window.scrollBy(0, 1);
  }, 101 - speed);
}

function stopScrolling() {
  clearInterval(scrollInterval);
}
