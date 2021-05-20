class ReviewSerializer
  include JSONAPI::Serializer
  attributes :title, :description, :score, :place_id, :user_id
  belongs_to :user
end
