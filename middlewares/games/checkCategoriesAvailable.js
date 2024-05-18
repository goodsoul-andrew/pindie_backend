async function checkCategoriesAvailable(req, res, next) {
  if (!req.body.categories || req.body.categories.length === 0) {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Выбери хотя бы одну категорию" }));
    return;
  } 
  else {
    next();
  }
}


module.exports = checkCategoriesAvailable;