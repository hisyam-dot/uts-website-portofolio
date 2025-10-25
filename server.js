const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/portofolio", (req, res) => {
  res.json({
    nama: "Muhammad Hisyam Fikri Fadhillah",
    prodi: "Pendidikan Teknik Informatika dan Komputer",
    nim: "1512623024",
    email: "hisyam@example.com",
    deskripsi: "become a fullstack developer.",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`${PORT}`);
});
