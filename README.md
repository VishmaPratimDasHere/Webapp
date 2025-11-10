# 🌐 Personal Portfolio Web App

A minimal, responsive portfolio website built using **Express.js**, **EJS**, and **Bootstrap 5**, and deployed on **Railway**.

---

## 🚀 Features

- ✅ Responsive UI using Bootstrap 5
- ✅ Server-side templating using EJS
- ✅ Multiple routes (`/`, `/resume`)
- ✅ Static assets served from `/public`
- ✅ Deployment ready (Railway / Render / Vercel backend mode)

---

## 🛠 Tech Stack

| Layer        | Technology |
|--------------|------------|
| Backend      | Node.js + Express.js |
| Frontend     | HTML, CSS, Bootstrap 5, EJS |
| Deployment   | Railway |

---

## 📂 Folder Structure

```
project-root/
│
├── views/                # EJS templates
│   ├── partials/         # Reusable components like navbar
│   ├── home.ejs
│   └── resume.ejs
│
├── public/               # Static files (CSS, images, JS)
│
├── app.js                # Express server
├── package.json          # Dependencies + start script
└── README.md
```

---

## 🧪 Run Locally

### 1. Clone the repo

```sh
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

### 2. Install dependencies

```sh
npm install
```

### 3. Start the server

```sh
npm start
```

Then visit:  
👉 http://localhost:3000

---

## 🌍 Deployment (Railway)

Railway automatically runs:

```
npm install
npm start
```

Ensure:

**package.json**

```json
"scripts": {
  "start": "node app.js"
}
```

**app.js**

```js
app.listen(process.env.PORT || 3000);
```

---

## 📄 License

MIT License — free to use, copy, and modify.

---

## 📬 Contact

```
Vishma Pratim Das
vishmapdas@gmail.com | [<LinkedIn>](https://github.com/VishmaPratimDasHere/)
```

---

> ⭐ If you like this project, consider starring the repository on GitHub!
