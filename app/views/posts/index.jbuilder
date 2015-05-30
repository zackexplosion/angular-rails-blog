json.array! @posts do |p|
  # json.merge! p.attributes.except('rendered_content')
  json.id p.id
  json.title p.title
  json.content p.short_html_content
  json.published_at p.updated_at.strftime("%Y/%m/%d")
 
  json.images  images(p)  
end