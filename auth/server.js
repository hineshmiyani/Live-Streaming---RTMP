const express = require("express");
const app = express();

app.use(express.urlencoded());

app.post("/auth", (req, res) => {
  const streamKey = req.body.key;

  if (streamKey === "supersecret") {
    return res.status(200).json({ message: "stream key is valid" });
  } else {
    res.status(403).send("stream key is invalid");
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
