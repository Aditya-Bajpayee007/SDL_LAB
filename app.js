const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello, SDL CI Project!" });
});

app.post("/echo", (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }
  res.status(201).json({ echoed: message });
});

module.exports = app;

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}
