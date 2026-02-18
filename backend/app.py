from flask import Flask, request, jsonify
from flask_cors import CORS
import pdfplumber

from analyzer import analyze_resume

app = Flask(__name__)
CORS(app)


# Resume text extraction
def extract_text_from_pdf(file):
    text = ""

    with pdfplumber.open(file) as pdf:
        for page in pdf.pages:
            if page.extract_text():
                text += page.extract_text()

    return text


@app.route("/analyze", methods=["POST"])
def analyze():

    resume_file = request.files["resume"]
    jd_text = request.form["jd"]

    resume_text = extract_text_from_pdf(resume_file)

    result = analyze_resume(resume_text, jd_text)

    return jsonify(result)


if __name__ == "__main__":
    app.run()
