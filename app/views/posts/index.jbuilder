json.array! @posts do |p|
  json.merge! p.attributes.except('rendered_content')
  json.content p.short_html_content
 
  json.images  images(p)  
end