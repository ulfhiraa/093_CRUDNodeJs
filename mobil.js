import express, { Route } from "express";

const router = express.Router();

const mobil = [
    {
        merk: "Toyota",
        model: "Avanza",
        warna: "Hitam",
        tahun: 2021,
    },
    {
        merk: "Porsche",
        model: "Sport",
        warna: "Kuning",
        tahun: 2024,
    }
];
router.get("/", (req, res) => {
    res.send(mobil);
});
export default router;

// mob database, cara menguji route seperti apa