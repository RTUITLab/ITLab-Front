// actions
export const EQUIPMENT_SEARCH = 'EQUIPMENT_SEARCH';
export const EQUIPMENT_FETCH_ALL = 'EQUIPMENT_FETCH_ALL';
export const EQUIPMENT_FETCH_ONE = 'EQUIPMENT_FETCH_ONE';
export const EQUIPMENT_FETCH_MY = 'EQUIPMENT_FETCH_MY';
export const EQUIPMENT_FETCH_ASSIGNED_TO = 'EQUIPMENT_FETCH_ASSIGNED_TO';
export const EQUIPMENT_COMMIT = 'EQUIPMENT_COMMIT';
export const EQUIPMENT_DELETE = 'EQUIPMENT_DELETE';

export const EQUIPMENT_TYPE_SEARCH = 'EQUIPMENT_TYPE_SEARCH';
export const EQUIPMENT_TYPES_FETCH_ALL = 'EQUIPMENT_TYPES_FETCH_ALL';
export const EQUIPMENT_TYPES_FETCH_ONE = 'EQUIPMENT_TYPES_FETCH_ONE';
export const EQUIPMENT_TYPE_COMMIT = 'EQUIPMENT_TYPE_COMMIT';
export const EQUIPMENT_TYPE_DELETE = 'EQUIPMENT_TYPE_DELETE';

// setters
export const EQUIPMENT_SET_ALL = 'EQUIPMENT_SET_ALL';
export const EQUIPMENT_SET_ONE = 'EQUIPMENT_SET_ONE';
export const EQUIPMENT_REMOVE_ONE = 'EQUIPMENT_REMOVE_ONE';

export const EQUIPMENT_TYPES_SET_ALL = 'EQUIPMENT_TYPES_SET_ALL';
export const EQUIPMENT_TYPES_SET_ONE = 'EQUIPMENT_TYPES_SET_ONE';
export const EQUIPMENT_TYPES_REMOVE_ONE = 'EQUIPMENT_TYPES_REMOVE_ONE';

// getters
export const EQUIPMENT_GET_ALL = 'EQUIPMENT_GET_ALL';
export const EQUIPMENT_GET_ONE = 'EQUIPMENT_GET_ONE';

export const EQUIPMENT_TYPES_GET_ALL = 'EQUIPMENT_TYPES_GET_ALL';
export const EQUIPMENT_TYPES_GET_ONE = 'EQUIPMENT_TYPES_GET_ONE';

// EquipmentType //
//////////////////

export class EquipmentTypeDefault {
  public id: string = '';
  public title: string = '';
  public shortTitle: string = '';
  public description: string = '';
  public rootId: string = '';
  public parentId: string = '';
}

export interface IEquipmentType extends EquipmentTypeDefault {}

// Equipment //
//////////////

export class EquipmentDefault {
  public id: string = '';
  public serialNumber: string = '';
  public number: number = 0;

  public equipmentType?: IEquipmentType;
  public equipmentTypeId?: string;

  public description?: string;
  public ownerId?: string;
  public parentId?: string;
  public children?: [];
}

export interface IEquipment extends EquipmentDefault {}

// State //
//////////

export interface IEquipmentState {
  equipment: IEquipment[];
  equipmentTypes: IEquipmentType[];
}
