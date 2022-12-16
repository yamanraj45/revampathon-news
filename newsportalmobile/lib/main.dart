import 'package:animated_splash_screen/animated_splash_screen.dart';
import 'package:flutter/material.dart';
import 'package:newsportalmobile/app_info.dart';
import 'package:newsportalmobile/config/colors.dart';
import 'package:newsportalmobile/screens/Auth/Login.dart';
import 'package:page_transition/page_transition.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: lighTheme,
      home: AnimatedSplashScreen.withScreenFunction(
        splash: AppInfo().logoPath,
        screenFunction: () async {
          return LoginScreen();
        },
        splashTransition: SplashTransition.rotationTransition,
        pageTransitionType: PageTransitionType.bottomToTop,
      ),
    );
  }
}
