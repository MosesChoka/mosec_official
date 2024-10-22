SitemapGenerator::Sitemap.default_host = "https://www.mosec.co.ke"
SitemapGenerator::Sitemap.create do
  add '/', :changefreq => 'daily', :priority => 1.0
  add 'about', :changefreq => 'monthly'
  add '/contact', :changefreq => 'monthly'
end
SitemapGenerator::Sitemap.search_engines = {}