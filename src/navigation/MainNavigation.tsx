import React from 'react';
import {View, Text} from 'react-native-ui-lib';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import {
  HOME_SCREEN,
  DETAIL_PRODUCT_SCREEN,
  PRODUCT_LIST_SCREEN,
  LOGIN_SCREEN,
  ACCOUNT_SCREEN,
  REGISTER_SCREEN,
  BLOG_SCREEN,
  READ_BLOG_SCREEN,
  BRAND_LIST_SCREEN,
  CATEGORY_LIST_SCREEN,
  ABOUT_SCREEN,
  KATALOG_SCREEN,
  SERIES_SCREEN,
  SUBCATEGORI_SCREEN,
} from './routename';
import DetailsScreen from '../screens/Details';
import Icon from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';
import ProductListScreen from '../screens/ProductList';
import {HeaderBackButton} from '@react-navigation/stack';
import AccountScreen from '../screens/Account';
import RegisterScreen from '../screens/Auth/Register';
import ProductNavigation from './ProductNavigation';
import BlogScreen from '../screens/Blog';
import CustomDrawerContent from '../components/DrawerContent/index';
import BrandListScreen from '../screens/BrandList';
import CategoryListScreen from '../screens/CategoryList';
import BlogNavigation from './BlogNavigation';
import AboutScreen from '../screens/About';
import KatalogScreen from '../screens/Katalog';
import SeriesScreen from '../screens/Series';
import SubCategoryScreen from '../screens/Subcategory';

const Drawer = createDrawerNavigator();

export default function MainNavigation(props: any) {
  const mainHeaderOptions = {
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
    },
    headerShown: true,
    headerTitle: 'Wahana Furniture',
    headerRight: (props: any) => (
      <Icon style={{paddingHorizontal: 5}} name="person" size={RFValue(25)} />
    ),
  };

  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      initialRouteName={HOME_SCREEN}>
      {/* <Drawer.Screen
        name={REGISTER_SCREEN}
        component={RegisterScreen}
        options={({navigation}) => ({
          ...mainHeaderOptions,
          gestureEnabled: false,
          headerTitle: '',
          headerRight: () => null,
          headerLeft: (props) => (
            <HeaderBackButton onPress={() => navigation.goBack()} />
          ),
        })}
      /> */}
      <Drawer.Screen
        options={mainHeaderOptions}
        name={HOME_SCREEN}
        component={HomeScreen}
      />
      <Drawer.Screen
        options={({navigation}) => ({
          headerShown: true,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
          headerLeft: () => (
            <HeaderBackButton onPress={() => navigation.goBack()} />
          ),
          headerTitle: '',
        })}
        name={DETAIL_PRODUCT_SCREEN}
        component={DetailsScreen}
      />
      <Drawer.Screen name="Product" component={ProductNavigation} />
      <Drawer.Screen
        options={({navigation}) => ({
          ...mainHeaderOptions,
          gestureEnabled: false,
          headerLeft: (props) => (
            <HeaderBackButton onPress={() => navigation.goBack()} />
          ),
        })}
        name={PRODUCT_LIST_SCREEN}
        component={ProductListScreen}
      />
      <Drawer.Screen
        options={({navigation}) => ({
          ...mainHeaderOptions,
          gestureEnabled: false,
          headerLeft: (props) => (
            <HeaderBackButton onPress={() => navigation.goBack()} />
          ),
        })}
        name={BRAND_LIST_SCREEN}
        component={BrandListScreen}
      />
      <Drawer.Screen
        options={({navigation}) => ({
          ...mainHeaderOptions,
          gestureEnabled: false,
          headerLeft: (props) => (
            <HeaderBackButton onPress={() => navigation.goBack()} />
          ),
        })}
        name={SERIES_SCREEN}
        component={SeriesScreen}
      />
      <Drawer.Screen
        options={({navigation}) => ({
          ...mainHeaderOptions,
          gestureEnabled: false,
          headerLeft: (props) => (
            <HeaderBackButton onPress={() => navigation.goBack()} />
          ),
        })}
        name={SUBCATEGORI_SCREEN}
        component={SubCategoryScreen}
      />
      <Drawer.Screen
        options={({navigation}) => ({
          ...mainHeaderOptions,
          gestureEnabled: false,
          headerLeft: (props) => (
            <HeaderBackButton onPress={() => navigation.goBack()} />
          ),
        })}
        name={CATEGORY_LIST_SCREEN}
        component={CategoryListScreen}
      />
      <Drawer.Screen
        options={{
          ...mainHeaderOptions,
          headerTitle: 'My Profile',
          headerRight: () => null,
        }}
        name={ACCOUNT_SCREEN}
        component={AccountScreen}
      />

      <Drawer.Screen
        options={{
          ...mainHeaderOptions,
          headerTitle: 'Berita',
          headerRight: () => null,
        }}
        name={BLOG_SCREEN}
        component={BlogScreen}
      />
      <Drawer.Screen
        options={{
          ...mainHeaderOptions,
          headerTitle: 'Katalog',
          headerRight: () => null,
        }}
        name={KATALOG_SCREEN}
        component={KatalogScreen}
      />

      <Drawer.Screen
        options={{
          ...mainHeaderOptions,
          headerTitle: 'Tentang Kami',
          headerRight: () => null,
        }}
        name={ABOUT_SCREEN}
        component={AboutScreen}
      />
      <Drawer.Screen name="Blog" component={BlogNavigation} />


    </Drawer.Navigator>
  );
}
