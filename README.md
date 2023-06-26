# BardReader-Chrome-Extension
## Simplify Terms &amp; Conditions with AI-powered Summaries

### What does it do?
The "BardReader Chrome Extension" is designed to simplify the process of understanding lengthy Terms and Conditions documents. It leverages the power of AI and the Bard API to extract the key points from these documents and provide concise summaries to the users.

With the extension installed in their Chrome browser, users can easily access the Terms and Conditions of websites or online services they encounter. The extension leveraged the Bard API, which provided advanced natural language processing capabilities. By making API calls, the extension extracted the relevant sections from the Terms and Conditions documents and generated summaries.

### Deploy in your system 

#### Requirements
For development, you will only need Node.js, Bardapi, Flask and Python Package intsalled in your environment.

#### Node
- ##### Node installation on Windows
  Just go on [official Node.js website](https://nodejs.org/) and download the installer. If the installation was successful, you should be able to run the following command.

    ```
    $ node --version
    v8.11.3
    ```

#### Bard API and Flask Installation
For Flask, just go on [official website](https://pypi.org/project/Flask/) and follow the instructions, make sure your system has the latest version of Python Installed. 

Run the following command on your terminal to install bardapi
```
  $ pip install bardapi
```

#### Download the Package

Download and extract the zip file or you can clone using the following link

```
$ git clone https://github.com/rashafathima/BardReader-Chrome-Extension.git
```

#### Find your Bard API

You can use follow [this tutorial](https://generativeai.pub/googles-bard-a-step-by-step-guide-to-using-the-unofficial-bard-api-3abb5b2d6abc) to hunt for your API key. Once you get your API key, replace it with YOUR API KEY in the app.py file.

#### Exceute App.py
In the directory where your app.py is located run the following command in your terminal.

```
python app.py
```

#### Upload Unpacked Files
* Navigate to chrome://extensions in your google chrome
* Set it to developer's mode
* Click on Load Unpacked Files and load your project folder

You can now use your extension to read T&Cs with ease. 

