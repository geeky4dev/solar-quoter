# 🌞 Solar Quoter

**Solar Quoter** is a simple React web application that allows users to request a solar installation quote by filling out a form. Once submitted, the form data is sent to your email via [EmailJS](https://www.emailjs.com/).

## 🚀 Features

- User-friendly quote request form
- Fields include: Name, Email, Location, Monthly Consumption (kWh), and Roof Type
- Email delivery using EmailJS API
- Basic validation and confirmation alert

---

## 📦 Technologies Used

- [React](https://reactjs.org/) (Frontend)
- [Bootstrap](https://getbootstrap.com/) (Styling)
- [EmailJS](https://www.emailjs.com/) (Email sending without a backend)

---

## 📁 Project Structure

solar-quoter/
├── public/
├── src/
│ ├── QuoteForm.jsx # Main form component
│ └── App.jsx # Renders QuoteForm
├── .env # (Optional) EmailJS keys (not used here directly)
├── package.json
└── README.md

---

## 🔧 Setup Instructions

### 1. **Clone the repository**

```bash
git clone https://github.com/your-username/solar-quoter.git
cd solar-quoter

### 2. **Install dependencies

npm install

## 3. Configure EmailJS

3.1. Go to https://dashboard.emailjs.com/

3.2. Create an account (if you haven't).

3.3. Create:

Email Service

Email Template with variables like {{name}}, {{email}}, {{location}}, etc.

3.4. Get your:

Service ID

Template ID

Public Key

3.5. Replace the placeholders inside QuoteForm.jsx:

emailjs.send(
  'your_service_id',
  'your_template_id',
  dataToSend,
  'your_public_key'
)

## 4. Run the app locally

http://localhost:3000/   (For example)
(If you're using Vite (default), the dev server runs on port 5173).

✅ Deployment
You can deploy this app on:

Vercel

Netlify

GitHub Pages (with some config)

No backend server is needed since EmailJS handles the email sending.

🛡️ Notes
All form data must match the variable names used in your EmailJS template.

Ensure your public key is correct and from the Account > API Keys section in EmailJS dashboard.

For production, avoid hardcoding keys — use environment variables instead.



