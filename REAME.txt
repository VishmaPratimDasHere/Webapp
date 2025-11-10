Personal Portfolio Web App

An Express.js + EJS based portfolio website deployed on Railway.

Features:
- Responsive UI (Bootstrap 5)
- Dynamic EJS templating
- Routes: /, /resume
- Static assets served from /public

Tech Stack:
Backend: Node.js + Express.js
Frontend: HTML, CSS, Bootstrap, EJS
Deployment: Railway

Project Structure:
project-root/
- views/
  - partials/
  - home.ejs
  - resume.ejs
- public/
- app.js
- package.json
- README

Run locally:
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
npm start
http://localhost:3000

Deployment (Railway):
Ensure package.json contains:
"scripts": { "start": "node app.js" }
In app.js:
app.listen(process.env.PORT || 3000)

License:
MIT License

Contact:
<your email> | <LinkedIn> | <GitHub>
