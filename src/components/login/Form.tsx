type FieldAttrs = {
    name: string,
    label: string,
    inputType?: string
}

export default function Field({name, label, inputType}: FieldAttrs){
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input type={inputType && inputType} id={name} name={name} placeholder={label}/>
        </div>
    )
}