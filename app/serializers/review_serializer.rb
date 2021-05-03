class ReviewSerializer
  include JSONAPI::Serializer
  attributes :title, :description, :score, :place_id
end
