import {Box, Flex, Heading, Link, Text} from '@primer/components'
import {
  HeaderImage,
  MetaPackageBox,
  PrimerPackageBox,
  PrimitivesOverview,
  StylesOverview
} from '../../src/landing'
import {CONTENT_MAX_WIDTH} from '../../src/constants'

export const Hero = () => (
  <Box bg="black">
    <Box maxWidth={CONTENT_MAX_WIDTH} p={6} mx="auto" mb={3}>
      <Box mt={4} mb={4}>
        <Heading color="blue.4" fontSize={7} pb={3} m={0}>
          Primer Docs Components
        </Heading>
        <Box is={HeaderImage} mb={6} />
      </Box>
    </Box>
  </Box>
)

# Introduction

These components are to be used to build documentation sites across our different Primer projects.