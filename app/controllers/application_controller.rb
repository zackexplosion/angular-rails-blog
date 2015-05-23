class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index    
    # t = params[:path]
    
    # if t == nil
    #   # render :template => "templates/#{t}", :layout => false
    #   render :template => 'layouts/application.html.erb', :layout => false
    # else
    #   redirect_to t
    # end
    # og_img = image_path("favicon.png")

    og_img = ActionController::Base.helpers.asset_path("favicon.png", type: :image)
    
    @og = {
      :url         => request.protocol + request.host,
      :title       => "Zack's Blog",
      :description => '什麼都寫的部落格!',
      :image       => request.protocol[0..-3] + og_img
    }

    if params[:path]
      p = params[:path].split('/').last.to_i
      
      if p != 0
        @post             = Post.find(p)
        @og[:url]         = @og[:url] + '/' + params[:path]
        @og[:title]       = @post.title + " | "
        @og[:description] = @post.content
      end
    end

    render :template => 'layouts/application.html.erb', :layout => false
    
  end

  def is_living
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
