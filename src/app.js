const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const {PORT} = require('./config/env');

const {createContributionTable} = require('./jobs/init');
const {getCountries} = require('./utils/countries');
const {convertToDollars} = require('./utils/convertCurrency');
const {YEARLY_PROJECTION} = require('./utils/contributions');

const {insertContribution} = require('./services/contributions');


const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.get('/', async (req, res) => {
    const countries = await getCountries();
    res.render('form', {countries});
});

app.post('/confirm', async (req, res) => {
    let {donationAmount, frequencyOfDonation, formOfPayment} = req.body;
    donationAmount = parseInt(donationAmount);
    const yearlyContributionInCurrency = donationAmount * YEARLY_PROJECTION[frequencyOfDonation];
    let yearlyContributionInDollars;
    if (formOfPayment === 'USD') {
        yearlyContributionInDollars = yearlyContributionInCurrency;
    } else {
        yearlyContributionInDollars = await convertToDollars(formOfPayment, yearlyContributionInCurrency);
    }
    res.render('confirm', {
        ...req.body,
        yearlyContributionInDollars,
        yearlyContributionInCurrency,
        isNotUsd: formOfPayment !== 'USD'
    });
});

app.post('/submit', (req, res) => {
    insertContribution(req.body);
    return res.json({status: true})
});


app.listen(PORT, () => {
    // init jobs
    createContributionTable();
    console.log(`App is listening on port ${PORT}`);
});
