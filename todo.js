// Import modul yang diperlukan
const express = require('express');
const router = express.Router();

// Array untuk menyimpan data awal todos
const todos = [ // Array untuk menyimpan daftar tugas (harus didefinisikan)
    { id: 1, 
        task: "Belajar Node.js", 
        completed: false },
    { id: 2, 
        task: "Membuat API", 
        completed: true }
];


// Endpoint untuk mendapatkan data todos
router.get('/', (req, res) => {
    res.json(todos);
});

// Endpoint untuk menambah tugas baru
router.post('/', (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        task: req.body.task,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

module.exports = router;

// Endpoint untuk menghapus tugas
router.delete('/:id', (req, res) => {
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (todoIndex === -1) return res.status(404).json({ message: 'Tugas tidak ditemukan' });

    const deletedTodo = todos.splice(todoIndex, 1)[0]; // Menghapus dan menyimpan todo yang dihapus
    res.status(200).json({ message: `Tugas dengan ID ${deletedTodo.task} telah dihapus`});
});

// Endpoint untuk memperbarui tugas
router.put('/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({ message: 'Tugas tidak ditemukan' });
    todo.task = req.body.task || todo.task;

    res.status(200).json({
        message: `Tugas dengan ID ${todo.id} telah diperbarui`,
        updatedTodo: todo
    });
});
