@reservations.each do |reservation|
    json.set! reservation.id do
        json.extract! reservation, :user_id, :listing_id, :start_date, :end_date, :price, :total, :guests
    end
end