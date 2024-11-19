require 'rails_helper'

RSpec.describe "Users", type: :request do
  describe "GET /email" do
    it "returns http success" do
      get "/users/email"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /password" do
    it "returns http success" do
      get "/users/password"
      expect(response).to have_http_status(:success)
    end
  end

end
