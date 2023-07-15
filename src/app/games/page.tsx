'use client'

import { useEffect, useState } from 'react'

import { GameCard } from '../components/GameCard'

import { useAuthContext } from '../contexts/AuthContext'
import { useRouter } from 'next/navigation'

import Loading from './loading'
import { api } from '../lib/axios'
import { AppError } from '../utils/AppError'
import { GameDTO } from '../dtos/GamesDTO'

import { getDatabase, ref, get, update } from 'firebase/database'

import { Heart, MagnifyingGlass, Star, XCircle } from '@phosphor-icons/react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import {
  ButtonHeaderContainer,
  Container,
  FavoriteButton,
  GamesContainer,
  Header,
  Input,
  MostRatedButton,
  NotFound,
  NotFoundText,
  SearchFilterContainer,
} from './styles'

export default function Games() {
  const [isLoadingData, setIsLoadingData] = useState<boolean>(false)
  const [tagSelected, setTagSelected] = useState('')
  const [queryText, setQueryText] = useState('')
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const [orderByStars, setOrderByStars] = useState<'asc' | 'desc'>('asc')
  const [games, setGames] = useState<GameDTO[]>([])
  const [gamesByGenre, setGamesByGenre] = useState<GameDTO[]>([])

  const { user } = useAuthContext()
  const router = useRouter()

  async function fetchData() {
    try {
      setIsLoadingData(true)
      const response = await api.get('/data')

      if (response.request.timeout > 5000) {
        setIsLoadingData(false)
        return toast.error('O servidor demorou para responder, tente mais tarde.')
      }

      setGames(response.data)
      setGamesByGenre(response.data)
      setIsLoadingData(false)
    } catch (error) {
      setIsLoadingData(false)
      const isAppError = error instanceof AppError
      const title = isAppError ? error?.message : 'Erro ao carregar dados.'

      return toast.error(title)
    }
  }

  function fetchDataByGenre() {
    const genreFilters: { [key: string]: (game: GameDTO) => boolean } = {
      Shooter: (game: GameDTO) => game.genre === 'Shooter',
      MMOARPG: (game: GameDTO) => game.genre === 'MMOARPG',
      ARPG: (game: GameDTO) => game.genre === 'ARPG',
      Fighting: (game: GameDTO) => game.genre === 'Fighting',
      'Action RPG': (game: GameDTO) => game.genre === 'Shooter',
      'Battle Royale': (game: GameDTO) => game.genre === 'Battle Royale',
      MMORPG: (game: GameDTO) => game.genre === 'MMORPG',
      MOBA: (game: GameDTO) => game.genre === 'MOBA',
      Sports: (game: GameDTO) => game.genre === 'Sports',
      Racing: (game: GameDTO) => game.genre === 'Racing',
      'Card Game': (game: GameDTO) => game.genre === 'Card Game',
      Strategy: (game: GameDTO) => game.genre === 'Shooter',
      MMO: (game: GameDTO) => game.genre === 'MMO',
    }

    const filterFunction = genreFilters[tagSelected] || (() => true)
    const filteredGames = games.filter(filterFunction)
    setGamesByGenre(filteredGames)
  }

  async function fetchFavoriteGames() {
    const db = getDatabase()

    const newGame = await Promise.all(
      gamesByGenre.map(async (game) => {
        const favoritesRef = ref(db, 'user/' + user?.uid + '/games' + `/${game.id}` + '/favorites')
        const snapshot = await get(favoritesRef)
        const data = snapshot.val()

        if (data === null) {
          update(favoritesRef, {
            id: game.id,
            favorite: false,
          })
        }

        update(favoritesRef, {
          favorite: data.favorite,
        })

        return {
          ...game,
          favorite: data.favorite,
        }
      }),
    )

    const favoriteGames = newGame.filter((game) => game.favorite === true)

    if (!isFavorite) {
      return gamesByGenre
    }

    setGamesByGenre(favoriteGames)
  }

  function filterGames() {
    const filteredGames = games.filter((game) => {
      if (tagSelected === 'Todos') {
        return game.title.toLowerCase().includes(queryText.toLowerCase())
      }

      return game.title.toLowerCase().includes(queryText.toLowerCase()) && game.genre.includes(tagSelected)
    })

    setGamesByGenre(filteredGames)
  }

  async function sortGamesByStars() {
    const db = getDatabase()

    const newGame = await Promise.all(
      gamesByGenre.map(async (game) => {
        const starsRef = ref(db, 'user/' + user?.uid + '/games' + `/${game.id}` + '/stars')
        const snapshot = await get(starsRef)
        const data = snapshot.val()

        if (data === null) {
          update(starsRef, {
            id: game.id,
            rate: 0,
          })
        }

        update(starsRef, {
          rate: data.rate,
        })

        return {
          ...game,
          rate: data.rate,
        }
      }),
    )

    const sortedGames = [...newGame].sort((a, b) => {
      if (orderByStars === 'asc') {
        return a.rate - b.rate
      } else {
        return b.rate - a.rate
      }
    })

    const mostRated = sortedGames.filter((game) => game !== undefined)

    setGamesByGenre(mostRated)
  }

  useEffect(() => {
    if (user === null) router.push('/')
  }, [user])

  useEffect(() => {
    fetchDataByGenre()
  }, [tagSelected, isFavorite])

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    filterGames()
  }, [queryText])

  useEffect(() => {
    fetchFavoriteGames()
  }, [isFavorite])

  useEffect(() => {
    sortGamesByStars()
  }, [orderByStars])

  return (
    <Container>
      <Header>
        <SearchFilterContainer>
          <Input placeholder="Procurar jogo..." value={queryText} onChange={(e) => setQueryText(e.target.value)} />
          <select value={tagSelected} onChange={(e) => setTagSelected(e.target.value)}>
            <option value="Todos">Todos</option>
            <option value="Shooter">Shooter</option>
            <option value="MMOARPG">MMOARPG</option>
            <option value="ARPG">ARPG</option>
            <option value="Fighting">Fighting</option>
            <option value="Action RPG">Action RPG</option>
            <option value="Battle Royale">Battle Royale</option>
            <option value="MMORPG">MMORPG</option>
            <option value="MOBA">MOBA</option>
            <option value="Sports">Sports</option>
            <option value="Racing">Racing</option>
            <option value="Card Game">Card Game</option>
            <option value="Strategy">Strategy</option>
            <option value="MMO">MMO</option>
          </select>
          <button>
            <MagnifyingGlass size={18} color="#A782E9" />
          </button>
        </SearchFilterContainer>

        <ButtonHeaderContainer>
          <FavoriteButton onClick={() => setIsFavorite(!isFavorite)} disabled={user?.isAnonymous === true}>
            <Heart size={18} color="#A782E9" />
            favoritos
          </FavoriteButton>

          <MostRatedButton onClick={() => setOrderByStars(orderByStars === 'asc' ? 'desc' : 'asc')}>
            <Star size={18} color="#C29931" weight="regular" />
            {orderByStars === 'asc' ? 'Menores' : 'Maiores'}
          </MostRatedButton>
        </ButtonHeaderContainer>
      </Header>

      <GamesContainer>
        {isLoadingData ? <Loading /> : gamesByGenre.map((game) => <GameCard key={game.id} data={game} />)}
      </GamesContainer>

      {gamesByGenre.length === 0 && (
        <NotFound>
          <XCircle size={20} color="#FD5646" />
          <NotFoundText>Oops, o jogo não existe ou não foi encontrado.</NotFoundText>
        </NotFound>
      )}

      <ToastContainer />
    </Container>
  )
}
