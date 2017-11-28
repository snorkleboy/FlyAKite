class Api::RegistrationsController < ApplicationController

    def create
        @registration = Registration.new( userId: params[:userId] , eventId: params[:eventId] )
        if (@registration.save!)
            render json: {registration:{
                            registrationId:@registration.id,
                            userId: params[:userId] ,
                            eventId: params[:eventId]}
                                 }, status: 200
        else
            render json: @registration.errors.full_messages, status: 401
        end
    end

    def destroy
        @registration = Registration.find(params[:registrationId]) 
        if (@registration.destroy!)
            render json: {}, status: 200
        else
            render json: @registration.errors.full_messages, status: 401
        end
    end


end
