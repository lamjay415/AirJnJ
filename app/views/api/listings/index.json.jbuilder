@listings.each do |listing|
    json.set! listing.id do
        json.extract! listing, :id, :user_id, :property_type, :property_type_group, :privacy_type, :price, :location, :max_guests, :num_bathrooms, :num_bedrooms, :num_beds, :title, :description, :amenities
    end
end