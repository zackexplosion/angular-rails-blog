class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :setup_og

  def index
    render :template => 'layouts/application.html.erb', :layout => false
  end
  
  def template
    t = params[:t]

    render :template => "templates/#{t}", :layout => false
  end

  def setup_og

    @og = {
      :url         => request.protocol + request.host,
      :title       => "Zack's Blog",
      :description => '什麼都寫的部落格!',
      # :image       => request.protocol[0..-3] + og_img
    }

    @og_images = []


    if robot?
      og_img = ActionController::Base.helpers.asset_path("favicon.png", type: :image)      

      if params[:path]
        p = params[:path].split('/').last.to_i      
        if p != 0
          require 'redcarpet/render_strip'
          @post       = Post.find(p)


          # options = {
          #   :no_links            => true,
          #   :no_images           => true,
          #   :space_after_headers => true
          # }
          # description = Redcarpet::Markdown.new(Redcarpet::Render::StripDown, options).render @post.content

          html_content = Nokogiri::HTML(@post.html_content)

          description = ''
          html_content.css('p').map do |p|
            description += p.text
          end

          @og[:url]         = @og[:url] + '/' + params[:path]
          @og[:title]       = @post.title + " | " + @og[:title]
          @og[:description] = description

          image_tags  = html_content.css('img')

          image_tags.each do |i|
            @og_images.push i['src']
          end
        end
      end

      @og_images.push request.protocol[0..-3] + og_img

    end
  end

  def robot?
    m = false

    unless request.env["HTTP_USER_AGENT"] == nil
      m = request.env["HTTP_USER_AGENT"].match(/\(.*https?:\/\/.*\)/)
    end
    # logger.info '!!!!!!!!!!!!!!!'
    # logger.info m
    # logger.info '!!!!!!!!!!!!!!!'
    return m
    # return true
  end

  def sitemap
    @base = request.protocol + request.host
    
    @posts = Post.all

    render 'layouts/sitemap.builder'
  end


end
