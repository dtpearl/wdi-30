Rails.application.routes.draw do
  # Single HTML page
  root :to => 'pages#home'

  # JSON and Plaintext API Endpoints
  get '/brother' => 'dashboard#brother'
  get '/time' => 'dashboard#time'
  get '/uptime' => 'dashboard#uptime'
  get '/info' => 'dashboard#info'
end
