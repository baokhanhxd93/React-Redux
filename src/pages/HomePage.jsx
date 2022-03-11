import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import casual from 'casual-browserify'
import HobbyList from '../components/Home/HobbyList/HobbyList'
import { addNewHobby, setNewHobby } from '../actions/hobby'

HomePage.propTypes = {

}

function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.hobbyList)
    const activeId = useSelector(state => state.hobby.activeId)

    const dispatch = useDispatch()

    const handleAddHobbyClick = () => {
        const newHobby = {
            id: casual.uuid,
            title: casual.title,
        }

        const action = addNewHobby(newHobby)
        dispatch(action)
    }

    const handleHobbyClick = (hobby) => {
        const action = setNewHobby(hobby)
        dispatch(action)
    }

    return (
        <div className="home-page">
            <h1>Hello World</h1>
            
            <button onClick={handleAddHobbyClick}>Random Hobby</button>
            <HobbyList
                hobbyList={hobbyList}
                activeId={activeId}
                onHobbyClick={handleHobbyClick}
            />
        </div>
    )
}

export default HomePage