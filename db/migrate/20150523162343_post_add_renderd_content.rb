class PostAddRenderdContent < ActiveRecord::Migration
  def change
    add_column :posts, :rendered_content, :text
  end
end
