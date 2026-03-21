import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/login/'],
    },
    sitemap: 'https://aqsa-zam-zam-mirza-johar-baig-const.vercel.app/sitemap.xml',
  }
}
