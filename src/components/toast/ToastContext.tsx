import React, { createContext, useContext, useState } from 'react'
import { CustomToast } from './CustomToast';
import { StyleSheet, View } from 'react-native';
import {styles} from './styles'

const ToastContext = createContext({
    addToast: (content: string) => {}
})

export interface iToast {
    id: number;
    content: string
}

export const ToastProvider = ({children}) => {
    const initial: iToast[] = []
    const [toast, setToast] = useState(initial)

    const addToast = (content: string) => {
        const id = Date.now()
        setToast((prevToast) => [...prevToast,{id,content}])

        setTimeout(() => {
            setToast((prevToast) => prevToast.filter(item => item.id != id))
        },3000)
    }

    return (<ToastContext.Provider value={{addToast}}>
        {children}
        <View style={styles.toastContainer}>
            {toast.map(item => {
                return <CustomToast key={item.id} {...item} />
            })}
        </View>
    </ToastContext.Provider>)
}

export const useToast = () => {
    return useContext(ToastContext)
}