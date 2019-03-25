import React, {useState} from 'react'
import Router from 'next/router'
import lunr from 'lunr'
import {Relative, Box} from '@primer/components'
import documents from '../searchIndex'
import SearchItem from './SearchItem'
import Downshift from 'downshift'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'

function Search({root}) {
  const idx = lunr(function() {
    this.ref('path') //eslint-disable-line
    this.field('title')//eslint-disable-line
    this.field('content')//eslint-disable-line
    this.field('keywords')//eslint-disable-line

    for (const doc of Object.values(documents)) {
      this.add(doc) //eslint-disable-line
    }
  })

  const [results, setResults] = useState([])

  const onChange = e => {
    if (e.target) {
      setResults(idx.search(e.target.value))
    }
  }

  const renderResults = (selectedItem, getItemProps, highlightedIndex) => {
    return results.map((result, index) => {
      const doc = documents[result.ref]
      return (
        <SearchItem //eslint-disable-line
          {...getItemProps({
            item: result,
            index,
            key: result.ref,
            href: `/${root}/${doc.path}`,
            isHighlighted: highlightedIndex === index
          })}
        >
          {doc.title}
        </SearchItem>
      )
    })
  }

  function stateReducer(state, changes) {
    switch (changes.type) {
      case Downshift.stateChangeTypes.keyDownEnter:
      case Downshift.stateChangeTypes.clickItem:
        return {
          ...changes,
          inputValue: ''
        }
      default:
        return changes
    }
  }

  return (
    <Box as={Relative}>
      <Downshift
        onChange={onChange}
        itemToString={item => (item ? documents[item.ref].title : '')}
        stateReducer={stateReducer}
      >
        {({getInputProps, getMenuProps, getLabelProps, getItemProps, isOpen, highlightedIndex, selectedItem}) => (
          <div>
            <label hidden {...getLabelProps()}>
              {' '}
              //eslint-disable-line Search docs
            </label>
            <SearchInput
              placeholder="Search"
              {...getInputProps({onChange})}
            />
            <SearchResults open={isOpen} {...getMenuProps()}>
              {renderResults(selectedItem, getItemProps, highlightedIndex)}
            </SearchResults>
          </div>
        )}
      </Downshift>
    </Box>
  )
}

export default Search
