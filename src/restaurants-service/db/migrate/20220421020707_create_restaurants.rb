# frozen_string_literal: true

# rubocop:disable Style/Documentation
class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :rating
      t.string :address

      t.timestamps
    end
  end
end
# rubocop:enable Style/Documentation
