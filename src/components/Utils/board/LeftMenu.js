import React, { useEffect, useState } from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBCollapse } from 'mdbreact';
import { v1 as uuIdv1 } from 'uuid';
import Dropzone from 'react-dropzone';
import BoarItemCategory from '../../models/BoarItemCategory';
import { DRAG_DATA_KEY } from './constants';
import { BoardItems } from '../../../assets/data/boardItem';

import './Board.scss'

export default function LeftMenu () {
	const [ categories, setCategories ] = useState([]);

	useEffect(() => {
		prepareCategories();
	}, []);

	const onClickExpand = (e, category) => {
		e.preventDefault();

		const index = categories.findIndex(item => item.id === category.id);
		if (index > -1) {
			const tempCategory = categories[ index ];
			tempCategory.expand = !tempCategory.expand;
		}

		setCategories(() => ([ ...[], ...categories ]));
	};

	const onDragStart = (event) => {
		const id = event.target.dataset.id;

		if (id) {
			const offsetX = event.nativeEvent.offsetX;
			const offsetY = event.nativeEvent.offsetY;

			const clientWidth = event.target.clientWidth;
			const clientHeight = event.target.clientHeight;

			const dragPayload = JSON.stringify({
				id,
				offsetX,
				offsetY,
				clientWidth,
				clientHeight,
			});

			event.nativeEvent.dataTransfer.setData(DRAG_DATA_KEY, dragPayload);
		}
	};

	const prepareCategories = () => {
		const tempCategories = [];

		(BoardItems || []).forEach(boardItem => {
			const index = tempCategories.findIndex(item => item.code === boardItem.categoryCode);
			if (index === -1) {
				const boarItemCategory = new BoarItemCategory();
				boarItemCategory.id = uuIdv1();
				boarItemCategory.name = boardItem.categoryName;
				boarItemCategory.code = boardItem.categoryCode;

				if (boardItem.categoryCode === 'alphabet' || boardItem.categoryCode === 'number' ) {
					boarItemCategory.expand = true;
				}

				if (tempCategories.length === 0) {
					boarItemCategory.expand = true;
				}

				boarItemCategory.items = (BoardItems || []).filter(item => boarItemCategory.code === item.categoryCode);
				tempCategories.push(boarItemCategory);
			}
		});

		setCategories(tempCategories);
	};

	return (
    <>
        {categories && categories.length > 0 && (
				categories.map((category, index) => {
					return (
    <MDBCard className="border-bottom-0" key={ index }>
        <MDBCardHeader>
            <a className="text-body d-flex justify-content-between"
									href={ '!#' }
									rel="noopener noreferrer"
									onClick={ e => onClickExpand(e, category) }
									aria-expanded={ category.expand }>
                {category.name}
                <div className="collapse-icon"/>
            </a>
        </MDBCardHeader>
        <MDBCollapse isOpen={ category.expand }>
            <MDBCardBody>
                {category.items && category.items.length > 0 && (
										category.items.map((item, indexItem) => {
											return (
    <img key={ indexItem }
													src={ item.imageUrl }
													alt={ item.name }
													draggable
													data-id={ item.id }
													onDragStart={ onDragStart }
													height={ 50 }
												/>
											)
										})
									)}
            </MDBCardBody>
        </MDBCollapse>
    </MDBCard>
					)
				})
			)}
        <MDBCard className="drag-card">
            <MDBCardBody>
                <Dropzone onDrop={ acceptedFiles => console.log(acceptedFiles) }>
                    {({ getRootProps, getInputProps }) => (
                        <section className="dropzone-container">
                            <div { ...getRootProps({ className: 'dropzone' }) }>
                                <input { ...getInputProps() } />
                                <p className="mb-0">Drag element here, or click to select element svg</p>
                            </div>
                        </section>
						)}
                </Dropzone>
            </MDBCardBody>
        </MDBCard>
    </>
	);
}