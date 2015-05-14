class Backend::PostsController < ApplicationController
  def index
    render :json => Post.all
  end

  def show
    post = Post.find(params[:id])

    render :json => post
  end

  def update
    post = Post.find(params[:id])

    post.update(post_params)

    render :json => post
  end

  def post_params
    params.require(:post).permit(:title, :content)
  end
end
