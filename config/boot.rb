ENV['BUNDLE_GEMFILE'] ||= File.expand_path('../../Gemfile', __FILE__)

require 'bundler/setup' # Set up gems listed in the Gemfile.

# get env variable from .powenv
if File.exist?(".powenv")
  IO.foreach('.powenv') do |line|
    # next if !line.include?('export') || line.blank?
    next if !line.include?('export')
    key, value = line.gsub('export','').split('=',2)
    ENV[key.strip] = value.delete('"\'').strip
  end
end