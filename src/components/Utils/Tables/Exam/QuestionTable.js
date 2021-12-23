import React from 'react'
import { useSelector } from 'react-redux';
import MathJax from 'react-mathjax-preview';
import { _getQuestions } from '../../../../redux/action/dataAction';
import { QUESTION_TABLE } from '../../../../utils/tables';
import QuestionDetail from './Details/QuestionDetail'
import BaseTable from '../BaseTable';
import {
  MDBSwitch,
  MDBLightbox
} from 'mdbreact';

export default ({ openDataModal, openConfirmModal, examId }) => {
  const data = useSelector(state => state.data.questions)
  const columns = [
    {
      name: 'No',
      cell: (row, index) => <div>{index + 1}</div>,
      width: '5px'
    },
    {
      name: 'Description',
      selector: 'name',
      minWidth: '300px',
      sortable: true,
      compact: true,
      wrap: true,
      allowOverflow: true,
      cell: row => (
          <MathJax 
          math={ String.raw`${ row.name }` }
        />
      )
    },
    {
      name: 'Type',
      selector: 'type',
      sortable: true,
      width: '8rem'
    },
    {
      name: 'Free',
      selector: 'free',
      cell: row => {
        return (
            <MDBSwitch
            checked={ row.free }
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
      name: 'Choices',
      selector: 'choices',
      cell: row => {
        if (row.type === 'subjective')
          return ''

        return row.choices.length
      },
      sortable: true,
      width: '8rem'
    },
    {
      name: 'Image',
      selector: 'image',
      cell: row => {
        if (!row.image)
          return ''
          
        return (
            <MDBLightbox
            images={ [ { src: `${ process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_IMAGE_URI : process.env.REACT_APP_PROD_IMAGE_URI }/${ process.env.REACT_APP_QUESTION_IMAGE_FOLDER }/${ row.image }`, alt: 'question image' } ] }
            itemClassName="p-1"
          />
        )
      },
      sortable: false,
      width: '10rem'
    },
  ];

  return (
      <BaseTable
      title='Question'
      columns={ columns }
      totalCount={ data.totalCount }
      data={ data.questions }
      table={ QUESTION_TABLE }
      parentId={ examId }
      openDataModal={ openDataModal }
      openConfirmModal={ openConfirmModal }
      handlePagination={ _getQuestions }
      DetailComp={ QuestionDetail }
      subHeaderBtnText='Add Question'
      expandableSetField='type'
      expandableSetValue='objective'
      noHeader
    />
  )
}