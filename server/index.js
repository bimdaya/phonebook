const path = require('path');
const express = require('express');
const webpack = require('webpack');

const app = express();
const config = require('../webpack.config');
console.log(config.output.publicPath);
const compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));
app.get('/', (req, res) => {
	console.log(req);
	console.log(res);
	console.log(__dirname);
	res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(3000, 'localhost', function(err) {
	if (err) {
		console.log(err);
	}
	console.log('Listening at http://localhost:3000');
});
