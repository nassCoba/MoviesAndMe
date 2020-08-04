import * as React from 'react'
import {StyleSheet, Image} from 'react-native'
import { createStackNavigator  } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Search from '../Component/Search'
import Favorites from '../Component/Favorites'
import FilmDetail from "../Component/FilmDetail"
import Test from "../Component/Test"

const SearchStackNavigator = createStackNavigator()
const FavoriteStackNavigator = createStackNavigator()
const MoviesTabNavigator = createBottomTabNavigator()

function SearchNavigator(){
    return(
        <SearchStackNavigator.Navigator>
            <SearchStackNavigator.Screen name="Search" component={Search}
                options ={{
                    title : 'Rechercher'
                }}
            />
            <SearchStackNavigator.Screen name="Detail" component={FilmDetail} />
        </SearchStackNavigator.Navigator>
    )
}

function FavoriteNavigator(){
    return(
        <FavoriteStackNavigator.Navigator>
            <FavoriteStackNavigator.Screen name="Favorites" component={Favorites}
                                         options ={{
                                             title : 'Favories'
                                         }}
            />
            <FavoriteStackNavigator.Screen name="Detail" component={FilmDetail} />
        </FavoriteStackNavigator.Navigator>
    )
}


export default function createContainer(){
    return (
        <NavigationContainer>
            <MoviesTabNavigator.Navigator
                tabBarOptions = {{
                    activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
                    inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
                    showLabel: false, // On masque les titres
                    showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
                }}
                >
                {/*<MoviesTabNavigator.Screen name={"Test"} component={Test} />*/}
                <MoviesTabNavigator.Screen
                    name="Rechercher"
                    component={SearchNavigator}
                    options = {{
                        tabBarIcon : () =>{
                            return <Image
                                        source={require('../Images/ic_search.png')}
                                        style = {styles.icon}/>
                        }
                    }}

                />
                <MoviesTabNavigator.Screen
                    name="Favorites"
                    component={FavoriteNavigator}
                    options = {{
                        tabBarIcon : () =>{
                            return <Image
                                source={require('../Images/ic_favorite.png')}
                                style = {styles.icon}/>
                        }
                    }}
                />

            </MoviesTabNavigator.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})