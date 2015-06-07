class Add < ActiveRecord::Migration
  def change
    add_column :posts, :published_at, :datetime
    Post.all.each do |p|
      p.update(:published_at => p.updated_at )
    end
  end
end
