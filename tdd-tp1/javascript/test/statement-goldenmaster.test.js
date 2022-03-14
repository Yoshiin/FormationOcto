const statement = require('../src/statement');
const seedrandom = require('seedrandom');
const fs = require('fs');

const plays = [
	{type: "tragedy"},
	{type: "comedy"}
];

const invoice = [{
	customer: "Test",
	performances: [{
		playID: 0,
		audience: 29
	}],
}];

function getRndInteger(min, max, seed) {
	let rand = seedrandom(String(seed))
	return Math.floor(rand() * (max - min + 1) ) + min;
}

function generateInvoice(seed) {
	return {
		customer: "Test",
		performances: [{
			playID: getRndInteger(0, 1, seed),
			audience: getRndInteger(0, 100, seed + 1),
		}],
	};
}

function generateInvoices(qte) {
	let invoices = [];
	for (let i = qte; i > 0; i--) {
		invoices[i] = generateInvoice(i);
	}
	return invoices.filter(Boolean);
}

test("Goldenmaster", () => {
	let invoices = generateInvoices(100);
	let s = []

	for (let i of invoices) {
		s.push(statement(i, plays));
	}

	/*fs.writeFileSync('test/test.json', JSON.stringify(s), (err) => {
		if (err) throw err;
		console.log('The file has been saved!');
	});*/
	const readedStatements = JSON.parse(fs.readFileSync('test/test.json', 'utf8'));
	expect(JSON.stringify(s)).toMatch(JSON.stringify(readedStatements));
});
