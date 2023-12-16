export default function List() {
    const college = [
        { id: '1', name: 'abi' },
        { id: '2', name: 'jana' },
        { id: '3', name: 'harini' },
        { id: '4', name: 'abhi' }
    ];

    const result = college.map((clg) => <li key={clg.id}>{clg.id} => {clg.name}</li>);

    return (
        <div style={{backgroundColor:"green"}}>
        <h1>Students List</h1>
            <ul type="none">
                {result}
            </ul>
        </div>
    );
}