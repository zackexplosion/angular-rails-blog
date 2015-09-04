json.array! @posts do |p|
  # json.merge! p.attributes.except('rendered_content')
  json.id p.slug
  json.title p.title
  json.content p.short_html_content
  if p.published_at
    json.published_at p.published_at.strftime("%Y/%m/%d")
  else
    json.published_at p.updated_at.strftime("%Y/%m/%d")
  end

  json.images  images(p)
end