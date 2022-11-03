exports.isHeader = (req, res, next) => {
  return req.headers["authorization"]
    ? next()
    : res.send("Please login angain!!");
};
