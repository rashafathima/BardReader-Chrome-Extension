# BardReader-Chrome-Extension
## Simplify Terms &amp; Conditions with AI-powered Summaries

### What does it do?
The "BardReader Chrome Extension" is designed to simplify the process of understanding lengthy Terms and Conditions documents. It leverages the power of AI and the Bard API to extract the key points from these documents and provide concise summaries to the users.

With the extension installed in their Chrome browser, users can easily access the Terms and Conditions of websites or online services they encounter. The extension extracts the relevant sections and applies natural language processing techniques to summarize the content into concise and understandable summaries.

By using the extension, users can quickly grasp the essential information contained in the Terms and Conditions without having to read through lengthy and complex documents.


### How I built it ?
To build the extension, I used a combination of web development technologies, including HTML, CSS, and JavaScript. The core functionality of the extension was implemented using the Chrome Extension API, which allowed for seamless integration with the browser.

The extension leveraged the Bard API, which provided advanced natural language processing capabilities. By making API calls, the extension extracted the relevant sections from the Terms and Conditions documents and generated summaries.

In terms of architecture, the project consisted of different components. The app.py file contained the Flask server that handled the backend logic, including the summarization of the content. The content.js file was responsible for extracting the Terms and Conditions content from the web page using DOM manipulation techniques. The popup.html and popup.js files created the user interface for the extension, displaying the extracted content and initiating the summarization process.
