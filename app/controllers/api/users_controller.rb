class Api::UsersController < ApplicationController
  def spotify
    url = "https://accounts.spotify.com/authorize"
    query_params = {
      client_id: ENV['client_id'],
      response_type: 'code',
      redirect_uri: 'http://localhost:3000/auth/spotify/callback',
      scope: "user-library-read 
      playlist-read-collaborative
      playlist-modify-private
      user-modify-playback-state
      user-read-private
      user-top-read
      playlist-modify-public",
      show_dialog: true
    }

    # redirect_to "#{url}?#{query_params.to_query}"
    render json: "#{url}?#{query_params.to_query}"
    # spotify_user = RSpotify::User.new(request.env['omniauth.auth']).to_hash
    # Now you can access user's private data, create playlists and much more
    # render json: spotify_user
  end
  
end
