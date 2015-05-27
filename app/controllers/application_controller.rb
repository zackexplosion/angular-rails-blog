class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :setup_og
 

  def setup_og
    og_img = ActionController::Base.helpers.asset_path("favicon.png", type: :image)
    
    @og = {
      :url         => request.protocol + request.host,
      :title       => "Zack's Blog",
      :description => '什麼都寫的部落格!',
      :image       => request.protocol[0..-3] + og_img
    }    
  end

  def index
    require 'redcarpet/render_strip'

    if params[:path]
      p = params[:path].split('/').last.to_i

      content = Redcarpet::Markdown.new(Redcarpet::Render::StripDown, :space_after_headers => true)
      
      if p != 0
        @post             = Post.find(p)
        @og[:url]         = @og[:url] + '/' + params[:path]
        @og[:title]       = @post.title + " | " + @og[:title]
        @og[:description] = content.render @post.content


      end
    end

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

end
