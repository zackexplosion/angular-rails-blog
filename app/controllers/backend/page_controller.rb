class Backend::PageController < ApplicationController
  def index
    render :template => 'layouts/backend.html.erb', :layout => false
  end
end
