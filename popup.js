
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, { action: "extractTermsAndConditions" }, function(response) {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
      return;
    }

    if (!response || !response.content) {
      console.error("Failed to extract terms and conditions content.");
      return;
    }

    const contentDiv = document.getElementById("content");
    fetch('http://localhost:8000/process_content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: response.content })
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        console.error(data.error);
        return;
      }
      
      contentDiv.innerText = data.summary;
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
});
