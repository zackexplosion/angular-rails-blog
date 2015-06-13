class Backend::PostsController < Backend::BackendController
  def create
    render :json => Post.create!(post_params)
  end


  def index
    @posts = Post.all.order('id desc')
  end

  def show
    @post = Post.find(params[:id])
    # post.published_at = post.published_at.strftime("%Y-%m-%d")

    # render :json => post.to_json
  end

  def update
    @post = Post.find(params[:id])

    @post.update(post_params)
    # binding.remote_pry
    # description = @post.short_plain_text_content

    # @post = @post.as_json
    # @post[:description] = description
    
    # render :json => post
    render :show
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
    params.require(:post).permit(:title, :content, :state, :published_at)
  end
end
