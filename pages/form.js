// pages/someClientPage.js
function MyForm() {
  const handleSubmit = async event => {
    event.preventDefault();

    const formData = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
    
    };

 // pages/someClientPage.js
const response = await fetch('../api/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});

    if (response.ok) {
      console.log('Data inserted successfully');
      // Handle the response data as needed
    } else {
      console.error('Error inserting data');
      // Handle the error as needed
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" required />
      <input type="text" name="lastName" required />
    
      <button type="submit">Insert Data</button>
    </form>
  );
}

export default MyForm;
