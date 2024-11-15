import './Dresscode.css';

const Dresscode = () => {
    return (
        <div className="Dresscode">
            <p className='Dresscode-Title'>Dresscode</p>
            <p className='Dresscode-Info'>Není přesně určen dresscode, ale pokud byste chtěli být v barvách naší svatby můžete použít tyto</p>
            <div className='Dresscode-Colors'>
                <div className='Dresscode-Color' style={{backgroundColor:"#98B2C8"}}></div>
                <div className='Dresscode-Color' style={{backgroundColor:"#5D768A"}}></div>
                <div className='Dresscode-Color' style={{backgroundColor:"#919F8E"}}></div>
                <div className='Dresscode-Color' style={{backgroundColor:"#606B5B"}}></div>
                <div className='Dresscode-Color' style={{backgroundColor:"#998C73"}}></div>
                <div className='Dresscode-Color' style={{backgroundColor:"#63553E"}}></div>
            </div>
        </div>
    )
}

export default Dresscode;