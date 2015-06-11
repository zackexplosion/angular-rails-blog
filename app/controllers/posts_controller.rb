class PostsController < ApplicationController
  def index
    response.headers["Access-Control-Allow-Origin"] = "*"
    # @posts = Post.where(:state => 'published').order('id desc')
    @posts = Post.list params[:page]
  end

  def show
    @post = Post.find(params[:id])

    # if @post.state == 'draft'
    #   render :text => ''
    # end    
  end

end
