document.addEventListener('DOMContentLoaded', () => {
  const totalUsersElement = document.getElementById('totalUsers');

  fetch('/api/totalUsers')
    .then(response => response.json())
    .then(data => {
      totalUsersElement.innerText = data.total;
    })
    .catch(error => console.error('Error fetching total users:', error));
});
