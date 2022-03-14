const format = new Intl.NumberFormat("en-US",
    { style: "currency", currency: "USD",
        minimumFractionDigits: 2 }).format;

class Tragedy {
    type = "tragedy";
    computeAmount(audience) {
        let thisAmount = 40000;
        if (audience > 30) {
            thisAmount += 1000 * (audience - 30);
        }
        return thisAmount;
    }
    computeVolumeCredits(audience) {
        return Math.max(audience - 30, 0);
    }
}

class Comedy {
    type = "comedy";
    computeAmount(audience) {
        let thisAmount = 30000;
        if (audience > 20) {
            thisAmount += 10000 + 500 * (audience - 20);
        }
        thisAmount += 300 * audience;
        return thisAmount;
    }
    computeVolumeCredits(audience) {
        return Math.max(audience - 30, 0) + Math.floor(audience / 5);
    }
}

const playTypes = [new Comedy(), new Tragedy()];

function extractPlayType(play) {
    const playType = playTypes.filter(o => o.type === play.type);
    if (playType.length) {
        return playType[0];
    } else {
        throw new Error(`unknown type: ${play.type}`);
    }
}

function statement(invoice, plays) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let thisAmount;
    let result = `Statement for ${invoice.customer}\n`;

    for (let perf of invoice.performances) {
        const playType = extractPlayType(plays[perf.playID]);
        thisAmount = playType.computeAmount(perf.audience)
        volumeCredits += playType.computeVolumeCredits(perf.audience);
        totalAmount += thisAmount;
        result += ` ${plays[perf.playID].name}: ${format(thisAmount / 100)} (${perf.audience} seats)\n`;
    }

    result += `Amount owed is ${format(totalAmount/100)}\nYou earned ${volumeCredits} credits\n`;
    return result;
}

module.exports = statement;
