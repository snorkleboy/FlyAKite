class Api::RegistrationsController < ApplicationController

    def create
        render json: [params]
    end

    def destroy

    end


end
