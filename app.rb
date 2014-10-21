# app.rb
require 'sinatra'

class HelloWorldApp < Sinatra::Base
	get '/' do
	  haml :index
	end
end