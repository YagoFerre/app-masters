'use client'

import { useEffect, useState } from 'react'

import { GameCard } from '../components/GameCard'

import { useAuthContext } from '../contexts/AuthContext'
import { useRouter } from 'next/navigation'

import Loading from './loading'
import { api } from '../lib/axios'
import { AppError } from '../utils/AppError'
import { GameDTO } from '../dtos/GamesDTO'

import { Heart, MagnifyingGlass } from '@phosphor-icons/react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Container, FavoriteButton, GamesContainer, Header, Input, SearchFilterContainer } from './styles'
import { getDatabase, ref, set, update, onValue, query, orderByChild, get, child } from 'firebase/database'

export default function Games() {
  const [isLoadingData, setIsLoadingData] = useState<boolean>(false)
  const [tagSelected, setTagSelected] = useState('Todos')
  const [queryy, setQuery] = useState('')
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
    // const dbRef = ref(getDatabase())
    // const response = await get(child(dbRef, `user/${user?.uid}/postId/`))
    // const favoriteValue = response.val()
    // console.log(favoriteValue)
    const responseGames = games.map((data) => {
      const dbRef = getDatabase()
      const response = query(
        ref(dbRef, 'user/' + user?.uid + '/postId/' + data.id + '/favorite'),
        orderByChild(`favorite`),
      )

      return {
        ...data,
        favorite: response,
      }
    })

    console.log(responseGames)
  }

  function filterGames() {
    const filteredGames = gamesByGenre.filter((game) => game.title.toLowerCase().includes(queryy.toLowerCase()))
    setGamesByGenre(filteredGames)
  }

  useEffect(() => {
    console.log(user)
    if (user === null) router.push('/')
  }, [user])

  useEffect(() => {
    fetchDataByGenre()
  }, [tagSelected])

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    filterGames()
  }, [queryy])

  return (
    <Container>
      <Header>
        <SearchFilterContainer>
          <Input placeholder="Procurar jogo..." value={queryy} onChange={(e) => setQuery(e.target.value)} />
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

        <FavoriteButton onClick={fetchFavoriteGames}>
          <Heart size={18} color="#A782E9" />
          favoritos
        </FavoriteButton>
      </Header>

      <GamesContainer>
        {isLoadingData ? <Loading /> : gamesByGenre.map((game) => <GameCard key={game.id} data={game} />)}
      </GamesContainer>
      <ToastContainer />
    </Container>
  )
}
