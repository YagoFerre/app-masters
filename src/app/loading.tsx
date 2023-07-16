'use client'

import { TailSpin } from 'react-loader-spinner'

export default function Loading() {
  return (
    <div style={{ marginTop: '30vh' }}>
      <TailSpin
        height="50"
        width="50"
        color="#A782E9"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
}
