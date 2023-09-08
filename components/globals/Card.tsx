import { cva } from 'class-variance-authority'
import React from 'react'

type Props = {}

const cardVariants = cva(
  'bg-white shadow-sm',
  {
    variants: {
      variant: {
        default: ''
      }
    },
    defaultVariants: {

    }
  }
)

const Card = (props: Props) => {

  return (
    <article>

    </article>
  )
}

export default Card