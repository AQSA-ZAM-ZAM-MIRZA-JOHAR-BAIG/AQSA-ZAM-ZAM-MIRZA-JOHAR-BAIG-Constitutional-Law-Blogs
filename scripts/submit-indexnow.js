const https = require('https');

const HOST = 'aqsa-zam-zam-mirza-johar-baig-const.vercel.app';
const KEY = 'aqsa-constitutional-law-blog-indexnow-key-2026';
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;

// List of search engine endpoints supporting IndexNow
const ENDPOINTS = [
  'api.indexnow.org',
  'www.bing.com',
  'yandex.com'
];

async function fetchSitemapUrls() {
  return new Promise((resolve, reject) => {
    https.get(SITEMAP_URL, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        if (res.statusCode !== 200) {
          return reject(new Error(`Failed to fetch sitemap: ${res.statusCode}`));
        }
        
        // Very basic XML parsing to extract <loc> tags
        const regex = /<loc>(.*?)<\/loc>/g;
        let match;
        const urls = [];
        
        while ((match = regex.exec(data)) !== null) {
          urls.push(match[1]);
        }
        
        resolve(urls);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function submitToIndexNow(urls, endpoint) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `https://${HOST}/indexnow-key.txt`,
      urlList: urls
    });

    const options = {
      hostname: endpoint,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200 || res.statusCode === 202) {
          console.log(`✅ Successfully submitted ${urls.length} URLs to ${endpoint}`);
          resolve(true);
        } else {
          console.error(`❌ Failed to submit to ${endpoint}. Status: ${res.statusCode}`);
          console.error(`Response: ${data}`);
          resolve(false);
        }
      });
    });

    req.on('error', (e) => {
      console.error(`❌ Error submitting to ${endpoint}: ${e.message}`);
      resolve(false);
    });

    req.write(payload);
    req.end();
  });
}

async function main() {
  console.log(`Fetching URLs from ${SITEMAP_URL}...`);
  try {
    const urls = await fetchSitemapUrls();
    console.log(`Found ${urls.length} URLs in the sitemap.`);
    
    if (urls.length === 0) {
      console.log('No URLs to submit.');
      return;
    }

    console.log('\nSubmitting to IndexNow endpoints...');
    for (const endpoint of ENDPOINTS) {
      await submitToIndexNow(urls, endpoint);
    }
    
    console.log('\nAll submissions completed!');
  } catch (error) {
    console.error('Error in script execution:', error);
  }
}

main();
