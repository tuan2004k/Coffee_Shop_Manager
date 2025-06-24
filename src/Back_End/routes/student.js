import express from 'express';
const router = express.Router();

router.get('/students', (req, res) => {
  res.json([{ id: 1, name: 'Nguyễn Văn A' }]);
});

export default router; // ✅ Export theo chuẩn ES module
