import './searchbar.css'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import data from './Data.json'
import { useState } from 'react'
import React from 'react'

import { motion } from 'framer-motion'

const SearchBar = React.forwardRef((props, ref) => {
      const [filteredData, setFilteredData] = useState([])
      const [wordEntered, setWordEntered] = useState('')

      const handleFilter = (event) => {
            const searchWord = event.target.value
            setWordEntered(searchWord)
            const newFilter = data.filter((value) => {
                  return value.name
                        .toLowerCase()
                        .includes(searchWord.toLowerCase())
            })
            if (searchWord === '') {
                  setFilteredData([])
            } else {
                  setFilteredData(newFilter)
            }
      }

      const clearInput = () => {
            setFilteredData([])
            setWordEntered('')
      }
      return (
            <div className='search' ref={ref}>
                  <div className='searchInputs'>
                        <input
                              type='text'
                              placeholder='Enter city here...'
                              onChange={handleFilter}
                              value={wordEntered}
                        />

                        <div className='searchIcon'>
                              {filteredData.length === 0 ? (
                                    <SearchIcon />
                              ) : (
                                    <CloseIcon
                                          id='clearBtn'
                                          onClick={clearInput}
                                    />
                              )}
                        </div>
                  </div>
                  {filteredData.length != 0 && (
                        <div className='dataResult'>
                              {filteredData.slice(0, 15).map((country) => {
                                    const { id, name, img } = country
                                    return (
                                          <a
                                                href={img}
                                                key={id}
                                                className='dataItem'
                                          >
                                                <p>{name}</p>
                                          </a>
                                    )
                              })}
                        </div>
                  )}
            </div>
      )
})
SearchBar.displayName = 'SearchBar'
export const MotionSearchBar = motion(SearchBar)
