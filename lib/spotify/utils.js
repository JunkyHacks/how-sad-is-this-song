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
