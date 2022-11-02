exports.isPass = (req, res, next) => {
  req.headers.isfreeappuser ? next() : res.send("Header Not Present");
};
