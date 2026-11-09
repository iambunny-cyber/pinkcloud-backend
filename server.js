const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/", (req, res) => {
  res.json({
    name: "PinkCloud Backend",
    status: "online"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "PinkCloud"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`PinkCloud backend running on port ${PORT}`);
});
