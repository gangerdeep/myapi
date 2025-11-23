export default function handler(req, res) {
  const { num, key } = req.query;

  const MY_KEY = "papabolo";  // yaha apni API key set karo

  if (!key || key !== MY_KEY) {
    return res.status(401).json({ 
      status: "error", 
      message: "Invalid API key" 
    });
  }

  if (!num) {
    return res.status(400).json({
      status: "error",
      message: "Missing number"
    });
  }

  // ---- yaha apna custom data rakh sakte ho ----
  const data = {
    number: num,
    operator: "Jio",
    circle: "Rajasthan",
    info: "Demo working! Apna data yaha add karo."
  };

  return res.status(200).json({
    status: "success",
    data: data
  });
}
