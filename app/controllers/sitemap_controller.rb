class SitemapController < ApplicationController
  layout nil
  
  # create sitemap index
  def index
    headers['Content-Type'] = 'application/xml'
    render 'index.xml'
  end
end
