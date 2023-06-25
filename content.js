
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "extractTermsAndConditions") {
    try {
      // Extract terms and conditions content
      const termsAndConditionsContent = extractTermsAndConditions();
      
      sendResponse({ content: termsAndConditionsContent });
    } catch (error) {
      console.error('Error extracting terms and conditions content:', error);
      sendResponse({ error: 'Failed to extract terms and conditions content.' });
    }
  }
});

function extractTermsAndConditions() {
  const paragraphs = Array.from(document.getElementsByTagName("p"));
  const content = paragraphs.map(p => p.textContent).join("\n");

  if (!content) {
    throw new Error('Terms and conditions content not found.');
  }

  return content;
}
