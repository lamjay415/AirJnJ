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
    end

    def show
        @listing = Lising.find(params[:id])
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

end
