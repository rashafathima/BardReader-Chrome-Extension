from flask import Flask, request, jsonify
from bardapi import Bard
import os

os.environ['_BARD_API_KEY'] = "YAgYEiiomUKSUZFhwy99Kbc9L-JcXrDF_tCQauJl_HuKNj510ntIe2awQAY0OXgfSFDM8w."

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
        # Use the Bard API to summarize the content
        response = Bard().get_answer(content)  
        summary = response['content']

        # Split the summary into words
        words = summary.split()

        if len(words) <= max_words:
            # Return the entire summary if it's within the desired word limit
            return summary
        else:
            # Combine the first `max_words` words
            limited_summary = ' '.join(words[:max_words])
            return limited_summary
    except Exception as e:
        # Log the error
        app.logger.error(f"Error summarizing content: {str(e)}")
        raise

if __name__ == '__main__':
    app.run(port=8000)
