class ApplicationController < ActionController::API
  before_action :token_handle

  def token_handle
    binding.pry
  end
end
