class Post < ActiveRecord::Base
  before_save :save_content_to_markdown

  def html_content
    self.render_markdown self.content
    # self.render_content
    # self.render_markdown self.content
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

    self.render_markdown content
  end

  protected

  def save_content_to_markdown
    rendered = self.render_markdown self.content
    self.rendered_content = rendered
  end

  def render_markdown content
    extensions = {
      :fenced_code_blocks => true,
      :strikethrough => true
    }
    Redcarpet::Markdown
    .new(TargetBlankRenderer, extensions)
    .render(content)

    # Redcarpet::Markdown
    # .new(TargetBlankRenderer, fenced_code_blocks: true)
    # .render(content)

    
  end
end

# https://github.com/vmg/redcarpet/issues/85

class TargetBlankRenderer < Redcarpet::Render::HTML
  def initialize(extensions = {})
    super extensions.merge(link_attributes: { target: "_blank" })
  end
end
