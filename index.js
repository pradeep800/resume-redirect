import express from "express";
const app = express();
const url = "https://drive.google.com/file/d/1vq7Tsfb03r5p5sF3xtNUv6z-e_1ddjDv/view?usp=sharing";
app.get("/", (req, res) => {
  res.redirect(url);
});
app.get("/*", (req, res) => {
  res.redirect(url);
});
app.listen(3008, (err) => {
  if (err) {
    console.log(err.message);
  }
});
