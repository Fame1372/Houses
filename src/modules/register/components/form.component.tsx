'use client';
import React, {useEffect, useRef, useState} from 'react';
import {Formik, Form as FormikForm, FormikProps} from 'formik';
import Input from '../../../common/components/input-form';
import * as Yup from 'yup';

export default function FormRegister() {
  const [imageFile, setImageFile] = useState({preview: '', raw: ''});

  const formikRef = useRef(null);

  const validationSchema = Yup.object().shape({
    streetName: Yup.string().required('ضروری'),
    houseNumber: Yup.string().required('ضروری'),
    addition: Yup.string().required('ضروری'),
    postalCode: Yup.string().required('ضروری'),
    city: Yup.string().required('ضروری'),
    price: Yup.string().required('ضروری'),
  });

  const onSubmitHandler = async (values: any) => {
    console.log(values);
  };

  // function preview(event: any) {
  //   frame = URL.createObjectURL(event.target.files[0]);
  // }

  return (
    // <form>
    //   <input
    //     type="file"
    //     accept='image/*'
    //     onChange={preview}
    //     // onChange={(e) =>
    //     //   setImageFile({
    //     //     preview: URL.createObjectURL(e.target),
    //     //     raw : e.target,
    //     //   })
    //     // }
    //   />
    //   <img id="frame" src={imageFile.preview} width="100px" height="100px" />
    // </form>
    <Formik
      initialValues={{
        streetName: null,
        houseNumber: null,
        addition:null,
        postalCode: null ,
        city: null,
        price: null
      }}
      validationSchema={{validationSchema}}
      onSubmit={onSubmitHandler}
      innerRef={formikRef}>
      {() => (
        <FormikForm autoComplete="off">
          <div  className="form">
            <Input
              label="Street Name"
              placeholder="Enter the street name"
              className="form__input-form"
              onchange={()=>{}}

            />
            <div className="form__inputs-form">
              <Input label="House number" placeholder="Enter house number" />
              <Input label="Addition(optional)" placeholder="e.g.A" />
            </div>
            <Input label="Postal code" placeholder="e.g.1000AA" />
            <Input label="City" placeholder="e.g.Utrecht" />
            <Input label="Price" />
            <div className="form__inputs-form">
              <Input label="Size" placeholder="120 m2" />
              <Input label="Garage" placeholder="yes" />
            </div>
          </div>
        </FormikForm>
      )}
    </Formik>
  );
}
