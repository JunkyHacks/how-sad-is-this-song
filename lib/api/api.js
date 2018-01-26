import SpotifyAPI from '../spotify/api'
import { sortTracksByValence } from '../spotify/utils'

const retrieveAllTracksByAlbums = (albums, allTracks) => {
  albums.forEach(album => (allTracks = [...allTracks, ...album.tracks]))
  return { ...albums, allTracks: sortTracksByValence(allTracks) }
}

/**
 * @param {string} text the search text
 * @param {string} type (Optional) the type of search {album,artist,playlist,track}
 * @returns {array} of search results
 */
export const search = async (text, type) => await SpotifyAPI.search({ q: text, type: type }, 50)

/**
 *
 * @param {number} id the artist id
 * @returns {object} of albums and allTracks
 */
export const tracks = id =>
  SpotifyAPI.artistAlbums(id, { album_type: 'album' }).then(async albums => {
    await albums.items.forEach(async (album, indexA) => {
      albums.items[indexA].tracks = await SpotifyAPI.albumTracks(album.id).then(tracks => tracks.items)
      await albums.items[indexA].tracks.forEach(
        async (track, indexT) =>
          (album.items[indexA].tracks[indexT].features = await SpotifyAPI.audioFeatures(track.id).then(
            features => features.items,
          )),
      )
    })
    return retrieveAllTracksByAlbums(albums, [])
  })
