class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :setup_og

  def index
    render :template => 'layouts/application.html.erb', :layout => false    
  end 

  def streaming
    require 'net/http'
    uri = URI('https://api.twitch.tv/kraken/streams/cstony0917')
    res = Net::HTTP.get(uri) # => String
    res = JSON.parse(res)
    
    m = res['stream'] != nil
    render :json => m
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
          description = Redcarpet::Markdown.new(Redcarpet::Render::StripDown, :space_after_headers => true).render @post.content
          # description = content.render @post.content
          @og[:url]         = @og[:url] + '/' + params[:path]
          @og[:title]       = @post.title + " | " + @og[:title]
          @og[:description] = description

          image_tags  = Nokogiri::HTML(@post.html_content).css('img')

          image_tags.each do |i|
            @og_images.push i['src']
          end
        end
      end

      @og_images.push request.protocol[0..-3] + og_img

    end
  end

  def robot?
    m = request.env["HTTP_USER_AGENT"].match(/\(.*https?:\/\/.*\)/)
    logger.info '!!!!!!!!!!!!!!!'
    logger.info m
    logger.info '!!!!!!!!!!!!!!!'
    return m
  end

  def sitemap
    @maps = []

    base = request.protocol + request.host
    
    @maps.push({
      :url => {
        :loc => base
      }
    })

    base = base +  '/p/'

    Post.all.each do |p|
      @maps.push({
        :url => {
          :loc => base + p.id.to_s
        }
      })
    end
    
    render :xml => @maps.to_xml(:root => 'urlset')
    # render :template => "layout/sitemap"
  end


end
