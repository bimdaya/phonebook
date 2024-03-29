const path = require('path');
const express = require('express');
const webpack = require('webpack');

const app = express();
const config = require('../webpack.config');
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(3000, 'localhost', (error) => {
	if (error) {
		console.log(error);
	}
	console.log('Listening at http://localhost:3000');
});
