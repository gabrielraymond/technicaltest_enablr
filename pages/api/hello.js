// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require("fs");
export default function handler(req, res) {
  fs.writeFile("/tmp/data", "just for test", function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
  res.status(200).json({ name: "John Doe" });
}
