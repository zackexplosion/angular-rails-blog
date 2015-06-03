class PostsController < ApplicationController
  def index
    @posts = Post.where(:state => 'published').order('id desc')
  end

  def show
    @post = Post.find(params[:id])

    # if @post.state == 'draft'
    #   render :text => ''
    # end    
  end

end
