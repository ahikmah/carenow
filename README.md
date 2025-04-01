# **CareNow Indonesia**

![React](https://img.shields.io/badge/React-19-blue.svg?style=flat&logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg?style=flat&logo=typescript) ![Vite](https://img.shields.io/badge/Vite-6-purple.svg?style=flat&logo=vite) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-blue.svg?style=flat&logo=tailwindcss) ![React Query](https://img.shields.io/badge/ReactQuery-5-orange.svg?style=flat&logo=reactquery) ![shadcn/ui](https://img.shields.io/badge/shadcn-UI-black.svg?style=flat)

### **🔍 About the Project**

This project built using **React, TypeScript, Vite, TailwindCSS, ShadCN, and React Query**.  
It allows users to:

- Submit patient visit details, including treatments, medications, and doctor information.
- View visit history records with detailed information about each visit.

📝 This project was created as part of the **CARE NOW INDONESIA** recruitment test.

---

## 📖 **Table of Contents**

- [🛠️ Features](#️-features)
- [💻 Running Locally](#-running-locally)
- [📌 Tech Stack](#-tech-stack)
- [📜 API Documentation](#-api-documentation)

---

## 🛠️ **Features**

- **Patient Visit Form**: Submit patient details, including treatments, medications, and doctor selection.
- **Visit History**: View a list of past visits with detailed information.
- **Dark Mode**: Toggle between light and dark themes.
- **Responsive Design**: Optimized for both mobile and desktop views.

---

## 💻 **Running Locally**

### **1️⃣ Prerequisites**

- Node.js (v20 or higher)
- Yarn package manager

### **2️⃣ Clone the Repository**

```sh
git clone https://github.com/ahikmah/carenow.git

cd carenow
```

### **3️⃣ Install Dependencies**

```sh
yarn install
```

### **4️⃣ Start the Development Server**

```sh
yarn dev
```

> The app will be available at **`http://localhost:8081/`**.

---

## 📌 **Tech Stack**

| Technology       | Description               |
| ---------------- | ------------------------- |
| **React**        | Frontend UI library       |
| **TypeScript**   | Strongly typed JavaScript |
| **Vite**         | Fast build tool           |
| **Tailwind CSS** | Utility-first styling     |
| **shadcn/ui**    | Pre-styled UI components  |
| **React Query**  | Data fetching & caching   |

---

## 📜 **API Documentation**

The application interacts with a backend API for fetching and submitting data. Below are the key endpoints:

- **GET `/treatment`**: Fetch available treatments.
- **GET `/medication`**: Fetch available medications.
- **GET `/doctor`**: Fetch available doctors.
- **GET `/mcu`**: Fetch visit history.
- **POST `/mcu`**: Submit a new patient visit.

The API base URL is configurable
