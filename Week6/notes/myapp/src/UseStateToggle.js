import {useState} from 'react'

export default function UseStateToggle () {
    const [checked, setChecked] = useState(false)

    // reducer takes in state and returns a new state
    const toggle = () => {
        setChecked((checked) => !checked)
    }

    return (
        <>
            <section>
                <input 
                    type="checkbox"
                    value={checked}
                    onChange={toggle}
                />
            </section>
            <p>{checked ? "checked" : "not checked "}</p>
        </>
    )
}