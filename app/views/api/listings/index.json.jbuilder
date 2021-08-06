@listings.each do |listing|
    json.set! listing.id do
        json.extract! listing, :id, :user_id, :price, :location, :title, :description
    end
end