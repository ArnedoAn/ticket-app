export const api = {
  profilePicture: 'https://ui-avatars.com/api/',
  users: 'https://jsonplaceholder.typicode.com/users',
  tickets: 'https://jsonplaceholder.typicode.com/todos',
  assignments: 'https://jsonplaceholder.typicode.com/todos',
};

/**
 * Example of use:
 * profilePicture: `${api.profilePicture}?name=${user.name}&size=128`
 * users: `${api.users}/${user.id}`
 * tickets: `${api.tickets}/${ticket.id}`
 * assignments: `${api.assignments}/${assignment.id}`
 */
