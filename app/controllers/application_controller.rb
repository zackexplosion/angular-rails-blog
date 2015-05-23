class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :setup_headers

  def setup_headers
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
    headers['Access-Control-Request-Method'] = '*'    
  end

  def is_living
    require 'net/http'
    uri = URI('https://api.twitch.tv/kraken/streams/cstony0917')
    res = Net::HTTP.get(uri) # => String
    res = JSON.parse(res)
    
    m = res['stream'] != nil
    render :json => m
  end

end
