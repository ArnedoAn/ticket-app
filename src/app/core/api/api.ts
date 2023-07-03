import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

export const API = {
  users: `${apiUrl}/Users`,
  tickets: `${apiUrl}/Tickets`,
  assignments: `${apiUrl}/Assignments`,
  status: `${apiUrl}/Status`,
};

/**
 * Example of use:
 * profilePicture: `${api.profilePicture}?name=${user.name}&size=128`
 * users: `${api.users}/${user.id}`
 * tickets: `${api.tickets}/${ticket.id}`
 * assignments: `${api.assignments}/${assignment.id}`
 */
