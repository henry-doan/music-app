import React from 'react';
import { TrackConsumer } from '../../providers/TrackProvider';
import SearchTrack from './SearchTrack';

const SearchResults = () => (
  <TrackConsumer>
    { value => (
      <>
        { 
          value.results ?
          value.results.map( r => 
            <SearchTrack {...r} />
          ) 
          :
          <>
          </>
        }
      </>
    )}
  </TrackConsumer>
)

export default SearchResults;