class Post < ActiveRecord::Base


  def html_content
    self.markdown
  end

  def short_html_content
    content = self.content[0..50]
    self.markdown
  end

  def markdown
    Redcarpet::Markdown
    .new(Redcarpet::Render::HTML, fenced_code_blocks: true)
    .render(self.content)
  end
end
