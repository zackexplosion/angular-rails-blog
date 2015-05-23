class Backend::BackendController < ApplicationController
  before_action :authenticate_user!
  
  def index
    render :template => 'layouts/backend.html.erb', :layout => false
  end
end
