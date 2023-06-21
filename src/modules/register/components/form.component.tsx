'use client';
import React, { useEffect, useRef, useState } from 'react';
import {Formik , Form as FormikForm , FormikProps} from 'formik';
import Layout from '../../../common/components/layout';

export default function FormRegister() {

  const formikRef = useRef(null);
  const onSubmitHandler = async (values: any) => {
  };

  return (
    <Layout effect='fade'>
      <Formik
        initialValues={{}}
        validationSchema={{}}
        onSubmit={onSubmitHandler}
        innerRef={formikRef}
      >
        {() => (
          <FormikForm autoComplete="off">
            <input/>
          </FormikForm>
        )}
      </Formik>

    </Layout>
  );
}
