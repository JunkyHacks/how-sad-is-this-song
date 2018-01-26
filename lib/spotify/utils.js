/**
 * @param {object} tracks array of allTracks with features
 */
export const sortTracksByValence = tracks =>
  tracks.sort((a, b) => {
    let compare = 0
    if (a.features.valence > b.features.valence) {
      compare = -1
    } else if (a.features.valence < b.features.valence) {
      compare = 1
    }
    return compare
  })

/**
 * @param {object} albums Spotify object of artist albums
 * @param {object} allTracks list with tracks
 * @return {object} object with albums and allTracks merged
 */
export const retrieveAllTracksByAlbums = (albums, allTracks) => {
  albums.forEach(album => (allTracks = [...allTracks, ...album.tracks]))
  return { ...albums, allTracks: sortTracksByValence(allTracks) }
}
