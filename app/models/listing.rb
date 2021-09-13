class Listing < ApplicationRecord

    validates :user_id, :property_type, :property_type_group, :privacy_type, :price, :location, presence: true
    validates :max_guests, :num_bathrooms, :num_bedrooms, :num_beds, :title, :description, presence: true

    belongs_to :user
    has_many :reservations, dependent: :destroy
    has_many :reviews, dependent: :destroy

    has_many_attached :photos
end
