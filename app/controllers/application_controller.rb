class ApplicationController < ActionController::Base
  def after_sign_in_path_for(resource)
    subscribe_path
  end
end
