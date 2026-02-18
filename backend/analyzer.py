import spacy
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

from skill_db import skills_db

nlp = spacy.load("en_core_web_sm")


# =========================================
# SKILL EXTRACTION
# =========================================

def extract_skills(text):

    text = text.lower()

    found_skills = []

    for skill in skills_db:
        if skill in text:
            found_skills.append(skill)

    return list(set(found_skills))


# =========================================
# SIMILARITY SCORE
# =========================================

def calculate_score(resume_text, jd_text):

    vectorizer = TfidfVectorizer()

    vectors = vectorizer.fit_transform([
        resume_text,
        jd_text
    ])

    similarity = cosine_similarity(
        vectors
    )[0][1]

    return round(similarity * 100, 2)


# =========================================
# MAIN ANALYSIS
# =========================================

def analyze_resume(resume_text, jd_text):

    resume_skills = extract_skills(resume_text)
    jd_skills = extract_skills(jd_text)

    matched_skills = list(
        set(resume_skills) &
        set(jd_skills)
    )

    missing_skills = list(
        set(jd_skills) -
        set(resume_skills)
    )

    score = calculate_score(
        resume_text,
        jd_text
    )

    skill_gap = round(
        (len(missing_skills) /
        (len(matched_skills) +
         len(missing_skills))) * 100
        if (matched_skills or missing_skills)
        else 0,
        2
    )

    ats_score = round(score * 0.9, 2)

    recommendations = [
        f"Learn {skill}"
        for skill in missing_skills
    ]

    return {
        "score": score,
        "ats_score": ats_score,
        "skill_gap": skill_gap,
        "matched_skills": matched_skills,
        "missing_skills": missing_skills,
        "recommendations": recommendations
    }
