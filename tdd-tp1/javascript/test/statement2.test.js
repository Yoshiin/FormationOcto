const statement = require('../src/statement');

test("First test", () => {
	const invoice = {
		customer: "Test",
		performances: []
	};
	const r = statement(invoice, null);
	expect(r).toMatch(`Statement for Test
Amount owed is $0.00
You earned 0 credits
`);
});

test("Second test", () => {
	const invoice = {
		customer: "Test",
		performances: [{playID: 0}]
	};
	const r = () => statement(invoice, [{type: "Play Type"}]);
	expect(r).toThrow("unknown type: Play Type");
});

test("Comedy test", () => {
	const invoice = {
		customer: "Test",
		performances: [{playID: 0}]
	};
	const r = statement(invoice, [{type: "comedy"}]);
	expect(r).toMatch(`Statement for Test
 undefined: $NaN (undefined seats)
Amount owed is $NaN
You earned NaN credits
`
);
});

test("Comedy audience", () => {
	const invoice = {
		customer: "Test",
		performances: [{playID: 0, audience: 21}]
	};
	const r = statement(invoice, [{type: "comedy"}]);
	expect(r).toMatch(`Statement for Test
 undefined: $468.00 (21 seats)
Amount owed is $468.00
You earned 4 credits
`
	);
});

test("Tragedy audience", () => {
	const invoice = {
		customer: "Test",
		performances: [{playID: 0, audience: 31}]
	};
	const r = statement(invoice, [{type: "tragedy"}]);
	expect(r).toMatch(`Statement for Test
 undefined: $410.00 (31 seats)
Amount owed is $410.00
You earned 1 credits
`
	);
});

test("Tragedy less than 29", () => {
	const invoice = {
		customer: "Test",
		performances: [{playID: 0, audience: 29}],
	};
	const r = statement(invoice, [{type: "tragedy"}]);
	expect(r).toMatch(`Statement for Test
 undefined: $400.00 (29 seats)
Amount owed is $400.00
You earned 0 credits
`
	);
});
