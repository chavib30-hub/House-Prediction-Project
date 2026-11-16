<h1 align="center">🏠 House Price Prediction API</h1>

<p align="center">
  A machine learning project that predicts house prices using a Random Forest Regressor, served through a FastAPI REST API with a simple web interface.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.9%2B-blue?logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white" alt="FastAPI">
  <img src="https://img.shields.io/badge/Scikit--learn-F7931E?logo=scikit-learn&logoColor=white" alt="Scikit-learn">
  <img src="https://img.shields.io/badge/Pandas-150458?logo=pandas&logoColor=white" alt="Pandas">
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License">
</p>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [API Usage](#-api-usage)
- [Model Details](#-model-details)
- [Screenshots](#-screenshots)
- [Future Improvements](#-future-improvements)
- [Author](#-author)

---

## 📖 Overview

This project estimates property prices from housing features. A **Random Forest Regressor** was trained and evaluated on a large-scale dataset of **206,400 records**. The trained model is exposed through **FastAPI** endpoints that return predictions in real time, and a web interface built with **HTML, CSS and JavaScript** lets users enter housing details and see the predicted price instantly.

## ✨ Features

- Random Forest Regressor trained on 206,400 records
- Data cleaning, preprocessing and feature engineering using Pandas and Scikit-learn
- REST API endpoints built with FastAPI for real-time predictions
- Auto-generated interactive API docs (Swagger UI) at `/docs`
- User-friendly web interface to input housing details and view predicted prices

## 🛠 Tech Stack

| Area | Tools |
|------|-------|
| Language | Python |
| Data handling | Pandas, NumPy |
| Machine learning | Scikit-learn (Random Forest Regressor) |
| Backend / API | FastAPI, Uvicorn |
| Frontend | HTML, CSS, JavaScript |

## 📂 Project Structure

> Update this to match your repository.

```
house-price-prediction-api/
├── app/
│   ├── main.py                # FastAPI app and endpoints
│   └── model.pkl              # Trained Random Forest model
├── frontend/
│   ├── index.html             # User interface
│   ├── style.css
│   └── script.js
├── notebooks/
│   └── model_training.ipynb   # EDA, training and evaluation
├── requirements.txt
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Python 3.9 or higher
- pip

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/chavib30-hub/<your-repo-name>.git
cd <your-repo-name>

# 2. (Optional) Create and activate a virtual environment
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate

# 3. Install dependencies
pip install -r requirements.txt
```

### Run the API

```bash
uvicorn app.main:app --reload
```

- API: `http://127.0.0.1:8000`
- Interactive docs: `http://127.0.0.1:8000/docs`

### Use the Web Interface

Open `frontend/index.html` in your browser, enter the housing details and click **Predict**.

## 🔌 API Usage

### `POST /predict`

Returns the predicted house price for the given features.

> Field names below are examples. Replace them with the exact features your model uses.

**Request**

```bash
curl -X POST "http://127.0.0.1:8000/predict" \
  -H "Content-Type: application/json" \
  -d '{"feature_1": 0.0, "feature_2": 0.0, "feature_3": 0.0}'
```

**Response**

```json
{
  "predicted_price": 0.0
}
```

## 🤖 Model Details

| Item | Details |
|------|---------|
| Algorithm | Random Forest Regressor |
| Dataset size | 206,400 records |
| Task | Regression (house price estimation) |

| Metric | Score |
|--------|-------|
| R² Score | _add your value_ |
| MAE | _add your value_ |
| RMSE | _add your value_ |

## 🖼 Screenshots

> Add screenshots of your web interface here. Save them in a `screenshots/` folder.

```
![Home Page](screenshots/home.png)
![Prediction Result](screenshots/result.png)
```

## 🔮 Future Improvements

- Hyperparameter tuning to improve accuracy
- Compare with Gradient Boosting and XGBoost
- Add input validation and clearer error messages
- Deploy the API and interface online
- Add Docker support

## 👩‍💻 Author

**Chavi Bhatnagar**
B.Tech in Computer Science and Engineering (Data Science)

[![GitHub](https://img.shields.io/badge/GitHub-chavib30--hub-181717?logo=github)](https://github.com/chavib30-hub)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Chavi%20Bhatnagar-0A66C2?logo=linkedin)](https://linkedin.com/in/chavi-bhatnagar-655197294)

📧 chavib30@gmail.com

---

⭐ If you found this project useful, consider giving it a star!
