# @post.content = @post.rendered_content
# json.merge! @post.attributes.except!('rendered_content')

# json.extract! :id, :title, :content

json.(@post, :id, :title)
json.content @post.html_content
json.published_at @post.updated_at.strftime("%Y/%m/%d")