class Api::ListingsController < ApplicationController

    def create
        @listing = Listing.new(listing_params)
        if @listing.save
            render :show
        else
            render json: @listing.errors.full_messages, status: 422
    
        end
    end

    def index
        @listings = Listing.all
        render :index
    end

    def show
        @listing = Listing.find(params[:id])
        render :show
    end

    def update
        @listing = Listing.find(params[:id])

        if @listing.update(listing_params)
            render :show
        else
            render json: @listing.errors.full_messages, status: 422
        end
    end

    def destroy
        @listing = Listing.find(params[id])

        if @listing.destroy
            render :show
        else
            render json: @listing.errors.full_messages, status: 422
        end
    end

    private
    def listing_params
        params.require(:listing).permit(:user_id, :property_type, :property_type_group,
             :privacy_type, :price, :location,:max_guests, :num_bathrooms, :num_bedrooms,
            :num_beds, :title, :amenities, :description)
    end

end
