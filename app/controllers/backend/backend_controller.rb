class Backend::BackendController < ApplicationController
  before_action :authenticate_user!
  before_action :disable_cache

  def disable_cache
    expires_in 0.minutes
  end
  
  def index
    render :template => 'layouts/backend.html.erb', :layout => false
  end
end
