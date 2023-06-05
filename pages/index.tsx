import React from 'react'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';



function index() {
  const login = false;
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      if (!login) {
        setLoading(false)
        router.push('/login')
      } else {
        setLoading(false)
        router.push('/dashboard')
      }
    }, 2000)
  }, [])

  return (
    <>
      {loading ? <Loading /> : null}
    </>
  )
}

export default index