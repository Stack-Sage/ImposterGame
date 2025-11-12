export default function handler(req, res) {
  // ...implement room creation logic with random code...
  res.status(200).json({ roomId: Math.random().toString(36).slice(2,8).toUpperCase() });
}
