json.array! @posts do |p|
  json.merge! p.attributes
  json.description p.short_plain_text_content[0..50]
end