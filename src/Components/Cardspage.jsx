
import { Flex, Grid } from '@chakra-ui/react'
import React from 'react'
import { products } from '../mock'
import Product from './product'

export default function Cardspage() {
  return (
    <div>
       <Flex direction="column" scaleX={"scroll"}>
      <Grid
        scroll-behavior= "smooth"
        gridGap="1"
        gridTemplateColumns="repeat( auto-fit, minmax(300px, 1fr) )"
      >
        {products.map((p) => (
          <Product key={p.id} {...p} />
        ))}
      </Grid>
    </Flex>
    </div>
  )
}
