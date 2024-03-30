/** @type {import('next').NextConfig} */
const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config) => {
		// 기존 URL 파일로더 규칙을 가져옵니다.
		const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));
	
		// 기존 파일로더에 새로 추가한 `@svgr/webpack` 규칙을 추가합니다.
	  config.module.rules.push(
	    {
	      ...fileLoaderRule,
	      test: /\.svg$/i,
				// 후에 설명할 리소스 쿼리입니다.
	      resourceQuery: { not: /components/ },
	    },
	    {
	      test: /\.svg$/i,
	      issuer: /\.[jt]sx?$/,
	      resourceQuery: /components/,
	      use: ['@svgr/webpack'],
	    }
	  );
	
		// 수정된 설정을 리턴해야만 적용됩니다.
	  return config;
	}
}
const nextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
		  {
			source: '/',
			destination: '/dashboard',
			permanent: true, //캐쉬여부로 true를 하면 캐쉬에서 저장해서 리다이랙트 진행
		  },
		]
	},  
	swcMinify: true,
	async rewrites() {
	  return [
		{
		  source: "/api/:path*",
		  destination: "http://3.39.167.172:8000/api/:path*",
		},
	  ];
	},  
}

module.exports = nextConfig
