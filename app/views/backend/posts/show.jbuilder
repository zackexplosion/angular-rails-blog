json.merge! @post.attributes
if @post.published_at
  json.published_at @post.published_at.strftime("%Y/%m/%d")
end
json.description = @post.short_plain_text_content