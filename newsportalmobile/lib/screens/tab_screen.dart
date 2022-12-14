import 'package:bottom_navy_bar/bottom_navy_bar.dart';
import 'package:flutter/material.dart';
import 'package:newsportalmobile/screens/HomeScreen/homescreen.dart';
import 'package:newsportalmobile/screens/Profile/profile_screen.dart';
import 'package:newsportalmobile/screens/SearchScreen/searchscreen.dart';
import 'package:newsportalmobile/screens/drawer.dart';

class TabScreen extends StatefulWidget {
  const TabScreen({super.key});

  @override
  State<TabScreen> createState() => _TabScreenState();
}

class _TabScreenState extends State<TabScreen> {
  List screenListName = [
    const HomePage(),
    const SearchScreen(),
    const ProfileScreen()
  ];
  int selectedIndex = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        drawer: drawer(),
        bottomNavigationBar: BottomNavyBar(
          selectedIndex: selectedIndex,
          showElevation: true,
          onItemSelected: (index) {
            setState(() {
              selectedIndex = index;
            });
          },
          items: [
            BottomNavyBarItem(
              activeColor: Theme.of(context).colorScheme.primary,
              inactiveColor: Theme.of(context).colorScheme.secondary,
              icon: const Icon(Icons.apps),
              title: const Text('Home'),
            ),
            BottomNavyBarItem(
              activeColor: Theme.of(context).colorScheme.primary,
              inactiveColor: Theme.of(context).colorScheme.secondary,
              icon: const Icon(Icons.search),
              title: const Text('Search'),
            ),
            BottomNavyBarItem(
              activeColor: Theme.of(context).colorScheme.primary,
              inactiveColor: Theme.of(context).colorScheme.secondary,
              icon: const Icon(Icons.person_outline_outlined),
              title: const Text('User'),
            ),
          ],
        ),
        appBar: AppBar(
          backgroundColor: Colors.transparent,
          elevation: 0,
        ),
        body: SafeArea(
          child: screenListName[selectedIndex],
        ));
  }
}
