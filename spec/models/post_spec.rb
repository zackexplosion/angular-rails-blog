require 'rails_helper'

RSpec.describe Post, type: :model do
  describe "test" do
    it "should success" do
      @post = Post.create({:title => 'hello', :content => '123'})
      expect(@post.title).to eq('hello')
    end
  end


end
