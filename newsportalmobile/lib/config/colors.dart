import 'package:flutter/material.dart';

ThemeData lighTheme = ThemeData(
    primarySwatch: Colors.grey,
    primaryColor: Colors.black,
    colorScheme: const ColorScheme(
      onPrimary: Colors.black,
      brightness: Brightness.light,
      error: Colors.red,
      background: Colors.blueAccent,
      secondary: Colors.grey,
      onBackground: Colors.blueAccent,
      onSecondary: Colors.grey,
      surface: Colors.white,
      onSurface: Colors.white,
      onError: Colors.red,
      primary: Colors.black,
    ));

ThemeData darkTheme = ThemeData(
    colorScheme: const ColorScheme(
  primary: Colors.white,
  secondary: Colors.black,
  surface: Colors.white,
  background: Colors.black,
  error: Colors.red,
  onPrimary: Colors.black,
  onSecondary: Colors.white,
  onSurface: Colors.black,
  onBackground: Colors.white,
  onError: Colors.white,
  brightness: Brightness.dark,
));
