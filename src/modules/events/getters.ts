import { GetterTree } from 'vuex';
import { RootState } from '@/store';

import {
  IEventsState,
  EVENTS_GET_ALL,
  EVENTS_GET_ONE,
  EVENT_TYPES_GET_ALL,
  EVENT_TYPES_GET_ONE,
  EVENT_ROLES_GET_ALL,
  EVENT_ROLES_GET_ONE
} from './types';

export const getters: GetterTree<IEventsState, RootState> = {
  [EVENTS_GET_ALL]: (state) => {
    return ({
      beginTime,
      invert = false
    }: {
      beginTime?: Date;
      invert: boolean;
    }) => {
      return state.events.filter((event) => {
        const condition =
          beginTime === undefined ||
          (event.endTime && event.endTime > beginTime);

        if (invert) {
          return !condition;
        } else {
          return condition;
        }
      });
    };
  },

  [EVENTS_GET_ONE]: (state) => {
    return (id: string) => {
      return state.events.find((v) => v.id === id);
    };
  },

  [EVENT_TYPES_GET_ALL]: (state) => {
    return state.eventTypes;
  },

  [EVENT_TYPES_GET_ONE]: (state) => {
    return (id: string) => {
      return state.eventTypes.find((v) => v.id === id);
    };
  },

  [EVENT_ROLES_GET_ALL]: (state) => {
    return state.eventRoles;
  },

  [EVENT_ROLES_GET_ONE]: (state) => {
    return (id: string) => {
      return state.eventRoles.find((v) => v.id === id);
    };
  }
};
