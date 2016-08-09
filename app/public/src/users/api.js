

// Fetch user list from server
export function fetchUsers(cb) {
  fetch('http://localhost:3001/api/users')
  .then((res) => {
    if (res.status >= 400) {
      throw new Error('Bad response from server');
    }
    return res.json();
  })
  .then((users) => {
    console.log(users);
    cb(users);
  });
}

// Update user list to the server
export function updateUsers() {
  fetch('http://localhost:3001/api/update', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.props.users),
  }).then((res) => {
    console.log(res);
  });
}
