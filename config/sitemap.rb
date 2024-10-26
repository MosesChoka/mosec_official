SitemapGenerator::Sitemap.default_host = "https://www.mosec.co.ke"
SitemapGenerator::Sitemap.sitemaps_path = 'sitemaps/'
SitemapGenerator::Sitemap.create do
  add '/', :changefreq => 'daily', :priority => 1.0
  add '/home', :changefreq => 'daily'
  add '/services', :changefreq => 'daily'
  add '/about', :changefreq => 'monthly'
  add '/contact', :changefreq => 'monthly'

  # Add image URL
  add '/landing_hero.jpg', :images => [
    { :loc => '/landing_hero.jpg', :title => 'Landing page hero', :caption => 'Landing page Caption' },
    { :loc => '/man_on_phone.jpg', :title => 'Man on Phone', :caption => 'Man on Phone' },
    { :loc => '/tic-tac-toe.png',  :title => 'Tic tac toe', :caption => 'Tic tac toe' }
  ]
end
SitemapGenerator::Sitemap.search_engines = {}
