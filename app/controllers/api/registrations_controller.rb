class Api::RegistrationsController < ApplicationController
  def create
    p [params,params[:stripe]]
    @registration = Registration.new(userId: current_user.id, eventId: params[:eventId], stripeKey: params[:stripeKey], stripeEmail: params[:stripeEmail])
    if @registration.save!
      @event = @registration.event
      render 'api/events/show'
    else
      render json: @registration.errors.full_messages, status: 401
    end
  end

  def destroy
    @registration = current_user.registrations.find_by(eventId: params[:eventId])
    if @registration.destroy!
      @event = @registration.event
      render 'api/events/show'
    else
      render json: @registration.errors.full_messages, status: 401
    end
  end
end
