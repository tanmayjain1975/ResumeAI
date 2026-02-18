from flask import Flask, request, jsonify
from flask_cors import CORS
import pdfplumber
import json
import os

from analyzer import analyze_resume

app = Flask(__name__)
CORS(app)


# =========================================
# USERS DATABASE FILE
# =========================================

USERS_FILE = "users.json"


def load_users():
    if not os.path.exists(USERS_FILE):
        return []

    with open(USERS_FILE, "r") as file:
        return json.load(file)


def save_users(users):
    with open(USERS_FILE, "w") as file:
        json.dump(users, file, indent=4)


# =========================================
# HOME ROUTE
# =========================================

@app.route("/")
def home():
    return "Resume Analyzer Backend Running 🚀"


# =========================================
# SIGNUP API
# =========================================

@app.route("/signup", methods=["POST"])
def signup():

    data = request.json

    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    if not name or not email or not password:
        return jsonify({
            "error": "All fields required"
        }), 400

    users = load_users()

    for user in users:
        if user["email"] == email:
            return jsonify({
                "error": "User already exists"
            }), 400

    new_user = {
        "name": name,
        "email": email,
        "password": password
    }

    users.append(new_user)
    save_users(users)

    return jsonify({
        "message": "Signup successful"
    })


# =========================================
# LOGIN API
# =========================================

@app.route("/login", methods=["POST"])
def login():

    data = request.json

    email = data.get("email")
    password = data.get("password")

    users = load_users()

    for user in users:
        if user["email"] == email and user["password"] == password:

            return jsonify({
                "name": user["name"],
                "email": user["email"]
            })

    return jsonify({
        "error": "Invalid email or password"
    }), 401


# =========================================
# PDF TEXT EXTRACTION
# =========================================

def extract_text_from_pdf(file):

    text = ""

    with pdfplumber.open(file) as pdf:
        for page in pdf.pages:
            page_text = page.extract_text()

            if page_text:
                text += page_text

    return text


# =========================================
# RESUME ANALYSIS API
# =========================================

@app.route("/analyze", methods=["POST"])
def analyze():

    if "resume" not in request.files:
        return jsonify({
            "error": "Resume file missing"
        }), 400

    if "jd" not in request.form:
        return jsonify({
            "error": "Job description missing"
        }), 400

    resume_file = request.files["resume"]
    jd_text = request.form["jd"]

    if resume_file.filename == "":
        return jsonify({
            "error": "No file selected"
        }), 400

    try:
        resume_text = extract_text_from_pdf(resume_file)

        result = analyze_resume(
            resume_text,
            jd_text
        )

        return jsonify(result)

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500


# =========================================
# RUN SERVER
# =========================================

if __name__ == "__main__":
    app.run(debug=True)
