Rails.application.routes.draw do
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
  end
end
