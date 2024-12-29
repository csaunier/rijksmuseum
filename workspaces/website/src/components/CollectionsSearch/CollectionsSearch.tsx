import {
  type ChangeEvent,
  type FormEvent,
  type FunctionComponent,
  useContext,
  useRef,
  useState,
} from "react"
import { Button } from "@rijksmuseum/library/Button"
import { CollectionsContext } from "../../contexts/CollectionsContext"
import { useSearchParams } from "react-router-dom"
import { Input } from "@rijksmuseum/library/Input"

import styles from "./CollectionsSearch.module.css"

export const CollectionsSearch: FunctionComponent = () => {
  const { setSearch } = useContext(CollectionsContext)
  const [searchParams] = useSearchParams()
  const [value, setValue] = useState(searchParams.get("query") || "")

  const inputRef = useRef<HTMLInputElement>(null)

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (inputRef.current) {
      setSearch(inputRef.current.value)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }

  return (
    <form onSubmit={handleSearch} className={styles.block}>
      <Input
        type="text"
        name="search"
        placeholder="Search in collections..."
        ref={inputRef}
        value={value}
        onChange={handleChange}
        className={styles.input}
      />
      <Button type="submit">Search</Button>
    </form>
  )
}
