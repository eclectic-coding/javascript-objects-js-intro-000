var playlist = {
  'Phil Ochs': 'My Bloddy Valentinr',
  'Lauren Daigle': 'You Say'
}

function updatePlayList (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  
  return playlist
}