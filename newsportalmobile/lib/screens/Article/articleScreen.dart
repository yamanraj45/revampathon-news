import 'package:appbar_animated/appbar_animated.dart';
import 'package:flutter/material.dart';
import 'package:newsportalmobile/directory.dart';
import 'package:newsportalmobile/screens/Article/widgets/chips.dart';

class ArticleScreen extends StatefulWidget {
  const ArticleScreen({super.key});

  @override
  State<ArticleScreen> createState() => _ArticleScreenState();
}

class _ArticleScreenState extends State<ArticleScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ScaffoldLayoutBuilder(
        backgroundColorAppBar:
            const ColorBuilder(Colors.transparent, Colors.blue),
        textColorAppBar: const ColorBuilder(Colors.white),
        appBarBuilder: _appBar,
        child: SingleChildScrollView(
          child: Stack(
            children: [
              Stack(
                children: [
                  Image.network(
                    "https://www.gotravelly.com/blog/wp-content/uploads/2019/10/Gunung-Fuji-Jepang.jpg",
                    width: MediaQuery.of(context).size.width,
                    height: MediaQuery.of(context).size.height * 0.4,
                    fit: BoxFit.cover,
                  ),
                  Positioned(
                    left: 10,
                    bottom: 40,
                    child: Text(
                      'Hello, title goes here',
                      style: TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ],
              ),
              Container(
                margin: EdgeInsets.only(
                  top: MediaQuery.of(context).size.height * 0.36,
                ),
                // height: 900,
                decoration: const BoxDecoration(
                  borderRadius: BorderRadius.vertical(
                    top: Radius.circular(40),
                  ),
                  color: Colors.white,
                ),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    Container(
                      height: 20,
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.only(
                          topLeft: const Radius.circular(20.0),
                          topRight: const Radius.circular(20.0),
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: [
                          articleDataChips(
                            const CircleAvatar(
                              maxRadius: 8.0,
                            ),
                            '   Yaman M.',
                          ),
                          articleDataChips(
                            const Icon(
                              Icons.timer,
                              color: Colors.grey,
                              size: 15,
                            ),
                            '   12min',
                          ),
                          articleDataChips(
                            Icon(
                              Icons.remove_red_eye_outlined,
                              color: Colors.grey,
                              size: 15,
                            ),
                            '  313',
                          ),
                        ],
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Column(
                        children: const [
                          Text(
                              '''China has announced it will de-activate a phone app that has tracked people's movements during the pandemic.
      
      The national app, which has been operational for three years, will go offline at the end of Monday.
      
      It is the latest policy change that signals Beijing is abandoning its controversial zero-Covid strategy.
      
      The move is highly symbolic but will not have a huge impact on people's daily lives because of the local apps still in use in cities across China.
      
      The state-run Communications Itinerary Card app, which uses phone signals to track whether someone has travelled to an area seen as high-risk, was seen as a central part of China's zero-Covid policy.
      China has announced it will de-activate a phone app that has tracked people's movements during the pandemic.
      
      The national app, which has been operational for three years, will go offline at the end of Monday.
      
      It is the latest policy change that signals Beijing is abandoning its controversial zero-Covid strategy.
      
      The move is highly symbolic but will not have a huge impact on people's daily lives because of the local apps still in use in cities across China.
      
      The state-run Communications Itinerary Card app, which uses phone signals to track whether someone has travelled to an area seen as high-risk, was seen as a central part of China's zero-Covid policy.'''),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _appBar(BuildContext context, ColorAnimated colorAnimated) {
    return AppBar(
      backgroundColor: Colors.transparent,
      elevation: 0,
      // title: Text(
      //   "AppBar Animate",
      //   style: TextStyle(
      //     color: colorAnimated.color,
      //   ),
      // ),
      // leading: Icon(
      //   Icons.arrow_back_ios_new_rounded,
      //   color: colorAnimated.color,
      // ),
      // actions: [
      //   IconButton(
      //     onPressed: () {},
      //     icon: Icon(
      //       Icons.favorite,
      //       color: colorAnimated.color,
      //     ),
      //   ),
      // ],
    );
  }
}
