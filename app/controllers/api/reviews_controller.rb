class Api::ReviewsController < ApplicationController

    def create
        @review = Review.new(review_params)
        if @review.save!
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def index
        @reviews = Review.all
        render :index
    end

    def show
        @review = Review.find(params[:id])
        render :show
    end

    private 
    def review_params
        params.require(:review).permit(:user_id, :listing_id, :txt_review)
    end

end
