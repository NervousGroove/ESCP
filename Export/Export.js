let isExecuted = false;

function isSpellSpikeLang() {
  if (!isExecuted) {
    alert("Required SpellSpike Protocol: You must download SpikeNWjs and copy its files into the folder C:/SpellSpikeLang.");
    window.open("https://drive.google.com/drive/folders/1LNS-wLPJQYUH3OFkknHOgQPejHZvyJwR?usp=sharing", "_blank");
    ExportSpikeCode();
    isExecuted = true;
  }
}

