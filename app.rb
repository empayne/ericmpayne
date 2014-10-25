# app.rb
require 'sinatra'
require 'haml'

class PersonalWebsite < Sinatra::Base
	set :environment, :production
	set :raise_errors, false
	set :show_exceptions, false

	get %r{.*} do		# Show same page for any get request (for now)
		puts "in here"
	  haml :index
	end

	error do
		puts "An error occurred..."
	end

end
