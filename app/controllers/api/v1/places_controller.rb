module Api
    module V1
        class PlacesController < ApplicationController
            protect_from_forgery with: :null_session
            
            def index
                places = Place.all
                render json: PlaceSerializer.new(places, options).serializable_hash.to_json
            end

            def show
                place = Place.find_by(slug: params[:slug])
                render json: PlaceSerializer.new(place, options).serializable_hash.to_json
            end

            def create
                place = Place.new(place_params)

                if place.save
                    render json: PlaceSerializer.new(place).serializable_hash.to_json
                else 
                    render json: { error: place.errors.messages }, status: 422
                end
            end

            def update
                place = Place.find_by(slug: params[:slug])

                if place.update(place_params)
                    render json: PlaceSerializer.new(place, options).serializable_hash.to_json
                else 
                    render json: { error: place.errors.messages }, status: 422
                end
            end

            def destroy
                place = Place.find_by(slug: params[:slug])

                if place.destroy
                    head :no_content
                else 
                    render json: { error: place.errors.messages }, status: 422
                end
            end

            private 

            def place_params
                params.require(:place).permit(:name, :image_url)
            end

            def options
                @options ||= { include: %i[reviews] }
            end
        end
    end
end