class Reservation < ApplicationRecord

    validates :user_id, :listing_id, :start_date, :end_date, :price, :total, :guests, presence: true
    
    belongs_to :listing

    belongs_to :user

end
