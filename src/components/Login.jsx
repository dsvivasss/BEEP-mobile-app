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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'linear-gradient(0deg, rgba(216,206,244,1) 0%, rgba(13,62,71,1) 13%)',
        backgroundColor: 'rgb(216,206,244)',
        // padding: 20,
        // paddingVertical: 5
    },
    gradient: {
        width: '100%',
        height: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    linearGradientTitle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        // fontFamily: 'Lustria',
        fontWeight: 'normal',
        fontSize: 96,
        lineHeight: 123,
        color: 'transparent',
        textAlign: 'center',
        textShadowColor: '#000',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
    },
    // language: {
    //     padding: 4,
    //     color: theme.colors.white,
    //     backgroundColor: theme.colors.primary,
    //     alignSelf: 'flex-start',
    //     marginVertical: 4,
    //     borderRadius: 4,
    //     overflow: 'hidden'
    // },
    // image: {
    //     width: 48,
    //     height: 48,
    //     borderRadius: 4
    // }
})

export default RepositoryList