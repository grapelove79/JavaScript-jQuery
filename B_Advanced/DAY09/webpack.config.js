// node.js에서 제공하는 현재 디렉토리 경로 출력
// console.log(__dirname); 

// webpack 모듈 정의
var webpack_config =  {
	// entry: 진입 파일 경로 설정
	'entry': './src/app/app.js',
	// output   : 출력 파일 경로 설정
	// path 	: 출력 폴더 경로 설정
	// filename : 출력 이름 경로 설정
	'output' : {
		// publicPath => 가상으로 생김. live.bundle.js
		'publicPath' : 'assets',		
		// 'path'     : __dirname + '/src/public/assets',
		'path' 	   : __dirname + '/dist/assets',
		'filename' : 'bundle.js'
	},

	// 로더 모듈 설정 
	'module' : {
		'loaders' : [
			// CSS -> 번들링
			{
				'test': /\.css$/,
				'loader': 'style-loader!css-loader'
			},
			//  Sass파일 -> CSS 파일 변환 -> 번들링
			{
				'test': /\.(sass|scss)$/,
				'loader': 'style-loader!css-loader!sass-loader' 
			},
			// Babel (ES6, ECMAScript 2015) -> JS 파일 변환 -> 번들링
			{
				'test'   : /\.js$/,
				'exclude': /node_modules/,
				'loader' : 'babel-loader',
				'query': {
					'presets': ['es2015'],
				}
			}
		]
	}, 

	// webpack-dev-server 루트 경로 설정
	'devServer' : {
		'contentBase' : __dirname + '/src/public'
	}

	// // watch   : 관찰 모드 설정
	// 'watch' : true,
	
	// // devtool : 소스맵 생성 설정
	// 'devtool' : 'source-map'
};

// 외부 모듈 공개
module.exports = webpack_config;
