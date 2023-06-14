const tbl = require('../models');
const Model = tbl.testimoni;

exports.get = async (req, res) => {
  await Model.findAll({
    where: {
      user_id: req.user.id,
    },
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
    include: {
      model: tbl.user,
      as: 'user',
      attributes: {
        exclude: ['id', 'createdAt', 'updatedAt'],
      }
    }
  })
  .then((data) => {
    return res.json({
      data: data,
    })
  }).catch((err) => {
    return res.status(err);
  });
}