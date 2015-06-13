json.merge! @post.attributes
json.published_at @post.published_at.strftime("%Y/%m/%d")
json.description = @post.short_plain_text_content