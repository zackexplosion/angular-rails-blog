class PageController < ApplicationController
  def index
    
  end

  def template
    t = params[:t]

    render :template => "templates/#{t}", :layout => false
  end
end
