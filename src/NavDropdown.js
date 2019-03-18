import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Text, Relative, BorderBox, Absolute, theme, Box, Dropdown} from '@primer/components'
import getDirectionStyles from './NavDropdownStyles'
import NavItem from './NavItem'
import Details from './Details'
import {get} from './constants'

const DropdownMenu = styled.div`
  box-shadow: 0px 4px 12px rgba(27, 31, 35, 0.15);
  border: 1px solid rgba(219, 237, 255, 0.3);
  border-radius: 4px;
  ${props => (props.direction ? getDirectionStyles(props.theme, props.direction) : '')};
`

export default function NavDropdown({children, title, direction = 'sw'}) {
  return (
    <Box>
      <Details style={{position: 'relative'}} overlay mx={3} render={({toggle}) => (
        <>
          <Text fontWeight='bold' color='blue.2' is="summary" onClick={toggle}>{title}</Text>
          <DropdownMenu as={Absolute} zIndex={90} bg='black' direction={direction}>
            {children}
          </DropdownMenu>
        </>
      )}
      />
    </Box>
  )
}