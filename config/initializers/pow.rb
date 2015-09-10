if File.exist?(".powenv")
  IO.foreach('.powenv') do |line|
    next if !line.include?('export') || line.blank?
    key, value = line.gsub('export','').split('=',2)
    ENV[key.strip] = value.delete('"\'').strip
  end
end