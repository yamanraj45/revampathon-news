import 'package:flutter/material.dart';
import 'package:newsportalmobile/screens/Article/articleScreen.dart';
import 'package:newsportalmobile/screens/home_screen.dart';
import 'package:newsportalmobile/screens/lock_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(),
    );
  }
}
