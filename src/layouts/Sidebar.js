import React from 'react'
import { Grid, Flex, Text, useTheme } from '@chakra-ui/react'



const Sidebar = () => {
  const theme = useTheme()

  return (
    <>
        <Grid
            w='25vw'
            h='auto'
            bg={theme.colors.secondary}
        >
            <Text justifySelf={'center'}>Categorias</Text>
        </Grid>
    </>
  )
}

export default Sidebar