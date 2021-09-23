@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :user_id, :listing_id, :txt_review, :created_at
        json.extract! review.user, :id, :first_name, :last_name, :email
    end
end