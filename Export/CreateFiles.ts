function ExportSpikeCode() {
  const fs = require('fs');
  const inputText = document.getElementById('blablabla').textContent;
  const filePath = 'C:/SpellSpikeLang/main.spike';
  fs.writeFileSync(filePath, inputText);
}
