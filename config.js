const config = {
    /**
    * Set these configs below to suite your environment.
    */
    domain: process.env.DOMAIN || '127.0.0.1', // Or for example 'wikiless.org' or '127.0.0.1:1337'. Remember to add port here if needed.
    default_lang: process.env.DEFAULT_LANG || 'en',
    theme: process.env.THEME || '', // '' or 'white' or 'dark'
    http_addr: process.env.HTTP_ADDR || '127.0.0.1', // Bind Wikiless to a specific IP address.
    nonssl_port: process.env.NONSSL_PORT || 8080,
  
    /**
    * If your environment is using HTTPS, set these configs below.
    */
    https_enabled: process.env.HTTPS_ENABLED === 'true' || false,
    ssl_port: process.env.SSL_PORT || 8088,
    cert_dir: process.env.CERT_DIR || ``, // For example '/home/wikiless/letsencrypt/live/wikiless.org'. No trailing slash.
    redirect_http_to_https: process.env.REDIRECT_HTTP_TO_HTTPS === 'true' || false, // If true, HTTP requests will be redirected to HTTPS.
    
    /**
    * You can configure redis below if needed.
    * By default Wikiless uses 'redis://127.0.0.1:6379' as the Redis URL.
    * Versions before 0.1.1 Wikiless used redis_host and redis_port properties,
    * but they are not supported anymore.
    * process.env.REDIS_HOST is still here for backwards compatibility.
    */
    redis_url: process.env.REDIS_URL || process.env.REDIS_HOST || 'redis://127.0.0.1:6379',
    redis_password: process.env.REDIS_PASSWORD,
    
    /**
    * You might need to change these configs below if you host through a reverse
    * proxy like nginx.
    */
    trust_proxy: process.env.TRUST_PROXY === 'true' || false,
    trust_proxy_address: process.env.TRUST_PROXY_ADDRESS || '127.0.0.1',
  
    /**
    * Redis cache expiration values (in seconds).
    * When the cache expires, new content is fetched from Wikipedia (when the
    * given URL is revisited).
    */
    setexs: {
      wikipage: process.env.WIKIPAGE_CACHE_EXPIRATION || (60 * 60 * 1), // 1 hour
    },
  
    /**
    * Wikimedia requires a HTTP User-agent header for all Wikimedia related
    * requests. It's a good idea to change this to something unique.
    * Read more: https://meta.wikimedia.org/wiki/User-Agent_policy
    */
    wikimedia_useragent: process.env.wikimedia_useragent || 'Wikiless media proxy bot (https://codeberg.org/orenom/Wikiless)',
  
    /**
    * Cache control. Wikiless can automatically remove the cached media files from
    * the server. Cache control is on by default.
    * 'cache_control_interval' sets the interval for often the cache directory
    * is emptied (in hours). Default is every 24 hours.
    */
    cache_control: process.env.CACHE_CONTROL !== 'true' || true,
    cache_control_interval: process.env.CACHE_CONTROL_INTERVAL || 24,
  }
  
  module.exports = config