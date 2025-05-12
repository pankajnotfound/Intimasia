import { ROUTES } from '@/constant/routes'
import Link from 'next/link'
import React from 'react'

const SiteMap = () => {
  return (
    <div>
      <Link href={ROUTES.SITEMAP}>
        Site Map
      </Link>
    </div>
  )
}

export default SiteMap