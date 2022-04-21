# frozen_string_literal: true

module Api
  module V1
    class RestaurantsController < ApplicationController
      # Renders all items in the restaurants table
      def index
        restaurants = Restaurant.all
        render json: restaurants, status: 200
      end

      # Creates new restaurant.
      def create
        restaurant = Restaurant.new(
          name: restaurant_params[:name],
          rating: restaurant_params[:rating],
          address: restaurant_params[:address]
        )
        if restaurant.save
          render json: restaurant, status: 200
        else
          render json: { error: 'Error creating.' }
        end
      end

      # Finds restaurant by id and renders json object.
      def show
        restaurant = Restaurant.find_by(id: params[:id])
        if restaurant
          render json: restaurant, status: 200
        else
          render json: { error: 'Restaurant not found.' }
        end
      end

      private def restaurant_params
        params.require(:restaurant).permit(%i[
                                             name
                                             rating
                                             addres
                                           ])
      end
    end
  end
end
