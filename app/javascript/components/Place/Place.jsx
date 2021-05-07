import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './Header'
import styled from 'styled-components'
import ReviewForm from './ReviewForm'
import Review from './Review'

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`
const Column = styled.div`
    background: #fff;
    height: 100vh;
    overflow: scroll;

    &:last-child {
        background: #000;
    }
`
const Main = styled.div`
    padding-left: 50px;
`


const Place = (props) => {
    const [place, setPlace] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const slug = props.match.params.slug
        const url = `/api/v1/places/${slug}`

        axios.get(url)
        .then(resp => {
            setPlace(resp.data)
            setLoaded(true)
        })
        .catch(resp => console.log(resp))
    }, [])

    const handleChange = (e) => {
        e.preventDefault()
        
        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))

        console.log(review)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        const place_id = place.data.id
        axios.post('/api/v1/reviews', {review, place_id})
        .then( resp => {
            const included = [...place.included, resp.data.data]
            setPlace({...place, included})
            setReview({title: '', description: '', score: 0})
        } )
        .catch( resp => {} )
    }

    const setRating = (score, e) => {
        setReview({...review, score})
    }

    let reviews
    if(loaded && place.included){
        reviews = place.included.map( (item, index) => {
            return (
                <Review
                    key={index}
                    attributes={item.attributes}
                />
            )
        } )
    }

    return (
        <Wrapper>
            {loaded &&
                <>
                    <Column>
                        <Main>
                            <Header 
                                attributes={place.data.attributes}
                                reviews={place.included}
                            />
                            {reviews}
                        </Main>
                    </Column>
                    <Column>
                        <ReviewForm
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            setRating={setRating}
                            attributes={place.data.attributes}
                            review={review}
                        />
                    </Column>
                </>
            }
        </Wrapper>
    )
}

export default Place