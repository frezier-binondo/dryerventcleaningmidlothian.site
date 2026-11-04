/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async rewrites() {
    return [
      { source: '/dryer-vent-cleaning', destination: '/services/dryer-vent-cleaning' },
      { source: '/dryer-vent-repair', destination: '/services/dryer-vent-repair' },
      { source: '/dryer-vent-installation-rerouting', destination: '/services/dryer-vent-installation-rerouting' },
      { source: '/dryer-vent-inspection', destination: '/services/dryer-vent-inspection' },
      { source: '/commercial-dryer-vent-cleaning', destination: '/services/commercial-dryer-vent-cleaning' },
      { source: '/dryer-vent-lint-removal', destination: '/services/dryer-vent-lint-removal' },
      { source: '/service-areas', destination: '/locations' },
      { source: '/get-a-quote', destination: '/contact' },
      { source: '/about', destination: '/contact' },
      { source: '/dryer-vent-cleaning/midlothian-tx', destination: '/locations/midlothian-tx' },
      { source: '/dryer-vent-cleaning/waxahachie-tx', destination: '/locations/waxahachie-tx' },
      { source: '/dryer-vent-cleaning/red-oak-tx', destination: '/locations/red-oak-tx' },
      { source: '/dryer-vent-cleaning/ovilla-tx', destination: '/locations/ovilla-tx' },
      { source: '/dryer-vent-cleaning/cedar-hill-tx', destination: '/locations/cedar-hill-tx' },
    ];
  },
};

export default nextConfig;
