const fs = require("fs");

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(400).send({ message: "Only POST requests allowed" });
    return;
  }
  
  const {fullName, email, message} = req.body
  const data = `id: ${Date.now()}, fullName: ${fullName},  email: ${email}, message: ${message}`;
  fs.writeFile(`./contactform/${fullName}.txt`, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
  res.status(201).json(req.method);
  console.log("hello");
}
