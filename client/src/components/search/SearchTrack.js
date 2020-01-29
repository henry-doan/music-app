import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const SearchTrack = ( name, artist, image ) => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={3}>
        <Image size='tiny' src={image} />
      </Grid.Column>
      <Grid.Column width={10}>
        <p>{name}</p>
        <br />
        <p>{artist}</p>
      </Grid.Column>
      <Grid.Column width={3}>
        <button>Add</button>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default SearchTrack;