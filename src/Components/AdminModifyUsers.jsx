// fetchCustomers uses native javascript function fetch to reach backend server and get response.
// we use native javasctip function json() to parse response and make it json array
// we then log that json array to browser console with native javascript module/function console.log()
const modifyUsers = async () => {
  const response = await fetch("http://localhost:9000/customers");
  const responseJson = await response.json();
  console.log(responseJson);
};

// Demo is react component that renders a button when clicked calls and awaits the fetchCustomers async function
const AdminModifyUsers = () => (
  <>
    <button
      onClick={async () => {
        await modifyUsers();
      }}
    >
      Modify Users!
    </button>
  </>
);
export default AdminModifyUsers;
