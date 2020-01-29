# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  def access_token_expired?
    (Time.now.utc - self.updated_at) > 3300
  end

  def refresh_access_token
    body = {
      grant_type: 'refresh_token',
      refresh_token: self.refresh_token,
      client_id: ENV['CLIENT_ID'],
      client_secret: ENV['CLIENT_SECRET']
    }
    auth_response = RestClient.post('https://accounts.spotify.com/api/token', body)
    auth_params = JSON.parse(auth_response)
    self.update(access_token: auth_params['access_token'])
  end
end
