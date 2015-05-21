class Post < ActiveRecord::Base


  def html_content
    self.markdown self.content
  end

  def short_html_content
    self.markdown self.content[0..50]
  end

  def markdown content
    Redcarpet::Markdown
    .new(Redcarpet::Render::HTML, fenced_code_blocks: true)
    .render(content)
  end
end
