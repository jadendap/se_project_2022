const Inventory = async () => {
  const response = await fetch("http://localhost:9000/inventory");
  const responseJson = await response.json();
  sessionStorage.setItem("featured", JSON.stringify(responseJson));

  //console.log(JSON.parse(sessionStorage.featured));
};

export default Inventory;
