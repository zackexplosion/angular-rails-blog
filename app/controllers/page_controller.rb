class PageController < ApplicationController
  def index
    
    # t = params[:path]
    
    # if t == nil
    #   # render :template => "templates/#{t}", :layout => false
    #   render :template => 'layouts/application.html.erb', :layout => false
    # else
    #   redirect_to t
    # end
    @og = {
      :title       => "Zack's Blog",
      :description => '什麼都寫的部落格!'
    }

    if params[:path]
      p = params[:path].split('/').last.to_i
      
      if p != 0
        @post = Post.find(p)
        @og = {
          :title => @post.title + " | ",
          :description => @post.content
        }
      end
    end

    render :template => 'layouts/application.html.erb', :layout => false
    
  end

  def template
    t = params[:t]

    render :template => "templates/#{t}", :layout => false
  end
end
