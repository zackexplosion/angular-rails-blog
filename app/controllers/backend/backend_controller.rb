class Backend::BackendController < ApplicationController
  def index
    render :template => 'layouts/backend.html.erb', :layout => false
  end
end
