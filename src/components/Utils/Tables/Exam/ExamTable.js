import React from 'react'
import { useSelector } from 'react-redux';
import { _getExams } from '../../../../redux/action/dataAction';
import { EXAM_TABLE } from '../../../../utils/tables';
import BaseTable from '../BaseTable';
import ExamDetail from './Details/ExamDetail'
import {
  MDBBtn,
  MDBIcon
} from 'mdbreact';

export default ({ openDataModal, openTestModal, openConfirmModal }) => {
  const data = useSelector(state => state.data.exams)

  const columns = [
    {
      name: 'No',
      cell: (row, index) => <div>{index + 1}</div>,
      width: '5px'
    },
    {
      name: 'Subject',
      selector: 'subject.name',
      sortable: true
    },
    {
      name: 'Course',
      selector: 'course.name',
      sortable: true
    },
    {
      name: 'Name',
      selector: 'name',
      sortable: true
    },
    {
      name: 'Level',
      selector: 'level.name',
      sortable: true
    },
    {
      name: 'Test',
      cell: row => <>
          <MDBBtn
          size="sm"
          color="info"
          rounded
          onClick={ () => openTestModal(row) }
          className="ml-0 mr-0"
        >
              <MDBIcon icon="vial" />
          </MDBBtn>
      </>
    }
  ];

  return (
      <BaseTable
      title='Exam'
      columns={ columns }
      totalCount={ data.totalCount }
      data={ data.exams }
      table={ EXAM_TABLE }
      openDataModal={ openDataModal }
      openConfirmModal={ openConfirmModal }
      handlePagination={ _getExams }
      DetailComp={ ExamDetail }
    />
  )
}