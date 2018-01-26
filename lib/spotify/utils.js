export const sortTracksByValence = tracks =>
  tracks.sort((a, b) => {
    let compare = 0
    if (a.valence > b.valence) {
      compare = -1
    } else if (a.valence < b.valence) {
      compare = 1
    }
    return compare
  })
