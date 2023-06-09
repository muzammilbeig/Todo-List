import React, { useState } from 'react'

const TodoList = () => {
    const [activity, setAdctivity] = useState("");
    const [listData, setlistData] = useState([]);
    function addActivity(){

        // setlistData([...listData, activity])
        // console.log(listData)
        setlistData((listData) =>{
            const updatedList =[...listData, activity]
            console.log(updatedList)
            setAdctivity("");
            return updatedList
        })
    }
    function removeActivity(i){
        const updatedListData = listData.filter((elem, id)=>{
            return i!=id;
        })
        setlistData(updatedListData);
    }
    function removeAll(){
        setlistData([])

    }
    return (
    <>
    <div className='container'>
        <div className='header'>TodoList</div>
        <input type="text" placeholder='Add Activity' value={activity} onChange={(e) => setAdctivity (e.target.value)}/>

        <button onClick={addActivity} >Add</button>}

        <p className="List-heading"> Here is your list :{")"}</p>
        {listData!=[] && listData.map((data, i)=>{
            return (
                <>
                <p key={i}>
                    <div className="listData">{data}</div>
                    <div className="btn-position"><button onClick={() =>removeActivity(i)}> Remove(-) </button></div>
                    </p>
                    </>
            )
        })}

            {listData.length>=1 && 
            <button onClick={removeAll}>Remove All</button>}   
    </div>
    </>
  )
}

export default TodoList;