function ExportSpikeCode() {
  const fs = require('fs');
  const inputText = document.getElementByClassName('inputarea monaco-mouse-cursor-text').textContent;
  const filePath = 'C:/SpellSpikeLang/main.spike';
  fs.writeFileSync(filePath, inputText);
}
