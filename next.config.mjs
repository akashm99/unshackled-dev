/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["localhost", "unshackled-production.up.railway.app"],
	}
    // images: {
	// 	remotePatterns: [
	// 		{
	// 			protocol: "http",
	// 			hostname: "localhost",
	// 		},
	// 		{
	// 			protocol: "https",
	// 			hostname: "unshackled-production.up.railway.app",
	// 		},
	// 	],
	// },
};

export default nextConfig;
