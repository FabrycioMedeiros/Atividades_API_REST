const express = require("express");
const app = express();
const port = 3000;

function isAuthorized(req, res, next) {
  const auth = req.headers.authorization;
  if (auth === 'secretpassword') {
    next();
  } else {
    res.status(401);
    res.send('Not permitted');
  }
}

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/users", (req, res) => {
  res.json([
    {
      id: 1,
      name: "User Userson",
    },
  ]);
});

app.get("/users", isAuthorized, (req, res) => {
  res.json([
    {
      id: 1,
      name: "User Userson",
    },
  ]);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
