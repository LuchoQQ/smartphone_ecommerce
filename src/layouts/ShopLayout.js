import React, { useEffect } from 'react'
import { Grid, Flex, Text, Image, Box, useTheme } from '@chakra-ui/react'
import axios from 'axios'


const ShopLayout = ({ data }) => {
  const theme = useTheme()
  console.log(theme)

  return (
    <>
        <Grid
            w='75vw'
            h='auto'
            bg='#fff'
        >
            <Grid autoFlow='row'>
                {
                  data.map((item, key) => {
                    return (
                      <Flex px='4rem' py='2rem' key={key}>
                        <Image src={item.image} w='250px' h='250px' fit='cover'/>
                        <Grid>
                          <Text fontSize={'2rem'}>{item.name}</Text>
                          <Text fontSize={'2rem'}>{`$${item.price}`}</Text>
                        </Grid>
                        <Grid ml='auto' justifyContent={'center'}>
                          <Text fontSize='1.5rem'>{item.trademark}</Text>
                          <Text fontSize='1.5rem'>{`stock: ${item.stock}`}</Text>
                        </Grid>
                      </Flex>
                    )
                  })
                }
            </Grid>
        </Grid>
    </>
  )
}


export default ShopLayout