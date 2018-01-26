import SpotifyAPI from '../spotify/api'
import { sortTracksByValence, retrieveAllTracksByAlbums } from '../spotify/utils'

const retrieveIdsFromTrackList = tracks => ({ ids: tracks.map(track => track.id) })

/**
 * @param {string} text the search text
 * @param {string} type (Optional) the type of search {album,artist,playlist,track}
 * @param {number} limit limit amount of data retrieved
 * @returns {array} of search results
 */
export const search = async (text, type, limit) => await SpotifyAPI.search({ q: text, type: type }, limit)

/**
 * @param {number} id the artist id
 * @returns {object} of albums and allTracks
 */
export const tracks = id =>
  SpotifyAPI.artistAlbums(id, { album_type: 'album' }).then(async albums => {
    await Promise.all(
      albums.items.map(async (album, indexA) => {
        albums.items[indexA].tracks = await SpotifyAPI.albumTracks(album.id).then(tracks => tracks.items)

        const features = await SpotifyAPI.audioFeatures(retrieveIdsFromTrackList(albums.items[indexA].tracks)).then(
          feature => feature.audio_features,
        )

        Promise.all(
          albums.items[indexA].tracks.map(async (track, indexT) => {
            albums.items[indexA].tracks[indexT].features = features[indexT]
          }),
        )
      }),
    )
    return retrieveAllTracksByAlbums(albums, [])
  })
