import 'package:flutter/material.dart';
import 'package:newsportalmobile/screens/HomeScreen/homescreen.dart';

class AuthButton extends StatefulWidget {
  @override
  _AuthButtonState createState() => _AuthButtonState();
}

class _AuthButtonState extends State<AuthButton> with TickerProviderStateMixin {
  late AnimationController _controller;

  @override
  void initState() {
    super.initState();

    _controller = AnimationController(
      vsync: this,
      duration: const Duration(
        milliseconds: 500,
      ),
    )..addListener(() {
        setState(() {});
      });

    _controller.addStatusListener((status) {
      if (status == AnimationStatus.completed) {
        Navigator.push(
          context,
          MaterialPageRoute(builder: (context) {
            return const HomePage();
          }),
        );
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: GestureDetector(
        onTap: () {
          setState(() {
            //Starts animation
            _controller.forward();
          });
        },
        child: Hero(
          tag: 'blackBox',
          flightShuttleBuilder: (
            BuildContext flightContext,
            Animation<double> animation,
            HeroFlightDirection flightDirection,
            BuildContext fromHeroContext,
            BuildContext toHeroContext,
          ) {
            return Container(
              decoration: const BoxDecoration(
                color: Colors.black,
                shape: BoxShape.circle,
              ),
            );
          },
          child: Container(
            height: (60.0),
            decoration: BoxDecoration(
                gradient: const LinearGradient(
                  colors: [
                    Colors.black,
                    Colors.black,
                  ],
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                ),
                boxShadow: const [
                  BoxShadow(
                    color: Colors.black,
                    spreadRadius: 5,
                    blurRadius: 20,
                    // changes position of shadow
                  ),
                ],
                border: Border.all(
                  width: 2,
                  color:
                      Colors.black, //                   <--- border width here
                ),
                color: Colors.black,
                borderRadius: const BorderRadius.all(Radius.circular((22.0)))),
            child: Container(
//                        margin: EdgeInsets.only(left: (10)),
              alignment: Alignment.center,
              child: const Text(
                "SIGN IN",
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 18,
                  letterSpacing: 1,
                  color: Colors.black,
                  fontWeight: FontWeight.w700,
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
