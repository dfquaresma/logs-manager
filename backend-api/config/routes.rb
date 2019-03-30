Rails.application.routes.draw do

  resources :logs
  root "logs#index"
  get 'metrics/:contexto(.:format)', to: "metrics#show"
  get 'by_context/:contexto(.:format)', to: "metrics#index"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
