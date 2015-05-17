json.array! @posts do |p|
  json.merge! p.attributes
  json.content p.content[0..50]
end