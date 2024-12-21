import type { ComponentPropsWithoutRef, ElementType, PropsWithChildren, ReactNode } from "react"

import clsx from 'clsx';

import styles from "./Button.module.css"

type PolymorphicProps<E extends ElementType> = ComponentPropsWithoutRef<E> & {
    as?: E
}

type ButtonProps<T extends ElementType> = PolymorphicProps<T> & PropsWithChildren

export const Button = <T extends ElementType = "div">(props: ButtonProps<T>): ReactNode => {
    const { as, children, className, ...restProps } = props
    const Component = as || "button"
    return (
        <Component {...restProps} className={clsx(className, styles.button)}>
            {children}
        </Component>
    )
}
