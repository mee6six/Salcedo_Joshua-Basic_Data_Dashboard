document.addEventListener('DOMContentLoaded', function() {
    //total users
    const totalUsersElement = document.getElementById('totalUsers');
    const totalSalesElement = document.getElementById('totalSales');
    
    // adding alert button
    const alertButton = document.getElementById('alertButton');

    // sample data
    const totalUsers = 1000;
    const totalSales = 500;

    // updating content for users and sales
    totalUsersElement.innerText = totalUsers.toLocaleString(); // Add comma formatting
    totalSalesElement.innerText = totalSales.toLocaleString(); // Add comma formatting

    // event listener for buttons clicked
    alertButton.addEventListener('click', function() {
        alert(`Total Users: ${totalUsers}, Total Sales: ${totalSales}`);
    });

});
