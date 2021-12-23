import * as boardActionTypes from '../actionTypes/boardActionTypes';

export const clearAll = () => {
  return {
    type: boardActionTypes.CLEAR_ALL
  }
};

export const addShape = (shape) => {
  return {
    type: boardActionTypes.ADD_SHAPE,
    payload: shape
  }
};

export const deleteShape = (shape) => {
  return {
    type: boardActionTypes.DELETE_SHAPE,
    payload: shape
  }
};

export const updateShape = (shape) => {
  return {
    type: boardActionTypes.UPDATE_SHAPE,
    payload: shape
  }
};

export const selectShape = (shape) => {
  return {
    type: boardActionTypes.SELECT_SHAPE,
    payload: shape
  }
};

export const clearShapes = () => {
  return {
    type: boardActionTypes.CLEAR_SHAPES
  }
};

export const updateShapes = (shapes) => {
  return {
    type: boardActionTypes.UPDATE_SHAPES,
    payload: shapes
  }
};

export const addShapeGroup = (shapeGroup) => {
  return {
    type: boardActionTypes.ADD_SHAPE_GROUP,
    payload: shapeGroup
  }
};

export const updateShapeGroup = (shapeGroup) => {
  return {
    type: boardActionTypes.UPDATE_SHAPE_GROUP,
    payload: shapeGroup
  }
};

export const selectShapeGroup = (shapeGroup) => {
  return {
    type: boardActionTypes.SELECT_SHAPE_GROUP,
    payload: shapeGroup
  }
};

export const updateShapeGroups = (shapeGroups) => {
  return {
    type: boardActionTypes.UPDATE_SHAPE_GROUPS,
    payload: shapeGroups
  }
};
