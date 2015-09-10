 xml.instruct!
 xml.urlset(:xmlns => 'http://www.sitemaps.org/schemas/sitemap/0.9') do
  xml.url do
    xml.loc @base
  end

  @posts.each do |p|
    xml.url do
      xml.loc @base + '/p/' + p.slug
    end
  end

 end