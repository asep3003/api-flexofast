const tbl = require('../models');
const Model = tbl.pencapaian;

exports.get = async (req, res) => {
  await Model.findAll({
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
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