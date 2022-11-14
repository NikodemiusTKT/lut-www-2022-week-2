
if (document.readyState !== "loading") {
  initializeCode()

} else {
  initializeCode()
}
async function initializeCode() {
  document.addEventListener('DOMContentLoaded', function () {
    //Get the form element by id
    const formElement = document.getElementById('form');

    //Define the event handler for the form when it's submitted
    //FIXED FormData not populating using async () => function syntax

    formElement.addEventListener("submit", async () => handleFormSubmit)
  })
}

async function handleFormSubmit(event) {
  //Prevent browser default behavior
  event.preventDefault();

  //Get the entire form fields
  let form = event.currentTarget;

  //Get URL for api endpoint
  let url = form.action;
  //Form field instance

  try {
    let formData = new FormData(form);
    //Call the `postFormFieldsJson()` function
    let responseData = await postFormFieldsAsJson({ url, formData });
    return responseData;
  } catch (error) {
    // Handle the error here.
    console.error(`An has occured ${error}`);
  }
}



// async function initializeCode() { }
/**
 * Helper function to POST data as JSON with Fetch.
 */
async function postFormFieldsAsJson({ url, formData }) {
  //Create an object from the form data entries
  let formDataObject = Object.fromEntries(formData.entries());
  // Format the plain form data as JSON
  let formDataJsonString = JSON.stringify(formDataObject);

  //Set the fetch options (headers, body)
  let fetchOptions = {
    //HTTP method set to POST.
    method: "POST",
    //Set the headers that specify you're sending a JSON body request and accepting JSON response
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    // POST request body as JSON string.
    body: formDataJsonString,
  };

  //Get the response body as JSON.
  //If the response was not OK, throw an error.
  let res = await fetch(url, fetchOptions);

  //If the response is not ok throw an error (for debugging)
  if (!res.ok) {
    let error = await res.text();
    throw new Error(error);
  }
  //If the response was OK, return the response body.
  return res.json();
}