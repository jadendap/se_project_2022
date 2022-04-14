
// fetchCustomers uses native javascript function fetch to reach backend server and get response.
// we use native javasctip function json() to parse response and make it json array
// we then log that json array to browser console with native javascript module/function console.log()
const fetchCustomers = async () => {
  const response = await fetch("http://localhost:9000/customers");
  const responseJson = await response.json();
  console.log(responseJson);
};

// Demo is react component that renders a button when clicked calls and awaits the fetchCustomers async function
const Demo = () => (
  <>
    <button
      onClick={async () => {
        await fetchCustomers();
      }}
    >
      Click to see customers!
    </button>
  </>
);
export default Demo;