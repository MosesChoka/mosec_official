Rails.application.routes.draw do
  # other routes
  root 'pages#home'
  get 'about', to:'pages#about'
  get 'services', to:'pages#services'
  get 'contact', to:'contacts#contact'
  get 'projects', to:'pages#projects'
  get 'blog', to:'pages#blog'
  get '/sitemap.xml', to: 'sitemap#index', defaults: { format: 'xml' }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
