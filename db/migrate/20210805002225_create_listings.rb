class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|

      t.integer :user_id, null: false
      t.string :property_type_group, null: false
      t.string :property_type, null: false
      t.string :privacy_type, null: false
      t.string :location, null: false
      t.integer :max_guests, null: false
      t.integer :num_beds, null: false
      t.integer :num_bedrooms, null: false
      t.integer :num_bathrooms, null: false
      t.string :amenities
      t.string :title, null: false
      t.string :description, null: false
      t.integer :price, null: false

      t.timestamps
    end

    add_index :listings, :user_id
  end
end
