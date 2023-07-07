export default function (req, res, next) {
  try {
    res.setHeader("Access-Control-Allow-Origin", process.env.CLIENT_URL);
    next();
  } catch (err) {
    next(err);
  }
}
