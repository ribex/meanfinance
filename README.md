<h1>CareerDevs Finance Agile Week</h1>
<p>Get your own AlphaAdvantage api key at <a href="https://www.alphavantage.co/">Alpha Advantage</a></p>

jr - pull request attempt
jr renamed to remove conflict
=======
<p>Create a config.js file in the api/controllers/shared/ file (the same file as stockPrice.js). Contents of the config.js file should be: module.exports = 'yourAPIkey'</p>
<p>mongoimport --db CDFinance --collection stocks --type csv --headerline api/data/nyse.csv </p>
<p>mongoimport --db CDFinance --collection stocks --type csv --headerline api/data/nasdaq.csv </p>
<p>mongoimport --db CDFinance --collection stocks --type csv --headerline api/data/amex.csv </p>
