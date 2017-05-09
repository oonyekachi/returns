Rails.application.routes.draw do
  get 'payments/return' => 'payments#remita_return'
  post 'payments/poster' => 'payments#temp_poster'
  resources :payments, only: [:new]
  #mount HyperMesh::Engine => '/rr'
  get 'platform/index'

  get 'platform/error'
  post 'platform/country_states'

  devise_for :users
  resources :companies, only: [:show, :update] do
    collection do
      get 'retrieve'
    end
  end

  get 'filing/:id/annual' => 'filing#annual', as: :filing_annual

  get 'filing/home'

  get 'filing/show'

  get 'filing/new'

  post 'filing/sampler'
  get 'filing/incoming'


  # mount ReactiveRecord::Engine => '/rr'
  root 'platform#index'

  mount API::Base, at: "/"
  mount GrapeSwaggerRails::Engine, at: "/documentation"


  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
