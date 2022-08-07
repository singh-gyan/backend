const deleteProductData = dataDump => {
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

function transformData(dataDump, product) {
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
}

module.exports = { transformData, deleteProductData };
