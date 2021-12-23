import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import TableSubHeader from "./TableSubHeader";
import { MDBBtn, MDBIcon } from "mdbreact";


const BaseTable = ({
   title,
   columns,
   totalCount,
   data,
   table,
   parentId,
   openDataModal,
   openConfirmModal,
   handlePagination,
   DetailComp,
   subHeaderBtnText,
   noHeader,
   noAction,
   noSubHeader,
   expandableSetField,
   expandableSetValue,
   enableSpeech,
   pageType
}) => {
	const refresh = useSelector(state => state.result.refresh);
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const [order, setOrder] = useState("id");
	const [sort, setSort] = useState("desc");
	const [expandedRow, setExpandedRow] = useState(null);
	const actionColumn = !enableSpeech ? [
		{
			name: "",
			right: true,
			cell: row => <>
				<MDBBtn
					size="sm"
					color="info"
					rounded
					onClick={() => openDataModal(row)}
				>
					<MDBIcon icon="pen" />
				</MDBBtn>
				<MDBBtn
					size="sm"
					color="danger"
					rounded
					onClick={() => openConfirmModal(row)}
				>
					<MDBIcon icon="trash-alt" />
				</MDBBtn>
			</>,
		},
	] : [];

	const handleChangeRows = (rows, page) => {
		setLimit(rows);
		return setPage(page);
	};
	const handleSort = (column, direction) => {
		setOrder(column.selector);
		return setSort(direction);
	};

	const handleRowExpand = (toggleState, row) => {
		if (!!toggleState) {
			return setExpandedRow(row.id);
		}

		return setExpandedRow(null);
	};

	const handleRowExpandDisable = row => {
		if (!!expandableSetField && !expandedRow) {
			return row[expandableSetField] !== expandableSetValue;
		}

		if (!expandedRow) {
			return false;
		}

		return expandedRow !== row.id;
	};

	const expandRow = !!DetailComp ? {
		expandableRows: true,
		expandOnRowClicked: true,
		expandableRowsComponent: <DetailComp />,
		expandableRowDisabled: handleRowExpandDisable,
		onRowExpandToggled: handleRowExpand,
	} : {};

	const subHeader = (pageType !== "learn") && !noSubHeader ? {
		subHeader: true,
		subHeaderComponent: <TableSubHeader
			onAddBtnClick={() => openDataModal(null)}
			addBtnText={subHeaderBtnText}
		/>,
	} : {};

	useEffect(() => {
		handlePagination({
			skip: (page - 1) * limit,
			limit,
			order,
			sort,
		}, parentId);
	}, [page, limit, order, sort, handlePagination, parentId]);

	useEffect(() => {
		if (refresh === table) {
			handlePagination({
				skip: (page - 1) * limit,
				limit,
				order,
				sort,
			}, parentId);
		}
	}, [refresh, handlePagination, limit, order, page, parentId, sort, table]);

	return (
		<DataTable
			title={title}
			columns={!noAction ? [...columns, ...actionColumn] : columns}
			data={data}
			keyField="id"
			noHeader={noHeader}
			pointerOnHover
			highlightOnHover
			responsive
			progressPending={!data}
			defaultSortField="name"
			sortIcon={<MDBIcon className="ml-1" icon="arrow-down" />}
			sortServer
			onSort={handleSort}
			pagination
			paginationServer
			paginationTotalRows={totalCount}
			paginationRowsPerPageOptions={[5, 10, 15, 20, 25]}
			onChangePage={page => setPage(page)}
			onChangeRowsPerPage={handleChangeRows}
			{...subHeader}
			{...expandRow}
		/>
	);
}

export default BaseTable