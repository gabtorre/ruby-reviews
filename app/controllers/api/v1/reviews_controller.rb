module Api
    module V1
        class ReviewsController < ApplicationController
            protect_from_forgery with: :null_session

            def index
                reviews = Review.all
                render json: ReviewSerializer.new(reviews).serializable_hash.to_json
            end
            
            def create 
                review = place.reviews.new(review_params)

                if review.save
                    render json: ReviewSerializer.new(review).serializable_hash.to_json
                else
                    render json: { error: review.errors.messages }, status: 422
                end
            end

            def destroy 
                review = Review.find(params[:id])

                if review.destroy
                    head :no_content
                else
                    render json: { error: review.errors.messages }, status: 422
                end
            end
            
            private

            def place
                @place ||= Place.find(params[:place_id])
            end

            def review_params
                params.require(:review).permit(:title, :description, :score, :place_id, :user_id)
            end
        end
    end
end