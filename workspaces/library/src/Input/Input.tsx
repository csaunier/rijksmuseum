import type { DetailedHTMLProps, FunctionComponent, InputHTMLAttributes } from "react"
import clsx from "clsx"

import styles from "./Input.module.css"

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  className?: string
}
export const Input: FunctionComponent<InputProps> = (props) => {
  const { className, ...restProps } = props
  return <input {...restProps} className={clsx(styles.input, className)} />
}
