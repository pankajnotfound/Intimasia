import { ROUTES } from '@/constant/routes'
import Link from 'next/link'
import React from 'react'

const PP = () => {
  return (
    <div>
      <Link href={ROUTES.PRIVACYPOLICY}>
        Privacy Policy
      </Link>
    </div>
  )
}

export default PP