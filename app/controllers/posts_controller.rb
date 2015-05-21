class PostsController < ApplicationController
  def index
    @posts = Post.all.order('id desc')
  end

  def show
    post = Post.find(params[:id])
    post.content = post.html_content
    render :json => post
  end

end
