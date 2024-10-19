import express, { Route } from "express";

const router = express.Router();

const user = [
    {
        nama: "Ulfah",
        usia: 20,
        alamat: "Pontianak",
        pekerjaan: "Mahasiswa",
        hobi: "Bernyanyi",
    },
    {
        nama: "Zahro",
        usia: 20,
        alamat: "Jambi",
        pekerjaan: "Mahasiswa",
        hobi: "Kulineran",
    },
    {
        nama: "Iffa",
        usia: 20,
        alamat: "Padang",
        pekerjaan: "Mahasiswa",
        hobi: "Memasak",
    },
    {
        nama: "Namira",
        usia: 21,
        alamat: "Magelang",
        pekerjaan: "Mahasiswa",
        hobi: "Berenang",
    }
];
router.get("/", (req, res) => {
    res.send(user);
});
export default router;

// mob database, cara menguji route seperti apa