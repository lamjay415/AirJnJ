@listings.each do |listing|
    json.set! listing.id do
        json.extract! listing, :id, :user_id, :price, :location, :title, :description, :amenities, :num_beds, :num_bathrooms, :property_type, :max_guests
    end
end