import spacy
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

from skill_db import skills

nlp = spacy.load("en_core_web_sm")


# Extract skills from text
def extract_skills(text):
    text = text.lower()
    found = []

    for skill in skills:
        if skill in text:
            found.append(skill)

    return list(set(found))


# Match score calculation
def calculate_score(resume_text, jd_text):
    vectorizer = TfidfVectorizer()

    vectors = vectorizer.fit_transform([
        resume_text,
        jd_text
    ])

    score = cosine_similarity(vectors)[0][1]

    return round(score * 100, 2)


# Full analysis
def analyze_resume(resume_text, jd_text):

    resume_skills = extract_skills(resume_text)
    jd_skills = extract_skills(jd_text)

    matched = list(set(resume_skills) & set(jd_skills))
    missing = list(set(jd_skills) - set(resume_skills))

    score = calculate_score(resume_text, jd_text)

    recommendations = [
        f"Learn {skill}" for skill in missing
    ]

    return {
        "score": score,
        "matched_skills": matched,
        "missing_skills": missing,
        "recommendations": recommendations
    }
