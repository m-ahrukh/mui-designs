export function Child(props) {
    console.log(props)
    return (
        <>
            <div className="container m-5">
                <div className="flex gap-5">
                    <h1>{props.data}</h1>
                    <button className="bg-blue-600" onClick={() => props.removeItem(props.id)}>
                        Remove
                    </button>
                </div>
            </div>
        </>
    )
}