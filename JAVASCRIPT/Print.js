
backPage=()=>{
  window.location.replace("http://127.0.0.1:5500/HTML/fetching.html");
}
































// Get the listview element and attach a click event listener
// const listview = document.getElementById('rintDetails');
// listview.addEventListener('click', handleRowClick);

// // Handle row click event
// function handleRowClick(event) {
//   // Get the clicked row element
//   const clickedRow = event.target.closest('tr');
//   if (clickedRow) window.location.replace("http://127.0.0.1:5500/HTML/Print.html");

//   // Extract the user ID from the row element
//   const userId = clickedRow.dataset.userId;
//   if (!userId) return;

//   // Fetch user details using the API
//   // fetch(`https://reqres.in/api/users/${userId}`)
//   //   .then(response => response.json())
//   //   .then(data => {
//   //     // Display user details in a separate page or modal
//   //     // For example, you can create a new HTML page and populate it with the user details
//   //     window.location.href = `/user-details.html?userId=${userId}`;
//     })
//     .catch(error => console.error(error));
// }
