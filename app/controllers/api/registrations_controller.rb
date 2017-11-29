class Api::RegistrationsController < ApplicationController

    def create
        @registration = Registration.new( userId:current_user().id , eventId: params[:eventId] )
        if (@registration.save!)
            render json: params[:eventId], status: 200
        else
            render json: @registration.errors.full_messages, status: 401
        end
    end

    def destroy
        @registration = current_user().registrations.find_by(eventId:params[:eventId]) 
        if (@registration.destroy!)
            render json: {}, status: 200
        else
            render json: @registration.errors.full_messages, status: 401
        end
    end


end
