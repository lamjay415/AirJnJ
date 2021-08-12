json.listing do 
    json.extract! @listing, :id, :user_id, :property_type, :property_type_group, :privacy_type, :price, :location, :max_guests, :num_bathrooms, :num_bedrooms, :num_beds, :title, :description, :amenities
    json.photoUrls @listing.photos.map { |file| url_for(file)}
end

json.host do
    json.extract! @listing.user, :id, :first_name, :last_name, :email
end