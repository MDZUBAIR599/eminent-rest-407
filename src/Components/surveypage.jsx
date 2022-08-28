import { Flex, Grid ,Text} from '@chakra-ui/react'
import React from 'react'
import { createsurvey } from '../mock'
import Product from './product'
import styles from "../styles/Home.module.css";
export default function Surveypage() {
  return (
    <div>
      <div >
      <div className={styles.Card_survey}>
      <Flex direction="column"  >
      <Grid
        scroll-behavior= "auto"
        gridGap="1"
        gridTemplateColumns="repeat( auto-fit, minmax(300px, 1fr) )"
      >
        {createsurvey.map((p) => (
          <Product key={p.id} {...p} />
        ))}
      </Grid>
    </Flex>
      </div>
    </div>
    </div>
  )
}
