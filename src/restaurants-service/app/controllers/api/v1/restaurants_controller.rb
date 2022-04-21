# TODO: https://medium.com/swlh/how-to-build-an-api-with-ruby-on-rails-28e27d47455a
class Api::V1::RestaurantsController < ApplicationController
  # Renders all items in the restaurants table
  def index
    restaurants = Restaurants.all
    render json: restaurants, status: 200
  end

  # Creates new restaurant.
  def create
    restaurant = Restaurant.new(
      name: prod_params[:name],
      rating: prod_params[:rating],
      address: prod_params[:address],
    )
    if restaurant.save
      render json: restaurant, status: 200
    else
      render json: {error: 'Error creating.'}
    end
  end

  def show
  end
end
