AI-Powered Parametric Insurance for Gig Workers
Problem
Gig delivery workers (Swiggy/Zomato) lose income due to external disruptions like heavy rain, pollution, extreme heat, and curfews. These events reduce their working hours, causing financial instability. Currently, they have no income protection.

Persona
Name: Rahul
Platform: Swiggy
City: Hyderabad
Average Daily Income: ₹700

we came up with a Solution

THE SOLUTION -
We build an AI-powered parametric insurance platform that automatically compensates workers when external disruptions reduce their ability to work.

Weekly Premium Model (With Formula)

Premium is calculated using AI risk scoring:

premium = base_price + (risk_score × risk_factor)
Where:
base_price = ₹20
risk_score = 0 to 1
risk_factor = ₹20
Example:
premium = 20 + (0.5 × 20) = ₹30/week
Income-Based Payout (Key Feature)

****We use a rolling 7-day average income model ****
Daily Avg income = Last 7 days income / 7

Example:
4900 / 7 = ₹700

Payout Formula:
payout = daily_avg_income × disruption_factor

Example:
700 × 0.6 = ₹420
Parametric Triggers
Claims are triggered automatically:

THE CONDITIONS FOR CLAIM
Rainfall > 50mm
Temperature > 45°C
AQI > 350
Curfew / zone closure

Workflow
Worker registers

AI calculates risk score & premium

Worker buys policy

System monitors weather

Disruption detected

Fraud checks applied

Claim triggered automatically

Payout simulated

AI Integration
Risk Prediction

Calculates risk score

Adjusts premium

Fraud Detection

Weather validation

Location verification

Activity analysis

Adversarial Defense & Anti-Spoofing Strategy
##To handle fraud attacks like GPS spoofing:

1.Multi-Source Location Check
GPS + IP + historical patterns
2.Activity Validation
{ IF orders_delivered > threshold }
→ no payout

3.External Data Verification
Weather API
Pollution API

4.Fraud Scoring
fraud_score = f(location_mismatch, activity_drop, claim_frequency)

5.Anti-Collusion Detection
Multiple users from same location
Pattern-based fraud detection

System Architecture
Worker → Frontend → Backend API → AI Engine
↓
Weather API + Database
↓
Claim + Payout System

Tech Stack
Frontend:
HTML, CSS, JavaScript

Backend:
Spring Boot

AI:
Python (Scikit-learn)

Database:
PostgreSQL

APIs:
Weather API

Payments:
Razorpay (Test Mode)

Future Enhancements
• Risk heatmap

• Advanced ML models

• Real-time payouts

• Personalized plans
