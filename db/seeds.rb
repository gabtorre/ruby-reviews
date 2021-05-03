# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

places = Place.create([
    {
        name: 'Place 1',
        image_url: 'https://picsum.photos/200'
    }
])

reviews = Review.create([
    {
        title: 'Great Place', 
        description: 'my new fav place',
        score: 5,
        place: places.first
    }
])