'use client';
import React, {useEffect, useRef, useState} from 'react';
import {Formik, Form as FormikForm, FormikProps} from 'formik';
import Layout from '../../../common/components/layout';
import Input from '../../../common/components/input-form';

export default function FormRegister() {
  const formikRef = useRef(null);
  const onSubmitHandler = async (values: any) => {};

  return (
      <Formik
        initialValues={{}}
        validationSchema={{}}
        onSubmit={onSubmitHandler}
        innerRef={formikRef}>
        {() => (
          <FormikForm autoComplete="off" className='form' >
            <Input label='street Name' placeholder='Enter the street name'/>
            <div className='form__inputs-form'>
              <Input  label='House number' placeholder='Enter house number' />
              <Input  label='street Name' placeholder='enter the street name'/>
            </div>
            <Input  label='street Name' placeholder='enter the street name'/>
            <Input  label='street Name' placeholder='enter the street name'/>
          </FormikForm>
        )}
      </Formik>
  );
}
