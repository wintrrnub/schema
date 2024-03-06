const db = require("../models/db");

exports.getByUser = async (req, res, next) => {
  try {
    const recordIN = await db.recordIN.findMany({
      where: { userId: req.user.id },
    });
    res.json({ recordIN });
  } catch (err) {
    next(err);
  }
};
