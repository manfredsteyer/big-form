import { State } from "./simple-store.service";

export const selectIsInput1Valid = (s: State) => !!s.info1;
export const selectIsInput2Valid = (s: State) => !!s.info2;

export const selectIsBothValid = (s: State) => selectIsInput1Valid(s) && selectIsInput2Valid(s);