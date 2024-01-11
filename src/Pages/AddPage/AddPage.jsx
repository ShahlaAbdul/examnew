import React, { useState } from 'react'
import  './addPage.scss'
import { useNavigate } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async';

function AddPage() {
  const navigate = useNavigate()
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

 function handleSubmit(id) {
   fetch("http://localhost:3300/", {
     method: "Post",
   })
 }

  // <Formik
  //   onSubmit={(formData) => {
  //     console.log(formData);
  //   }}
  // >
  //   {({ isSubmitting }) => (
  //     <Form>
  //       <Field type="text" name="fullname" placeholder="Enter fullname" />
  //       <Field type="text" name="image" placeholder="Enter image" />
  //       <button type="submit">Submit</button>
  //     </Form>
  //   )}
  // </Formik>;

  return (
    <div>
      <HelmetProvider>
        <Helmet>
       <title>helloooo</title>
        </Helmet>
      </HelmetProvider>

      <form action="">
        <input
          type="text"
          onChange={(e) => setImage((e) => e.target.value)}
          placeholder="enter image url"
        />
        <input
          type="text"
          onChange={(e) => setName((e) => e.target.value)}
          placeholder="enter name"
        />
        <input
          type="text"
          onChange={(e) => setDesc((e) => e.target.value)}
          placeholder="enter description"
        />
        <button>add home</button>
      </form>
    </div>
  );
}

export default AddPage