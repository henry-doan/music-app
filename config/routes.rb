Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    namespace :v1 do
      resources :tracks do
        collection do
          get :search
          get :random
        end
      end
    end
    get '/auth/spotify/callback' , to: 'users#spotify'
    # get '/auth', to: 'users#show'
    post '/user', to: 'users#create'
    # put '/user', to: 'users#update'
  end
end
