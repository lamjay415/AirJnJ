@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :user_id, :listing_id, :txt_review
    end
end