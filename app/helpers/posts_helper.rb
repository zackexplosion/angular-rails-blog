module PostsHelper
  def images p
    html_content = Nokogiri::HTML(p.rendered_content)

    images = []

    html_content.css('img').each do |i|
      images.push i['src']
    end
    return images
  end
end
