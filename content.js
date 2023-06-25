// Listen for a message from the popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "extractTermsAndConditions") {
    try {
      // Extract terms and conditions content
      const termsAndConditionsContent = extractTermsAndConditions();

      // Send the extracted content to the popup
      sendResponse({ content: termsAndConditionsContent });
    } catch (error) {
      console.error('Error extracting terms and conditions content:', error);
      sendResponse({ error: 'Failed to extract terms and conditions content.' });
    }
  }
});

function extractTermsAndConditions() {
  // TODO: Implement the logic to extract terms and conditions content from the webpage.
  // You can use DOM manipulation or other techniques to target and extract the content.

  // Example: Extracting the text content of all paragraphs on the page
  const paragraphs = Array.from(document.getElementsByTagName("p"));
  const content = paragraphs.map(p => p.textContent).join("\n");

  if (!content) {
    throw new Error('Terms and conditions content not found.');
  }

  return content;
}
