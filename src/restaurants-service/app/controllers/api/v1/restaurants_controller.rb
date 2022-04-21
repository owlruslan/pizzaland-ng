# TODO: https://medium.com/swlh/how-to-build-an-api-with-ruby-on-rails-28e27d47455a
class Api::V1::RestaurantsController < ApplicationController
  # Renders all items in the products table
  def index
    products = Products.all
    render json: products, status: 200
  end

  def show
  end
end
