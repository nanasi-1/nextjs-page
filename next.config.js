const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/nextjs-page' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    publicRuntimeConfig: {
        basePath,
    }
}

module.exports = nextConfig
