 xml.instruct!
 xml.urlset do
  xml.url do
    xml.loc @base
  end

  @posts.each do |p|
    xml.url do
      xml.loc @base + '/p/' + p.id.to_s
    end
  end

 end