@post.content = @post.rendered_content
json.merge! @post.attributes.except!('rendered_content')