class Backend::PostsController < ApplicationController
  def create
    render :json => Post.create!(post_params)
  end


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

  def destroy
    result = 'ko'
    begin
      post = Post.find(params[:id])
      post.destroy      

      result = ''
    rescue Exception => e
      
    end

    render :json => result
  end

  def post_params
    params.require(:post).permit(:title, :content)
  end
end
