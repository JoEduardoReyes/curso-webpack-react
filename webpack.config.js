const path = require("path");

module.exports = {
	entry: "./src/index.js",
	outout: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	resolve: {
		extensions: [".js", ".jxs"],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exlude: "/node_modules/",
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
	devServer: {
		static: path.join(__dirname, "dist"),
		compress: true,
		port: 3006,
	},
};
