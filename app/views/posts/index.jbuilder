json.array! @posts do |p|
  json.merge! p.attributes
  json.content p.short_html_content
end