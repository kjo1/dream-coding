//Spread Syntax - Object
const item = { type: '👔', size: 'M' };
const detail = { price: 20, made: 'Korea', gender: 'M' };

// ❌ Bad Code 💩
item['price'] = detail.price;

// ❌ Bad Code 💩
const newObject = new Object();
newObject['type'] = item.type;
newObject['size'] = item.size;
newObject['price'] = item.price;
newObject['made'] = item.made;
newObject['gender'] = item.gender;

// ❌ Bad Code 💩
const newObject2 = {
	type: item.type,
	size: item.type,
	price: item.type,
	made: item.type,
	gender: item.type,
};

// ✅ Good Code ✨
const shirt0 = Object.assign(item, detail);

// ✅ Better! Code ✨
const shirt = { ...item, ...detail, price: 40 };
