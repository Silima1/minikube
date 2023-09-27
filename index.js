var express = require('express');
var app = express();

// Dados fictícios de países europeus, países da União Europeia e suas capitais
var europeCountries = ['Portugal', 'Spain', 'France', 'Germany', 'Italy', 'Greece', 'Netherlands', 'Belgium', 'Austria', 'Denmark', 'Sweden', 'Finland', 'Ireland', 'Luxembourg', 'Cyprus', 'Malta', 'Croatia', 'Slovenia', 'Estonia', 'Latvia', 'Lithuania', 'Slovakia', 'Hungary', 'Poland', 'Czech Republic', 'Romania', 'Bulgaria'];

var euCountries = ['Portugal', 'Spain', 'France', 'Germany', 'Italy', 'Greece', 'Netherlands', 'Belgium', 'Austria', 'Denmark', 'Sweden', 'Finland', 'Ireland', 'Luxembourg', 'Cyprus', 'Malta', 'Croatia', 'Slovenia'];

var euCapitals = {
    'Portugal': 'Lisbon',
    'Spain': 'Madrid',
    'France': 'Paris',
    'Germany': 'Berlin',
};

app.get('/europe', function (req, res) {
    res.json({ "countries": europeCountries });
});

app.get('/eu', function (req, res) {
    res.json({ "countries": euCountries });
});

app.get('/eu/capitals', function (req, res) {
    var capitals = {};
    euCountries.forEach(function (country) {
        if (euCapitals[country]) {
            capitals[country] = euCapitals[country];
        }
    });
    res.json({ "capitals": capitals });
});

app.listen(process.env.PORT || 3000);
module.exports = app;
