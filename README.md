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

```
git clone https://github.com/your-username/solar-quoter.git

cd solar-quoter
