import SpotifyAPI from '../spotify/api'
import { sortTracksByValence } from '../spotify/utils'

const retrieveAllTracksByAlbums = (albums, allTracks) => {
  albums.forEach(album => (allTracks = [...allTracks, ...album.tracks]))
  return { ...albums, allTracks }
}

/**
 * @param text the search text
 * @type {string}
 * @param type (Optional) the type of search {album,single,appears_on,compilation}
 * @type {string}
 * @returns {array} of search results
 */
const search = async (text, type) => await SpotifyAPI.search({ q: text, type: type }, 50)

const tracks = async id =>
  SpotifyAPI.artistAlbums(id, { album_type: 'album' }).then(async albums => {
    await albums.items.forEach(async (album, indexA) => {
      albums.items[indexA].tracks = await SpotifyAPI.albumTracks(album.id).then(tracks => tracks.items)
      albums.items[indexA].tracks.forEach(
        async (track, indexT) =>
          (album.items[indexA].tracks[indexT].features = await SpotifyAPI.audioFeatures(track.id).then(
            features => features.items,
          )),
      )
    })
    return retrieveAllTracksByAlbums(albums, [])
  })
