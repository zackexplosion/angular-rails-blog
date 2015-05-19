class PostsController < ApplicationController
  append_view_path 'app/views/templates/front'
  def index
    # render :json => Post.all
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
    @post.content = Redcarpet::Markdown.new(Redcarpet::Render::HTML, fenced_code_blocks: true).render(@post.content)
    # render :json => post
  end
end
