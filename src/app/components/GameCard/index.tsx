'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { useAuthContext } from '@/app/contexts/AuthContext'
import { GameDTO } from '@/app/dtos/GamesDTO'

import { Star, Heart, X } from '@phosphor-icons/react'

import { getDatabase, ref, update, onValue } from 'firebase/database'

import {
  ButtonContainer,
  Container,
  Developer,
  FavoriteButton,
  GameTitle,
  ImageBox,
  InfoBox,
  RateButton,
  RatingContainer,
  RatingStars,
  ResetButton,
} from './styles'

interface Props {
  data: GameDTO
}

export function GameCard({ data }: Props) {
  const [rate, setRate] = useState<number>(0)
  const [favorite, setFavorite] = useState<boolean>(false)

  const { user } = useAuthContext()
  const router = useRouter()

  function writeRate() {
    if (user?.isAnonymous === true) {
      return router.push('/')
    }

    const db = getDatabase()
    const reference = ref(db, 'user/' + user?.uid + '/games' + `/${data.id}` + '/stars')

    update(reference, {
      id: data.id,
      rate,
    })
  }

  function writeFavorite() {
    if (user?.isAnonymous === true) {
      return router.push('/')
    }

    const db = getDatabase()
    const reference = ref(db, 'user/' + user?.uid + '/games' + `/${data.id}` + '/favorites')

    update(reference, {
      id: data.id,
      favorite: !favorite,
    })

    setFavorite(!favorite)
  }

  function fetchRatings() {
    const db = getDatabase()
    const rateRef = ref(db, 'user/' + user?.uid + '/games' + `/${data.id}` + '/stars')
    const favoriteRef = ref(db, 'user/' + user?.uid + '/games' + `/${data.id}` + '/favorites')

    onValue(rateRef, (snapshot) => {
      const rateValue = snapshot.val()

      if (rateValue !== null) {
        setRate(rateValue.rate)
      }
    })

    onValue(favoriteRef, (snapshot) => {
      const favoriteValue = snapshot.val()

      if (favoriteValue !== null) {
        setFavorite(favoriteValue.favorite)
      }
    })
  }

  useEffect(() => {
    fetchRatings()
  }, [data.id])

  return (
    <Container>
      <Link href={data.game_url} target="_blank">
        <ImageBox>
          <Image
            src={data.thumbnail}
            alt="Capa do jogo"
            quality={100}
            fill
            style={{ borderRadius: '6px', cursor: 'pointer' }}
          />
        </ImageBox>
      </Link>

      <InfoBox>
        <GameTitle>{data.title}</GameTitle>
        <Developer>{data.developer}</Developer>

        <RatingContainer>
          <RatingStars>
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={20}
                color="#C29931"
                weight={index < rate! ? 'fill' : 'regular'}
                onClick={() => setRate(index + 1)}
                cursor="pointer"
              />
            ))}
          </RatingStars>

          <FavoriteButton onClick={writeFavorite}>
            <Heart size={20} weight={favorite ? 'fill' : 'regular'} />
          </FavoriteButton>
        </RatingContainer>

        <ButtonContainer>
          <RateButton onClick={writeRate}>avaliar</RateButton>
          <ResetButton onClick={() => setRate(0)}>
            <X size={15} color="#A782E9" />
            limpar
          </ResetButton>
        </ButtonContainer>
      </InfoBox>
    </Container>
  )
}
