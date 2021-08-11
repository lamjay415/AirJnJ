json.extract! @listing, :id, :user_id, :property_type, :property_type_group, :privacy_type, :price, :location, :max_guests, :num_bathrooms, :num_bedrooms, :num_beds, :title, :description, :amenities
# json.photoUrl url_for(@listing.photo)
json.photoUrls @listing.photos.map { |file| url_for(file)}