const jwt = require('jsonwebtoken');

const deleteProductData = async Dump => {
  dataDump.forEach(dump => {
    if (dump.company.includes('headphone')) {
      Mobile.deleteOne({ id: dump.id })
        .then(() => {
          console.log('deleted');
        })
        .catch(err => {
          console.log(err);
        });
    }
  });
};

const transformData = async (Dump, product) => {
  const dataDump = await Dump.find({});
  dataDump.forEach((data, index) => {
    product.create({
      id: Math.floor(Math.random() * 100000 + 1),
      company: data._id,
      items: data.Price.map((price, index) => {
        return {
          Image: data.Image[index],
          Price: price.split('₹')[1],
          Title: data.Title[index],
        };
      }),
    });
  });
};
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

module.exports = { transformData, deleteProductData, authenticateToken };
