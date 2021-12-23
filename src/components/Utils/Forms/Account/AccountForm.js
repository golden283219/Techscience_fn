import React, { useState, useEffect, useCallback } from 'react'
import * as _ from 'lodash'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { simpleSchema } from "../../../../utils/inputShema";
import {
  _mutateAccount,
  _getUsersToSelect
} from "../../../../redux/action/dataAction";
import {
  MDBInput,
  MDBBtn,
  MDBSelect,
  MDBTypography
} from 'mdbreact';


export default ({ row }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(simpleSchema)
  })
  const [userOptions, setUserOptions] = useState(null)
  const [userId, setUserId] = useState(null)
  const data = !!row ? row : {
    user: {}
  }

  const renderErrors = useCallback(allErrors => {
    let errorFields = Object.keys(allErrors)

    return errorFields.map((field, i) => (
      <li key={i}>{allErrors[field].message}</li>
    ))
  }, [errors])

  const onSubmit = account => {
    account.userId = userId
    return _mutateAccount(account)
  }

  useEffect(() => {
    _getUsersToSelect({ 
      accountId: data.id, 
      roleId: 2
    }).then(users => {
      let options = users.map(user => {
        return {
          text: user.fullname,
          value: String(user.id),
          checked: !!data.user && user.fullname === data.user.fullname
        }
      })

      return setUserOptions(options)
    })
  }, [])

  return (
    <>
      { !_.isEmpty(errors) &&
        <MDBTypography note noteColor='danger' className="mb-3">
          {renderErrors(errors)}
        </MDBTypography>
      }
      <input
        type="hidden"
        name="id"
        autoComplete="id"
        defaultValue={data.id}
        ref={register}
      />
      <MDBInput
        type='text'
        label='Account Name'
        className="pl-3 pr-3"
        name="name"
        valueDefault={data.name}
        inputRef={register}
      />
      <MDBSelect
        color='info'
        label='Account Admin'
        search
        options={userOptions}
        name="userId"
        getValue={value => setUserId(Number(value[0]))}
      />
      <div className='text-center mt-3 black-text'>
        <MDBBtn
          color="info"
          className="w-100 m-auto"
          onClick={handleSubmit(onSubmit)}
        >
          Confirm
        </MDBBtn>
      </div>
    </>
  )
}