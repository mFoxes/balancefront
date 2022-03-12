import { observer } from "mobx-react-lite";
import React, { createContext, Dispatch, FC, useReducer, useState } from "react";
import { IWorkout } from "./models/interface/IWorkout";

const initialState = {
    modalValue: {
        modalActive: false,
        setModalActive: (modalActive: boolean) => { }
    },
    swiperValue: {
        swiperClass: "",
        setSwiperClass: (modalActive: string) => { }
    }
}

export const Context = createContext(initialState)

const Provider: FC = observer(({ children, ...props }) => {
    const [modalActive, setModalActive] = useState<boolean>(false)
    const [swiperClass, setSwiperClass] = useState<string>("")

    return (
        <Context.Provider value={{
            modalValue: { modalActive, setModalActive },
            swiperValue: { swiperClass, setSwiperClass }
        }}>
            {children}
        </Context.Provider>
    );
})

export default Provider;