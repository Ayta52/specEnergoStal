type actionType = 'up' | 'down'

function performAction(action: actionType): -1 | 1 {
  switch (action) {
    case 'down':
      return -1
    case 'up':
      return 1
  }
}
