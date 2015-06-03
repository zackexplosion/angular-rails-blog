class PostAddState < ActiveRecord::Migration
  def change
    add_column :posts, :state, :string
    add_index  :posts, :state
    Post.all.each do |p|
      p.update(:state => :published )
    end
  end
end
