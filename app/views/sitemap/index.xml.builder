xml.instruct!
xml.sitemapindex xmlns: 'https://www.sitemaps.org/schemas/sitemap/0.9' do
  (1..6).each do |i|
    xml.sitemap do
      xml.loc root_url + "sitemaps/sitemap#{i}.xml.gz"
      xml.lastmod Time.now.utc.strftime('%Y-%m-%dT%H:%M:%S%:z')
    end
  end
end
