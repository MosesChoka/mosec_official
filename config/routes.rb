Rails.application.routes.draw do
  get 'users/email'
  get 'users/password'
  # suscriptions routes method 1
  post 'newsletter/subscribe', to:'newsletter#subscribe', as: 'newsletter_subscribe'
  delete 'newsletter/unsubscribe', to: 'newsletter#unsubscribe', as: 'newsletter_unsubscribe'

  # subscriptions rute method 2
  post 'newsletter/manage', to: 'newsletter#manage', as: 'newsletter_manage'

  # Email newsletter users with the path email_blast_path
  post 'newsletter/email', to: 'newsletter#email', as: 'email_blast'

  # other routes
  devise_for :users
  root 'pages#home'
  get 'about', to:'pages#about'
  get 'services', to:'pages#services'
  get 'contact', to:'contacts#contact'
  get 'projects', to:'pages#projects'
  get 'blog', to:'pages#blog'
  get 'subscribe', to: 'pages#subscribe'
  get '/sitemap.xml', to: 'sitemap#index', defaults: { format: 'xml' }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
