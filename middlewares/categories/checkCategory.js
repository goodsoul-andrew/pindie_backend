const checkIfCategoryExists = async (req, res, next) => {
	// Среди существующих в базе категорий пытаемся найти категорию с тем же именем,
	// с которым хотим создать новую категорию
	const isInArray = req.categories.find((category) => {
		return req.body.name === category.name;
	});
	// Если нашли совпадение, то отвечаем кодом 400 и сообщением
	if (isInArray) {
		res.setHeader('Content-Type', 'application/json');
		res.status(400).send(JSON.stringify({ message: 'Категория с таким названием уже существует' }));
		return;
	} else {
		// Если категория, которую хотим создать, действительно новая, то передаём управление дальше
		next();
	}
};

async function checkEmptyCategory (req, res, next) {
  if (!req.body.name || req.body.name === "") {
    res.setHeader('Content-Type', 'application/json');
		res.status(400).send(JSON.stringify({ message: 'Пустое название нельзя задать' }));
		return;
  }
  else {
    next();
  }
}

module.exports = {checkEmptyCategory, checkIfCategoryExists};