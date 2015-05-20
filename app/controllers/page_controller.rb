class PageController < ApplicationController
  def index
    
    # t = params[:path]
    
    # if t == nil
    #   # render :template => "templates/#{t}", :layout => false
    #   render :template => 'layouts/application.html.erb', :layout => false
    # else
    #   redirect_to t
    # end
    @og = Hash.new
    if params[:path]
      # og
    end

    render :template => 'layouts/application.html.erb', :layout => false
    
  end

  def template
    t = params[:t]

    render :template => "templates/#{t}", :layout => false
  end
end
