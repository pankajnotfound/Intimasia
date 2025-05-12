import { ROUTES } from '@/constant/routes'
import Link from 'next/link'
import React from 'react'

const TandC = () => {
  return (
    <div>
        <Link href={ROUTES.TERMSANDCONDITIONS}>
            Terms & Condition
        </Link>
    </div>
  )
}

export default TandC