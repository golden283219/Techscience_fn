import React from 'react'
import { useSelector } from 'react-redux';
import MathJax from 'react-mathjax-preview'
import { _getChoices } from '../../../../redux/action/dataAction';
import { CHOICE_TABLE } from '../../../../utils/tables';
import BaseTable from '../BaseTable';
import { MDBSwitch } from 'mdbreact';

export default ({ openDataModal, openConfirmModal, questionId }) => {
  const data = useSelector(state => state.data.choices)
  const columns = [
    {
      name: 'No',
      cell: (row, index) => <div>{index + 1}</div>,
      width: '5px'
    },
    {
      name: 'Description',
      selector: 'name',
      sortable: true,
      cell: row => <MathJax math={ String.raw`${ row.name }` } />
    },
    {
      name: 'Correct',
      selector: 'correct',
      cell: row => {
        return (
            <MDBSwitch 
            checked={ row.correct }
            labelLeft=''
            labelRight=''
            disabled
          />
        )
      },
      sortable: true,
      width: '8rem'
    },
    {
      name: 'Comment',
      selector: 'comment',
      sortable: true,
      width: '10rem'
    }
  ];

  return (
      <BaseTable 
      title='Choice'
      columns={ columns }
      totalCount={ data.totalCount }
      data={ data.choices }
      table={ CHOICE_TABLE }
      parentId={ questionId }
      openDataModal={ openDataModal }
      openConfirmModal={ openConfirmModal }
      handlePagination={ _getChoices }
      subHeaderBtnText='Add Choice'
      noHeader
    />
  )
}