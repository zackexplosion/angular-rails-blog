class PageController < ApplicationController
  def index
    render :template => 'layouts/application.html.erb', :layout => false    
  end

  def template
    t = params[:t]

    render :template => "templates/#{t}", :layout => false
  end
end
