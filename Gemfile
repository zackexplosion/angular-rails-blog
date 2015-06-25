source 'https://rubygems.org'

ruby '2.1.2'
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.1'
# Use sqlite3 as the database for Active Record
# gem 'sqlite3'

gem 'pg', '0.18.1'

gem 'seed_dump'


group :production do
  gem 'rails_12factor'
  # for monitor
  # https://devcenter.heroku.com/articles/newrelic#ruby-installation-and-configuration
  gem 'unicorn'
  gem 'newrelic_rpm'
end



# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# gem 'compass-rails'
gem 'compass-rails', github: "Compass/compass-rails", branch: "master"
gem 'bootstrap-sass'
# gem 'bootswatch-rails'

gem 'bootswatch-rails', :git => 'https://github.com/cstony0917/bootswatch-rails.git'
# gem 'bootswatch-rails', path: "../bootswatch-rails"
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
# gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
# gem 'jquery-rails'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
# gem 'sdoc', '~> 0.4.0', group: :doc

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'

  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem "rack-livereload"
  gem 'guard-livereload', '~> 2.4', require: false
  gem 'better_errors'
  gem 'meta_request'
  gem 'pry-remote'
  gem 'rspec-rails'
end

gem 'simplecov', :require => false, :group => :test

  # gem 'meta_request'

# 很棒棒的編輯器，超威，酷!
gem 'codemirror-rails'

# https://github.com/vmg/redcarpet markdown parser
gem 'redcarpet'

# for login
gem 'devise', '3.4.1'

# gem 'gist'
gem 'nokogiri'

gem 'font-awesome-sass'

source 'https://rails-assets.org' do
  gem 'rails-assets-angularjs', '1.3.0'
  gem 'rails-assets-angular-resource', '1.3.0'
  gem 'rails-assets-angular-sanitize', '1.3.0'
  gem 'rails-assets-angular-bootstrap'
  gem 'rails-assets-ui-router'
  gem 'rails-assets-angular-ui-codemirror'
  gem 'rails-assets-momentjs'
  gem 'rails-assets-eonasdan-bootstrap-datetimepicker'
  gem 'rails-assets-highlightjs'
  gem 'rails-assets-angularytics'
  gem 'rails-assets-zackexplosion-ng-infinite-scroll'

end