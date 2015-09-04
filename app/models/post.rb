class Post < ActiveRecord::Base
  before_save :save_content_to_markdown


  @@hashid = Hashids.new("zackexplosion fucking awsome salt" , 4)

  def self.hashid
    @@hashid
  end

  def self.find_by_slug slug
    id = @@hashid.decode(slug)[0]
    self.find(id)
  end

  def slug
    @@hashid.encode(self.id)
  end


  def html_content
    self.render_markdown self.content
    # self.render_content
    # self.render_markdown self.content
  end

  def plain_text_content
    html_content = Nokogiri::HTML(self.html_content)

    text = ''
    html_content.css('p').map do |p|
      text += p.text
    end

    return text
  end


  def short_plain_text_content
    return self.plain_text_content[0..200]
  end
  # def description
  #   self.content[0..50]
  # end

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

  def self.list paging

    paging = paging.to_i

    if paging <= 0
      paging = 1
    end

    per_page = 3

    offset = (paging - 1)  * per_page

    data = self
    .limit(per_page)
    .offset(offset)
    .order('published_at desc')
    .where(:state => 'published')

    return data
  end

  protected

  def save_content_to_markdown
    rendered = self.render_markdown self.content
    self.rendered_content = rendered
  end

  def render_markdown content
    extensions = {
      :fenced_code_blocks => true,
      :strikethrough      => true,
      :lax_spacing        => true
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
