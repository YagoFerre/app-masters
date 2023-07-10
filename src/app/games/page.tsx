'use client'

import { useEffect, useState } from 'react'
import { GameCard } from '../components/GameCard'
import { Tag } from '../components/Tag'

import Loading from './loading'
import { api } from '../lib/axios'
import { tags } from '../utils/tags'
import { AppError } from '../utils/AppError'
import { GameDTO } from '../dtos/GamesDTO'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Container, GamesContainer, Genres, Input } from './styles'
import { useAuthContext } from '../contexts/AuthContext'
import { useRouter } from 'next/navigation'

export default function Games() {
  const [isLoadingData, setIsLoadingData] = useState<boolean>(false)
  const [tagSelected, setTagSelected] = useState('Todos')
  const [query, setQuery] = useState('')
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
    if (tagSelected === 'Shooter') {
      const gamesByShooter = games.filter((game) => game.genre === 'Shooter')
      setGamesByGenre(gamesByShooter)
    } else if (tagSelected === 'MMORPG') {
      const gamesByMMORPG = games.filter((game) => game.genre === 'MMORPG')
      setGamesByGenre(gamesByMMORPG)
    } else if (tagSelected === 'ARPG') {
      const gamesByARPG = games.filter((game) => game.genre === 'ARPG')
      setGamesByGenre(gamesByARPG)
    } else if (tagSelected === 'Fighting') {
      const gamesByFighting = games.filter((game) => game.genre === 'Fighting')
      setGamesByGenre(gamesByFighting)
    } else if (tagSelected === 'Action RPG') {
      const gamesByActionRPG = games.filter((game) => game.genre === 'Action RPG')
      setGamesByGenre(gamesByActionRPG)
    } else if (tagSelected === 'Battle Royale') {
      const gamesByBattleRoyale = games.filter((game) => game.genre === 'Battle Royale')
      setGamesByGenre(gamesByBattleRoyale)
    } else {
      setGamesByGenre(games)
    }
  }

  function filterGames() {
    const filteredGames = games.filter((game) => game.title.toLowerCase().includes(query.toLowerCase()))
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
  }, [query])

  return (
    <Container>
      <Genres>
        {tags.map((tag) => (
          <Tag key={tag} title={tag} onClick={() => setTagSelected(tag)} isSelected={tagSelected === tag} />
        ))}
      </Genres>

      <Input placeholder="Procurar jogo" value={query} onChange={(e) => setQuery(e.target.value)} />

      <GamesContainer>
        {isLoadingData ? <Loading /> : gamesByGenre.map((game) => <GameCard key={game.id} data={game} />)}
      </GamesContainer>
      <ToastContainer />
    </Container>
  )
}
