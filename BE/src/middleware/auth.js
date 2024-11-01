const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    return next();
  }
  return res.json({ message: "Bạn không đủ quyền truy cập vào đây !!" });
};

module.exports = isAdmin;
