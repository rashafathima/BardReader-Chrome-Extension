from flask import Flask, request, jsonify
from bardapi import Bard
import os

os.environ['_BARD_API_KEY'] = "YOUR API KEY."

app = Flask(__name__)

@app.route('/process_content', methods=['POST'])
def process_content():
    try:
        content = request.json.get('content')

        summary = summarizeContent(content, max_words=100)

        return jsonify(summary=summary)
    except Exception as e:

        app.logger.error(f"Error processing content: {str(e)}")
        return jsonify(error="An error occurred while processing the content"), 500

def summarizeContent(content, max_words):
    try:
        response = Bard().get_answer(content)  
        summary = response['content']

        words = summary.split()

        if len(words) <= max_words:
            return summary
        else:
            limited_summary = ' '.join(words[:max_words])
            return limited_summary
    except Exception as e:
        # Log the error
        app.logger.error(f"Error summarizing content: {str(e)}")
        raise

if __name__ == '__main__':
    app.run(port=8000)
