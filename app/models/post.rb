class Post < ActiveRecord::Base

  def html_content
    self.markdown self.content
  end

  def short_html_content
    content = ''
    c = self.content.split("\n")
    max_line = 10

    if max_line < c.length
      for i in 0..max_line
        content += c[i].to_s + "\n"
      end
      content += '...'
    else
      content = self.content
    end



    # asd

    self.markdown content
  end

  def markdown content
    Redcarpet::Markdown
    .new(Redcarpet::Render::HTML, fenced_code_blocks: true)
    .render(content)
  end
end
