# Budget Buddy - A Personal Budget Tracker

A full-stack web application for tracking personal finances, powered by **Spring Boot**, **Django**, **React**, and **Docker**. Features AI/ML-driven expense categorization and financial insights.


## Features

### Core Features
- **Transaction Management**: Add, edit, or delete income and expenses.
- **Budget Planning**: Set monthly budgets for categories (e.g., groceries, rent).
- **User Authentication**: Secure signup/login using JWT.
- **Dashboard**: Visualize spending trends with charts and tables.

### AI/ML Integrations
- **Smart Expense Categorization**: Auto-categorize transactions using OpenAI or Hugging Face NLP models.
- **Financial Insights**: Forecast future spending/savings using Prophet time-series analysis.
- **Personalized Recommendations**: AI-generated budget tips based on spending habits.

## Tech Stack

### Backend (Spring Boot)
- **Java 23**
- **Spring Boot 3**
- **Spring Security** (JWT Authentication)
- **PostgreSQL** (Database)
- **Docker**

### AI/ML Microservice (Django)
- **Python 3.10**
- **Django REST Framework**
- **OpenAI API** / **Hugging Face Transformers**
- **Prophet** (Time-Series Forecasting)
- **Pandas** (Data Analysis)

### Frontend (React)
- **React 19**
- **Axios** (API Calls)
- **Chart.js** (Data Visualization)
- **React Router** (Navigation)
- **Material-UI** (UI Components)

### Infrastructure
- **Docker Compose** (Multi-container orchestration)
- **NGINX** (Reverse Proxy - Optional for production)

## Installation

### Prerequisites
- Docker and Docker Compose installed.
- OpenAI API key (for expense categorization).

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/sam-a-d/BuggetBuddyAI
   cd BuggetBuddyAI