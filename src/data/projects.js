// Project data.
//
// Every metric here is measured on held-out data and matches what is recorded in each
// project's model/metrics.json in the internship-projects repository. Nothing is
// rounded up or estimated.

export const REPO = "https://github.com/gopi-krishna-ai/internship-projects";

const path = (folder) => `${REPO}/tree/main/projects/${encodeURIComponent(folder)}`;

export const categories = [
  { id: "all", label: "All" },
  { id: "ml", label: "Machine Learning" },
  { id: "nlp", label: "NLP" },
  { id: "cv", label: "Computer Vision" },
  { id: "llm", label: "LLM & RAG" },
  { id: "web", label: "Full Stack" },
];

export const projects = [
  {
    name: "Cybersecurity Toolkit",
    tag: "Phishing detection + security tools",
    category: "ml",
    blurb:
      "Phishing URL detection, password strength analysis, file integrity hashing, port scanning and security log analysis in one dashboard.",
    metric: "F1 90.3%",
    metricNote: "641,113 URLs · 25/25 tests pass",
    stack: ["Random Forest", "Flask", "SQLite", "scikit-learn"],
    highlight:
      "My first model scored 95.5% but rated google.com as 96.5% malicious. It had learned an artifact of how the dataset was collected, not anything about real phishing.",
    url: path("B-22-Cybersecurity Toolkit"),
    featured: true,
  },
  {
    name: "AI Hub",
    tag: "Local multi-model AI workspace",
    category: "llm",
    blurb:
      "A private AI workspace running entirely offline — document upload, semantic search, retrieval-augmented generation and multi-step agents. No paid API anywhere.",
    metric: "31/31 tests",
    metricNote: "RAG grounding proven both ways",
    stack: ["FastAPI", "Transformers", "LangGraph", "SQLite"],
    highlight:
      "RAG is verified by planting a fact no model could know, then checking it comes back with retrieval switched on and does not without it.",
    url: path("B-19-AI Hub Local Multi Model AI Workspace"),
    featured: true,
  },
  {
    name: "BinBrain AI",
    tag: "Waste classification",
    category: "cv",
    blurb:
      "Classifies waste photographs as organic or recyclable and says which bin it belongs in, with a confidence score that is checked for honesty.",
    metric: "90.09%",
    metricNote: "on 2,513 unseen images",
    stack: ["PyTorch", "CNN", "Flask"],
    highlight:
      "The CNN I built from scratch beat a frozen MobileNetV2 transfer-learning baseline by 5.25 points.",
    url: path("B-21-BinBrain AI Smart Waste Classification"),
    featured: true,
  },
  {
    name: "LifeLink",
    tag: "Blood bank & doctor management",
    category: "web",
    blurb:
      "Connects blood donors, patients and blood banks. Compatibility matching, donation eligibility, live stock levels and doctor appointment booking.",
    metric: "44/44 tests",
    metricNote: "all 64 blood-type pairs verified",
    stack: ["Flask", "Pandas", "Excel", "Bootstrap"],
    highlight:
      "Testing caught a dashboard bug that showed a healthy blood supply while four individual banks sat at zero units.",
    url: path("B-18-Smart Blood Bank and Doctor Management System"),
    featured: true,
  },
  {
    name: "RentMate",
    tag: "Rental price prediction",
    category: "ml",
    blurb:
      "Predicts monthly rent across six Indian cities from BHK, size, floor, locality and furnishing. Also recommends similar listings and shows market insights.",
    metric: "R² 0.715",
    metricNote: "typical error ₹3,570/month",
    stack: ["scikit-learn", "Gradient Boosting", "Flask", "Pandas"],
    highlight:
      "I tested locality price-encoding and found it made predictions worse — R² 0.702 down to 0.624 — so I removed it.",
    url: path("B-17-RentMate AI Powered Smart Rental Marketplace"),
  },
  {
    name: "Fake Job Detection",
    tag: "Scam detection",
    category: "nlp",
    blurb:
      "Flags fraudulent job adverts, with a second layer for Indian scam patterns: registration fees, UPI payment demands, WhatsApp-only contact.",
    metric: "P 92.8% / R 81.5%",
    metricNote: "400/400 held-out postings scored",
    stack: ["Random Forest", "XGBoost", "TF-IDF", "NLTK"],
    highlight:
      "Only 276 of 17,880 training postings were Indian, so every India-specific rule is labelled either measured or domain knowledge.",
    url: path("B-14-AI Driven Fake Job and Scam Detection"),
  },
  {
    name: "GuardPath AI",
    tag: "Personal safety & route planning",
    category: "ml",
    blurb:
      "Rates route safety across Bengaluru wards using real police alert data, and suggests safer alternatives.",
    metric: "207,617 alerts",
    metricNote: "real Bangalore CAS data",
    stack: ["Random Forest", "Flask", "Leaflet"],
    url: path("B-1-GuardPath AI"),
  },
  {
    name: "Weed Detection",
    tag: "Agricultural object detection",
    category: "cv",
    blurb:
      "Detects and locates weeds in crop photographs so herbicide can be applied only where it is actually needed.",
    metric: "mAP50 0.877",
    metricNote: "precision 0.849 · recall 0.834",
    stack: ["YOLOv8", "PyTorch", "OpenCV"],
    url: path("B-3-Automated Weed Detection System Using YOLO"),
  },
  {
    name: "TracePoint",
    tag: "Digital forensics",
    category: "cv",
    blurb:
      "Analyses evidence images, video and documents with object detection, face matching, OCR and entity extraction, then finds connections between separate items.",
    metric: "0.339 distance",
    metricNote: "matched the same person across photos",
    stack: ["YOLOv8", "dlib", "Tesseract", "scikit-learn"],
    url: path("B-11-TracePoint AI Investigation and Recovery Platform"),
  },
  {
    name: "Cricket Performance Analyser",
    tag: "Sports analytics",
    category: "ml",
    blurb:
      "Predicts player runs and role from real IPL ball-by-ball data, with venue and opposition breakdowns.",
    metric: "R² 0.588",
    metricNote: "on real Cricsheet IPL data",
    stack: ["Random Forest", "XGBoost", "K-Means"],
    highlight:
      "I rejected the first dataset after testing showed it was randomly generated — correlation between past and future runs was 0.014.",
    url: path("B-6-AI Cricket Performance Analyser"),
  },
  {
    name: "Smart Voting System",
    tag: "Face-verified voting",
    category: "cv",
    blurb:
      "Verifies voter identity by face before allowing a vote, and prevents anyone voting twice.",
    metric: "98.39%",
    metricNote: "on the LFW benchmark",
    stack: ["face_recognition", "dlib", "Flask"],
    url: path("B-7-Smart Voting System Through Facial Recognition"),
  },
  {
    name: "Attendance System",
    tag: "Face recognition attendance",
    category: "cv",
    blurb:
      "Marks attendance from a photograph, with calibrated confidence and a fallback detector for difficult images.",
    metric: "98.39%",
    metricNote: "on the LFW benchmark",
    stack: ["face_recognition", "OpenCV", "Flask"],
    url: path("B-13-Face Recognition Attendance System"),
  },
  {
    name: "Notes & PDF Analysis",
    tag: "Study assistant",
    category: "llm",
    blurb:
      "Answers questions from your own notes and PDFs, with summarisation and topic grouping.",
    metric: "EM 69.0 / F1 77.9",
    metricNote: "on SQuAD",
    stack: ["DistilBERT", "Sentence-Transformers", "PyMuPDF"],
    url: path("B-8-AI Learning Intelligence for Notes and PDF Analysis"),
  },
  {
    name: "Content Creator Assistant",
    tag: "AI writing tool",
    category: "llm",
    blurb:
      "Generates blogs, emails, resumes and adverts, plus grammar correction, paraphrasing, summarisation and keyword optimisation. Runs on local models.",
    metric: "ROUGE benchmarked",
    metricNote: "on CNN/DailyMail",
    stack: ["Transformers", "FLAN-T5", "Flask", "SQLite"],
    url: path("B-16-AI Content Creator Assistant"),
  },
  {
    name: "ResQAI",
    tag: "Disaster relief triage",
    category: "nlp",
    blurb:
      "Sorts disaster reports by urgency so relief teams can prioritise, with resource allocation and mapping.",
    metric: "F1 0.780",
    metricNote: "SVM beat 3 other classifiers",
    stack: ["scikit-learn", "TF-IDF", "Flask"],
    url: path("B-9-ResQAI Intelligent Disaster Relief Management"),
  },
  {
    name: "Surplus Food Redistribution",
    tag: "Food waste reduction",
    category: "ml",
    blurb:
      "Predicts how long donated food stays safe and matches surplus to nearby NGOs by freshness and urgency.",
    metric: "R² 0.925",
    metricNote: "Gradient Boosting",
    stack: ["scikit-learn", "Flask", "Pandas"],
    url: path("B-10-AI Smart Surplus Food Redistribution"),
  },
  {
    name: "CloudCost Optimizer",
    tag: "Cloud spend analysis",
    category: "ml",
    blurb:
      "Finds wasted cloud spend by identifying idle instance hours and recommending right-sizing.",
    metric: "99.0% / R² 0.694",
    metricNote: "classification / latency prediction",
    stack: ["Random Forest", "XGBoost", "Plotly"],
    url: path("B-12-CloudCost AI Intelligent Cost and Resource Optimizer"),
  },
  {
    name: "QR Code Scam Detection",
    tag: "URL safety",
    category: "nlp",
    blurb:
      "Scans a QR code, extracts the URL behind it and checks whether it is malicious before you visit it.",
    metric: "Malicious URL classifier",
    metricNote: "TF-IDF + Logistic Regression",
    stack: ["OpenCV", "scikit-learn", "Flask"],
    url: path("B-5-QR Code Scam Detection"),
  },
  {
    name: "Sentiment Analysis",
    tag: "Real-time text sentiment",
    category: "nlp",
    blurb:
      "Classifies text as positive or negative in real time, trained on the Sentiment140 corpus.",
    metric: "TF-IDF + LogReg",
    metricNote: "1.6M tweets",
    stack: ["scikit-learn", "NLTK", "Flask"],
    url: path("B-4-Real Time Sentiment Analysis"),
  },
  {
    name: "Smart Study Planner",
    tag: "Study prioritisation",
    category: "ml",
    blurb:
      "Ranks what a student should revise next based on performance patterns from real student records.",
    metric: "83% accuracy",
    metricNote: "30,641 student records",
    stack: ["Random Forest", "Flask", "Pandas"],
    url: path("B-2-AI Assisted Smart Study Planner"),
  },
];

export const stats = [
  { value: "20", label: "Projects built" },
  { value: "100+", label: "Automated tests passing" },
  { value: "650K+", label: "Data rows trained on" },
  { value: "0", label: "Paid AI APIs used" },
];

export const skills = [
  {
    group: "Languages & Core",
    items: ["Python", "JavaScript", "SQL", "HTML", "CSS", "Git"],
  },
  {
    group: "Machine Learning",
    items: ["scikit-learn", "PyTorch", "XGBoost", "Pandas", "NumPy"],
  },
  {
    group: "AI & Computer Vision",
    items: ["YOLOv8", "OpenCV", "Transformers", "LangGraph", "Tesseract OCR"],
  },
  {
    group: "Web & Data",
    items: ["Flask", "FastAPI", "React", "SQLite", "Bootstrap", "Tailwind"],
  },
];
