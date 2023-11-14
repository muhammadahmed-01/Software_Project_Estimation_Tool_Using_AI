# Project Estimation Tool

🚀 Swiftly estimate project timelines with AI-powered precision!

The Project Estimation Tool is a web-based application designed for quick and accurate time estimations in the IT sector. Say goodbye to the stress of estimating new projects—our tool leverages AI to learn and suggest estimates based on your project history.

## Goal

The primary goal of this tool is to streamline the process of estimating project timelines, especially in scenarios where company resources are occupied with ongoing projects. By leveraging AI, the tool aims to learn from each project, making future estimations more efficient and accurate.

## 🎯 Key Features

- 💡 User can enter tasks and subtasks along with their completion time.
- 🤖 AI/ML model suggests estimated time for subtasks based on user input.
- 🔄 AI/ML model learns and adapts with each project.
- 📈 Enables users to quickly calculate estimates and provide quotes to clients.

## 👥 Stakeholders

This project involves three key stakeholders:
1. 🤝 **Salesperson:** Meets with the client, discusses project requirements, and submits a request to the estimator.
2. ⚙️ **Estimator:** Receives project data from the salesperson and provides estimates.
3. 👁️ **Estimator Reviewer:** Reviews the estimates and makes decisions based on them.

## List of Features

### 💡 4.1 User-friendly Features

- **User Input:** Enter tasks and subtasks with completion times.
- **AI/ML Suggestions:** Model suggests estimated times.
- **Learning:** AI/ML model learns and relearns from user input.

### 🌐 4.2 Functional Requirements

- **Estimate Management:** Read, modify, delete estimates of tasks and subtasks.
- **User Input:** Enter estimates for tasks and subtasks.
- **Model Functionality:** Model suggests estimates considering various factors.
- **Storage:** Learned estimates are stored in a database.

## 🚀 Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/DarkShadowFT/Software_Project_Estimation_Tool_Using_AI.git

2. **Navigate to the project folder:**
   ```bash
   cd Software_Project_Estimation_Tool_Using_AI

3. **Install dependencies for the backend:**
   ```bash
   pip install -r requirements.txt

4. **Run the Django migrations:**
   ```bash
   python manage.py migrate

5. **Start the Django backend:**
   ```bash
   python manage.py runserver

6. **Navigate to frontend folder:**
   ```bash
   cd sp_estimation_ai_client
   
7. **Install dependencies:**
   ```bash
   npm install

8. **Start the application:**
   ```bash
   npm start

Access the app at http://localhost:3000
