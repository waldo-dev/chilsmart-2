const Sitemap = () => {};

export async function getServerSideProps({ res }) {
  const siteUrl = 'https://www.chilsmart.com';
  const currentDate = new Date().toISOString();

  const staticPages = [
    {
      url: siteUrl,
      changefreq: 'weekly',
      priority: '1.0',
      lastmod: currentDate,
    },
    {
      url: `${siteUrl}#proyectos`,
      changefreq: 'monthly',
      priority: '0.9',
      lastmod: currentDate,
    },
    {
      url: `${siteUrl}#services`,
      changefreq: 'monthly',
      priority: '0.9',
      lastmod: currentDate,
    },
    {
      url: `${siteUrl}#testimonial`,
      changefreq: 'monthly',
      priority: '0.8',
      lastmod: currentDate,
    },
    {
      url: `${siteUrl}#contacto`,
      changefreq: 'monthly',
      priority: '0.8',
      lastmod: currentDate,
    },
    {
      url: `${siteUrl}#faq`,
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: currentDate,
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${staticPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default Sitemap;

