const statement = require('../src/statement');

const invoiceWithoutPerformances = {
	customer: "Test",
	performances: []
};

const invoiceWithUnknownPlayType = {
	customer: "Test",
	performances: [{playID: 0}]
};

const invoiceComedyWithAudiance21 = {
	customer: "Test",
	performances: [{playID: 1, audience: 21}]
};

const invoiceComedyWithAudiance19 = {
	customer: "Test",
	performances: [{playID: 1, audience: 19}]
};

const invoiceTragedyWithAudiance31 = {
	customer: "Test",
	performances: [{playID: 2, audience: 31}]
};

const invoiceTragedyWithAudiance29 = {
	customer: "Test",
	performances: [{playID: 2, audience: 29}]
};

const plays = [
	{ type: "Play Type" },
	{ type: "comedy" },
	{ type: "tragedy" },
];

test("Teste un invoice sans performances", () => {
	const s = statement(invoiceWithoutPerformances, null);
	expect(s).toMatch(
		"Statement for Test\n" +
		"Amount owed is $0.00\n" +
		"You earned 0 credits\n");
});

test("Teste un invoice avec un playType qui n'existe pas", () => {
	const s = () => statement(invoiceWithUnknownPlayType, plays);
	expect(s).toThrow("unknown type: Play Type");
});

test('Teste un invoice avec un type "comedy" et une audience supérieure a 20', () => {
	const r = statement(invoiceComedyWithAudiance21, plays);
	expect(r).toMatch(
		"Statement for Test\n" +
		" undefined: $468.00 (21 seats)\n" +
		"Amount owed is $468.00\n" +
		"You earned 4 credits\n");
});

test('Teste un invoice avec un type "comedy" et une audience inférieure à 20', () => {
	const r = statement(invoiceComedyWithAudiance19, plays);
	expect(r).toMatch(
		"Statement for Test\n" +
		" undefined: $357.00 (19 seats)\n" +
		"Amount owed is $357.00\n" +
		"You earned 3 credits\n");
});

test('Teste un invoice avec un type "tragedy" et une audience supérieure a 30', () => {
	const r = statement(invoiceTragedyWithAudiance31, plays);
	expect(r).toMatch(
		"Statement for Test\n" +
		" undefined: $410.00 (31 seats)\n" +
		"Amount owed is $410.00\n" +
		"You earned 1 credits\n");
});

test('Teste un invoice avec un type "tragedy" et une audience inférieure à 30', () => {
	const r = statement(invoiceTragedyWithAudiance29, plays);
	expect(r).toMatch(
		"Statement for Test\n" +
		" undefined: $400.00 (29 seats)\n" +
		"Amount owed is $400.00\n" +
		"You earned 0 credits\n");
});
