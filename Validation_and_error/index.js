const express = require("express");
const { isNameValid, isPasswordValid } = require("./utils/validator");
const { isPasswordValidLength } = require("./middlewares/middleware");
const isStrongPassword = require("validator/lib/isStrongPassword");
const isEmail = require("validator/lib/isEmail");
const { body, validationResult } = require("express-validator");

const app = express();
app.use(express.urlencoded({ extended: false }));

const PORT = 5050;

app.get("/", (req, res) => {
  res.send(`<form method="POST">
      <label for="name">Name</label>
      <input type="name" name="name" id="name" />

       <label for="email">Email</label>
      <input type="text" name="email" id="email" />

      <label for="password">Password</label>
      <input type="password" name="password" id="password" />

      <input type="submit" name="value" />
    </form>`);
});

const bodyValidatePassword = body("password")
  .isLength({ min: 4, max: 15 })
  .withMessage("Invalid password from express-validator");

const bodyValidateEmail = body("email")
  .isEmail()
  .withMessage("Invalid email from express validator");

app.post("/", bodyValidateEmail, bodyValidatePassword, (req, res) => {
  const { name, password, email } = req.body;

  const errors = validationResult(req);
  console.log(errors);

  if (!isNameValid(name)) {
    res.status(400).send("Invalid name");
    return;
  }

  //   if (!isEmail(email)) {
  //     return res.status(400).send("not an email");
  //   }

  //   if (!isStrongPassword(password)) {
  //     return res.status(404).send("Weak password");
  //   }

  //   if (!isPasswordValid(password)) {
  //     return res.status(400).send("Invalid password from custom validator");
  //   }

  if (!errors.isEmpty()) {
    return res.status(404).send(`Error msg: ${errors.array()[0].msg}`);
  }

  console.log(name, password, email);

  res.send("ok");
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
