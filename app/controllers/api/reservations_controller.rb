class Api::ReservationsController < ApplicationController

    def create
        @reservation = Reservation.new(res_params)
        if @reservation.save!
            render :show
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def index
        @reservations = Reservation.all
        render :index
    end

    def show
        @reservation = Reservation.find(params[:id])
        render :show
    end

    def destroy
        @reservation = Reservation.find(params[:id])
        
        if @reservation.destroy!
            render :show
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    private
    def res_params
        params.require(:reservation).permit(:user_id, :listing_id, :start_date, :end_date, :price, :total, :guests)
    end

end
