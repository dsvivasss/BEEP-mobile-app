/* eslint-disable */

import React, { useEffect, useState } from 'react'
import { FlatList, Text } from 'react-native'
import RepositoryItem from './RepositoryItem'
import repositories from '../data/repositories'

function RepositoryList() {
    // const [repositoriesList, setRepositories] = useState([])
    // console.log(repositories)
    const [repositoriesList, setRepositories] = useState(repositories)

    // const fetchRepositories = async () => {
    //     const response = await fetch('http://localhost:5000/api/repositories')
    //     const json = await response.json()
    //     setRepositories(json)
    // }



    useEffect(() => {
        // fetchRepositories()
    }, [])

    // const repositoriesNodes = repositories ? repositories.edge.map(edge => edge.node) : []
    // const repositoriesNodes = repositoriesList ? repositoriesList.edge.map(edge => edge.node) : []

    return (
        <FlatList
            data={repositoriesList}
            ItemSeparatorComponent={() => <Text />}
            renderItem={({ item: repo }) => (
                <RepositoryItem {...repo} />
            )}
        />
    )
}

export default RepositoryList